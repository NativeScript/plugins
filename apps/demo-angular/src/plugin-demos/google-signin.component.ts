import { Component, NgZone } from '@angular/core';
import { DemoSharedGoogleSignin } from '@demo/shared';
import { } from '@nativescript/google-signin';

@Component({
	selector: 'demo-google-signin',
	templateUrl: 'google-signin.component.html',
})
export class GoogleSigninComponent {
  
  demoShared: DemoSharedGoogleSignin;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGoogleSignin();
  }

}