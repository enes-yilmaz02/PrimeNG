import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-key-filter',
  templateUrl: './key-filter.component.html',
  styleUrls: ['./key-filter.component.css'],
  animations: [
    trigger('errorState', [
        state('hidden', style({
            opacity: 0
        })),
        state('visible', style({
            opacity: 1
        })),
        transition('visible => hidden', animate('400ms ease-in')),
        transition('hidden => visible', animate('400ms ease-out'))
    ])
],
})
export class KeyFilterComponent {
  blockSpecial: RegExp = /^[^<>*!]+$/ 
    
    blockSpace: RegExp = /[^\s]/; 
    
    ccRegex: RegExp = /[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/; 
    
    cc!: string;
}
