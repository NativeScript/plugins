import { Component, NgZone } from '@angular/core';
import { DemoSharedTwitter } from '@demo/shared';
import { } from '@nativescript/twitter';

@Component({
	selector: 'demo-twitter',
	templateUrl: 'twitter.component.html',
})
export class TwitterComponent {
  
  demoShared: DemoSharedTwitter;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTwitter();
  }

}