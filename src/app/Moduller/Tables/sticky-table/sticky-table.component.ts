import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/Servicess/customer.service';

@Component({
  selector: 'app-sticky-table',
  templateUrl: './sticky-table.component.html',
  styleUrls: ['./sticky-table.component.css'],
  styles: [
    `
        :host ::ng-deep .p-datatable > .p-datatable-wrapper {
            overflow: visible;
        }
        :host ::ng-deep .p-datatable .p-datatable-thead > tr > th {
            position: -webkit-sticky;
            position: sticky;
            top: 5rem;
        }
        .layout-news-active :host ::ng-deep .p-datatable tr > th {
            top: 7rem;
        }
    `
]
})
export class StickyTableComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  }
}
