/**
 * Base Exception for any error found during a request to Auth0's API
 */
export class Auth0Exception extends Error {
	constructor(message?: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);
	}

	public static readonly UNKNOWN_ERROR: string = 'a0.sdk.internal_error.unknown';
	public static readonly NON_JSON_ERROR: string = 'a0.sdk.internal_error.plain';
	public static readonly EMPTY_BODY_ERROR: string = 'a0.sdk.internal_error.empty';
	public static readonly EMPTY_RESPONSE_BODY_DESCRIPTION: string = 'Empty response body';
}
