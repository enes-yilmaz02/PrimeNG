import { Component } from '@angular/core';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrls: ['./block-ui.component.css']
})
export class BlockUiComponent {
  blockedPanel: boolean = false;

  blockedDocument: boolean = false;

  blockDocument() {
      this.blockedDocument = true;
      setTimeout(() => {
          this.blockedDocument = false;
      }, 3000);
  }
}
