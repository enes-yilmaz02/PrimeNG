import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/Servicess/car.service';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.css']
})
export class DeferComponent {
  cars!: Car[];
    
  constructor(private carService: CarService, private messageService: MessageService) {}
  
  initData() {
      this.messageService.add({severity:'success', summary:'Data Initialized', detail:'Render Completed'});
      this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

}
