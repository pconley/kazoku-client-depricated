// import { Routes, RouterModule } from '@angular/router';

// import { MemberListComponent } from './member-list.component';
// import { MemberDetailsComponent } from './member-details.component';
// import { CanActivateViaAuthGuard } from '../service/auth.guard';

// export const routes: Routes = [
//     { path: 'members', component: MemberListComponent, pathMatch: "full", canActivate: [CanActivateViaAuthGuard]},
//     { path: 'member/:id', component: MemberDetailsComponent, pathMatch: "full", canActivate: [CanActivateViaAuthGuard] }
// ];

// export const routing = RouterModule.forChild(routes);


import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { MemberListComponent }    from './member-list.component';
import { MemberDetailsComponent }  from './member-details.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'members',  component: MemberListComponent },
      { path: 'member/:id', component: MemberDetailsComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MemberRoutingModule { }
