import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { MemberListComponent } from "./member-list.component";
import { StarComponent } from "../shared/star.component";
import { routing } from "./member.routing";

// the turorial showed this in the app component, but
// i could only get ngModel to work after puttting here
// note that it is also imported below
import { FormsModule } from '@angular/forms';

import { MemberFilterPipe } from "./member-filter.pipe";
import { TitleCasePipe } from "../pipes/titlecase.pipe";
import { CanActivateViaAuthGuard } from '../service/auth.guard'

@NgModule({
    imports: [
        CommonModule, FormsModule,
        HttpModule,
        routing,
        //SharedModule.forRoot(),
        //ContactModule,
        NgSemanticModule
    ],
    providers: [ CanActivateViaAuthGuard
    //     //{ provide: 'AuthGuard', useValue: () => { return false; } }
    //     { provide: '',}
    ],
    declarations: [ MemberListComponent, MemberFilterPipe, TitleCasePipe, StarComponent ],
    bootstrap:    [ MemberListComponent ]
})
export class MemberModule { }
