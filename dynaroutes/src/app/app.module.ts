import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';



import { ClientLoginComponent } from './client-login/client-login.component';
import { TenantLoginComponent } from './tenant-login/tenant-login.component';

import { TenantRegistrationComponent } from './tenant-registration/tenant-registration.component';


import {ButtonModule} from 'primeng/button';
import {InputTextModule, InputText} from 'primeng/inputtext';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TenantPanelComponent } from './tenant-panel/tenant-panel.component';
import { AuthService } from './_services/auth.service';
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from './_guards/auth.guard';
import { UnauthGuard } from './_guards/unauth.guard';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { TenantLayoutComponent } from './tenant-layout/tenant-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientLoginComponent,
    TenantLoginComponent,
    TenantRegistrationComponent,
    TenantPanelComponent,
    TenantHomeComponent,
    TenantLayoutComponent,
    ClientLayoutComponent,
    ClientPanelComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,


    RouterModule.forRoot(ROUTES),


    ButtonModule,
    InputTextModule

  ],
  providers: [
      AuthService,
      HttpClientModule,
      AuthGuard,
      UnauthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
