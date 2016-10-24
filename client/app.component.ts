import { Component, OnInit, ViewChild } from "@angular/core";

import { AuthService } from './service/auth.service';
import { CanActivateViaAuthGuard } from './service/auth.guard';

@Component({
    selector: "app",
    templateUrl: "client/app.component.html",
    providers: [ AuthService, CanActivateViaAuthGuard ]
})
export class AppComponent implements OnInit {
 
    constructor( private auth: AuthService, ) {
        console.log("AppComponent#constructor");
    }

    ngOnInit(){ 
        // set up a global watcher of the authentication actions
        this.auth.login_observable.subscribe( x => { console.log(">>> watcher#login "+x); } )
    }
}