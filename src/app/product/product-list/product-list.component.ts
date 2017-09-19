import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../service/product/product';
import { MdDialog } from '@angular/material';
import { ProductEditComponent } from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() productList: Product[];
  constructor(private productService: ProductService,
    private dialog: MdDialog) { }

  ngOnInit() {
    // this.productList = this.productService.getProducts();
  }

  editProduct(product: Product) {
    let dialogRef = this.dialog.open(ProductEditComponent, {
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
