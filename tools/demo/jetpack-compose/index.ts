import { DemoSharedBase } from '../utils';
import { JetpackComposeEventData } from '@nativescript/jetpack-compose';
import { PropertyChangeData } from '@nativescript/core';

export class DemoSharedJetpackCompose extends DemoSharedBase {
	text = '';

	backgroundColor = 'white';

	phrases = ['Hello', 'World', 'This', 'Is', 'Jetpack', 'Compose', 'For', 'NativeScript'];

	setupCyclingText() {
		setInterval(() => {
			this.cycleText();
		}, 500);
		this.cycleText();
	}

	cycleText() {
		this.set('text', this.phrases[(this.phrases.indexOf(this.text) + 1) % this.phrases.length]);
	}

	onEvent(evt: JetpackComposeEventData<string>) {
		console.log('onEvent', evt.data);

		// if it's a color, change the background
		const colorRegex = /^([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})([A-F0-9]{2})$/;
		const matches = evt.data.match(colorRegex);
		if (matches) {
			const bgColor = `#${matches[2]}${matches[3]}${matches[4]}${matches[1]}`;
			this.set('backgroundColor', bgColor);
			this.set('text', bgColor);
		}
	}

	onTextChange(evt: PropertyChangeData) {
		console.log('textChange', evt.value);
		this.set('text', evt.value);
	}
}
