import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventsService } from 'src/app/Services/events/events.service';
import { Events } from 'src/app/Shared/Model/Events';
import { PopupComponent } from 'src/app/popup-event/popup/popup.component';
import { SharePopupComponent } from 'src/app/share-popup/share-popup/share-popup.component';

@Component({
  selector: 'app-event-viewer',
  templateUrl: './event-viewer.component.html',
  styleUrls: ['./event-viewer.component.css']
})
export class EventViewerComponent implements OnInit{
    eventList: Events[] = [];

    constructor(private dialogref : MatDialog, private eventsService: EventsService){
    }

    ngOnInit(): void {
      this.eventsService.getList().subscribe(data => {
      console.log(data);
      
      for (const key1 in data) {
          const nestedObj = data[key1];
          for (const key2 in nestedObj) {
              const nestedObj2 = nestedObj[key2];
              this.eventList.push(nestedObj2);
            }
          }
      
      console.log(this.eventList);
    });
  }

  registerEvent(eventId: number) {
    // Perform registration logic using the event ID
    console.log('Registering event with ID:', eventId);
    // You can send an HTTP request to your backend API to register the user for the event
  }

    openDialog()
    {
      this.dialogref.open(PopupComponent);
    }

    shareDialog()
    {
      this.dialogref.open(SharePopupComponent);
    }
}
