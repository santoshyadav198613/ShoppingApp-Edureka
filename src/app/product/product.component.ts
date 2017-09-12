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
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.appName = 'Test App';
    this.products = this.productService.getProducts();
  }

}
