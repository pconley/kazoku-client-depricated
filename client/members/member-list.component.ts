import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { MemberService } from "./member.service";
import { IMember } from "./member.ts"
//import { FormsModule } from '@angular/forms';
//import { StarComponent } from '../shared/star.component';

@Component({
    selector: "kz-members",
    templateUrl: "client/members/member-list.component.html",
    styleUrls: [ "client/members/member-list.component.css" ],
    //directives: [StarComponent]
})
export class MemberListComponent implements OnInit {
    pageTitle: string = "Member List";
    error: string;
    response: {};

    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";

    members: IMember[];

    constructor(private apiService: ApiService, private memberService: MemberService) {}

    ngOnInit(){
        console.log("member-list#OnInit");
        //this.members = this.memberService.getMembers();

        this.memberService.getMembers()
            .subscribe(
                members => this.members = members,
                error =>  this.error = <any>error
            );
    }

    protected() {
        this.apiService
            .get("/api")
            .subscribe(
                (data) => { this.response = data; },
                (error: Error) => {
                    this.error = error.message;
                    setTimeout(() => this.error = null, 4000)
                });
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(msg : string){
        console.log('list#onRatingClicked '+msg);
    }

}
