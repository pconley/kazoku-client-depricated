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

  ngOnInit() { console.log("*** init"); }

    private _memberUrl = 'https://kazoku-server-2016.herokuapp.com/members.json'

    public _prevData: IMember[] = [];

    constructor(private _http: Http, private _auth: AuthHttp) {}
   
    xetMembersSummary() : Observable<IMember[]> {
        return this._http.get(this._memberUrl)
                   .map((resp: Response) => resp.json())
                   .catch(this.handleError);
    }

    xetMembers(page: number): Observable<IMember[]> {
        // if( this._prevData ){
        //     console.log("MemberService#getMembers: using saved data!");
        //     return Observable.of(this._prevData);
        // }
        console.log("MemberService#getMembers")
        return this.loadPage(page, this._prevData);
     }

    loadPage(page: number, members: IMember[]): Observable<IMember[]> {
        var url = `${this._memberUrl}?page=${page}`;
        console.log("MemberService#loadPage: url="+url);
        return this._auth.get(url)
            .map((response: Response) => <IMember[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .do(data => {
                console.log("MemberService#loadPage: count = "+data.length);
                if( members )
                    // then add the data to the existing list
                    Array.prototype.push.apply(members,data);
                else
                    // set the list to be this set of data
                    members = data;
            })
            .catch(this.handleError);
    }

    // getMember(id: number): Observable<IMember> {
    //     return this.getMembers()
    //         .map((members: IMember[]) => members.find(p => p.id === id));
    // }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error("MemberService#handleError",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}