import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/models/appconfig';
import { AppConfigService } from 'src/app/Servicess/appconfig.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {
  data: any;

  chartOptions: any;

  subscription!: Subscription;

  config!: AppConfig;

  constructor(private configService: AppConfigService) {}

  ngOnInit() {
      this.data = {
          labels: ['A','B','C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }
          ]
      };

      this.config = this.configService.config;
      this.updateChartOptions();
      this.subscription = this.configService.configUpdate$.subscribe((config: any) => {
          this.config = config;
          this.updateChartOptions();
      });
  }

  updateChartOptions() {
      this.chartOptions = this.config && this.config.dark ? this.getDarkTheme() : this.getLightTheme();
  }

  getLightTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          }
      }
  }

  getDarkTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          }
      }
  }
}
