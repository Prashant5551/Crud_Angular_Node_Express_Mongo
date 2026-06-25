import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-exp',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './directive-exp.html',
  styleUrl: './directive-exp.css',
})
export class DirectiveExp {
  //structural
  //attribute
  //custom
  //component
  //Directive - create/modify behaviour of element

  divClassName: string = 'bg-success';
  isCheckActive: boolean = false;

  num1 = '';
  isTextValid = false;
  inputColorValue = '';
  div4Css: any = {};

  addDiv1Class(className: string) {
    this.divClassName = className;
  }

  checkCharrLength() {
    if (this.num1.length > 5) {
      this.isTextValid = true;
    } else {
      this.isTextValid = false;
    }
  }

  changeType(type: string) {
    console.log('helloo')
    if (type == 'circle') {
      this.div4Css = {
        'background-color': 'red',
        height: '200px',
        width: '200px',
        'border-radius': '50%'
      };
    } else {
      this.div4Css = {
        'background-color': 'green',
        height: '200px',
        width: '200px'
      };
    }
  }
}
