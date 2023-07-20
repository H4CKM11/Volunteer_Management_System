import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    searchedEventList: Events[] = [];
    searchQuery = new FormControl();

    constructor(private dialogref : MatDialog, private eventsService: EventsService, private http: HttpClient){
    }

    ngOnInit(): void {
      this.eventsService.getList().subscribe(data => {
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

  registerEvent(eventId: number)
  {

    const data = {id: eventId}

    this.http.post<Event>("http://localhost:5001/Event/UpdateVolunteer", data).subscribe(
    (response) =>
    {
      location.reload();
    },
    (error) =>
    {

    });

  }

    performSearch()
    {
      var eventName = this.searchQuery.value.toString();
      console.log(eventName);
      this.http.get<Events[]>("http://localhost:5001/Event/searchEvent", { params: { eventName: eventName } }).subscribe(
        (response) =>
        {
          for (const key1 in response) {
            const nestedObj = response[key1];
            for (const key2 in nestedObj) {
                const nestedObj2 = nestedObj[key2];
                this.searchedEventList.push(nestedObj2);
              }
            }
          console.log(response);
        },
        (error) =>
        {

        }
      )
    }

    openDialog()
    {
      this.dialogref.open(PopupComponent);
    }

    shareDialog(skillLevel: string)
    {
      const skill = {skillLevel: skillLevel}
      this.dialogref.open(SharePopupComponent, {data: skill});
    }
}
