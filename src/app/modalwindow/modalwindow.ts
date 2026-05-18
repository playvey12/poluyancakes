import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products-main/products-main';

@Component({
  selector: 'app-modalwindow',
  imports: [CommonModule],
  templateUrl: './modalwindow.html',
  styleUrl: './modalwindow.css',
})
export class Modalwindow {
  @Input() product: Product | null = null;
  

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
