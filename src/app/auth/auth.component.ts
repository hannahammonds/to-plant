import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  error: string = null;
  msg: string = null;

  constructor( private authService: AuthService, private router: Router) { }
  ngOnInit(): void {}

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
  // if the form is invalid, return
    if(!form.valid){
      return;
    }

    //get email and password
    const email = form.value.email;
    const password = form.value.password;
    // defining an observable
    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);

    } else {
      authObs = this.authService.signup(email, password);
      }

      authObs.subscribe(
        (res) => {
          console.log("SUCCESSFULL RESPONSE", res);
          if (this.error) this.error = null;

          if (this.isLoginMode) {
            this.router.navigate(['/to-plant']);
          }else {
            this.msg = "Thank you for siging up! Please login."
            this.isLoginMode = true;
          }
        }
      )
  }
}
