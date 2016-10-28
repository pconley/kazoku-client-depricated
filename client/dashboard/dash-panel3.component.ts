import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'kz-dash-panel3',
  templateUrl: "client/dashboard/dash-panel3.component.html"
})
export class DashPanelThreeComponent implements OnInit {

    month: string = "error";
    days: any[] = [];
    birthdays: any[] = [];

    constructor( private dashboardService: DashboardService ) {}

    ngOnInit() { 
        console.log("DashPanelTwoComponent#init");

        var today = new Date();
        this.month = today.toLocaleString("en-us", { month: "long" });
        this.birthdays = this.dashboardService.getBirthdays(today.getMonth());

        this.days = this.getMonthDays(today);

        for( var d in this.days ){
            var day = this.days[d];
            day["name"] = this.getNames(this.birthdays,day["day"]);
        }
    }

    getNames(set,day){
        var names = "";
        for( var d in set ){
            var event = set[d];
            if( event["day"] == day ) names += event["name"] + " ";
        }
        return names;
    }

    getMonthDays(date: Date): any[]{

        var year = date.getFullYear();
        var month = date.getMonth();
        var the_first = new Date(year,month,1);
        // the month starts on a week day where
        // weekday >> 0 == Sunday; 1 == Monday, etc.
        var weekday: number = the_first.getDay();
        // so, the first week starts on this number
        var start_num = 1-weekday; // 0 >> 1; 1 >> 0
        var date = new Date(year,month,start_num);
        var days: any[] = [];
        var prev_num = 0, curr_num = 0;
        var ended = false;
        // build up the weeks until month ends
        // with a failsafe of no more than N weeks
        for(var w=0; w<7 && !ended; w++ ){
            for(var i=0; i<7; i++ ){
                curr_num = date.getDate();
                // month has ended if date drops off
                ended = ended || w>0 && curr_num<prev_num;
                days.push( {date: date, day: curr_num});
                prev_num = curr_num;
                date.setDate(curr_num+1);
            }
        }
        return days;
    }
}