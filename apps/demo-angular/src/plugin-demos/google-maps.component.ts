import { Component, NgZone } from '@angular/core';
import { DemoSharedGoogleMaps } from '@demo/shared';
import { } from '@nativescript/google-maps';

@Component({
	selector: 'demo-google-maps',
	templateUrl: 'google-maps.component.html',
})
export class GoogleMapsComponent {
  
  demoShared: DemoSharedGoogleMaps;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGoogleMaps();
  }

}