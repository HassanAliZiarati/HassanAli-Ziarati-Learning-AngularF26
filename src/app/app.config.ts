import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import {MOTORCYCLE_CONFIG} from './shared/config/motorcycle-config';
import {MotorcycleService} from './services/motorcycle';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {loadingInterceptor} from './loading-interceptor';
import {errorInterceptor} from './error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),

    // Use the loading interceptor
    provideHttpClient(
      withInterceptors([loadingInterceptor,
        // Loading stops even if the request fails.
        errorInterceptor,
      ]),
    ),

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

