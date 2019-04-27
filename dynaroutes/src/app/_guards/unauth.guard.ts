import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable()
// works opposite to auth guard. Authenticated users do not have access to some routes e.g. login route.
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (! this.authService.isLoggedIn()) {
        return true;
    }

    // logged in so redirect to tenant-panel
    this.router.navigate(['/tenant-panel']);
    return false;

  }
} 