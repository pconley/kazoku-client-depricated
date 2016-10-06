import { Component, OnInit } from "@angular/core";
//import { ApiService } from "../service/api.service";
import { MemberService } from "./member.service";
import { IMember } from "./member"
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

@Component({
    selector: "kz-members",
    templateUrl: "client/members/member-list.component.html",
    styleUrls: [ "client/members/member-list.component.css" ],
    //directives: [StarComponent]
})
export class MemberListComponent implements OnInit {
 
    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";

    count: number = 0;
    status: string = '';
    loading: boolean = false;
    members: IMember[] = [];

    constructor(private memberService: MemberService) {}

    ngOnInit(){ this.loader(false); }

    previousMember: IMember = null;
    onSelect(member: IMember): void {
        var same = this.previousMember == member;
        console.log(">>> selected same="+same,member);
        if( same ) member.selected = !member.selected;
        else { 
            member.selected = true;
            if( this.previousMember ) this.previousMember.selected = false;
        }
        this.previousMember = member;
    }

    refresh(){ this.loader(true); }

    loader(force: boolean){
        this.members = [];
        this.count = 0; 
        this.loading = true;
        this.status = "Loading";
        // NOTE: getMembers will use the cached results (if they exist)
        // unless we set the forced argument (passed in from above); also
        // getMembers might return all the data in one emit or over several
        this.memberService.getMembers(force)
            .subscribe(
                (data) => { 
                    console.log("*** loading. records = "+data.length);
                    Array.prototype.push.apply(this.members,data);
                    this.count = this.members.length;
                },
                (error: Error) => {
                    console.log("*** error");
                    this.count = 0;
                    this.members = [];
                    this.loading = false;
                    this.status = "Error: "+error.message;
                },
                () => { 
                    console.log("*** done");
                    this.loading = false;
                    this.status = "Done";
                }
            );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(msg : string){
        console.log('list#onRatingClicked '+msg);
    }

}
