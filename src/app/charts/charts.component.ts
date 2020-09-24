import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  money=500;
  monedevelopment=[];
  years=[];
  percentage=8.0;
  result;

  chartOptions;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        width: '100%',
        
        fontFamily: 'Helvetica, Arial, sans-serif',
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 20,
          opacity: .2
        },
        toolbar: {
          show: false
        },
        zoom:{
          enabled: false
        }
      },
      series: [{
        name: 'Euro',
        data: []
      }],
      xaxis: {
        title: {
          text: "Zeit in Jahre"
        },
        categories: []
      },
      yaxis:{
        title:{
          text:"Vermögen"
        }
      },
      fill:{
        colors:['#000']
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      colors: ['#000'],
      // tooltip: {
      //   enabled: false
      // },
      grid: {
        enabled: false,
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.2
        }
      }
      
      
    }
  }

  ngOnInit(): void {
  }

  calc(){
    this.result=72/this.percentage;
  }

  fillTable(){
    this.monedevelopment=[];
    this.years=[];
    console.log("fill table")
    this.result=this.money;
    this.monedevelopment.push(this.result);
    let i = 0;
    this.years.push(i)
    
    while(this.result<(this.money*2)){
      i=i+1;
      this.years.push(i);
      this.result=this.result+this.result*(this.percentage/100);
      this.monedevelopment.push(this.result.toFixed());
    }
    
    this.chartOptions.series=[{
      data:this.monedevelopment
    }] ;
    this.chartOptions.
    this.chartOptions.xaxis.categories = this.years;
  }

}
