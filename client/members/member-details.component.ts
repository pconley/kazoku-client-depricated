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

    member: IMember = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MemberService) {}
 
// ngOnInit() {
//   this.route.params.forEach((params: Params) => {
//      let id = +params['id']; // (+) converts string 'id' to a number
//      this.service.getMember(id).then(x => this.member = x);
//    });

    ngOnInit() {
        // (+) converts string 'id' to a number
        let id = +this.route.snapshot.params['id'];
        console.log("MemberDetailsComponent#onInit: id = "+id);
        this.service.getMembers(false)
            .subscribe(
                (data) => { 
                    console.log("*** loading. records = "+data.length);
                    this.member = data[0];
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
