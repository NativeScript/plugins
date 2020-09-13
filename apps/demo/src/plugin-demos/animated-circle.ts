import { DemoSharedAnimatedCircle } from '@demo/shared';
import { EventData, Page } from '@nativescript/core';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedAnimatedCircle {
	private _progress: number = 0;

	constructor() {
		super();
		setInterval(() => {
			console.log(this.progress, this._progress);
			if (this.progress === 100) {
				this.progress = 0;
			}
			this.progress++;
		}, 100);
	}

	set progress(value: number) {
		if (this._progress !== value) {
			this._progress = value;
			this.notifyPropertyChange('progress', value);
		}
	}

	get progress() {
		return this._progress;
	}
}
