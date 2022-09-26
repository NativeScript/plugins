/**
 List of possible web-based authentication errors

 - NoBundleIdentifierFound:        Cannot get the App's Bundle Identifier to use for redirect_uri.
 - CannotDismissWebAuthController: When trying to dismiss WebAuth controller, no presenter controller could be found.
 - UserCancelled:                  User cancelled the web-based authentication, e.g. tapped the "Done" button in SFSafariViewController
 - PKCENotAllowed:                 PKCE for the supplied Auth0 ClientId was not allowed. You need to set the `Token Endpoint Authentication Method` to `None` in your Auth0 Dashboard
 - noNonceProvided:                A nonce value must be provided to use the response option of id_token
 - invalidIdTokenNonce:            Failed to match token nonce with request nonce
 - missingAccessToken:             access_token missing in response
 */
@NativeClass()
class WebAuthError extends Error {
	public static noBundleIdentifierFound = new WebAuthError('Failed to perform webAuth');
	public static cannotDismissWebAuthController = new WebAuthError('Failed to perform webAuth');
	public static userCancelled = new WebAuthError('User Cancelled Web Authentication');
	public static pkceNotAllowed(message: string): WebAuthError {
		return new WebAuthError(message);
	}
	public static noNonceProvided = new WebAuthError('A nonce value must be supplied when response_type includes id_token in order to prevent replay attacks');
	public static missingResponseParam = new WebAuthError('Failed to perform webAuth');
	public static invalidIdTokenNonce = new WebAuthError('Could not validate the id_token');
	public static missingAccessToken = new WebAuthError('Could not validate the token');

	static readonly genericFoundationCode = 1;
	static readonly cancelledFoundationCode = 0;

	public static readonly infoKey = 'com.auth0.webauth.error.info';
	public static readonly errorDomain: String = 'com.auth0.webauth';

	constructor(message: string) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);
	}

	public get errorCode(): number {
		if (this === WebAuthError.userCancelled) {
			return WebAuthError.cancelledFoundationCode;
		} else {
			return WebAuthError.genericFoundationCode;
		}
	}
}

export { WebAuthError };
