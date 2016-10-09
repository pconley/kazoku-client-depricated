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

    active: boolean = true;
    submitted: boolean = true;
    current_id: number = 0;
    saved: IMember = null;
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
                    var filtered = data.filter(function(x) { return x.id == that.current_id; });
                    this.saved = this.member = filtered[0];
                 },
                (error: Error) => {
                    console.log("*** error: "+error.message);
                },
                () => { 
                    console.log("*** done");
                }
            );
    }

    onCancel(the_form) { 
        console.log("MemberDetailsComponent#cancel");
        this.member = this.saved;
        this.submitted = true; 
    }

    onSubmit(the_form) { 
        console.log("MemberDetailsComponent#submit: the form...",the_form);
        this.submitted = true; 
    }

    // newMember() {
    //     this.member = { id:0, key: "",
    //         first_name: "", last_name:"", 
    //         starRating: 0, selected: false, description: ""
    //     };
    //     this.resetPristine();
    //     this.submitted = false;
    // }

    resetPristine(){
        // reseting the visibility of the form via the
        // active attribute (see html) will cause the
        // pristine attribute to reset, so first set active
        this.active = false;
        // then reset after a heartbeat to show
        setTimeout(() => this.active = true, 0);
    }
}
