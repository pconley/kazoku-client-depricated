import { Component, ViewChild } from "@angular/core";
// import { Http, Headers, RequestOptions, Response } from "@angular/http";
// import { SemanticPopupComponent } from "ng-semantic";
// import "rxjs/add/operator/map";

import { AuthService } from './service/auth.service';
import { SummaryService } from './summary/summary.service';
import { CanActivateViaAuthGuard } from './service/auth.guard';

@Component({
    selector: "app",
    templateUrl: "client/app.component.html",
    providers: [ AuthService, CanActivateViaAuthGuard, SummaryService ]
})
export class AppComponent {
 
    constructor(
        private auth: AuthService, 
        private summaryService: SummaryService
    ) {
        // note that auth.authenticated() is used in the main view
        // so auth needs to be imported here

        // wake up the rails app on heroku even if the call fails
        // which will happen if not yet authentecated through auth0
        // console.log('wake up rails app!!')
        // var getter = summaryService.get(); 
        // getter.subscribe(
        //     value => { 
        //         console.log("*** value="+value); 
        //     },
        //     error => {
        //         console.log("*** error raised.  msg = "+error);
        //     },
        //     () => { 
        //         console.log("*** done");
        //     }
        // );

    }
}