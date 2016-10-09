import { Component } from '@angular/core';
import { IMember }    from './member';
@Component({
  selector: 'member-form',
  templateUrl: "client/members/member-form.component.html",
  styleUrls: [ "client/members/member-form.component.css" ]
})
export class MemberFormComponent {
    active: boolean = true;
    submitted: boolean = true;
    member: IMember = { id:33, key: "the key",
        first_name: "", last_name:"conley", 
        starRating: 3, selected: false, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    };
    onSubmit(the_form) { 
        console.log("MemberFormComponent#submit: the form...",the_form);
        this.submitted = true; 
    }
    newMember() {
        this.member = { id:99, key: "",
            first_name: "", last_name:"", 
            starRating: 0, selected: false, description: ""
        };
        this.resetPristine();
        this.submitted = false;
    }
    resetPristine(){
        // reseting the visibility of the form via the
        // active attribute (see html) will cause the
        // pristine attribute to reset, so first set active
        this.active = false;
        // then reset after a heartbeat to show
        setTimeout(() => this.active = true, 0);
    }
}