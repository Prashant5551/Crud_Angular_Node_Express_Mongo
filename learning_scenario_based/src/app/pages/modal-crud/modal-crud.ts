import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopicInfo } from '../../reusableComponents/topic-info/topic-info';

@Component({
  selector: 'app-modal-crud',
  imports: [TopicInfo],
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
