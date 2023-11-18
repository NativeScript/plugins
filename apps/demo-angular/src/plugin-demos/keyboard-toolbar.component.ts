import { Component, NgZone } from '@angular/core';
import { DemoSharedKeyboardToolbar } from '@demo/shared';
import {} from '@nativescript/keyboard-toolbar';

@Component({
	selector: 'demo-keyboard-toolbar',
	templateUrl: 'keyboard-toolbar.component.html',
})
export class KeyboardToolbarComponent {
	demoShared: DemoSharedKeyboardToolbar;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedKeyboardToolbar();
	}
}
