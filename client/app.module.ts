import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent } from './app.component';
import { AppRouting } from "./app.routing";

import { HomeModule }    from "./modules/home/home.module";
import { ErrorModule }   from "./error/error.module";
import { ContactModule } from "./modules/contact/contact.module";
import { MemberModule }  from "./members/member.module";
import { ProfileModule } from "./profile/profile.module";
import { DashboardModule } from "./dashboard/dashboard.module";

import { HelloComponent } from "./components/shared/hello.component";

import { CanActivateViaAuthGuard } from "./service/auth.guard"

import { AuthService } from "./service/auth.service"
import { EventService } from "./service/event.service"
import { MemberService } from "./members/member.service"
import { ProfileService } from "./profile/profile.service"
import { DashboardService } from "./dashboard/dashboard.service"

@NgModule({
    imports: [
        BrowserModule, HttpModule, NgSemanticModule,
        ContactModule, MemberModule, ErrorModule, ProfileModule,
        DashboardModule,
        HomeModule, AppRouting
    ],
    providers: [
        ProfileService, MemberService, EventService, AuthService,
        DashboardService,
        CanActivateViaAuthGuard,
        provideAuth({
            globalHeaders: [{"Content-type": "application/json"}],
            newJwtError: true,
            noTokenScheme: true
        })
    ],
    declarations: [ HelloComponent, AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
      //constructor(public auth: Auth) {}
}