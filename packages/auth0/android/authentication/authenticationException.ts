import TextUtils = android.text.TextUtils;
import Log = android.util.Log;

import { Auth0Exception } from '../auth0Exception';
import { PasswordStrengthErrorParser } from './passwordStrengthErrorParser';

export class AuthenticationException extends Auth0Exception {
	private static readonly ERROR_KEY: string = 'error';
	private static readonly CODE_KEY: string = 'code';
	private static readonly DESCRIPTION_KEY: string = 'description';
	private static readonly ERROR_DESCRIPTION_KEY: string = 'error_description';
	private static readonly NAME_KEY: string = 'name';

	private static readonly DEFAULT_MESSAGE: string = 'An error occurred when trying to authenticate with the server.';

	private static readonly ERROR_OIDC_ACCESS_TOKEN: string = 'OIDC conformant clients cannot use /oauth/access_token';
	private static readonly ERROR_OIDC_RO: string = 'OIDC conformant clients cannot use /oauth/ro';

	private code: string;
	private description: string;
	private statusCode: number;
	private values: { [key: string]: string };

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
		super(AuthenticationException.DEFAULT_MESSAGE);
		Object.setPrototypeOf(this, new.target.prototype);
		if (typeof infoOrString === 'object') {
			this.values = { ...infoOrString };

			const codeValue = (this.values[AuthenticationException.ERROR_KEY] != null ? this.values[AuthenticationException.ERROR_KEY] : this.values[AuthenticationException.CODE_KEY]) as string;
			this.code = codeValue != null ? codeValue : AuthenticationException.UNKNOWN_ERROR;
			if (this.values[AuthenticationException.DESCRIPTION_KEY] == null) {
				this.description = this.values[AuthenticationException.ERROR_DESCRIPTION_KEY] as string;
				this.warnIfOIDCError();
				return;
			}

			const description = this.values[AuthenticationException.DESCRIPTION_KEY];
			if (typeof description === 'string') {
				this.description = description as string;
			} else if (this.isPasswordNotStrongEnough()) {
				const pwStrengthParser = new PasswordStrengthErrorParser(description as { [key: string]: any });
				this.description = pwStrengthParser.getDescription();
			}
		} else {
			this.code = infoOrString != null ? AuthenticationException.NON_JSON_ERROR : AuthenticationException.EMPTY_BODY_ERROR;
			this.description = infoOrString != null ? infoOrString : AuthenticationException.EMPTY_RESPONSE_BODY_DESCRIPTION;
			this.statusCode = statusCode;
		}
	}

	private warnIfOIDCError() {
		if ('invalid_request' === this.getCode() && (AuthenticationException.ERROR_OIDC_ACCESS_TOKEN === this.getDescription() || AuthenticationException.ERROR_OIDC_RO === this.getDescription())) {
			Log.w('AuthenticationAPIClient', "Your Auth0 Application is configured as 'OIDC Conformant' but this instance it's not. To authenticate you will need to enable the flag by calling Auth0#setOIDCConformant(true) on the Auth0 instance you used in the setup.");
		}
	}

	/**
	 * Auth0 error code if the server returned one or an internal library code (e.g.: when the server could not be reached)
	 *
	 * @return the error code.
	 */
	public getCode(): string {
		return this.code != null ? this.code : AuthenticationException.UNKNOWN_ERROR;
	}

	/**
	 * Http Response status code. Can have value of 0 if not set.
	 *
	 * @return the status code.
	 */
	public getStatusCode(): number {
		return this.statusCode;
	}

	/**
	 * Description of the error.
	 * important: You should avoid displaying description to the user, it's meant for debugging only.
	 *
	 * @return the error description.
	 */
	public getDescription(): string {
		if (!TextUtils.isEmpty(this.description)) {
			return this.description;
		}
		if (AuthenticationException.UNKNOWN_ERROR === this.getCode()) {
			return `Received error with code ${this.getCode()}`;
		}
		return 'Failed with unknown error';
	}

	/**
	 * Returns a value from the error map, if any.
	 *
	 * @param key key of the value to return
	 * @return the value if found or null
	 */
	public getValue(key: string): any {
		if (this.values == null) {
			return null;
		}
		return this.values[key];
	}

	// When there is no Browser app installed to handle the web authentication
	public isBrowserAppNotAvailable(): boolean {
		return 'a0.browser_not_available' === this.code;
	}

	// When the Authorize URL is invalid
	public isInvalidAuthorizeURL(): boolean {
		return 'a0.invalid_authorize_url' === this.code;
	}

	// When a Social Provider Configuration is invalid
	public isInvalidConfiguration(): boolean {
		return 'a0.invalid_configuration' === this.code;
	}

	/// When MFA code is required to authenticate
	public isMultifactorRequired(): boolean {
		return 'mfa_required' === this.code || 'a0.mfa_required' === this.code;
	}

	/// When MFA is required and the user is not enrolled
	public isMultifactorEnrollRequired(): boolean {
		return 'a0.mfa_registration_required' === this.code || 'unsupported_challenge_type' === this.code;
	}

	/// When the MFA Token used on the login request is malformed or has expired
	public isMultifactorTokenInvalid(): boolean {
		return ('expired_token' === this.code && 'mfa_token is expired' === this.description) || ('invalid_grant' === this.code && 'Malformed mfa_token' === this.description);
	}

	/// When MFA code sent is invalid or expired
	public isMultifactorCodeInvalid(): boolean {
		return 'a0.mfa_invalid_code' === this.code || ('invalid_grant' === this.code && 'Invalid otp_code.' === this.description);
	}

	/// When password used for SignUp does not match connection's strength requirements.
	public isPasswordNotStrongEnough(): boolean {
		return 'invalid_password' === this.code && 'PasswordStrengthError' === this.values[AuthenticationException.NAME_KEY];
	}

	/// When password used for SignUp was already used before (Reported when password history feature is enabled).
	public isPasswordAlreadyUsed(): boolean {
		return 'invalid_password' === this.code && 'PasswordHistoryError' === this.values[AuthenticationException.NAME_KEY];
	}

	// When password used was reported to be leaked and a different one is required
	public isPasswordLeaked(): boolean {
		return 'password_leaked' === this.code;
	}

	/// When Auth0 rule returns an error. The message returned by the rule will be in `description`
	public isRuleError(): boolean {
		return 'unauthorized' === this.code;
	}

	/// When username and/or password used for authentication are invalid
	public isInvalidCredentials(): boolean {
		return 'invalid_user_password' === this.code || ('invalid_grant' === this.code && 'Wrong email or password.' === this.description);
	}

	/// When authenticating with web-based authentication and the resource server denied access per OAuth2 spec
	public isAccessDenied(): boolean {
		return 'access_denied' === this.code;
	}

	/// When authenticating with web-based authentication using prompt=none and the auth0 session had expired
	public isLoginRequired(): boolean {
		return 'login_required' === this.code;
	}
}
