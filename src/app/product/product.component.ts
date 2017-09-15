import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../service/product/product.service';
import { Product } from '../service/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: []
})
export class ProductComponent implements OnInit {
  appName: string;
  products: Product[];
  product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.appName = 'Test App';
    this.product = { id: 0, name: 'Test Product', price: 100, craetedDate: new Date('10-10-2017') };

  }

  submit() {
    this.productService.addProduct(this.product);
    this.product = new Product();
  }


}
