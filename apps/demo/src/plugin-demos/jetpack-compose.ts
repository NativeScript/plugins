import { EventData, Page } from '@nativescript/core';
import { DemoSharedJetpackCompose } from '@demo/shared';
import { registerJetpackCompose, ComposeDataDriver } from '@nativescript/jetpack-compose';

declare var com;

/**
 * Comment/Uncomment various examples to try them out
 */
// const example = 'basic';
// registerJetpackCompose('jetpackCompose', (view) => new ComposeDataDriver(new com.example.BasicView(), view));
// const example = 'colorpicker';
// registerJetpackCompose('jetpackCompose', (view) => new ComposeDataDriver(new com.example.ColorPicker(), view));
const example = 'hearts';
registerJetpackCompose('jetpackCompose', (view) => new ComposeDataDriver(new com.example.FlyingHearts(), view));

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedJetpackCompose {
	activeExample = example;
}
