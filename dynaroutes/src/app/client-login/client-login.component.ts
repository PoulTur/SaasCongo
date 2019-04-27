import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html'
})
export class ClientLoginComponent implements OnInit {


    tenant: string;
    loginForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    // https://kamranahmed.info/blog/2018/02/28/dealing-with-route-params-in-angular-5/
	this.activatedRoute.params.subscribe(routeParams => {
        this.tenant = routeParams["tenant"];  
    });
    


    // redirect to home if already logged in
    // if (localStorage.getItem["currentUser"]) {
    //     this.router.navigate(['/']);
    // }
  
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  onSubmit() {
    // this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    alert(this.f.username.value + " " + this.f.password.value);



  }

}
