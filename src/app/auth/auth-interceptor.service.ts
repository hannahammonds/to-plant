import { Injectable } from '@angular/core';

import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInceptorService implements HttpInterceptor {
  constructor (private authService: AuthService) {}
  intercept (req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(take(1),exhaustMap(user =>{
      const modifiedReq = req.clone({params: new HttpParams().set('auth', user.token)})
      return next.handle(modifiedReq);
    }))
  }

  if (!user) {
    return next.handle(req);
  }
  const modifiedReq = req.clone({
    params: new HttpParams().set("auth", user.token),
  });
  return next.handle(modifiedReq);
}


