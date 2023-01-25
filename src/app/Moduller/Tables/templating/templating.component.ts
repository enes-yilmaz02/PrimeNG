import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Servicess/product.service';

@Component({
  selector: 'app-templating',
  templateUrl: './templating.component.html',
  styleUrls: ['./templating.component.css']
})
export class TemplatingComponent {
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }
}
