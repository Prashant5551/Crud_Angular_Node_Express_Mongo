import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  imports: [NgClass],
  templateUrl: './side-panel.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './side-panel.css',
})
export class SidePanel {
  isSidePanelOpen: WritableSignal<boolean> = signal<boolean>(true);
  currentView: WritableSignal<string> = signal<string>('List');

  openSidePanel() {
    this.isSidePanelOpen.set(true);
  }

  closeSidePanel() {
    this.isSidePanelOpen.set(false);
  }

  toggleView() {
    this.currentView.set(this.currentView() == 'List' ? 'Form' : 'List');
  }
}
