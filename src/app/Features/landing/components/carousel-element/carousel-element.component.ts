import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-element',
  imports: [],
  templateUrl: './carousel-element.component.html',
  styleUrl: './carousel-element.component.scss'
})
export class CarouselElementComponent {

  @Input() Item: any;

}
