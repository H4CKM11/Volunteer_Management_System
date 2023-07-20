import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { newEvent } from 'src/app/Shared/Model/newEvent';
import { Router } from '@angular/router';
import { Email } from 'src/app/Shared/Model/Email';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  constructor(private http: HttpClient, private router: Router, private dialogref : MatDialog ){}

  newEventForm = new FormGroup
  ({
    name:  new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    month: new FormControl('', Validators.required),
    day: new FormControl(''),
    skillLevel: new FormControl('', Validators.required)
  })


  onSubmitNewEvent()
  {
    if(this.newEventForm.valid)
    {
      this.newEventForm.value.day = this.newEventForm.value.month?.substring(10,8); 
      this.newEventForm.value.month = this.newEventForm.value.month? this.getMonthFromTime(this.newEventForm.value.month) : ''
      this.http.post<newEvent> ("http://localhost:5001/Event/NewEvent",this.newEventForm.value).subscribe(
      (response) => 
      {
        this.dialogref.closeAll();
        location.reload();
      }, 
      (error) => 
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
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    return monthNames[month];
  }

}
