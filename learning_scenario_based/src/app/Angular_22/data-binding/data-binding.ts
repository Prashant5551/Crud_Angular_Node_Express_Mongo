import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  productName: string = 'Headphone';
  productSize: number = 12000;
  maxAllowedChar: number = 5;
  isModelActive: boolean = false;

  myDynamictype = 'Button';

  showWelcometext() {
    alert("Welcome version 22");
  }

  onDropdownChange() {
    alert("Dropdown value changed")
  }

  onMouseEnter() {
    console.log('Mouse entered');
  }

  onMouseLeft() {
    console.log('Mouse left Div');
  }
}
