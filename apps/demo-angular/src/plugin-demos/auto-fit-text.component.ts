import { Component, NgZone } from '@angular/core';
import { DemoSharedAutoFitText } from '@demo/shared';
import { } from '@nativescript/auto-fit-text';

@Component({
	selector: 'demo-auto-fit-text',
	templateUrl: 'auto-fit-text.component.html',
})
export class AutoFitTextComponent {
	demoShared: DemoSharedAutoFitText;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedAutoFitText();
	}
}
