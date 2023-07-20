import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Email } from 'src/app/Shared/Model/Email';
import { User } from 'src/app/Shared/Model/user';

@Component({
  selector: 'app-share-popup',
  templateUrl: './share-popup.component.html',
  styleUrls: ['./share-popup.component.css']
})
export class SharePopupComponent implements OnInit{
  userList: User[] = [];
  userSkillList: User[] = [];
  
  constructor(private http: HttpClient, private dialogref : MatDialog, @Inject(MAT_DIALOG_DATA) public data: any){}

  ngOnInit(): void
  {
    this.http.get<User[]>("http://localhost:5001/Auth/GetUsers").subscribe(
        (response) =>
        {
          for (const key1 in response) {
            const nestedObj = response[key1];
            for (const key2 in nestedObj) {
                const nestedObj2 = nestedObj[key2];
                this.userList.push(nestedObj2);
              }
            }
        },
        (error) =>
        {

        }
      )

      const skillLevelObject = this.data;
      const skillLevel = skillLevelObject.skillLevel;
      console.log(skillLevel);
      this.http.get<User[]>("http://localhost:5001/Auth/searchSkilledUsers", { params: { skillLevel: skillLevel } }).subscribe(
        (response) =>
        {
          for (const key1 in response) {
            const nestedObj = response[key1];
            for (const key2 in nestedObj) {
                const nestedObj2 = nestedObj[key2];
                this.userSkillList.push(nestedObj2);
              }
            }
          console.log(response);
        },
        (error) =>
        {

        }
      )
  }

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

  shareIndividually(volunteerEmail: string)
  {
    const email = {email: volunteerEmail};
    this.http.post<Email>("http://localhost:5001/Email", email).subscribe(
      (response) =>
      {
  
      },
      (error) =>
      {
  
      });
  }

}
