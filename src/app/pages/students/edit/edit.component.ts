import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  header!: string;
  constructor(private route: ActivatedRoute,private router: Router,private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id
      console.log("params.id",params.id)
    })
    this.header = this.id === 0 ? 'Add Student' : 'Edit student';
    console.log("header",this.header)

  }
  onSubmit(form: NgForm) { 
    let student: Student = { 
      id: form.value.id,
      name: form.value.name,
      age: form.value.age,
      gender: form.value.gender,
      guardian: form.value.guardian,
      class: form.value.class
      
    }
    this.studentService.onAdd(student)
    this.router.navigateByUrl('')
}
}   
