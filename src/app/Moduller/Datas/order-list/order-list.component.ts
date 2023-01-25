import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Servicess/product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  products!: Product[];
    
  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(cars => this.products = cars);
      this.primengConfig.ripple = true;
  }
}
