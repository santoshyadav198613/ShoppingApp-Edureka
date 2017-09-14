import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: Employee[] = [
    { id: 1, age: 23, name: 'Test1' },
    { id: 2, age: 24, name: 'Test2' },
    { id: 3, age: 25, name: 'Test3' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
