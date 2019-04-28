import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenant-home',
  templateUrl: './tenant-home.component.html'
})
export class TenantHomeComponent implements OnInit {

    constructor(private authService: AuthService, private router: Router){}






  ngOnInit() {
  }

}
