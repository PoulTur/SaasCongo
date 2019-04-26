import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html'
})
export class ClientLoginComponent implements OnInit {


    tenant: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    // https://kamranahmed.info/blog/2018/02/28/dealing-with-route-params-in-angular-5/
	this.activatedRoute.params.subscribe(routeParams => {
        this.tenant = routeParams["tenant"];  
	});

  }

}
