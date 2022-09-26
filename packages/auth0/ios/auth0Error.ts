export const unknownError = 'a0.sdk.internal_error.unknown';
export const nonJSONError = 'a0.sdk.internal_error.plain';
export const emptyBodyError = 'a0.sdk.internal_error.empty';

/**
   Generic representation of Auth0 API errors
   - note: It's recommended to use either `AuthenticationError` or `ManagementError` for better error handling
 */
export class Auth0Error extends Error {
	public readonly info: { [key: string]: any };

	constructor(infoOrString: { [key: string]: any } | string | undefined = undefined, statusCode: number = 0) {
		if (typeof infoOrString === 'object') {
			const values = infoOrString;
			values['statusCode'] = statusCode;
			super(values['description'] || `Failed with unknown error ${JSON.stringify(values)}`);
			this.info = values;
		} else {
			const code = infoOrString != null ? nonJSONError : emptyBodyError;
			const description = infoOrString || 'Empty response body';
			super(description);
			this.info = {
				code: code,
				description: description,
				statusCode: statusCode,
			};
		}
		Object.setPrototypeOf(this, new.target.prototype);
	}

	/// The code of the error as a String
	public get code(): string {
		return this.info['code'] || unknownError;
	}
}
