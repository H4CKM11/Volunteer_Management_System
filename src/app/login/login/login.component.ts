import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AccountService } from 'src/app/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':enter', animate('500ms ease-out'))
    ])
  ]
})
export class LoginComponent {


  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),

  })

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    skillLevel: new FormControl('', Validators.required)
  })

  constructor(private  accountService: AccountService, private router: Router){}

  onSubmitLogin()
  {
    this.accountService.login(this.loginForm.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/dashboard']);
      },
      (error) => 
      {
        console.error('Login Failed: ', error);
      }
    )
  }

  onSubmitRegister()
  {
    this.accountService.register(this.registerForm.value).subscribe(
      (response) =>
      {
        this.router.navigate(['/dashboard']);
      },
      (error) => 
      {
        console.error('Register Failed: ', error);
      }
    )
  }

  activeForm: 'login' | 'register' = 'login';

  switchToRegister() {
    this.activeForm = 'register';
  }

  switchToLogin() {
    this.activeForm = 'login';
  }

}