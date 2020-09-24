import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rule72',
  templateUrl: './rule72.component.html',
  styleUrls: ['./rule72.component.scss']
})
export class Rule72Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  years=9;
  percentage=8;

  percentageChange(){
    this.years=Math.round((72/this.percentage)*10)/10;
  }

  yearsChange(){
    this.percentage=Math.round((72/this.years)*10)/10;
  }

}
