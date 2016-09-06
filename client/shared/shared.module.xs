import { NgModule } from '@angular/core';
// import { HttpModule } from "@angular/http";
// import { NgSemanticModule } from "ng-semantic";
// import { CommonModule } from "@angular/common";

// import { MemberListComponent } from "./member-list.component";
// import { routing } from "./member.routing";

// // the turorial showed this in the app component, but
// // i could only get ngModel to work after puttting here
// // note that it is also imported below
// import { FormsModule } from '@angular/forms';

// import { MemberFilterPipe } from "./member-filter.pipe";

//import { SharedModule } from "./shared/shared.module";
//import { ContactModule } from "../contact/contact.module";

import { StarComponent } from './star.component';

@NgModule({
    imports: [
        // CommonModule, FormsModule,
        // HttpModule,
        // routing,
        // //SharedModule.forRoot(),
        // //ContactModule,
        // NgSemanticModule
    ],
    declarations: [ StarComponent ],
    bootstrap:    [ StarComponent ]
})
export class SharedModule { }