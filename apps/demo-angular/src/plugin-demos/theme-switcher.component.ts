import { Component, NgZone } from '@angular/core';
import { DemoSharedThemeSwitcher } from '@demo/shared';
import {} from '@nativescript/theme-switcher';

@Component({
	selector: 'demo-theme-switcher',
	templateUrl: 'theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
	demoShared: DemoSharedThemeSwitcher;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedThemeSwitcher();
	}
}
