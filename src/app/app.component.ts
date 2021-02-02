import { Component } from '@angular/core';
import {students} from '../app/common'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management';
  constructor() {
    localStorage.setItem("students",JSON.stringify(students))

  }
}
