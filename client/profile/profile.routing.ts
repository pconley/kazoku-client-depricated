import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent, pathMatch: "full" }
];

export const ProfileRouting = RouterModule.forChild(routes);