import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-nine',
  templateUrl: './nine.component.html',
  styleUrls: ['./nine.component.css']
})
export class NineComponent implements OnInit {
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
  barChartLabels: Label[] = ['Class 9'];
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
  barChartMFLabels: Label[] = ['Class 9'];
  barChartMFType: ChartType = 'bar';
  barChartMFLegend = true;
  barChartMFPlugins = [];

  barChartMFData: ChartDataSets[] = [
    { data: [1], label: 'Male' },
    { data: [1], label: 'Female' }
  ];
}
