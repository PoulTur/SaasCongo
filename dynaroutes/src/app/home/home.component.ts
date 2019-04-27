import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    constructor(private authService: AuthService){}


    isAuthenticated(){
        return this.authService.isLoggedIn();
    }

    isAnonymous(){
        return !this.isAuthenticated();
    }




  ngOnInit() {
  }

}
