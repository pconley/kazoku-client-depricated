import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'kz-profile',
  templateUrl: "client/profile/profile.component.html"
})
export class ProfileComponent {

    constructor( private auth: AuthService ) {}

}