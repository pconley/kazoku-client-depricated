import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

    constructor() {}

    load_profile(){
        // the profile was saved to local storage (along with the
        // token_id) at the time the user logged into the system
        var json = localStorage.getItem('profile');
        //console.log("ProfileService#OnInit: json = "+json); 
        var profile = JSON.parse(json);
        profile.create_year = profile.created_at.substring(0, 4);
        console.log("ProfileService#OnInit: profile...",profile); 
        return profile;
    }
}