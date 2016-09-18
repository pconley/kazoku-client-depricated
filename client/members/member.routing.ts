import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list.component';
import { CanActivateViaAuthGuard } from '../service/auth.guard';

export const routes: Routes = [
    { path: 'members', component: MemberListComponent, pathMatch: "full",
        //canActivate: ['CanActivateViaAuthGuard']
        canActivate: [CanActivateViaAuthGuard]
    }
];

export const routing = RouterModule.forChild(routes);