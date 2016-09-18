import { Component, ViewChild } from "@angular/core";
// import { Http, Headers, RequestOptions, Response } from "@angular/http";
// import { SemanticPopupComponent } from "ng-semantic";
// import "rxjs/add/operator/map";

import { AuthService } from './service/auth.service';
import { CanActivateViaAuthGuard } from './service/auth.guard';

@Component({
    selector: "app",
    templateUrl: "client/app.component.html",
    providers: [ AuthService, CanActivateViaAuthGuard ]
})
export class AppComponent {
 
    constructor(private auth: AuthService) {
        // note that auth.authenticated() is used in the main view
        // so auth needs to be imported here
    }
}