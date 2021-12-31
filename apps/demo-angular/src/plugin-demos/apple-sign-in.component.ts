import { Component, NgZone } from '@angular/core';
import { DemoSharedAppleSignIn } from '@demo/shared';
import { } from '@nativescript/apple-sign-in';

@Component({
	selector: 'demo-apple-sign-in',
	templateUrl: 'apple-sign-in.component.html',
})
export class AppleSignInComponent {
  
  demoShared: DemoSharedAppleSignIn;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAppleSignIn();
  }

}