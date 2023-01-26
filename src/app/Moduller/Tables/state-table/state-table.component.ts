import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/Servicess/customer.service';

@Component({
  selector: 'app-state-table',
  templateUrl: './state-table.component.html',
  styleUrls: ['./state-table.component.css']
})
export class StateTableComponent {
  customers1!: Customer[];

  customers2!: Customer[];

  selectedCustomer1!: Customer;

  selectedCustomer2!: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
      this.customerService.getCustomersMedium().then(data => this.customers1 = data);
      this.customerService.getCustomersMedium().then(data => this.customers2 = data);
  }
}
