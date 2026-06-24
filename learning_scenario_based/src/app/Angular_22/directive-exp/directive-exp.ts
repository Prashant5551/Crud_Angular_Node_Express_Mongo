import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-exp',
  imports: [NgClass, FormsModule],
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

  addDiv1Class(className: string) {
    this.divClassName = className;
  }
}
