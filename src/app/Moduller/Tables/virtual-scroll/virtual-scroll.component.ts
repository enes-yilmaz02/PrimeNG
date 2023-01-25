import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/Servicess/car.service';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})
export class VirtualScrollComponent implements OnInit{
  cars!: Car[];

  virtualCars!: Car[];

  cols!: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' },
    ];

    this.cars = Array.from({ length: 10000 }).map((_, i) =>
      this.carService.generateCar(i + 1)
    );
    this.virtualCars = Array.from({ length: 10000 });
  }

  loadCarsLazy(event: LazyLoadEvent) {
    //simulate remote connection with a timeout
    setTimeout(() => {
      //load data of required page
       const loadedCars = this.cars.slice(event.first!, event.first! + event.rows!);

      //populate page of virtual cars
      Array.prototype.splice.apply(this.virtualCars,  [...[event.first!, event.rows], ...loadedCars ]);

      //trigger change detection
      event.forceUpdate();
    }, Math.random() * 1000 + 250);
  }
}
