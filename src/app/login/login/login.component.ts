import { Component } from '@angular/core';
import { trigger,state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('formAnimation', [
      state('login', style({ transform: 'translateX(0)' })),
      state('register', style({ transform: 'translateX(-100%)' })),
      transition('login <=> register', animate('300ms ease-in-out')),
    ]),
  ],
})
export class LoginComponent {

  activeForm: string = 'login';

  switchToRegister() {
    this.activeForm = 'register';
  }

  switchToLogin() {
    this.activeForm = 'login';
  }
}