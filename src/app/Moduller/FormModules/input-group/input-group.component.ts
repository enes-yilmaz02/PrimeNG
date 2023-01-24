import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent {
ngOnInit() {
      this.primengConfig.ripple = true;
    }

    constructor(private primengConfig: PrimeNGConfig) {}
}
