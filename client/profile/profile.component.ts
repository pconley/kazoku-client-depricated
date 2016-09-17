import { Component } from '@angular/core';
import { Auth } from '../service/auth.service';

@Component({
  selector: 'kz-profile',
  templateUrl: "client/profile/profile.component.html",
  //providers: [Auth]
})
export class ProfileComponent {

    constructor(private auth: Auth) {}

}