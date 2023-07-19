import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharePopupComponent } from './share-popup/share-popup.component';
import { SharedModule } from '../Shared/shared.module';




@NgModule({
  declarations: [
    SharePopupComponent
  ],
  imports: [
    CommonModule,
    SharedModule ]
})
export class SharePopupModule { }
