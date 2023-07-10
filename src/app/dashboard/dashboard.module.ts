import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import {  MatIconModule } from '@angular/material/icon';
import { EventViewerModule } from '../event-viewer/event-viewer.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NavBarModule,
    MatIconModule,
    EventViewerModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
