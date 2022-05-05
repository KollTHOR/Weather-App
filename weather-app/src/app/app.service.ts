import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeatherData, WeatherTileData } from './core/interface/weather-tile-data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getData(cityName: string): Observable<WeatherTileData> {
    return this.http
    .get<IWeatherData>(
      `${environment.url}weather?q=${cityName}&appid=${environment.APIKey}&units${environment.units}`
      ).pipe(tap(x => console.log(x)),
        map((weatherData: IWeatherData) => {
        return {
          id: weatherData.id,
          cityName: weatherData.name,
          temp: weatherData.main.temp
        }
      }),
    ) 
  }
}
