import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalCrud } from './pages/modal-crud/modal-crud';
import { SidePanel } from './pages/side-panel/side-panel';

@Component({
  selector: 'app-root',
  imports: [ModalCrud, SidePanel, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning');
}
