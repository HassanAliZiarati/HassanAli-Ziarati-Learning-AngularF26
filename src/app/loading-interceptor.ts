import { inject} from '@angular/core';
import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { finalize} from 'rxjs';
import { LoadingService} from './services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Start loading
  loadingService.start();

  return next(req).pipe(
    finalize(() =>{
      // Stop loading
      loadingService.stop();
    })
  );
};
