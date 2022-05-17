import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service'

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: number;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  token: string = null;

  constructor(private http: HttpClient, private dataStorageService: DataStorageService,  private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://to-plant-api.herokuapp.com/api/v1/users/create',
        { email: email, password: password }
      )
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    console.log('handle auth');
    //Getting the date of the token
    const expirationDate = new Date(new Date().getTime() + expiresIn);

    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    //this.user.fetchPlants().subscribe();
    this.autoLogout(expiresIn);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://to-plant-api.herokuapp.com/api/v1/users/login',
        { email: email, password: password }
      )
      .pipe(
        tap((res:any) => {
          const { expiry, value } = res.payload.token;
          const { email, id } = res.payload.user;
          const expiresIn = new Date(expiry).getTime() - Date.now();
          this.handleAuthentication(email, id, value, +expiresIn);
        })
      )
  }

  logout() {
    console.log("LOGOUT")
    this.http
      .delete('https://to-plant-api.herokuapp.com/api/v1/users/logout')
      .subscribe((res: any) => {
        console.log('Logged out', res);
        if (res.success) {
          this.user.next(null);

          localStorage.removeItem('userData');

          if (this.tokenExpirationTimer) {clearTimeout(this.tokenExpirationTimer);

          this.router.navigate(['auth']);
          }
      }}
      );
    }


  autoLogin() {
    // defining userData variable
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));

    // const _tokenExpirationDate = ""
    // conditional checks to see if userData exists

    if (!userData) {
      return;
    }

    // defining loadedUser variable
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    //conditional checks if token exists in loadedUser
    if (loadedUser.token) {
      // updating the view, "loading" the user
      this.user.next(loadedUser);

      // expiration duration
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
