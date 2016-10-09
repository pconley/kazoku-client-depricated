import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { MemberRoutingModule } from './member.routing';
import { MemberListComponent } from "./member-list.component";
import { MemberDetailsComponent } from "./member-details.component";

import { StarComponent } from "../shared/star.component";

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
        //SharedModule.forRoot(),
        //ContactModule,
        NgSemanticModule,
        MemberRoutingModule
    ],
    providers: [ CanActivateViaAuthGuard ],
    declarations: [ 
        MemberListComponent, MemberDetailsComponent, 
        MemberFilterPipe, TitleCasePipe, 
        StarComponent 
    ],
    bootstrap: [ MemberListComponent ]
})

export class MemberModule { }
