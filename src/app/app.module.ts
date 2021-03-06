import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';

import { ProductService } from './service/product/product.service';
import { API_CONFIG, APP_CONFIG } from './service/ApiValueProvider/api.config';
import { OrderComponent } from './order/order.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './service/guard/auth.guard';
import { LoginService } from './service/service/login.service';
import { PostComponent } from './post/post.component';
import { PostService } from './service/post/post.service';
import { ApiInterceptor } from './interceptor/http-interceptor.service';
import { HoverDirective } from './directive/hover.directive';


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    EmployeeComponent,
    EmployeeListComponent,
    PagenotfoundComponent,
    LoginComponent,
    PostComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutingModule
  ],
  providers: [{ provide: API_CONFIG, useValue: APP_CONFIG }, LoginService, AuthGuard, PostService,
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
