import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings/profile-settings.component';

const routes: Routes = [
  {path: 'dashboard', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile-settings', component: ProfileSettingsComponent},
  {path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
