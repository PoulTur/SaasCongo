import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { Role } from '../_entities/role';

@Injectable()
// works opposite to auth guard. Authenticated users do not have access to some routes e.g. login route.
export class UnauthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.authService.getCurrentUser();


    if (currentUser) {

        // logged in client
        if ((currentUser.role === Role.Client) && (! state.url.startsWith("/client"))) {
            this.authService.logout();
            return true;
        }
        else if ((currentUser.role === Role.Tenant) && ( state.url.startsWith("/client"))){
            // logged in tenant tries to navigate to client panel
            this.authService.logout();
            return true;
        }
        else if ((currentUser.role === Role.Tenant) && (! state.url.startsWith("/tenant-panel") && !(state.url.startsWith("/client")) )){
            // logged in tenant
            this.router.navigate(['/tenant-panel']);
            return false;
        }
        
    }
    // not authenticated user, pass
    else {
        return true;
    }

  }
} 