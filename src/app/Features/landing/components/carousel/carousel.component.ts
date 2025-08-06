import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slidesArray = [
    { id: '1', src: 'assets/1.webp', alt: 'Slide 1', title: 'Slide 1' },
    { id: '2', src: 'assets/2.png', alt: 'Slide 2', title: 'Slide 2' },
    { id: '3', src: 'assets/3.png', alt: 'Slide 3', title: 'Slide 3' },
    { id: '4', src: 'assets/4.jpg', alt: 'Slide 4', title: 'Slide 4' },
    { id: '5', src: 'assets/5.webp', alt: 'Slide 5', title: 'Slide 5' },
    { id: '6', src: 'assets/icon.png', alt: 'Slide 6', title: 'Slide 6' },
  ];
}
