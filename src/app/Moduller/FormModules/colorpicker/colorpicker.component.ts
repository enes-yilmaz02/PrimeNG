import { Component } from '@angular/core';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.css']
})
export class ColorpickerComponent {
  color1!: string;

  color2: string = "#1976D2";
}
