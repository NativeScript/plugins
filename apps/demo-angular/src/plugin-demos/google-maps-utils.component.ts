import { Component, NgZone } from '@angular/core';
import { DemoSharedGoogleMapsUtils } from '@demo/shared';
import { } from '@nativescript/google-maps-utils';

@Component({
	selector: 'demo-google-maps-utils',
	templateUrl: 'google-maps-utils.component.html',
})
export class GoogleMapsUtilsComponent {
  
  demoShared: DemoSharedGoogleMapsUtils;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGoogleMapsUtils();
  }

}