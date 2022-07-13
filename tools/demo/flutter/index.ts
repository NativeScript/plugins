import { DemoSharedBase } from '../utils';
import { Flutter } from '@nativescript/flutter';
import { CoreTypes, View } from '@nativescript/core';

export class DemoSharedFlutter extends DemoSharedBase {
	flutter: Flutter;
	testIt() {
		this._bounce().then(() => {
			this._bounce();
		});
	}

	private _bounce() {
		return new Promise<void>((resolve) => {
			this.flutter
				.animate({
					translate: { x: 0, y: 75 },
					duration: 500,
					curve: CoreTypes.AnimationCurve.easeInOut,
				})
				.then(() => {
					this.flutter
						.animate({
							translate: { x: 0, y: 0 },
							duration: 500,
							curve: CoreTypes.AnimationCurve.easeInOut,
						})
						.then(() => {
							resolve();
						});
				});
		});
	}
}
