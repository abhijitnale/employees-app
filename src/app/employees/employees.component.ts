import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Subscription, Observable } from 'rxjs';
import { Employee } from './model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  employeesArrayOriginal: Employee[] = [];
  employeesArray: Employee[] = [];

  obsEmployess: Observable<Employee[]>;
  subEmployess: Subscription;

  constructor(private employeeService: EmployeesService, private _router:Router) {
    this.obsEmployess = this.employeeService.getEmployees();
  }

  ngOnInit(): void {
    this.subEmployess = this.obsEmployess.subscribe(employees => {
      this.employeesArray = employees;
      this.employeesArrayOriginal = employees;
    })
  }

  trackByFn(index, item) {
    return item.id;
  }

  search(event) {
    let term = event.target.value;
    if (term && this.employeesArrayOriginal) {
      this.employeesArray = this.employeesArrayOriginal.filter(emp =>
        {
          return (emp.name ? emp.name.toLowerCase().substr(0, term.length) == term.toLowerCase() : false ) || (emp.address && emp.address.city ? emp.address.city.substr(0, term.length).toLowerCase() == term.toLowerCase() : false)
        })
    }
    else {
      this.employeesArray = this.employeesArrayOriginal;
    }
  }

  addEmployee(){
    this._router.navigate(['/employees/add'])
  }

  redirectToUpdateEmployee(id){
    this._router.navigate([`/employees/${id}/edit`]);
  }

  ngOnDestroy() {
    if (this.subEmployess) {
      this.subEmployess.unsubscribe();
    }
  }
}
