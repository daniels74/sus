import { Routes } from '@angular/router';
import { LandingComponent } from '../Features/landing/landing.component';
import { susComponent } from '../Features/sus/sus.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'sus', component: susComponent },
];
