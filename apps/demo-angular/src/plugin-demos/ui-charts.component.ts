import { Component, NgZone } from '@angular/core';
import { DemoSharedUiCharts } from '@demo/shared';
import {} from '@nativescript/ui-charts';

@Component({
	selector: 'demo-ui-charts',
	templateUrl: 'ui-charts.component.html',
})
export class UiChartsComponent {
	demoShared: DemoSharedUiCharts;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedUiCharts();
	}
}
