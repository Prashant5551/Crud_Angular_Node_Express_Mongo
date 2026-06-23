import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './list.css',
})
export class List {
  router = inject(Router);

  onEdit(id: number) {
    this.router.navigateByUrl('/new-form/' + id);
  }

  onEditRecord(id: number) {
    this.router.navigate(['/new-form', id]);
  }
}
