import { Component } from '@angular/core';

class Product {
  public productSetup: string;
  public productCategory: string;
  public hide: boolean;

  constructor(productSetup: string, productCategory: string) {
    this.productSetup = productSetup;
    this.productCategory = productCategory;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
    selector: 'app-product-list',
    template: './product-list.component.html'
  })
export class ProductListComponent {
    products: Product[] = [];

    addProduct() {
      this.products.unshift(
        new Product(
        'What is the product category?',
        'Stationery !!'
      )
      );
    }

    deleteProduct() {
      this.products = [];
    }
}
