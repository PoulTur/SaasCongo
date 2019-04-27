import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html'
})
export class ClientPanelComponent implements OnInit {

tenant: string;

  constructor(private activatedRoute: ActivatedRoute) { 

    // https://kamranahmed.info/blog/2018/02/28/dealing-with-route-params-in-angular-5/
	this.activatedRoute.params.subscribe(routeParams => {
        this.tenant = routeParams["tenant"];  
    });


  }

  ngOnInit() {
  }

}
