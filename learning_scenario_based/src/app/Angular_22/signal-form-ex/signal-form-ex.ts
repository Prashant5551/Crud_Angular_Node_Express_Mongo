import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required, schema } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-ex',
  imports: [FormField],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {

  employeeModel = signal({
    empName: '',
    empCity: '',
    empState: ''
  })

  employeeForm = form(this.employeeModel,(schema)=>{
    required(schema.empName, {message:'name is required'}),
    required(schema.empCity,{message:'city is required'}),
    minLength(schema.empName,4,{message:'min 4 char needed'})
  });

  saveEmp() {
    const formValue = this.employeeForm().value();
    console.log(formValue)
  }
}
