import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [{
    age: 15,
    name: "abcs",
    gender: "Male",
    guardian: "ad",
    class: 8,
    id:1
  },
  {
    age: 15,
    name: "abcs",
    gender: "Male",
    guardian: "ad",
    class: 8,
    id:2
    },
    {
      age: 15,
      name: "abcs",
      gender: "Male",
      guardian: "ad",
      class: 8,
      id:3
  }] 
  constructor() { }
  onGet() { 
    return this.students
  }
  onAdd(student: Student) { 
    this.students.push(student)
  }
  onDelete(id: number) { 
    let student = this.students.find(x => x.id === id)
    console.log("stud",student)
    let index = this.students.indexOf(student!, 0)
    this.students.splice(index,1)
  }
}
