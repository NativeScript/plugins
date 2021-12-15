import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBiometrics } from '@demo/shared';
import {} from '@nativescript/biometrics';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBiometrics {}
