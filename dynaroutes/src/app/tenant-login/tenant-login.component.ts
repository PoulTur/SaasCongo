import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-tenant-login',
  templateUrl: './tenant-login.component.html'
})
export class TenantLoginComponent implements OnInit {


    loginForm: FormGroup;

    // access to form fields
    get f() { return this.loginForm.controls; }


    constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  }

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }


    //todo - just a fake. This should be read from the server.
    let tenantName = this.f.username.value;


    this.authService.login(this.f.username.value, this.f.password.value, "tenant", tenantName);
    

    this.router.navigate(['/tenant-panel']);


  }



}
