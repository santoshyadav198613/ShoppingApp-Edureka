import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product/product.service';
import { API_CONFIG, APP_CONFIG } from './service/ApiValueProvider/api.config';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{ provide: ProductService, useClass: ProductService },
  { provide: API_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule { }
