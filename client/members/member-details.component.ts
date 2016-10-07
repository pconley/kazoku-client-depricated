import { Component, OnInit } from "@angular/core";
import { MemberService } from "./member.service";
import { IMember } from "./member"

@Component({
    selector: "kz-member-details",
    templateUrl: "client/members/member-details.component.html",
    styleUrls: [ "client/members/member-details.component.css" ],
    //directives: [StarComponent]
})
export class MemberDetailsComponent implements OnInit {
 
    constructor(private memberService: MemberService) {}

    ngOnInit(){  }
}
