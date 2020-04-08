import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: '/add',
    component: AddEmployeeComponent
  },
  {
    path: ':id/edit',
    component: AddEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
