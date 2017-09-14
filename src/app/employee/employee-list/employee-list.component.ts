import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() prodList: Employee[];
  @Output() message = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent() {
      this.message.emit('Hello this is your child');
  }


}
