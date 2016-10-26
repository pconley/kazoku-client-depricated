import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CanActivateViaAuthGuard } from '../service/auth.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'dashboard',  component: DashboardComponent, canActivate: [CanActivateViaAuthGuard] }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRouting { }
