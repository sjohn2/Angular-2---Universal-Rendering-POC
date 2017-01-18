import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  id_zipcode: string = "";
  op_current_humidity = "";
  op_current_pressure = "";
  op_current_temp = "";
  op_current_temp_unit = "";
  op_current_weather_code = "";
  op_current_weather_text = "";

  op_current_wind_dir = "";
  op_current_wind_speed = "";
  op_current_wind_unit = "";



  id_state: string = "";
  op_city: string = "";
  op_region: string = "";
  op_country: string = "";
  op_date: string = "";
  op_text: string = "";
  op_temp: string = "";

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
  }

  callWeatherService(){
    this._sharedService.findWeather(this.id_zipcode, this.id_state)
        .subscribe(
          resultSet => {
            this.op_current_humidity = resultSet["weather"]["curren_weather"]["humidity"];
            this.op_current_pressure = resultSet["weather"]["curren_weather"]["pressure"];
            this.op_current_temp = resultSet["weather"]["curren_weather"]["temp"];
            this.op_current_temp_unit = resultSet["weather"]["curren_weather"]["temp_unit"];
            this.op_current_weather_text = resultSet["weather"]["curren_weather"]["weather_text"];

            
          },
          error => {
            console.log("Error. The findWeather result JSON value is as follows:");
            console.log(error);
          }
        );
  }

}
