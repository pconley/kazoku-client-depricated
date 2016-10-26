import { NgModule }         from '@angular/core';
import { CommonModule }     from "@angular/common";
import { NgSemanticModule } from "ng-semantic";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRouting }   from "./dashboard.routing";

@NgModule({
    imports: [ CommonModule, NgSemanticModule, DashboardRouting ],
    declarations: [ DashboardComponent ],
    bootstrap:    [ DashboardComponent ]
})
export class DashboardModule { }