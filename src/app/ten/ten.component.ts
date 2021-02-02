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
    console.log("stud", stud)
    console.log("students",students)
    var t=students.concat(stud)
    var ten=t.filter(x => x.class==10)
      console.log("ten",ten)
  
  }

  ngOnInit(): void {
  }
  
  formAdd() { 
    
  } 
}
