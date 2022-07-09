import { Component, NgZone } from '@angular/core';
import { DemoSharedFlutter } from '@demo/shared';
import {} from '@nativescript/flutter';

@Component({
	selector: 'demo-flutter',
	templateUrl: 'flutter.component.html',
})
export class FlutterComponent {
	demoShared: DemoSharedFlutter;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedFlutter();
	}
}
