import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-get-apiex',
  imports: [],
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css',
})
export class GetAPIEx {

  http = inject(HttpClient); //from angular 16

  userList: WritableSignal<any[]> = signal([]);
  photoList: WritableSignal<any[]> = signal([]);

  constructor() {
    console.log(this.userList);
    console.log(this.getAllUsers());
  }

  getAllUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next: (res: any) => {
        debugger;
        this.userList.set(res);
        console.log(this.userList);
      }, error: (error: any) => {

      }
    })
  }

  getPhotos(){
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe({
      next: (res:any) =>{

      }
    })
  }
}
