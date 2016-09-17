import { NgModule }         from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule }     from "@angular/common";
import { ErrorComponent }   from "./error.component";
import { ErrorRouting }     from "./error.routing";

@NgModule({
    imports: [ CommonModule, ErrorRouting, NgSemanticModule ],
    declarations: [ ErrorComponent ],
    bootstrap:    [ ErrorComponent ]
})
export class ErrorModule { }