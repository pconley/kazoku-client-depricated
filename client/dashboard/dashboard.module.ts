import { NgModule }         from '@angular/core';
import { CommonModule }     from "@angular/common";
import { NgSemanticModule } from "ng-semantic";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRouting }   from "./dashboard.routing";

import { DashPanelOneComponent } from "./dash-panel1.component";
import { DashPanelTwoComponent } from "./dash-panel2.component";
import { DashPanelThreeComponent } from "./dash-panel3.component";


@NgModule({
    imports: [ CommonModule, NgSemanticModule, DashboardRouting ],
    declarations: [ DashboardComponent, 
        DashPanelOneComponent, DashPanelTwoComponent, DashPanelThreeComponent 
    ],
    bootstrap:    [ DashboardComponent ]
})
export class DashboardModule { }