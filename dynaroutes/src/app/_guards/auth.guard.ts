import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.getCurrentUser();
    
    if (currentUser) {


        // user in not correct role
        if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(["/"]);
            return false;
        }
        // user in the client role, but logging to incorrect client
        // redirect to correct client panel
        else if ((route.data.roles && route.data.roles[0] === "client") && (currentUser.tenant !== state.root.children[0].params["client"])){
            this.router.navigate(["/client/" + currentUser.tenant + "/client-panel"]);
            return false;
        }
        else {
        // authorised tenant or client accessing correct client path
        return true;
        }
    }
    else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
}
