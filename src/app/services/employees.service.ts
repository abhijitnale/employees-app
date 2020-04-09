import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employees/model/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeesArray: Employee[] = [{
    "id": 1,
    "name": "Jhon",
    "phone": "9999999999",
    "address":
    {
      "city": "Pune",
      "address_line1": "ABC road",
      "address_line2": "XYZ building",
      "postal_code": "12455"
    }
  }, {
    "id": 2,
    "name": "Jacob",
    "phone": "AZ99A99PQ9",
    "address":
    {
      "city": "Pune",
      "address_line1": "PQR road",
      "address_line2": "ABC building",
      "postal_code": "13455"
    }
  }, {
    "id": 3,
    "name": "Ari",
    "phone": "145458522",
    "address":
    {
      "city": "Mumbai",
      "address_line1": "ABC road",
      "address_line2": "XYZ building",
      "postal_code": "12455"
    }
  }];

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return new Observable((observer) => {
      observer.next(this.employeesArray);
    });
  }

  getById(id) {
    return this.employeesArray.find(emp => emp.id == id);
  }

  saveEmployee(employee) {
    if (employee && employee.id) {
      // this.http.put('employees',employee)
      let index = this.employeesArray.findIndex(emp => emp.id == employee.id);
      if (index != -1) {
        this.employeesArray[index] = employee;
      }
    }
    else {
      // this.http.post('employees',employee)
      employee.id = this.employeesArray.length+1;
      this.employeesArray.push(employee);
    }
  }
}
