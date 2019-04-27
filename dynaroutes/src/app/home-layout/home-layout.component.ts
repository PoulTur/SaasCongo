import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: []
})
export class HomeLayoutComponent {

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
