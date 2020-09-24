import {
    Component,
    Input,
    SimpleChanges,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
  } from '@angular/core';

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
    selector: 'app-product',
    template: './product.component.html'
})
  export class ProductComponent
    implements
      OnChanges,
      OnInit,
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy {
    // tslint:disable-next-line:no-input-rename
    @Input('product') data: Product;

    constructor() {
      console.log(`new - data is ${this.data}`);
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log(`ngOnChanges - data is ${this.data}`);

      // tslint:disable-next-line:forin
      for (let key in changes) {
        console.log(`${key} changed.
  Current: ${changes[key].currentValue}.
  Previous: ${changes[key].previousValue}`);
      }
    }

    ngOnInit() {
      console.log(`ngOnInit  - data is ${this.data}`);
    }

    ngDoCheck() {
      console.log('ngDoCheck');
    }

    ngAfterContentInit() {
      console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
      console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
      console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
      console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
      console.log('ngOnDestroy');
    }
  }
