import { Component, NgZone } from '@angular/core';
import { DemoSharedSwiftUi } from '@demo/shared';
import { registerElement } from '@nativescript/angular';
import { SwiftUI } from '@nativescript/swift-ui';

registerElement('SwiftUI', () => SwiftUI);

@Component({
	selector: 'demo-swift-ui',
	templateUrl: 'swift-ui.component.html',
})
export class SwiftUiComponent {
	demoShared: DemoSharedSwiftUi;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedSwiftUi();
	}
}
