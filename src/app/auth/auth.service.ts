import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment'
import { tap } from 'rxjs/operators';
import { User } from './user.model';


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
  user = new Subject<User>();
  token: string = null;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ environment.firebaseKey,
      {email: email,
      password: password,
      returnSecureToken: true
  })
  .pipe(
    tap((res) =>
    this.handleAuthentication(
      res.email,
      res.localId,
      res.idToken,
      res.expiresIn,
      )
    ));
  }
  private handleAuthentication(email:string, userId:string, token: string, expiresIn: number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
    const user = new User(email, userId, token,expirationDate );
    this.user.next(user);
  }
  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ environment.firebaseKey,
      {email: email,
      password: password,
    returnSecureToken: true
  })
  .pipe(
    tap((res) =>
    this.handleAuthentication(
      res.email,
      res.localId,
      res.idToken,
      res.expiresIn,
      )
    ));
  }
}


