import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Subscription, Observable } from 'rxjs';
import { Employee } from './model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employeesArray: Employee[] = [];
  obsEmployess: Observable<Employee[]>;
  subEmployess: Subscription;

  constructor(private employeeService: EmployeesService) {
    this.obsEmployess = this.employeeService.getEmployees();
  }

  ngOnInit(): void {
    this.subEmployess = this.obsEmployess.subscribe(employees => {
      this.employeesArray = employees;
    })
  }

  trackByFn(index, item) {
    return item.id;
  }

  ngOnDestroy() {
    if (this.subEmployess) {
      this.subEmployess.unsubscribe();
    }
  }
}
