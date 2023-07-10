import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { newEvent } from 'src/app/Shared/Model/newEvent';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private http: HttpClient){}

  newEventForm = new FormGroup
  ({
    name:  new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    day: new FormControl('')
  })

  onSubmitNewEvent()
  {
    if(this.newEventForm.valid)
    {
      this.newEventForm.value.day = this.newEventForm.value.month?.substring(10,8); 
      this.newEventForm.value.month = this.newEventForm.value.month? this.getMonthFromTime(this.newEventForm.value.month) : ''
      this.http.post<newEvent> ("http://localhost:5001/Event/NewEvent",this.newEventForm.value).subscribe(response => 
      {
      }, 
      error => 
      {
      });
    }
  }

  private getMonthFromTime(time: string): string {
    const date = new Date(time);
    const month = date.getMonth(); // Get the month as a number (0-11)
    const monthString = this.getMonthString(month); // Convert the month number to a string representation
  
    return monthString;
  }
  
  private getMonthString(month: number): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return monthNames[month];
  }

}
