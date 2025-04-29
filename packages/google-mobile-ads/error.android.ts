export class MobileAdsError extends Error {
	_native: java.lang.Exception;
	static fromNative(native: java.lang.Exception, message?: string) {
		const error = new MobileAdsError(message || native?.getMessage?.());
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			return new java.lang.Exception(this.message);
		}
		return this._native;
	}
}
