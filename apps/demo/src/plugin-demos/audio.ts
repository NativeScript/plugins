import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedAudio } from '@demo/shared';
import {} from '@nativescript/audio';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAudio {}
