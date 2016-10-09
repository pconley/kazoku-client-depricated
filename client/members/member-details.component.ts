import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MemberService } from "./member.service";
import { IMember } from "./member";

@Component({
    selector: "kz-member-details",
    templateUrl: "client/members/member-details.component.html",
    styleUrls: [ "client/members/member-details.component.css" ],
    //directives: [StarComponent]
})
export class MemberDetailsComponent implements OnInit {

    current_id: number = 0;
    member: IMember = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MemberService) {}

    ngOnInit() {
        // (+) converts string 'id' to a number
        var that = this;
        this.current_id = +this.route.snapshot.params['id'];
        console.log("MemberDetailsComponent#onInit: id = "+this.current_id);
        this.service.getMembers(false)
            .subscribe(
                (data) => { 
                    console.log("*** loading. records = "+data.length);
                    var filtered = data.filter(function(x) { return x.id > that.current_id; });
                    this.member = filtered[0];
                 },
                (error: Error) => {
                    console.log("*** error: "+error.message);
                },
                () => { 
                    console.log("*** done");
                }
            );
    }
}
