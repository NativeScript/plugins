import Activity = android.app.Activity;
import Context = android.content.Context;
import Intent = android.content.Intent;
import PackageManager = android.content.pm.PackageManager;
import Uri = android.net.Uri;
import Log = android.util.Log;

import { OAuthManager } from './oauthManager';
import { ResponseType } from './responseType';
import { FlagChecker } from './flagChecker';
import { CallbackHelper } from './callbackHelper';
import { Auth0 } from '../auth0';
import { PKCE } from './pkce';
import { CustomTabsOptions } from './customTabsOptions';
import { AuthCallback } from './authCallback';
import { AuthenticationException } from '../authentication/authenticationException';
import { AuthorizeResult } from './authorizeResult';

/**
 * OAuth2 Web Authentication Provider.
 * It can use an external browser by sending the {@link android.content.Intent#ACTION_VIEW} intent or also the {@link WebAuthActivity}.
 * This behaviour is changed using {@link WebAuthProvider.Builder#useBrowser(boolean)}, and defaults to use browser.
 */
export class WebAuthProvider {
	private static readonly TAG: string = 'WebAuthProvider';

	private static readonly KEY_AUDIENCE: string = 'audience';
	private static readonly KEY_SCOPE: string = 'scope';
	private static readonly KEY_CONNECTION_SCOPE: string = 'connection_scope';
	private static readonly SCOPE_TYPE_OPENID: string = 'openid';
	private static readonly RESPONSE_TYPE_TOKEN: string = 'token';

	private static managerInstance: OAuthManager;

	private readonly account: Auth0;
	private readonly values: { [key: string]: string };
	private pkce: PKCE;
	private scheme: string;
	private ctOptions: CustomTabsOptions;
	private redirectPrefix: string;

	/**
	 * Initialize the WebAuthProvider instance with an account. Additional settings can be configured,
	 * like setting the connection name or authentication parameters.
	 *
	 * @param account to use for authentication
	 * @return a new WebAuthProvider instance to customize.
	 */
	constructor(account: Auth0) {
		this.account = account;
		this.values = {};

		// Default values
		this.scheme = 'https';
		this.withResponseType(ResponseType.CODE);
		this.withScope(WebAuthProvider.SCOPE_TYPE_OPENID);
	}

	/**
	 * Use a custom state in the requests
	 *
	 * @param state to use in the requests
	 * @return the current builder instance
	 */
	public withState(state: string): WebAuthProvider {
		this.values[OAuthManager.KEY_STATE] = state;
		return this;
	}

	/**
	 * Specify a custom nonce value to avoid replay attacks. It will be sent in the auth request that will be returned back as a claim in the id_token
	 *
	 * @param nonce to use in the requests
	 * @return the current builder instance
	 */
	public withNonce(nonce: string): WebAuthProvider {
		this.values[OAuthManager.KEY_NONCE] = nonce;
		return this;
	}

	/**
	 * Use a custom audience in the requests
	 *
	 * @param audience to use in the requests
	 * @return the current builder instance
	 */
	public withAudience(audience: string): WebAuthProvider {
		this.values[WebAuthProvider.KEY_AUDIENCE] = audience;
		return this;
	}

	/**
	 * Specify a custom Scheme to use on the Callback Uri. Default scheme is 'https'.
	 *
	 * @param scheme to use in the Callback Uri.
	 * @return the current builder instance
	 */
	public withScheme(scheme: string): WebAuthProvider {
		const lowerCase = scheme.toLowerCase();
		if (scheme !== lowerCase) {
			Log.w(WebAuthProvider.TAG, "Please provide the scheme in lowercase and make sure it's the same configured in the intent filter. Android expects the scheme in lowercase");
		}
		this.scheme = scheme;
		return this;
	}

	/**
	 * Give a scope for this request.
	 *
	 * @param scope to request.
	 * @return the current builder instance
	 */
	public withScope(scope: string): WebAuthProvider {
		this.values[WebAuthProvider.KEY_SCOPE] = scope;
		return this;
	}

	/**
	 * Give a connection scope for this request.
	 *
	 * @param connectionScope to request.
	 * @return the current builder instance
	 */
	public withConnectionScope(...connectionScope: string[]): WebAuthProvider {
		const concatScope = connectionScope.map((x) => x.trim()).join(' ');
		if (concatScope.length > 0) {
			this.values[WebAuthProvider.KEY_CONNECTION_SCOPE] = concatScope;
		}
		return this;
	}

	/**
	 * Choose the grant type for this request.
	 *
	 * @param type the ResponseType to request to the Authentication API. Multiple ResponseType's can be defined using a pipe. "CODE | TOKEN"
	 * @return the current builder instance
	 */
	public withResponseType(type: ResponseType): WebAuthProvider {
		let sb = '';
		if (FlagChecker.hasFlag(type, ResponseType.CODE)) {
			sb += `${OAuthManager.RESPONSE_TYPE_CODE} `;
		}
		if (FlagChecker.hasFlag(type, ResponseType.ID_TOKEN)) {
			sb += `${OAuthManager.RESPONSE_TYPE_ID_TOKEN} `;
		}
		if (FlagChecker.hasFlag(type, ResponseType.TOKEN)) {
			sb += `${WebAuthProvider.RESPONSE_TYPE_TOKEN}`;
		}
		this.values[OAuthManager.KEY_RESPONSE_TYPE] = sb.trim();
		return this;
	}

	/**
	 * Use extra parameters on the request.
	 *
	 * @param parameters to add
	 * @return the current builder instance
	 */
	public withParameters(parameters: { [key: string]: string }): WebAuthProvider {
		for (const key in parameters) {
			const value = parameters[key];
			if (value != null) {
				this.values[key] = value.toString();
			}
		}
		return this;
	}

	public withRedirectPrefix(prefix: string) {
		this.redirectPrefix = prefix;
	}

	/**
	 * Use the given connection. By default no connection is specified, so the login page will be displayed.
	 *
	 * @param connectionName to use
	 * @return the current builder instance
	 */
	public withConnection(connectionName: string): WebAuthProvider {
		this.values[OAuthManager.KEY_CONNECTION] = connectionName;
		return this;
	}

	/**
	 * When using a Custom Tabs compatible Browser, apply this customization options.
	 *
	 * @param options the Custom Tabs customization options
	 * @return the current builder instance
	 */
	public withCustomTabsOptions(options: CustomTabsOptions): WebAuthProvider {
		this.ctOptions = options;
		return this;
	}

	public withPKCE(pkce: PKCE): WebAuthProvider {
		this.pkce = pkce;
		return this;
	}

	// @VisibleForTesting
	public static hasBrowserAppInstalled(packageManager: PackageManager): boolean {
		const intent: Intent = new Intent(Intent.ACTION_VIEW, Uri.parse('https://auth0.com'));
		return intent.resolveActivity(packageManager) != null;
	}

	/**
	 * Request user Authentication. The result will be received in the callback.
	 *
	 * @param activity context to run the authentication
	 * @param callback to receive the parsed results
	 */
	public start(activity: Activity, callback: AuthCallback) {
		WebAuthProvider.managerInstance = null;
		if (this.account.getAuthorizeUrl() == null) {
			const ex = new AuthenticationException(
				{
					code: 'a0.invalid_authorize_url',
					description: 'Auth0 authorize URL not properly set. This can be related to an invalid domain.',
				},
				0
			);
			callback.onFailure(ex);
			return;
		}

		if (!WebAuthProvider.hasBrowserAppInstalled(activity.getPackageManager())) {
			const ex = new AuthenticationException(
				{
					code: 'a0.browser_not_available',
					description: 'No Browser application installed to perform web authentication.',
				},
				0
			);
			callback.onFailure(ex);
			return;
		}

		const manager: OAuthManager = new OAuthManager(this.account, callback, this.values);
		manager.setCustomTabsOptions(this.ctOptions);
		manager.setPKCE(this.pkce);

		WebAuthProvider.managerInstance = manager;

		const redirectUri = CallbackHelper.getCallbackUri(this.scheme, activity.getApplicationContext().getPackageName(), this.account.getDomainUrl());
		manager.startAuthorization(activity, `${this.redirectPrefix || ''}${redirectUri}`, 110);
	}

	// Public methods

	/**
	 * Finishes the authentication flow by passing the data received in the activity's onNewIntent() callback.
	 * The final authentication result will be delivered to the callback specified when calling start().
	 * <p>
	 * This is no longer required to be called, the authentication is handled internally as long as you've correctly setup the intent-filter.
	 *
	 * @param intent the data received on the onNewIntent() call
	 * @return true if a result was expected and has a valid format, or false if not.
	 */
	public static resume(intent: Intent): boolean {
		if (WebAuthProvider.managerInstance == null) {
			Log.w(WebAuthProvider.TAG, 'There is no previous instance of this provider.');
			return false;
		}
		const data = new AuthorizeResult(intent);
		const success = WebAuthProvider.managerInstance.resumeAuthorization(data);
		if (success) {
			WebAuthProvider.managerInstance = null;
		}
		return success;
	}

	// End Public methods

	public static getInstance(): OAuthManager {
		return WebAuthProvider.managerInstance;
	}

	public clearSession(federated: boolean, callback: (success: boolean) => void) {
		callback(true);
	}
}
