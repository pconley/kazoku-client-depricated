import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from "angular2-jwt";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IMember } from './member';

@Injectable()
export class MemberService {

    private membersUrl = 'https://kazoku-server-2016.herokuapp.com/members.json'

    public membersCache: IMember[] = null;

    constructor(private _http: Http, private _auth: AuthHttp) {}

    getMembers(force: boolean): Observable<IMember[]> {
        // if we are not forcing a reload, and there are already
        // members stored in the members cache... then use cache
        if( !force && this.membersCache ){
            console.log("MemberService#getMembers: using cache data!");
            return Observable.of(this.membersCache);
        }
        // otherwise do the load from the server
        return this.loadPages();
    }

    // getMember(id: number): Observable<IMember> {
    //     return this.getMembers()
    //         .map((members: IMember[]) => members.find(p => p.id === id));
    // }

    loadPages(): Observable<IMember[]> {
        var page = 0;
        var that = this;
        that.membersCache =  [];
        console.log("MemberService#loadPages:");
        return Observable.create(observer => {
            function recursiveFunction() {
                that.loadPage(++page)
                    .subscribe(
                        members => { 
                            console.log("refresh: page "+page+" loaded "+members.length); 
                            // observers are shown loaded members
                            observer.next(members); 
                            // and we also accumulate a full copy in the cache
                            Array.prototype.push.apply(that.membersCache,members);
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
            recursiveFunction();
        });
    }
 
    loadPage(page: number): Observable<IMember[]> {
        var url = `${this.membersUrl}?page=${page}`;
        console.log("MemberService#loadPage: url="+url);
        return this._auth.get(url)
            .map((response: Response) => <IMember[]> response.json())
            //.do(data => { console.log("MemberService#loadPage: count = "+data.length); })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error("MemberService#handleError",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}