import { Routes, RouterModule } from '@angular/router';
import { TenantLoginComponent } from './tenant-login/tenant-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { TenantRegistrationComponent } from './tenant-registration/tenant-registration.component';
import { TenantPanelComponent } from './tenant-panel/tenant-panel.component';
import { UnauthGuard } from './_guards/unauth.guard';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';

export const ROUTES: Routes = [
    {
        path: "", 
        component: HomeLayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
          { path: "tenant-panel", component: TenantPanelComponent, canActivate: [AuthGuard]}

        ]
    },

    { path: 'register', component: TenantRegistrationComponent, canActivate: [UnauthGuard] },
    { path: 'login', component: TenantLoginComponent, canActivate: [UnauthGuard] },

    { 
        path: 'tenant/:tenant', 
        component: ClientLayoutComponent,
        children: [
            { path: 'login', component: ClientLoginComponent},
            { path: "client-panel", component: ClientPanelComponent, canActivate: [AuthGuard]},
            { path: '**', component: ClientLoginComponent },

        ]
    },
    { 
        path: "**", 
        redirectTo: "" 
    }
];