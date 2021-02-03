import { Component, OnInit } from '@angular/core';
import { students } from '../common'
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['Class 8', 'Class 9' , 'Class 10'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2, 5, 6, 8, 8, 8, 1], label: 'Male' },
    { data: [2, 5, 4, 7, 9, 8, 1], label: 'Female' }
  ];
  ngOnInit(): void {
  }

}
