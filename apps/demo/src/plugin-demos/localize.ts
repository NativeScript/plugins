import { Observable, EventData, Page, Application } from '@nativescript/core';
import { DemoSharedLocalize } from '@demo/shared';
import { localize } from '@nativescript/localize';

Application.setResources({ L: localize });

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedLocalize {}
