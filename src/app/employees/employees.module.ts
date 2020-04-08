import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { MobilePipe } from '../pipes/mobile.pipe';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    EmployeesComponent,
    MobilePipe
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
