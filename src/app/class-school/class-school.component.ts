import { Component, OnInit } from '@angular/core';
import { Student } from '../common';

@Component({
  selector: 'app-class-school',
  templateUrl: './class-school.component.html',
  styleUrls: ['./class-school.component.css']
})
export class ClassSchoolComponent implements OnInit {
  student: Student = { 
      age: 13,
      name: "Ragav",
      gender: "Male",
      guardian: "Ramesh",
      standard: 8 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
