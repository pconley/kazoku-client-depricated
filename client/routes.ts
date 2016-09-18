import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component"

export const routes: Routes = [
    { path: '',  redirectTo: 'home', pathMatch: 'full' },
    { path: "access_token", redirectTo: 'profile' },
    { path: "**", redirectTo: 'error' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });

export const APP_ROUTER_PROVIDERS = [ provideRoutes(routes) ];
