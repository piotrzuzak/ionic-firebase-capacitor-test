import { Component } from '@angular/core';

import { cfaSignIn, mapUserToUserInfo } from 'capacitor-firebase-auth';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  doGoogleLogin(): void {
      console.log('google login button clicked');
      try {
        cfaSignIn('google.com')
        .pipe(
          mapUserToUserInfo(),
        ).subscribe(
          (user: any) => {
            console.log(user.displayName);
            console.log('[subcribe-success] => google login end');
          },
          err => {
            console.log('[subcribe-success] => google login end: ' + err);
          }
        );
      } catch (exception) {
        console.log('Exception found: ' + exception);
      }
  }

}
