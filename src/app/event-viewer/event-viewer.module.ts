import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventViewerComponent } from './event-viewer/event-viewer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../Shared/shared.module';




@NgModule({
  declarations: [
    EventViewerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    SharedModule
  ],
  exports:[
    EventViewerComponent
  ]
})
export class EventViewerModule { }
