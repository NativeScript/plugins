import { Component, NgZone } from '@angular/core';
import { DemoSharedBiometrics } from '@demo/shared';
import {} from '@nativescript/biometrics';

@Component({
	selector: 'demo-biometrics',
	templateUrl: 'biometrics.component.html',
})
export class BiometricsComponent {
	demoShared: DemoSharedBiometrics;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedBiometrics();
	}
}
