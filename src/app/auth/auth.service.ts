import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'


export class interface AuthResponse

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return
    this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key'+ environment.firebaseKey,
      {email: email,
      password: password,
    returnSecureToken: true
  });
  }
}
