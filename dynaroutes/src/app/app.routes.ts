import { Routes, RouterModule } from '@angular/router';
import { TenantLoginComponent } from './tenant-login/tenant-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { TenantRegistrationComponent } from './tenant-registration/tenant-registration.component';
import { TenantPanelComponent } from './tenant-panel/tenant-panel.component';
import { UnauthGuard } from './_guards/unauth.guard';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

export const ROUTES: Routes = [
    
    {
        path: "",
        component: HomeComponent
    },
    
    { 
        path: 'tenant/:tenant', 
        children: [
            { path: 'login', component: ClientLoginComponent},
            { path: '**', component: ClientLoginComponent }
        ]
    },
    {
        path: "login",
        component: TenantLoginComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: "register",
        component: TenantRegistrationComponent,
        canActivate: [UnauthGuard]
    },
    {
        path: "tenant-panel",
        component: TenantPanelComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: "**", 
        redirectTo: "" 
    }
];