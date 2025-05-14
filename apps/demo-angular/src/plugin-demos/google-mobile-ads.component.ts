import { Component, NgZone } from '@angular/core';
import { DemoSharedGoogleMobileAds } from '@demo/shared';
import {} from '@nativescript/google-mobile-ads';

@Component({
	selector: 'demo-google-mobile-ads',
	templateUrl: 'google-mobile-ads.component.html',
})
export class GoogleMobileAdsComponent {
	demoShared: DemoSharedGoogleMobileAds;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedGoogleMobileAds();
	}
}
