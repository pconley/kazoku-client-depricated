import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';

import { IMember } from './member';

@Injectable()
export class MemberService {
    private _xemberUrl = 'data/members.json';
    private _memberUrl = 'https://kazoku-server-2016.herokuapp.com/members.json'

    public _prevData: IMember[] = null;

    constructor(private _http: Http) { }

    getMembers(): Observable<IMember[]> {
        if( this._prevData ){
            console.log("MemberService#getMembers: using saved data!");
            return Observable.of(this._prevData);
        }
        console.log("MemberService#getMembers")
        return this._http.get(this._memberUrl)
            .map((response: Response) => <IMember[]> response.json())
            //.do(data => console.log('All: ' +  JSON.stringify(data)))
            .do(data => {
                console.log("MemberService#getMembers: saving data!");
                this._prevData = data;
            })
            .catch(this.handleError);
    }

    getMember(id: number): Observable<IMember> {
        return this.getMembers()
            .map((members: IMember[]) => members.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error("MemberService#handleError",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}