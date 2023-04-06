import { Component, NgZone } from '@angular/core';
import { DemoSharedMmkvMetal } from '@demo/shared';
import {} from '@nativescript/mmkv-metal';

@Component({
	selector: 'demo-mmkv-metal',
	templateUrl: 'mmkv-metal.component.html',
})
export class MmkvMetalComponent {
	demoShared: DemoSharedMmkvMetal;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMmkvMetal();
	}
}
