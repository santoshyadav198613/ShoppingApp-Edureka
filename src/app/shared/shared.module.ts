import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MdButtonModule, MdDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdButtonModule,
    MdDialogModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MdButtonModule,
    MdDialogModule],
  declarations: []
})
export class SharedModule { }
