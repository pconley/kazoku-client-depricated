import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/do'
// import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    constructor() {}

    getBirthdays(month: number){
        return [
            {name: "mj", month: month-1, day: 29, date: new Date(2016,10,1)},
            {name: "pat", month: month, day: 1, date: new Date(2016,10,1)},
            {name: "mike", month: month, day: 3, date: new Date(2016,10,3)},
            {name: "tim", month: month, day: 5,  date: new Date(2016,10,5)},
            {name: "claire", month: month, day: 3, date: new Date(2016,10,3)},
            {name: "elaine", month: month, day: 20, date: new Date(2016,10,13)},
            {name: "ted", month: month+1, day: 1, date: new Date(2016,10,13)}
        ];
    }

    // load_profile(){
    //     // the profile was saved to local storage (along with the
    //     // token_id) at the time the user logged into the system
    //     var json = localStorage.getItem('profile');
    //     //console.log("ProfileService#OnInit: json = "+json); 
    //     var profile = JSON.parse(json);
    //     profile.create_year = profile.created_at.substring(0, 4);
    //     console.log("ProfileService#OnInit: profile...",profile); 
    //     return profile;
    // }
}