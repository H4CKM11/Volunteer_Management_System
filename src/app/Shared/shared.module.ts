import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports:[
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    FormsModule,
    
  ]
})
export class SharedModule { }
