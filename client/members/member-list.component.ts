import { Component, OnInit } from "@angular/core";
import { ApiService } from "../service/api.service";
import { MemberService } from "./member.service";
import { IMember } from "./member"
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';

@Component({
    selector: "kz-members",
    templateUrl: "client/members/member-list.component.html",
    styleUrls: [ "client/members/member-list.component.css" ],
    //directives: [StarComponent]
})
export class MemberListComponent implements OnInit {
    pageTitle: string = "Member List";
    error: string;
    loading: boolean = false;
    response: {};

    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = "";

    members: IMember[] = [];

    data: Observable<Array<number>>;
    finished: string = "no";


    values: Array<number> = [];
    status: string = 'Waiting...';

    constructor(private apiService: ApiService, private memberService: MemberService) {}
    
    refresh(){

        var page = 0;
        var that = this;
        this.status = "Loading...";
        this.loading = true;

        that.members = [];

        console.log("member-list#refresh");
        var loader = Observable.create(observer => {
            function recursiveFunction() {
                that.memberService.loadPage(++page,that.members)
                    .subscribe(
                        members => { 
                            console.log("refresh: page "+page+" loaded "+members.length); 
                            // observers are shown loaded members
                            observer.next(members); 
                            // stop with empty page or failsafe
                            if( members.length == 0 || page > 10 )
                                observer.complete();
                            else
                                recursiveFunction();
                        },
                        error => { 
                            // pass on the error message and stop the recusion at first error
                            console.log("MemberService#loadPages: load error = "+<any>error); 
                            observer.error(<any>error); 
                        }
                     );
            }
            recursiveFunction(); // start timed loop!
        });
        let observer = loader.subscribe(
            members => { 
                console.log("*** total members="+members.length); 
                this.values.push(members.length); 
            },
            error => {
                console.log("*** error raised.  msg = "+error);
                this.status = "error: "+error;
            },
            () => { 
                console.log("*** done");
                this.status = "Done";
            }
        );
    }

    ngOnInit(){}

    xprotected() {
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
