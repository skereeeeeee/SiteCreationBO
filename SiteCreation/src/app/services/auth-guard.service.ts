import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['Login']);
      return false;
    }
    return true;
  }
}
