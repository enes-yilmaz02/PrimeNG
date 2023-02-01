import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent {
  products!: any[];

  ngOnInit() {
      this.products = new Array(5);
  }
}
