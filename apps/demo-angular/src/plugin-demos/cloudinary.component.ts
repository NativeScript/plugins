import { Component, NgZone } from '@angular/core';
import { DemoSharedCloudinary } from '@demo/shared';
// import {} from '@nativescript/cloudinary';

@Component({
	selector: 'demo-cloudinary',
	templateUrl: 'cloudinary.component.html',
})
export class CloudinaryComponent {
	demoShared: DemoSharedCloudinary;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedCloudinary();
	}
}
