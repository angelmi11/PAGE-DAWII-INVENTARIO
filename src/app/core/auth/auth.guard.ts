// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
