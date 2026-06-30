import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-api',
  imports: [FormsModule, JsonPipe],
  templateUrl: './crud-api.html',
  styleUrl: './crud-api.css',
})
export class CrudAPI {

  http = inject(HttpClient);
  clientList: WritableSignal<any[]> = signal([]);

  companyObj: any =
    {
      companyId: 0,
      companyName: '',
      pinCode: '',
      address: '',
      phone: '',
    }

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients").subscribe({
      next: (res: any) => {
        this.clientList.set(res.data);
      },
      error : (error: any)=>{

      }
    })
  }

}
