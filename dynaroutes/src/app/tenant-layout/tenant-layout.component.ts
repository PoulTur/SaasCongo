import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-layout',
  templateUrl: './tenant-layout.component.html',
  styles: []
})
export class TenantLayoutComponent {

    constructor(private authService: AuthService, private router: Router){}


    isAuthenticated(){
        return this.authService.isLoggedIn();
    }


    logout(){
        this.authService.logout();
        this.router.navigate(["/home"]);
    }


    isAnonymous(){
        return !this.isAuthenticated();
    }





}
