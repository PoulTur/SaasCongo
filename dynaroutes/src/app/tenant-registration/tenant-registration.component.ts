import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-tenant-registration',
  templateUrl: './tenant-registration.component.html',
  styles: []
})
export class TenantRegistrationComponent implements OnInit {


    registrationForm: FormGroup;

    // access to form fields
    get f() { return this.registrationForm.controls; }


    constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {

    this.registrationForm = this.formBuilder.group({
        companyname: ["", Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        repeatpassword: ['', Validators.required]
    });

  }

  onSubmit() {

    if (this.registrationForm.invalid) {
      return;
    }



    this.authService.login(this.f.username.value, this.f.password.value, "tenant", this.f.companyname.value);
    

    this.router.navigate(['/tenant-panel']);


  }













}
