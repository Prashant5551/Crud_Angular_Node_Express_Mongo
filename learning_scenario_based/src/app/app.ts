import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalCrud } from "./modal-crud/modal-crud";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learning');
}
