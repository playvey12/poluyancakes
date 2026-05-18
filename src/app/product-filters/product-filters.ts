import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  imports: [],
  templateUrl: './product-filters.html',
  styleUrl: './product-filters.css',
})
export class ProductFilters {
  protected isFilter: boolean = true;
  
  @Output() filter = new EventEmitter<boolean>();

  ChangeFilters(value: boolean) {
    this.isFilter = value;
    this.filter.emit(this.isFilter);
  }
}