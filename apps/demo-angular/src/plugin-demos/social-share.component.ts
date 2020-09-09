import { Component, NgZone } from '@angular/core';
import { DemoSharedSocialShare } from '@demo/shared';
import {} from '@nativescript/social-share';

@Component({
	selector: 'demo-social-share',
	templateUrl: 'social-share.component.html',
})
export class SocialShareComponent {
	demoShared: DemoSharedSocialShare;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSocialShare();
	}
}
