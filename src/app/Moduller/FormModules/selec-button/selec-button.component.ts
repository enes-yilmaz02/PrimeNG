import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-selec-button',
  templateUrl: './selec-button.component.html',
  styleUrls: ['./selec-button.component.css']
})
export class SelecButtonComponent {
  stateOptions: any[];

  paymentOptions: any[];

  justifyOptions: any[];

  value1: string = 'off';

  value2!: number;

  value3: any;

  constructor(private primeNGConfig: PrimeNGConfig) {
    this.stateOptions = [
      { label: 'Off', value: 'off' },
      { label: 'On', value: 'on' },
    ];

    this.paymentOptions = [
      { name: 'Option 1', value: 1 },
      { name: 'Option 2', value: 2 },
      { name: 'Option 3', value: 3 },
    ];

    this.justifyOptions = [
      { icon: 'pi pi-align-left', justify: 'Left' },
      { icon: 'pi pi-align-right', justify: 'Right' },
      { icon: 'pi pi-align-center', justify: 'Center' },
      { icon: 'pi pi-align-justify', justify: 'Justify' },
    ];
  }

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }
}
