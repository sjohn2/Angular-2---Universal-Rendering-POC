import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class SharedService {

  weather_key = "4tFGuKbOrO"

  weatherURL1 = "http://www.myweather2.com/developer/forecast.ashx?uac=";
  weatherURL2 = this.weather_key + "&output=json&temp_unit=c&query=";
  weatherURL3 = "&query=";
  findMovieURL1 = "http://www.omdbapi.com/?t=";
  findMovieURL2 = "&y=&plot=short&r=json"; 
  currencyURL = "http://api.fixer.io/latest?symbols=";
  totReqsMade: number = 0; 

  constructor(private _http: Http) {}

  findWeather(zipcode, state){
    this.totReqsMade += 1;
    return this._http.get(this.weatherURL1 + this.weatherURL2 + zipcode)
           .map(response => {
              console.log(response.json);
              return response.json();

           })
           .catch(error => Observable.throw(error.json().error));
  }

  findMovie(){

  }

  getCurrencyExchange(){

  }

}
