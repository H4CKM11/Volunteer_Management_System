import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Email } from 'src/app/Shared/Model/Email';

@Component({
  selector: 'app-share-popup',
  templateUrl: './share-popup.component.html',
  styleUrls: ['./share-popup.component.css']
})
export class SharePopupComponent {
  constructor(private http: HttpClient, private dialogref : MatDialog){}

  ShareEventForm = new FormGroup
  ({
    email: new FormControl('', Validators.required),
    body: new FormControl('Hello from the back end')
  })

  onSubmitShare()
  {
    this.http.post<Email>("http://localhost:5001/Email", this.ShareEventForm.value).subscribe(response =>
    {
      this.dialogref.closeAll();
    })
  }

}
