import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  activeState: boolean[] = [true, false, false];

  constructor(private messageService: MessageService) {}

  onTabClose(event: { index: string; }) {
      this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  }
  
  onTabOpen(event: { index: string; }) {
      this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }

  toggle(index: number) {
      this.activeState[index] = !this.activeState[index];
  }
}
