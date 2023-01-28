import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  items!: MenuItem[];
    
  constructor(private messageService: MessageService) {}
  
  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [{
                  label: 'Update',
                  icon: 'pi pi-refresh',
                  command: () => {
                      this.update();
                  }
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-times',
                  command: () => {
                      this.delete();
                  }
              }
          ]},
          {
              label: 'Navigate',
              items: [{
                  label: 'Angular Website',
                  icon: 'pi pi-external-link',
                  url: 'http://angular.io'
              },
              {
                  label: 'Router',
                  icon: 'pi pi-upload',
                  routerLink: '/fileupload'
              }
          ]}
      ];
  }

  update() {
      this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
  }

  delete() {
      this.messageService.add({severity:'warn', summary:'Delete', detail:'Data Deleted'});
  }
}
