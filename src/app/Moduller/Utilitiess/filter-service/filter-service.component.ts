import { Component } from '@angular/core';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/Servicess/car.service';

@Component({
  selector: 'app-filter-service',
  templateUrl: './filter-service.component.html',
  styleUrls: ['./filter-service.component.css']
})
export class FilterServiceComponent {
  cars!: Car[];

  cols!: any[];

  matchModeOptions!: SelectItem[];

  constructor(private carService:CarService, private filterService: FilterService) {}

  ngOnInit() {
      const customFilterName = 'custom-equals';

      this.filterService.register(customFilterName, (value: { toString: () => any; } | null | undefined, filter: string | null | undefined): boolean => {
          if (filter === undefined || filter === null || filter.trim() === '') {
              return true;
          }

          if (value === undefined || value === null) {
              return false;
          }

          return value.toString() === filter.toString();
      });

      this.cols = [
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' },
          { field: 'vin', header: 'Vin' }
      ];

      this.matchModeOptions = [
          { label: 'Custom Equals', value: customFilterName },
          { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
          { label: 'Contains', value: FilterMatchMode.CONTAINS },
      ];

      this.carService.getCarsMedium().then(cars => this.cars = cars);
  }
}
