import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  formBuilder = inject(FormBuilder); //From Angular 16

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      stuId: [0],
      studName: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.userForm.invalid) {
      alert('provide valid details');
    } {
      alert('are you want to save?')
      console.log(this.userForm.value);
    }
  }

}
