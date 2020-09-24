import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { Rule72Component } from './rule72/rule72.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    Rule72Component
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
