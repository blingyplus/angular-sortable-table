import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sortable-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './sortable-table.component.html',
  styleUrls: ['./sortable-table.component.scss'],
})
export class SortableTableComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  fullData: any[] = [];
  displayedColumns: string[] = ['name', 'username', 'email', 'phone'];
  sortedColumn: string = '';
  sortDirection: string = 'asc';
  pageSize: number = 10;
  pageIndex: number = 0;
  totalRecords: number = 0;
  pageSizeOptions: number[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        this.fullData = response;
        this.totalRecords = response.length;
        this.pageSizeOptions = this.calculatePageSizeOptions(this.totalRecords);
        this.updatePagination();
      });
  }

  sortData(column: string): void {
    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    this.fullData.sort((a, b) => {
      const compareA = a[column];
      const compareB = b[column];

      if (compareA < compareB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (compareA > compareB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });

    this.updatePagination();
  }

  handlePageEvent(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagination();
  }

  updatePagination() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = this.fullData.slice(startIndex, endIndex);
  }

  calculatePageSizeOptions(totalRecords: number): number[] {
    const options = [];
    const step = Math.ceil(totalRecords / 4);
    for (let i = 1; i <= 4; i++) {
      const option = step * i;
      if (option < totalRecords) {
        options.push(option);
      }
    }
    options.push(totalRecords);
    return options;
  }
}
