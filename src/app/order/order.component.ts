import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      userName: ['', Validators.required],
      userId: ['', Validators.required],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        pin: ['']
      }),
      cards: this.fb.array([this.buildForm()])
    })
  }

  buildForm() {
    return this.fb.group({
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required]
    })
  }

  addcards() {
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.push(this.buildForm());
  }


  removeCard(i: number) {
    let cardControl = <FormArray>this.orderForm.controls['cards'];
    cardControl.removeAt(i);
  }

}
