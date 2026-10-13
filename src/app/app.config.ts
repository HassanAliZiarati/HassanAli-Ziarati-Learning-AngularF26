import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {MOTORCYCLE_CONFIG} from './shared/config/motorcycle-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: MOTORCYCLE_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'sport'
      }
    }
  ]
};

