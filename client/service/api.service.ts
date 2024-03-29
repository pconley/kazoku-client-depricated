import { Injectable } from "@angular/core";
import { AuthHttp } from "angular2-jwt";
import { Response } from "@angular/http";

@Injectable()
export class ApiService {

    constructor(private authHttp: AuthHttp) {}

    get(url: string) {
        console.log("ApiService#get url="+url);
        return this
            .authHttp
            .get(url)
            .map((response: Response) => response.json());
    }
}