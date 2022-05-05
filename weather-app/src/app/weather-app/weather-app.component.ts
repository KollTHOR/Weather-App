import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  weatherData: any

  constructor(private appservice: AppService) { }

  ngOnInit(): void {
  }

  

  getWeatherData(cityName: string): void {
    this.appservice.getData(cityName).subscribe({
      next: (data: any) => {
        console.log(data)
        this.weatherData = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }



}
