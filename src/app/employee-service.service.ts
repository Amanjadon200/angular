import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employeeArray } from './employeeArray';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) {}
  url = '/assets/employee.json';
  getEmployeeDetails():Observable<employeeArray[]> {
    return this.http.get<employeeArray[]>(this.url);
  }
}
