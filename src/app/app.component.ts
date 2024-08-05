import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortableTableComponent } from "./sortable-table/sortable-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SortableTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-sortable-table';
}
