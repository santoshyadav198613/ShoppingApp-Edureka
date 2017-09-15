import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from '../service/product/product.service';
import { AuthGuard } from '../service/guard/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'product/:id', component: ProductDetailsComponent }
    ])
  ],
  declarations: [ProductComponent, ProductListComponent, ProductDetailsComponent],
  providers: [ProductService]
})
export class ProductModule { }
