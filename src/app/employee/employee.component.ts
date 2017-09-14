import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  employeeList: Employee[] = [
    { id: 1, age: 23, name: 'Test1' },
    { id: 2, age: 24, name: 'Test2' },
    { id: 3, age: 25, name: 'Test3' }
  ];
  messageFromChild: string;
  @ViewChild(EmployeeListComponent)
  empComponent: EmployeeListComponent;
  @ViewChildren(EmployeeListComponent)
  empListComponent: QueryList<EmployeeListComponent>;
  constructor() { }

  ngOnInit() {
    //this.empComponent.prodList = this.employeeList;
    //  this.empListComponent.forEach((data) => data.prodList = this.employeeList);
    // this.empListComponent.forEach(function (data) {
    //   this.prodList = data;
    // });
  }

  ngAfterViewInit() {
    this.empListComponent.forEach((data) => data.prodList = this.employeeList);
  }

  receiveFromChild(message: string) {
    this.messageFromChild = message;
  }

}
