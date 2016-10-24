import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'kz-profile',
  templateUrl: "client/profile/profile.component.html"
})
export class ProfileComponent implements OnInit {

    profile: any = null;

    constructor( private profileService: ProfileService ) {}

    ngOnInit() { 
        this.profile = this.profile || this.profileService.load_profile();
    }

}