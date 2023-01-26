import { Component } from '@angular/core';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent {
  basicItems!: string[];

  multiItems!: string[][];

  templateItems!: string[];

  lazyItems!: string[];

  lazyLoading: boolean = true;

  loadLazyTimeout: any;

  ngOnInit() {
      this.basicItems = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
      this.multiItems = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`));
      this.lazyItems = Array.from({ length: 100000 });
      this.templateItems = Array.from({ length: 10000 }).map((_, i) => `Item #${i}`);
  }

  onLazyLoad(event: { first: any; last: any; }) {
      this.lazyLoading = true;

      if (this.loadLazyTimeout) {
          clearTimeout(this.loadLazyTimeout);
      }

      //imitate delay of a backend call
      this.loadLazyTimeout = setTimeout(() => {
          const { first, last } = event;
          const lazyItems = [...this.lazyItems];

          for (let i = first; i < last; i++) {
              lazyItems[i] = `Item #${i}`;
          }

          this.lazyItems = lazyItems;
          this.lazyLoading = false;
      }, Math.random() * 1000 + 250);
  }
}
