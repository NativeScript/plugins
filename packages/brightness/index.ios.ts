import { validateOptions } from './common';

export class Brightness {
	public getNative() {
		return UIScreen.mainScreen.brightness;
	}

	public get() {
		return Math.round(this.getNative() * 100);
	}

	public set(options) {
		validateOptions(options);
		UIScreen.mainScreen.brightness = options.intensity / 100;
	}
}
