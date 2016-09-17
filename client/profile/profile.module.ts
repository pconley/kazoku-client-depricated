import { NgModule }         from '@angular/core';
import { NgSemanticModule } from "ng-semantic";
import { CommonModule }     from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileRouting }   from "./profile.routing";


@NgModule({
    imports: [ CommonModule, NgSemanticModule, ProfileRouting ],
    declarations: [ ProfileComponent ],
    bootstrap:    [ ProfileComponent ]
})
export class ProfileModule { }