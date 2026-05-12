import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-table-crud',
  imports: [FormsModule,JsonPipe],
  templateUrl: './inline-table-crud.html',
  styleUrl: './inline-table-crud.css',
})
export class InlineTableCrud {
  deptList = signal<any>([
    {
      "departmentId": 15556,
      "departmentName": "Salgfdgdfd",
      "departmentLogo": "ppp.pngdgfgfd"
    },
    {
      "departmentId": 15557,
      "departmentName": "Marketing",
      "departmentLogo": "mark.jpg"
    },
    {
      "departmentId": 15558,
      "departmentName": "Business",
      "departmentLogo": "ba.png1"
    },
    {
      "departmentId": 15559,
      "departmentName": "Information Technology",
      "departmentLogo": "it.jpg"
    },
    {
      "departmentId": 15561,
      "departmentName": "HR",
      "departmentLogo": "hr.jpg"
    },
    {
      "departmentId": 15562,
      "departmentName": "Electrical ",
      "departmentLogo": "elec.png"
    },
    {
      "departmentId": 15563,
      "departmentName": "Engineering",
      "departmentLogo": "eng.png"
    },
    {
      "departmentId": 15564,
      "departmentName": "Demo",
      "departmentLogo": "demo.png"
    },
    {
      "departmentId": 15565,
      "departmentName": "Development",
      "departmentLogo": "dev.png"
    },
    {
      "departmentId": 15566,
      "departmentName": "BCA",
      "departmentLogo": "testt"
    }
  ])
}
