import { Component } from '@angular/core';

@Component({
  selector: 'app-genes',
  imports: [],
  templateUrl: './genes.component.html',
  styleUrl: './genes.component.scss'
})
export class genesComponent {
  smallView = window.innerWidth < 700 ? true : false;
}
