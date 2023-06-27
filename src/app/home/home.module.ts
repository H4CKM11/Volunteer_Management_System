import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavBarModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
