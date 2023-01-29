import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent {
  items!: MenuItem[];
    
  home!: MenuItem;
  
  ngOnInit() {
      this.items = [
          {label: 'Computer'},
          {label: 'Notebook'},
          {label: 'Accessories'},
          {label: 'Backpacks'},
          {label: 'Item'}
      ];
      
      this.home = {icon: 'pi pi-home'};
  }
}
