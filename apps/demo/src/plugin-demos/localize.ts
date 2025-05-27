import { Observable, EventData, Page, Application } from '@nativescript/core';
import { DemoSharedLocalize } from '@demo/shared';
// Note: Uncomment the following line if you want to use the localize plugin
// Also add it to the apps/demo/package.json
// We keep this out by default since it's only one that uses hooks
// which we plan to move to esm build base in the future
// import { localize } from '@nativescript/localize';

// Application.setResources({ L: localize });

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedLocalize {}
