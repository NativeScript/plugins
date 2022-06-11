import { Component, NgZone } from '@angular/core';
import { DemoSharedMmkv } from '@demo/shared';
import {} from '@nativescript/mmkv';

@Component({
	selector: 'demo-mmkv',
	templateUrl: 'mmkv.component.html',
})
export class MmkvComponent {
	demoShared: DemoSharedMmkv;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMmkv();
	}
}
