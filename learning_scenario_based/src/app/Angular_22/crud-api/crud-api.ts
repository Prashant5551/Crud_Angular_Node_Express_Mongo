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
  newClientObj: any = {
    clientId: 0,
    clientName: '',
    businessName: '',
    contactPerson: '',
    contactNo: '',
    altContactNo: '',
    email: '',
    createdDate: '',
    logo: 'string'
  }

  constructor() {
    this.getAllClients();
  }

  getAllClients() {
    this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients").subscribe({
      next: (res: any) => {
        this.clientList.set(res.data);
      },
      error: (error: any) => {

      }
    })
  }

  onSaveClient() {
    this.http.post('https://api.freeprojectapi.com/api/SmartParking/addClient', this.newClientObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert('client created');
          this.getAllClients()
        } else {
          console.log(res.message)
        }
      }
    })
  }

  updateClient() {
    this.http.post('https://api.freeprojectapi.com/api/SmartParking/UpdateClient', this.newClientObj).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert('client updated');
          this.getAllClients()
        } else {
          console.log(res.message)
        }
      }
    })
  }

  onEdit(data: any) {
    this.newClientObj = data;
  }

  onDelete(id: number) {
    const isConfirm = confirm("Are you want to delete?");
    if (isConfirm) {
      this.http.post('https://api.freeprojectapi.com/api/SmartParking/DeleteClient?id=', +id).subscribe({
        next: (res: any) => {
          if (res.result) {
            alert('client Deleted');
            this.getAllClients()
          } else {
            console.log(res.message)
          }
        }
      })
    }

  }

}
