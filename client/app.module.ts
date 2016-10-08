import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";

import { AppComponent }  from './app.component';
import { routing, APP_ROUTER_PROVIDERS } from "./routes";
import { HelloComponent } from "./components/shared/hello.component";
import { ContactModule } from "./modules/contact/contact.module";
import { HomeModule }    from "./modules/home/home.module";
import { ErrorModule }   from "./error/error.module";
import { MemberModule }  from "./members/member.module";
import { ProfileModule } from "./profile/profile.module";

import { CanActivateViaAuthGuard } from "./service/auth.guard"

import { AuthService } from "./service/auth.service"
import { MemberService } from "./members/member.service"
import { ProfileService } from "./profile/profile.service"

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        NgSemanticModule,
        ContactModule, MemberModule, ErrorModule, ProfileModule,
        HomeModule,
        routing
    ],
    providers: [
        ProfileService, MemberService, AuthService,
        CanActivateViaAuthGuard,
        APP_ROUTER_PROVIDERS,
        provideAuth({
            globalHeaders: [{"Content-type": "application/json"}],
            newJwtError: true,
            noTokenScheme: true
        })
    ],
    declarations: [ HelloComponent, AppComponent ],
    bootstrap:    [ AppComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { 

      //constructor(public auth: Auth) {}

}