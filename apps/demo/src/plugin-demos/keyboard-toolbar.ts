import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedKeyboardToolbar } from '@demo/shared';
import {} from '@nativescript/keyboard-toolbar';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedKeyboardToolbar {}
