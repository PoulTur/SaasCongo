import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TenantLoginComponent } from './tenant-login/tenant-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';

export const ROUTES: Routes = [
    { 
        path: "", 
        component: HomeComponent
    },
    { 
        path: 'tenant/:tenant', 
        children: [
            { path: 'login', component: ClientLoginComponent},
            { path: '**', component: ClientLoginComponent } // todo - unauth guard
        ]
    },
    {
        path: "login",
        component: TenantLoginComponent
    },
    { 
        path: "**", 
        redirectTo: "" 
    }
];