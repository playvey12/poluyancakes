import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsMain } from './products-main/products-main';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { MainHeaderSection } from './main-header-section/main-header-section';
import { AboutMyPath } from './about-my-path/about-my-path';
import { AboutUs } from './about-us/about-us';
import { Modalwindow } from './modalwindow/modalwindow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductsMain,Footer,Header,MainHeaderSection,AboutMyPath,AboutUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kenwood');
}
