import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { MobilePipe } from '../pipes/mobile.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { OnlyNumber } from '../directives/only-numbers.directive';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeesComponent,
    MobilePipe,
    OnlyNumber
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
  ]
})
export class EmployeesModule { }
