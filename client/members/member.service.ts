import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IMember } from './member';

@Injectable()
export class MemberService {
    private _memberUrl = 'data/products.json';

    constructor(private _http: Http) { }

    getMembers(): Observable<IMember[]> {
        console.log("MemberService#getMembers")
        return this._http.get(this._memberUrl)
            .map((response: Response) => <IMember[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getMember(id: number): Observable<IMember> {
        return this.getMembers()
            .map((members: IMember[]) => members.find(p => p.memberId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error("MemberService#handleError",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}