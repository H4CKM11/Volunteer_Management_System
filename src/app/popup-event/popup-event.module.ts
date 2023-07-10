import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup/popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class PopupEventModule { }
