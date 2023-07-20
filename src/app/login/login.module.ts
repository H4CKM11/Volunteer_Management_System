import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { MatRadioModule } from '@angular/material/radio'; // Import MatRadioModule




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatRadioModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
