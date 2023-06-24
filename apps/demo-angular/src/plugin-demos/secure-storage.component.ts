import { Component, NgZone } from '@angular/core';
import { DemoSharedSecureStorage } from '@demo/shared';

@Component({
	selector: 'demo-secure-storage',
	templateUrl: 'secure-storage.component.html',
	styleUrls: ['secure-storage.component.scss'],
})
export class SecureStorageComponent {
	demoShared: DemoSharedSecureStorage;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSecureStorage();
	}
}
