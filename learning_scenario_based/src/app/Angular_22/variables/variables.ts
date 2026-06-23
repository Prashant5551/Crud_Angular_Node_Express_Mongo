import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  studentName: string = 'prashant';
  rollNumber: number = 18;
  isStudentActive: boolean = true;
  currentDate: Date = new Date();

  teacherName = 'pk';

  student = {
    name: 'mk',
    rollNo: 22,
    city: 'latur'
  };

  studentList = [
    { name: 'BK', rollNo: 16, city: 'pune' },
    { name: 'MK', rollNo: 18, city: 'parbhani' },
    { name: 'PK', rollNo: 22, city: 'killari' },
  ];

  cityList: string[] = ['Pune', 'Parbhani', 'Killari'];
  // cityList1.push('Latur');


  constructor() {
    console.log(this.studentName);
    console.log(this.studentList);
    console.log(this.student);
    this.hello();
  }


  hello() {
    if (!this.cityList.includes('Latur')) {
      this.cityList.push('Latur');
    }

    console.log(this.cityList);
  }


}
