import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { CanActivateViaAuthGuard } from '../service/auth.guard';

// export const routes: Routes = [
//     { path: 'profile', component: ProfileComponent, pathMatch: "full", canActivate: [CanActivateViaAuthGuard] }
// ];

// export const ProfileRouting = RouterModule.forChild(routes);

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'profile',  component: ProfileComponent, canActivate: [CanActivateViaAuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProfileRouting { }
