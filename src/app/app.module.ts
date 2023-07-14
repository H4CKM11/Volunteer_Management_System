import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ProfileSettingsModule } from './profile-settings/profile-settings.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { PopupEventModule } from './popup-event/popup-event.module';
import { SharePopupModule } from './share-popup/share-popup.module';

@NgModule({
  declarations: [
    AppComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HomeModule,
    LoginModule,
    NavBarModule,
    ProfileSettingsModule,
    HttpClientModule,
    FormsModule,
    DashboardModule,
    PopupEventModule,
    SharePopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
