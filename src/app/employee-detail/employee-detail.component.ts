import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  template: `<div *ngFor="let employee of Employee"> <h2>{{employee.name}} {{employee.code}} {{employee.department}}</h2></div>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
  public Employee:any=[];
  constructor(private employeeService:EmployeeServiceService){

  }
  ngOnInit(){
    this.employeeService
      .getEmployeeDetails()
      .subscribe((arg: any) => (this.Employee = arg));
  }

}
