import { Routes, RouterModule } from '@angular/router';
import { TenantLoginComponent } from './tenant-login/tenant-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { TenantRegistrationComponent } from './tenant-registration/tenant-registration.component';
import { TenantPanelComponent } from './tenant-panel/tenant-panel.component';
import { UnauthGuard } from './_guards/unauth.guard';
import { TenantHomeComponent } from './tenant-home/tenant-home.component';
import { AuthGuard } from './_guards/auth.guard';
import { TenantLayoutComponent } from './tenant-layout/tenant-layout.component';
import { ClientLayoutComponent } from './client-layout/client-layout.component';
import { ClientPanelComponent } from './client-panel/client-panel.component';
import { Role } from './_entities/role';

export const ROUTES: Routes = [
    {
        path: "", 
        component: TenantLayoutComponent,
        children: [
          { path: "", component: TenantHomeComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
          { path: "tenant-panel", component: TenantPanelComponent, canActivate: [AuthGuard], data: { roles: [Role.Tenant]}}
        ]
    },

    { path: 'register', component: TenantRegistrationComponent, canActivate: [UnauthGuard] },
    { path: 'login', component: TenantLoginComponent, canActivate: [UnauthGuard] },

    { 
        path: 'client/:client', 
        component: ClientLayoutComponent,
        children: [
            { path: 'login', component: ClientLoginComponent, canActivate: [UnauthGuard]},
            { path: "client-panel", component: ClientPanelComponent, canActivate: [AuthGuard], data: { roles: [Role.Client]}},
            { path: '**', component: ClientLoginComponent, canActivate: [UnauthGuard] },

        ]
    },
    { 
        path: "**", 
        redirectTo: "" 
    }
];