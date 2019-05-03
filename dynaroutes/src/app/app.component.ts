import { Component } from '@angular/core';
import { Auth0AuthService } from './_services/auth0-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
constructor(private auth: Auth0AuthService){}

    ngOnInit(){
        this.auth.handleAuthentication();
    }




}
