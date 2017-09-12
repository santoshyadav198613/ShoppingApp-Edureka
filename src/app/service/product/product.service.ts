import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {
  productList: Product[] = [
    { id: 1, name: 'Product1', price: 1000, craetedDate: new Date('11-01-2017') },
    { id: 2, name: 'Product2', price: 2000, craetedDate: new Date('11-10-2017') },
    { id: 3, name: 'Product3', price: 3000, craetedDate: new Date('11-02-2017') }
  ];
  constructor() { }

  getProducts(): Product[] {
    return this.productList;
  }

}
