import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';



@NgModule({
  declarations: [
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    NavBarModule
  ],
  exports:[
    ProfileSettingsComponent
  ]
})
export class ProfileSettingsModule { }
