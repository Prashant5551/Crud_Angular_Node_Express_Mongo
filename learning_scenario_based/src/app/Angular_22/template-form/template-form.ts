import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  companyObj: any =
    {
      companyId: 0,
      companyName: '',
      pinCode: '',
      address: '',
      phone: '',
    }


  //if someone remove disabled from elements of browser button for that we are passing form Reference to NgForm  
  //double validation
  onSaveComapny(formRef: NgForm) {
    if (formRef.invalid) {
      const formValue = this.companyObj;
      console.log(formValue);
      alert('provide all fields');
    } else {
      alert('are you want to save?')
      const formValue = this.companyObj;
    }
  }

  onPinchange() {
    console.log('pin changed');
  }
}
