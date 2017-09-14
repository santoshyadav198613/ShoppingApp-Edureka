import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { OrderComponent } from '../order/order.component';
import { EmployeeComponent } from '../employee/employee.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductComponent },
      { path: 'order', component: OrderComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
