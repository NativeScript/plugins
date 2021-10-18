import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedThemeSwitcher } from '@demo/shared';
import {} from '@nativescript/theme-switcher';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedThemeSwitcher {}
