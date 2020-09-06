import { Component, NgZone } from '@angular/core';
import {} from '@nativescript/camera';

@Component({
	selector: 'demo-camera',
	templateUrl: 'camera.component.html',
})
export class CameraComponent {
	constructor(private _ngZone: NgZone) {}

	testIt() {
		console.log('test your plugin!');
	}
}
