import { Component, NgZone } from '@angular/core';
import { DemoSharedFacebook } from '@demo/shared';
import { } from '@nativescript/facebook';

@Component({
	selector: 'demo-facebook',
	templateUrl: 'facebook.component.html',
})
export class FacebookComponent {
  
  demoShared: DemoSharedFacebook;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedFacebook();
  }

}