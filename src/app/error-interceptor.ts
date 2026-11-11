import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ErrorService } from './services/error';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(ErrorService);


  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      let message = 'Something went wrong. Please try again.';

      if (error.status === 0) {
        message = 'Cannot connect. Check your internet connection.';
      } else if (error.status === 404) {
        message = 'The requested data was not found.';
      } else if (error.status >= 500) {
        message = 'The server has a problem. Please try again later.';
      }

      // Store the error message
      errorService.errorMessage.set(message);

      // Send the error to the service
      return throwError(() => error);
    }),
  );
};
