import { Auth0Error } from './auth0Error';

/**
 *  Represents an error during a request to Auth0 Authentication API
 */
export class AuthenticationError extends Auth0Error {
	/**
     Creates a Auth0 Auth API error when the request's response is not JSON

     - parameter string:     string representation of the response (or null)
     - parameter statusCode: response status code

     - returns: a newly created AuthenticationError
     */
	constructor(_string?: string | undefined, statusCode?: number);

	/**
     Creates a Auth0 Auth API error from a JSON response

     - parameter info: JSON response from Auth0
     - parameter statusCode:    Http Status Code of the Response

     - returns: a newly created AuthenticationError
     */
	constructor(info: { [key: string]: any }, statusCode: number);

	constructor(infoOrString: { [key: string]: any } | string | undefined = undefined, statusCode: number = 0) {
		if (typeof infoOrString === 'object') {
			infoOrString['description'] = infoOrString['description'] || infoOrString['error_description'];
		}
		super(infoOrString, statusCode);
		Object.setPrototypeOf(this, new.target.prototype);
	}

	/// When MFA code is required to authenticate
	public get isMultifactorRequired(): boolean {
		return this.code === 'a0.mfa_required' || this.code === 'mfa_required';
	}

	/// When MFA is required and the user is not enrolled
	public get isMultifactorEnrollRequired(): boolean {
		return this.code === 'a0.mfa_registration_required' || this.code === 'unsupported_challenge_type';
	}

	/// When MFA code sent is invalid or expired
	public get isMultifactorCodeInvalid(): boolean {
		return this.code === 'a0.mfa_invalid_code' || (this.code === 'invalid_grant' && this.message === 'Invalid otp_code.');
	}

	/// When MFA code sent is invalid or expired
	public get isMultifactorTokenInvalid(): boolean {
		return (this.code === 'expired_token' && this.message === 'mfa_token is expired') || (this.code === 'invalid_grant' && this.message === 'Malformed mfa_token');
	}

	/// When password used for SignUp does not match connection's strength requirements. More info will be available in `info`
	public get isPasswordNotStrongEnough(): boolean {
		return this.code === 'invalid_password' && this.value('name') === 'PasswordStrengthError';
	}

	/// When password used for SignUp was already used before (Reported when password history feature is enabled). More info will be available in `info`
	public get isPasswordAlreadyUsed(): boolean {
		return this.code === 'invalid_password' && this.value('name') === 'PasswordHistoryError';
	}

	/// When Auth0 rule returns an error. The message returned by the rull will be in `description`
	public get isRuleError(): boolean {
		return this.code === 'unauthorized';
	}

	/// When username and/or password used for authentication are invalid
	public get isInvalidCredentials(): boolean {
		return this.code === 'invalid_user_password' || (this.code === 'invalid_grant' && this.message === 'Wrong email or password.');
	}

	/// When authenticating with web-based authentication and the resource server denied access per OAuth2 spec
	public get isAccessDenied(): boolean {
		return this.code === 'access_denied';
	}

	/// When you reached the maximum amount of request for the API
	public get isTooManyAttempts(): boolean {
		return this.code === 'too_many_attempts';
	}

	/**
     Returns a value from error `info` dictionary

     - parameter key: key of the value to return

     - returns: the value of key or null if cannot be found or is of the wrong type.
     */
	public value<T>(key: string): T | undefined {
		return this.info[key] as T;
	}
}
