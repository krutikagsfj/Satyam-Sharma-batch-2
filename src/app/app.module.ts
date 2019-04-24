import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FaviIconComponent } from './favi-icon/favi-icon.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CarbrandsComponent,
    HomeComponent,
    FaviIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
