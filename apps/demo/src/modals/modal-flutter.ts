import { Observable, EventData, Page } from '@nativescript/core';
import { Flutter } from '@nativescript/flutter';

export function shownModally(args: EventData) {
	const page = <Page>args.object;
	const vm = new DemoModel();
	page.bindingContext = vm;
	Flutter.events.on('incrementCounter', (args: EventData & { data }) => {
		vm.set('data', args.data);
		console.log(args.data);
	});
}

export class DemoModel extends Observable {}
