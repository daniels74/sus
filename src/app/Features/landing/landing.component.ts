import { Component } from '@angular/core';
import { CarouselComponent } from "./components/carousel/carousel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CarouselComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  // true if small screen / false if Big screen
  smallView = window.innerWidth < 700 ? true : false;

}
