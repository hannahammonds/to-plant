import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;

  constructor( private authService: AuthService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
  this.authService.signup(email, password)
  form.reset();

  }

}
function email(email: any, password: any) {
  throw new Error('Function not implemented.');
}

function password(email: (email: any, password: any) => void, password: any) {
  throw new Error('Function not implemented.');
}

