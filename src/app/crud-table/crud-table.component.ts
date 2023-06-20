import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  
  dataList: string[] = [];
  columns: string[] = ['Category'];
  newCategory: string = '';
  editingIndex: number = -1;
  editingValue: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.apiService.getData().subscribe(
      data => {
        this.dataList = data;
        this.editingValue = '';
      },
      error => {
        console.error("error obtaining data:", error);
      }
    );
  }
  addCategory(): void {
    if (this.newCategory) {
      this.dataList.push(this.newCategory);
      this.newCategory = '';

    }
  }
  startEdit(index: number, value: string): void {
    this.editingIndex = index;
    this.editingValue = value;
  }
  
  cancelEdit(): void {
    this.editingIndex = -1;
    this.editingValue = '';
  }
  updateCategory(): void {
    if (this.editingIndex !== -1) {
      this.dataList[this.editingIndex] = this.editingValue;
      this.cancelEdit();
    }
  }
  deleteCategory(index: number): void {
    this.dataList.splice(index, 1);
  }
  
}