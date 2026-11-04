import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditGuardService } from './services/edit-guard';
export const editGuard: CanActivateFn = () => {
  const guardService = inject(EditGuardService);
  const router = inject(Router);

  // Redirect to the list when editing is locked
  if (guardService.guardEnabled()) {
    return router.parseUrl('/');
  }

  // Allow access when editing is unlocked
  return true;
};
