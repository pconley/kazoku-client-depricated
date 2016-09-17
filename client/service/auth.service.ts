import { Injectable } from '@angular/core';

import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any; // Avoid name not found warnings

// var AUTH0_CLIENT_ID='6VtNWmSNXVxLDCxiDQaE6xGbBAbs4Nkk'; 
// var AUTH0_DOMAIN='kazoku.auth0.com'; 
// var AUTH0_CALLBACK_URL=location.href;

@Injectable()
export class Auth {

  // Configure Auth0 
  lock = new Auth0Lock('6VtNWmSNXVxLDCxiDQaE6xGbBAbs4Nkk', 'kazoku.auth0.com', {});

  //Store profile object in auth class
  userProfile: Object;

  constructor() {

    console.log('auth.service#constructor...',location.href);

    var parser = document.createElement('a');
    parser.href = location.href;
    // the parser.hash will look like this...
    // #access_token=SG90NTdx8UsxQqW9&id_token=QF1objpQm6E&token_type=Bearer
    var regex = new RegExp("#access_token=(.*)&id_token=(.*)&token_type=Bearer", "g");
    var parts = regex.exec(parser.hash);
    if( parts && parts[2] ){
      //console.log("parts...",parts);

      // DO THE ACTION THAT WAS MEANT TO HAPPEN IN THE AUTHENTICATED

      // store the id to indicate the login state
      localStorage.setItem('id_token', parts[2]);

      // Fetch profile information
      this.lock.getProfile(parts[2], (error, profile) => {
        if (error) { alert(error); return; }

        localStorage.setItem('profile', JSON.stringify(profile));
        //console.log("profile...",profile);
        this.userProfile = profile;
      });
    }

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      // THIS CALLBACK IS NOT GETTING FIRED FOR SOME REASON
      console.log('authenticated event. authResult...',authResult);
      localStorage.setItem('id_token', authResult.idToken);
    });
  }

  public login() {
    console.log('login');
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    var x = tokenNotExpired();
    //console.log('authenticated? '+x);

    return x;
  };

  public logout() {
    console.log('logout');
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}