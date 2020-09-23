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

  percentage=8.0;
  result;

  chartOptions;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        // width: '420px',
        fontFamily: 'Times New Roman, Times, serif',
        // dropShadow: {
        //   enabled: true,
        //   color: "#000",
        //   top: 18,
        //   left: 7,
        //   blur: 20,
        //   opacity: 1
        // },
        toolbar: {
          show: false
        },
        zoom:{
          enabled: false
        }
      },
      series: [{
        name: 'sales',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        title: {
          text: "Zeit in Jahre"
        },
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      },
      yaxis:{
        title:{
          text:"Vermögen in Euro"
        }
      },
      fill:{
        colors:['#000']
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      colors: ['#000'],
      tooltip: {
        enabled: false
      },
      grid: {
        enabled: false,
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.8
        }
      }
      
      
    }
  }

  ngOnInit(): void {
  }

  calc(){
    this.result=72/this.percentage;
  }

}
