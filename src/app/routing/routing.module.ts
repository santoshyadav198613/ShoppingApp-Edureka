import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrderComponent } from '../order/order.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../service/guard/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'order', component: OrderComponent , canActivate: [AuthGuard] },
      { path: 'employee', component: EmployeeComponent , canActivate: [AuthGuard] },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
