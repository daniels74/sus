import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselElementComponent } from '../carousel-element/carousel-element.component';

@Component({
  selector: 'app-carousel',
  imports: [CarouselModule, CommonModule, CarouselElementComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    fluidSpeed: true,
    smartSpeed: 200,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: true,
    navSpeed: 500,
    navText: ['', ''],
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 0, // no delay between transitions
    // autoplaySpeed: 2000, // controls how smooth/slow the movement is
    // autoplayHoverPause: false,
    // dots: false,
    // nav: true,
    // navSpeed: 700,
    // slideTransition: 'linear', // important: makes it smooth
    // smartSpeed: 200, // sync speed with autoplaySpeed
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
  };

  slidesArray = [
    { id: '1', src: 'assets/sus1.jpeg', alt: 'Slide 1', title: 'Slide 1' },
    { id: '2', src: 'assets/sus2.jpeg', alt: 'Slide 2', title: 'Slide 2' },
    { id: '3', src: 'assets/sus3.jpeg', alt: 'Slide 3', title: 'Slide 3' },
    { id: '4', src: 'assets/sus4.jpeg', alt: 'Slide 4', title: 'Slide 4' },
    { id: '5', src: 'assets/sus5.jpeg', alt: 'Slide 5', title: 'Slide 5' },
    { id: '6', src: 'assets/sus6.png', alt: 'Slide 6', title: 'Slide 6' },
    { id: '7', src: 'assets/sus7.jpeg', alt: 'Slide 7', title: 'Slide 7' },
    { id: '8', src: 'assets/sus8.jpeg', alt: 'Slide 8', title: 'Slide 8' },
    { id: '9', src: 'assets/sus9.png', alt: 'Slide 9', title: 'Slide 9' },
    { id: '10', src: 'assets/sus10.png', alt: 'Slide 10', title: 'Slide 10' },
  ];
}
