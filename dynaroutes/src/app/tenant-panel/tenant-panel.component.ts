import { Component, OnInit } from '@angular/core';
import { Auth0AuthService } from '../_services/auth0-auth.service';

@Component({
  selector: 'app-tenant-panel',
  templateUrl: './tenant-panel.component.html',
  styles: []
})
export class TenantPanelComponent implements OnInit {

//   constructor(private auth: Auth0AuthService) { }

  ngOnInit() {
    //this.auth.handleAuthentication();
  }

}
