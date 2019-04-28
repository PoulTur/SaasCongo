import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html'
})
export class ClientLoginComponent implements OnInit {


    tenant: string;
    loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private activatedRoute: ActivatedRoute) { 

    // get params from parent route, otherwise undefined
    // https://stackoverflow.com/questions/34500147/angular-2-getting-routeparams-from-parent-component
	this.activatedRoute.parent.params.subscribe(routeParams => {
        this.tenant = routeParams["tenant"];  
    });


  }

  ngOnInit() {

  
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });


  }

  // easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(this.f.username.value, this.f.password.value);

    this.router.navigate(["/tenant/" + this.tenant + "/client-panel"]);



  }

}
