import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/Servicess/product.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  products!: Product[];

  selectedProduct1!: Product;

  selectedProduct2!: Product;

  selectedProduct3!: Product;

  selectedProducts1!: Product[];

  selectedProducts2!: Product[];

  selectedProducts3!: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
      this.productService.getProductsSmall().then(data => this.products = data);
  }

  selectProduct(product: Product) {
      this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
  }

  onRowSelect(event: { data: { name: any; }; }) {
      this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

  onRowUnselect(event: { data: { name: any; }; }) {
      this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }
}
