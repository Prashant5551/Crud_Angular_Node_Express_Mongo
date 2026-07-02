import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardNoFormatterPipe } from '../card-no-formatter-pipe';

@Component({
  selector: 'app-pipe-example',
  imports: [UpperCasePipe, CardNoFormatterPipe],
  templateUrl: './pipe-example.html',
  styleUrl: './pipe-example.css',
})
export class PipeExample {

  studentName: string = 'prashant';
  cardno: any = '2136458512324121';
}
