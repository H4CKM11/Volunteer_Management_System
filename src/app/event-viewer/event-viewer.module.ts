import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventViewerComponent } from './event-viewer/event-viewer.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    EventViewerComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports:[
    EventViewerComponent
  ]
})
export class EventViewerModule { }
