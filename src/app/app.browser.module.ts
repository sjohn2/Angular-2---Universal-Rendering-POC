/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './routing.module';

import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';

import {SharedService} from './shared.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    WeatherComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    UniversalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
