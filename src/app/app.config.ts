import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {MOTORCYCLE_CONFIG} from './shared/config/motorcycle-config';
import {MotorcycleService} from './services/motorcycle';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),

    {
      provide: MOTORCYCLE_CONFIG,
      useValue: {
        // API base URL
        apiBaseUrl: 'https://dummyjson.com',
        defaultCategory: 'motorcycle',
      },
    },

    // To switch back, change useClass to MotorcycleService.
    {
      provide: MotorcycleService,
      useClass: MotorcycleService,
    },
  ],
};

