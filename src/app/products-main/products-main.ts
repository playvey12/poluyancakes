import { Component } from '@angular/core';
import { ProductFilters } from '../product-filters/product-filters';
import { ProductItem } from '../product-item/product-item';
import { products as initialProducts} from './utils/mockData';
import { Modalwindow } from '../modalwindow/modalwindow';

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    
  
    promo_code: string;
    installment: string;
    warranty: string;
    bonus: string;

    specs: {
        motor_power: string;
        heating_power: string;
        bowl_capacity: string;
        display: string;
        temp_range: string;
        timer: boolean;
    };

    features: string[];
    bundle: string[];
}
@Component({
  selector: 'app-products-main',
  imports: [ProductItem,ProductFilters,Modalwindow],
  templateUrl: './products-main.html',
  styleUrl: './products-main.css',
})
export class ProductsMain {


  protected selectedProduct: Product | null = null;


  openModal(product: Product) {
    this.selectedProduct = product;
  }


  closeModal() {
    this.selectedProduct = null;
  }

protected products:Product[]=[]
protected notFilteredProducts:Product[]=initialProducts
ChangeFilters(isFilter:boolean){
  if(isFilter==false){
     this.products=[...this.notFilteredProducts].filter(product=>product.category==="machine")
  }
  else{
     this.products=[...this.notFilteredProducts].filter(product=>product.category==="nozzles")
  }
 
}

}
