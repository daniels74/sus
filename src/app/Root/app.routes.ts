import { Routes } from '@angular/router';
import { LandingComponent } from '../Features/landing/landing.component';
import { genesComponent } from '../Features/genes/genes.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'why', component: genesComponent },
];
