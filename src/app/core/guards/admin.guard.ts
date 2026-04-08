import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.getUser();

  if (authService.isAuthenticated() && user?.rol === 'admin') {
    return true;
  }

  router.navigate(['/dashboard']);
  return false;
};
