import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


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

  activeForm: 'login' | 'register' = 'login';

  switchToRegister() {
    this.activeForm = 'register';
  }

  switchToLogin() {
    this.activeForm = 'login';
  }

}