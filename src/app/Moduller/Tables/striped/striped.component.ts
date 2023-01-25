import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Servicess/product.service';

@Component({
  selector: 'app-striped',
  templateUrl: './striped.component.html',
  styleUrls: ['./striped.component.css']
})
export class StripedComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsSmall().then(data => (this.products = data));
  }
}
