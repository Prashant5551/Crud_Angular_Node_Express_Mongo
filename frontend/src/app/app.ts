import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from './api';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
  studentForm: FormGroup;
  students: any = [];
  selectedStudents: any = null;

  ngOnInit() {
    this.getStudents();
  }

  constructor(private fb: FormBuilder, private apiService: Api) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      studentClass: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    })
  }

  getStudents() {
    this.apiService.getStudents().subscribe((data: any) => {
      if (data) {
        this.students = data.student;
        console.log(data.student);
      } else {
        console.error('Something went wrong');
      }
    });
  }

  onSubmit() {
    // console.log(this.studentForm.value);
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      if (this.selectedStudents) {
        this.apiService.updateStudent(this.selectedStudents._id, studentData).subscribe((response: any) => {
          if (response && response.status === 'success') {
            alert(response.message);
            this.getStudents();
            this.studentForm.reset();
          }
        })
      } else {
        this.apiService.createStudent(studentData).subscribe((res: any) => {
          if (res && res.status === 'success') {
            alert('student created successfully');
            this.getStudents();
            this.studentForm.reset();
            this.selectedStudents = null;
          } else {
            console.error('Failed to update student');
          }
        },
          (error) => {
            console.error(error);
          }
        )
      }
    }
  }

  deleteStudent(student: any) {
    this.apiService.deleteStudent(student._id).subscribe((res: any) => {
      if (res && res.status === 'success') {
        alert(res.message);
        this.getStudents();
      }
    })
  }

  editStudent(student: any) {
    this.selectedStudents = student;
    this.studentForm.patchValue({
      name: student.name,
      age: student.age,
      email: student.email,
      studentClass: student.studentClass,
      address: student.address,
      phone: student.phone
    });
    console.log(student)
  }
}
