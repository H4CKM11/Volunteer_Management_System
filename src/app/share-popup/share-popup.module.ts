import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharePopupComponent } from './share-popup/share-popup.component';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SharePopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule ]
})
export class SharePopupModule { }
