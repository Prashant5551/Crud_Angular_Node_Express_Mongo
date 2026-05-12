import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-crud',
  imports: [],
  templateUrl: './modal-crud.html',
  styleUrl: './modal-crud.css',
})
export class ModalCrud {
  //viewchild is nothing but a decorator,basically property decorator
  @ViewChild('myModal') formModal!: ElementRef;

  addNew() {
    if (this.formModal) {
      this.formModal.nativeElement.style.display = 'block';
    }
  }

  closeModel() {
    if (this.formModal) {
      this.formModal.nativeElement.style.display = 'none';
    }
  }
}
