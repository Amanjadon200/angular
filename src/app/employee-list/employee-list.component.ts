import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { employeeArray } from '../employeeArray';

@Component({
  selector: 'app-employee-list',
  template: `<div *ngFor="let employee of Employee">
    <h2>{{ employee.name }}</h2>
  </div>`,

  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  public Employee:employeeArray[]=[];
  constructor(private employeeService:EmployeeServiceService){

  }
  ngOnInit(){
    // this.employeeService.this.service.function
    //   .subscribe(arg => this.property = arg);
    // getEmployeeDetails();
    this.employeeService.getEmployeeDetails().subscribe(
      (arg:employeeArray[]) => (this.Employee = arg)
    );
    
  }
}
