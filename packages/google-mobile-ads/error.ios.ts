export class MobileAdsError extends Error {
	_native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new MobileAdsError(message || native?.localizedDescription);
		error._native = native;
		return error;
	}

	get native() {
		return this._native;
	}

	intoNative() {
		if (!this._native) {
			const exception = NSException.exceptionWithNameReasonUserInfo(NSGenericException, this.message, null);
			const info = {};
			info['ExceptionName'] = exception.name;
			info['ExceptionReason'] = exception.reason;
			info['ExceptionCallStackReturnAddresses'] = exception.callStackReturnAddresses;
			info['ExceptionCallStackSymbols'] = exception.callStackSymbols;
			info['ExceptionUserInfo'] = exception.userInfo;
			const error = NSError.alloc().initWithDomainCodeUserInfo('NativeScript', 1000, info as any);
			return error;
		}
		return this._native;
	}
}
