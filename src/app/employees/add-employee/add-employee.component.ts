import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private employeeService: EmployeesService, private router: Router, private route: ActivatedRoute) {
    this.employeeForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      address: new FormGroup({
        city: new FormControl(''),
        address_line1: new FormControl(''),
        address_line2: new FormControl(''),
        postal_code: new FormControl(''),
      })
    });

    route.params.subscribe(params => {
      if (params.id) {
        this.getEmployee(params.id);
      }
    })
  }

  ngOnInit(): void {
  }

  getEmployee(id) {
    let employee = this.employeeService.getById(id);
    if (employee) {
      this.employeeForm.patchValue(employee);
    }
  }

  save() {
    this.employeeService.saveEmployee(this.employeeForm.value);
    this.router.navigate(['/employees']);
  }

}
