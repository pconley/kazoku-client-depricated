import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { MemberListComponent } from "./member-list.component";
import { routing } from "./member.routing";

import { FormsModule } from '@angular/forms';

import { MemberFilterPipe } from "./member-filter.pipe";

//import { SharedModule } from "./shared/shared.module";
//import { ContactModule } from "../contact/contact.module";

@NgModule({
    imports: [
        CommonModule, FormsModule,
        HttpModule,
        routing,
        //SharedModule.forRoot(),
        //ContactModule,
        NgSemanticModule
    ],
    declarations: [ MemberListComponent, MemberFilterPipe ],
    bootstrap:    [ MemberListComponent ]
})
export class MemberModule { }