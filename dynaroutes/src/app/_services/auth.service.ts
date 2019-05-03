import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../_entities/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  login(username: string, password: string, role: string, tenant: string) {
    // TODO - in real service only 2 params, role returned from the service
    let user = new User(username, password, role, tenant);




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
