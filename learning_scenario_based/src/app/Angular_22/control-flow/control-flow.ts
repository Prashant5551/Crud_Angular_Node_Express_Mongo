import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InlineTableCrud } from "../../pages/inline-table-crud/inline-table-crud";

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

  cityList = ["Latur", "Pune", "Killari", "Pune"];

  studentList = [
    { name: 'bk', rollNo: 16, city: 'Pune' },
    { name: 'mk', rollNo: 18, city: 'Parbhani' },
    { name: 'pk', rollNo: 22, city: 'Killari' },
  ]


  toggle() {
    this.isDivVisible = !this.isDivVisible;
  }

}
