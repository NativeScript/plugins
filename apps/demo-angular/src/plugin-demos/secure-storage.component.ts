import { Component, NgZone } from '@angular/core';
import { DemoSharedSecureStorage } from '@demo/shared';
import {} from '@nativescript/secure-storage';

@Component({
	selector: 'demo-secure-storage',
	templateUrl: 'secure-storage.component.html',
})
export class SecureStorageComponent {
	demoShared: DemoSharedSecureStorage;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSecureStorage();
	}
}
