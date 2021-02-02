import { Component, OnInit } from '@angular/core';
import {students} from '../../app/common'
@Component({
  selector: 'app-ten',
  templateUrl: './ten.component.html',
  styleUrls: ['./ten.component.css']
})
export class TenComponent implements OnInit {

  constructor() {
    // var stud = []
    var stud = JSON.parse(localStorage.getItem("students") || "")
    var t=students.concat(stud)
    var ten=t.filter(x => x.class==10)
  
  }

  ngOnInit(): void {
  }
  
  formAdd() { 
    
  } 
}
