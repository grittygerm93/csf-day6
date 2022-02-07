import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs";

@Component({
  selector: 'app-openweather',
  templateUrl: './openweather.component.html',
  styleUrls: ['./openweather.component.css']
})
export class OpenweatherComponent implements OnInit {
  temp: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(city: HTMLInputElement) {
     this.http.get<any>('http://api.openweathermap.org/data/2.5/weather',
      {params: new HttpParams().set('q', city.value)
          .set('appid', 'f3920cdcd64ebaac737f3f71550cb87c')
          .set('mode', 'metric')})
       .pipe(map(result => {
         console.log(result.main['temp']);
         return {temp: result.main['temp']-273.15}
       }))
       .subscribe(result => this.temp = result.temp as number);
  }

/*  // alex.link1=http://api.openweathermap.org/data/2.5/weather?
  // alex.weather.pass=f3920cdcd64ebaac737f3f71550cb87c
  String url2 = UriComponentsBuilder
    .fromUriString(url1)
    .queryParam("q", country)
    .queryParam("appid", apiKey)
    .queryParam("mode", "metric")
    .toUriString();*/
}
