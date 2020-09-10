import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAutoFitText } from '@demo/shared';
import {} from '@nativescript/auto-fit-text';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAutoFitText {}
