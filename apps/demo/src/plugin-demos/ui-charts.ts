import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedUiCharts } from '@demo/shared';
import {} from '@nativescript/ui-charts';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedUiCharts {}
