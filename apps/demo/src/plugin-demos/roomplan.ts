import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedRoomplan } from '@demo/shared';
import {} from '@nativescript/roomplan';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedRoomplan {}
