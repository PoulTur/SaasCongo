import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../_entities/user';
import * as auth0 from 'auth0-js';

@Injectable({ providedIn: 'root' })
export class Auth0AuthService {


    private _idToken: string;
    private _accessToken: string;
    private _expiresAt: number;
  

    private webAuth: any;


  constructor(private router: Router) {

        // Initialize application
        this.webAuth = new auth0.WebAuth({
            domain:       'xxxx',
            clientID:     'xxxx',
            responseType: 'token id_token',
            redirectUri: "xxxx",
            scope: "openid email profile"
          });

  }


  handleAuthentication(){
    this.webAuth.parseHash((err, authResult) => {

        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';

        } else if (err) {
          alert(err);
        }
      });
  }


  login(username: string, password: string, role: string, tenant: string) {
    
    let user = new User(username, password, role, tenant);


        this.webAuth.login({
            username: user.username,
            password: user.password,
            realm: "Username-Password-Authentication",
            }
          , (err) => {
                if (err) return alert(err.description);
            });

    localStorage.setItem("currentUser", JSON.stringify(user));

  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  isLoggedIn() {
    if (localStorage.getItem("currentUser")) {
      return true;
    }
      return false;
  }


  logout() {
    localStorage.removeItem('currentUser');
  }


}
