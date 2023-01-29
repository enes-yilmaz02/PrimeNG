import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from 'src/app/models/product';
import { ProductList } from './productlist';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrls: ['./dynamic-dialog.component.css']
})
export class DynamicDialogComponent {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  ref!: DynamicDialogRef;

  show() {
      this.ref = this.dialogService.open(ProductList, {
          header: 'Choose a Product',
          width: '70%',
          contentStyle: {"max-height": "500px", "overflow": "auto"},
          baseZIndex: 10000
      });

      this.ref.onClose.subscribe((product: Product) =>{
          if (product) {
              this.messageService.add({severity:'info', summary: 'Product Selected', detail: product.name});
          }
      });
  }

  ngOnDestroy() {
      if (this.ref) {
          this.ref.close();
      }
  }
}
