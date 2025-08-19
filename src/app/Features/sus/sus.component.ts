import { Component } from '@angular/core';

@Component({
  selector: 'app-sus',
  imports: [],
  templateUrl: './sus.component.html',
  styleUrl: './sus.component.scss'
})
export class susComponent {
  smallView = window.innerWidth < 700 ? true : false;
}
