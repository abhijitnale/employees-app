import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',redirectTo:'employees', pathMatch:'full'
  },
  {
    path:'', 
    loadChildren:()=> import('./employees/employees.module').then(m=>m.EmployeesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
