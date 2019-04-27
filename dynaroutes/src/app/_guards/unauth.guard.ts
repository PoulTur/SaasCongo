import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
// works opposite to auth guard. Authenticated users do not have access to some routes e.g. login route.
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService) { }

  canActivate() {
    return !this.authService.isLoggedIn();
  }
} 