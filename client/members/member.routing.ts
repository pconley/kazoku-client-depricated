import { Routes, RouterModule } from '@angular/router';

import { MemberListComponent } from './member-list.component';

export const routes: Routes = [
    { path: 'members', component: MemberListComponent, pathMatch: "full" }
];

export const routing = RouterModule.forChild(routes);