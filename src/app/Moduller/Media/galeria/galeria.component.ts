import { Component, OnInit ,ElementRef, ViewChild, OnDestroy} from '@angular/core';
import { PhotoService } from 'src/app/Servicess/photo.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{
  images!: any[];

  constructor(private photoService: PhotoService) { }

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  ngOnInit() {
      this.photoService.getImages().then(images => this.images = images);
  }
}
