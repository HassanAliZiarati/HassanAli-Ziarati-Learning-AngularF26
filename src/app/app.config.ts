import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {MOTORCYCLE_CONFIG} from './shared/config/motorcycle-config';
import {MotorcycleService} from './services/motorcycle';
import {MockMotorcycleService} from './services/mock-motorcycle';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    {
      provide: MOTORCYCLE_CONFIG,
      useValue: {
        apiBaseUrl: 'https://placeholder.example.com/api',
        defaultCategory: 'sport',
      },
    },

    // To switch back, change useClass to MotorcycleService.
    {
      provide: MotorcycleService,
      useClass: MockMotorcycleService,
    },
  ],
};

