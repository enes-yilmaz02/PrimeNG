import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/Servicess/car.service';

@Component({
  selector: 'app-inplace',
  templateUrl: './inplace.component.html',
  styleUrls: ['./inplace.component.css']
})
export class InplaceComponent {
  cars!: Car[];
        
  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
