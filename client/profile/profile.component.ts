import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'kz-profile',
  templateUrl: "client/profile/profile.component.html"
})
export class ProfileComponent {

    profile: any = null;

    constructor( private service: ProfileService ) {}

    ngOnInit() { 
        this.profile = this.profile || this.service.load_profile();
    }

}