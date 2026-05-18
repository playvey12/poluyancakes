import { Component, Input } from '@angular/core';
import { ProductFilters } from '../product-filters/product-filters';
import { Product } from '../products-main/products-main';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
@Input() product!:Product
}
