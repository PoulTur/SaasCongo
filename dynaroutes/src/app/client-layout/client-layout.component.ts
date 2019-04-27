import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styles: []
})
export class ClientLayoutComponent {

    tenant: string;

    constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute){


    // https://kamranahmed.info/blog/2018/02/28/dealing-with-route-params-in-angular-5/
	this.activatedRoute.params.subscribe(routeParams => {
        this.tenant = routeParams["tenant"];  
    });

    }





    isAuthenticated(){
        return this.authService.isLoggedIn();
    }


    logout(){
        this.authService.logout();
        this.router.navigate(["/tenant/" + this.tenant]);
    }


    isAnonymous(){
        return !this.isAuthenticated();
    }




}
