import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Servicess/product.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent {
  sourceProducts!: Product[];
    
  targetProducts!: Product[];
  
  constructor(private carService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.carService.getProductsSmall().then(products => this.sourceProducts = products);
      this.targetProducts = [];
      this.primengConfig.ripple = true;
  }
}
