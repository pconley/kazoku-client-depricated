import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";

import { MemberListComponent } from "./member-list.component";
import { routing } from "./member.routing";
//import { SharedModule } from "./shared/shared.module";
//import { ContactModule } from "../contact/contact.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        routing,
        //SharedModule.forRoot(),
        //ContactModule,
        NgSemanticModule
    ],
    declarations: [ MemberListComponent ],
    bootstrap:    [ MemberListComponent ]
})
export class MemberModule { }