import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Root/app.config';
import { AppComponent } from './app/Root/app.component';
import { inject, track } from '@vercel/analytics';

inject();

bootstrapApplication(AppComponent, appConfig).then(() => {
  track('app_boot');
})
  .catch((err) => console.error(err));
