import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-basic',
  imports: [],
  templateUrl: './signal-basic.html',
  styleUrl: './signal-basic.css',
})
export class SignalBasic {
  // from signal 17
  //zoneless angular structure
  //signals are more reactive

  employeeName: string = 'prashant kamble';
  empMobNo = signal(973089);
  isActive: WritableSignal<boolean> = signal(false);
  cityList: WritableSignal<string[]> = signal(['Pune', 'Killari', 'Parbhani'])

  chngEmpName() {
    this.employeeName = 'Mayuri'
  }

  chngMobNo() {
    this.empMobNo.set(123456);
  }
}
