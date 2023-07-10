import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from 'src/app/popup-event/popup/popup.component';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css']
})
export class EventViewerComponent {

    constructor(private dialogref : MatDialog ){
    }

    openDialog()
    {
      this.dialogref.open(PopupComponent);
    }
}
