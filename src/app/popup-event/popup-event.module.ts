import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { SharedModule } from '../Shared/shared.module';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatRadioModule

  ]
})
export class PopupEventModule { }
