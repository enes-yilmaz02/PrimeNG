import { Component } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/Servicess/customer.service';

@Component({
  selector: 'app-scroll-table',
  templateUrl: './scroll-table.component.html',
  styleUrls: ['./scroll-table.component.css']
})
export class ScrollTableComponent {
  customers!: Customer[];

    dialogVisible!: boolean;

    scrollableCols!: any[];

    frozenCols!: any[];

    unlockedCustomers!: any[];

    lockedCustomers!: any[];

    balanceFrozen: boolean = false;

    rowGroupMetadata: any;

    constructor(private customerService: CustomerService) { }

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data: Customer[]) => {
            this.customers = data
        });
        this.customerService.getCustomersMedium().then((data: any[]) => this.unlockedCustomers = data);

        this.lockedCustomers = [
            {
                id: 5135,
                name: "Geraldine Bisset",
                country: {
                    name: "France",
                   code: "fr"
                },
                company: "Bisset Group",
                status: "proposal",
                date: "2019-05-05",
                activity: 0,
                representative: {
                    name: "Amy Elsner",
                    image: "amyelsner.png"
                }
            }
        ];

        this.frozenCols = [
            { field: 'name', header: 'Name' }
        ];

        this.scrollableCols = [
            { field: 'name', header: 'Name' },
            { field: 'id', header: 'Id' },
            { field: 'date', header: 'Date' },
            { field: 'company', header: 'Company' },
            { field: 'status', header: 'Status' },
            { field: 'activity', header: 'Activity' }
        ];
    }

    showDialog() {
        this.dialogVisible = true;
    }

    toggleLock(data: any, frozen: any, index: number) {
        if (frozen) {
            this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
            this.unlockedCustomers.push(data);
        }
        else {
            this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
            this.lockedCustomers.push(data);
        }

        this.unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });
    }

    calculateCustomerTotal(name: any) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    formatCurrency(value: { toLocaleString: (arg0: string, arg1: { style: string; currency: string; }) => any; }) {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }
}
