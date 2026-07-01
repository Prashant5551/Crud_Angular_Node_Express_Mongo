import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InlineTableCrud } from "../../pages/inline-table-crud/inline-table-crud";
import { Master } from '../master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDivVisible: boolean = false;
  isOffer = false;
  orderStatus = "new";

  originalCardNo = "1212456578454330";
  formCardNo: string = '';

  masterServ = inject(Master);

  cityList = ["Latur", "Pune", "Killari", "Pune"];

  studentList = [
    { name: 'bk', rollNo: 16, city: 'Pune' },
    { name: 'mk', rollNo: 18, city: 'Parbhani' },
    { name: 'pk', rollNo: 22, city: 'Killari' },
  ]

  constructor() {
    this.formCardNo = this.masterServ.getFormattedCardNo(this.originalCardNo);
  }


  toggle() {
    this.isDivVisible = !this.isDivVisible;
  }

  storeLoggedData() {
    debugger;
    this.masterServ.loggedUser = 'prashant_kamble';
  }

}
