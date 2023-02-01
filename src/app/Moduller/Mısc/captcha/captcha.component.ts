import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent {
  constructor(private messageService: MessageService) {}

  showResponse(event: any) {
      this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
  }
}
