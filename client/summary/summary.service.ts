import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from "angular2-jwt";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {

  ngOnInit() { console.log("*** SummaryService#init"); }

    private _url = 'https://kazoku-server-2016.herokuapp.com/summary.json'

    constructor(private _http: Http, private _auth: AuthHttp) {}
    
    get() : Observable<any> {
        return this._auth.get(this._url)
                   .map((resp: Response) => resp.json())
                   .do(data => console.log('summary: '+JSON.stringify(data)))
                   .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error("SummaryService#handleError",error);
        return Observable.throw(error.json().error || 'Server error');
    }
}