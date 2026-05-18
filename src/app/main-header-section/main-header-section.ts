import { Component } from '@angular/core';


@Component({
  selector: 'app-main-header-section',
  imports: [],
  templateUrl: './main-header-section.html',
  styleUrl: './main-header-section.css',
})
export class MainHeaderSection {
  scrollToProducts() {
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const element = document.getElementById('contact-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
