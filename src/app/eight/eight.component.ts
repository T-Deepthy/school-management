import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';

import { Student } from '../models/student.model';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-eight',
  templateUrl: './eight.component.html',
  styleUrls: ['./eight.component.css']
})
export class EightComponent implements OnInit {
  students!: Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students=this.studentService.onGet();
  }
    onDelete(id: number ) { 
      this.studentService.onDelete(id)
    }
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartLabels: Label[] = ['Class 8'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [2], label: 'Total Students Strength' },
  ];

 s=localStorage.getItem('countMale')

  barChartMFOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
  };
  barChartMFLabels: Label[] = ['Class 8'];
  barChartMFType: ChartType = 'bar';
  barChartMFLegend = true;
  barChartMFPlugins = [];

  barChartMFData: ChartDataSets[] = [
    { data: [1], label: 'Male' },
    { data: [1], label: 'Female' }
  ];
}
