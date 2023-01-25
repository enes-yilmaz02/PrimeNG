import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  first: number = 0;

    totalRecords: number = 120;

    totalRecords2: number = 12;

    onPageChange(event: { first: number; }) {
        this.first = event.first;
    }

    refresh() {
        this.first = 0;
    }
}
