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
  onGetStudent(id: number) {
    let result = this.students.find(x=>x.id===Number(id));
    return result || { id: (this.students[this.students.length-1].id+1)! };
  }
  checkUserExist(id: number) {
    return this.students.find(x=>x.id===Number(id));
  }
  onAdd(student: Student) {
    this.students.push(student)
  }
  onDelete(id: number) { 
    let student = this.students.find(x => x.id === id)
    let index = this.students.indexOf(student!, 0)
    this.students.splice(index,1)
  }
  onUpdate(student: Student) {
    console.log("bbbbbbbbbb", student)
    let oldStudent = this.students.find(x => x.id === student.id);
    oldStudent!.name = student.name;
    oldStudent!.age = student.age;
    oldStudent!.guardian = student.guardian;
    oldStudent!.class = student.class;
    oldStudent!.gender = student.gender;

  }
}