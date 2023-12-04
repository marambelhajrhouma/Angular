


import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { Employee } from '../employee/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees = new Array<Employee>();

  constructor(private empService: EmployeeServiceService) {
    this.refreshEmployees();
  }

  private refreshEmployees(): void {
    this.empService.getEmployees().subscribe(response => this.employees = response);
  }

  addEmployee(name: string, status: string): void {
    const newEmployee = new Employee(0, name, status);
    this.empService.addEmployee(newEmployee).subscribe(() => this.refreshEmployees());
  }

  updateEmployee(employee: Employee,n:string,s:string): void {
    employee.name=n;
    employee.status=s;
    this.empService.updateEmployee(employee).subscribe(() => this.refreshEmployees());
  }

  deleteEmployee(id: number): void {
    this.empService.deleteEmployee(id).subscribe(() => this.refreshEmployees());
  }
}
