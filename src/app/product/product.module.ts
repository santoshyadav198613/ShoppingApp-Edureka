import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from '../service/product/product.service';
import { AuthGuard } from '../service/guard/auth.guard';
import { ProductResolveGuard } from '../service/product/product-resolve.guard';
import { InrPipe } from '../common/inr.pipe';
import { PricePipe } from '../common/price.pipe';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ProductComponent, canActivate: [AuthGuard],
        resolve: {
          products: ProductResolveGuard
        },
        children: [
          { path: ':id', component: ProductDetailsComponent }
        ]
      }
    ])
  ],
  declarations: [ProductComponent, ProductListComponent,
    ProductDetailsComponent, InrPipe, PricePipe, ProductEditComponent],
  providers: [ProductService, ProductResolveGuard],
  entryComponents: [ProductEditComponent]
})
export class ProductModule { }
