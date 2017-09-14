import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product/product.service';
import { API_CONFIG, APP_CONFIG } from './service/ApiValueProvider/api.config';
import { OrderComponent } from './order/order.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    EmployeeComponent,
    EmployeeListComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: API_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
