import Activity = android.app.Activity;
import Dialog = android.app.Dialog;
import Uri = android.net.Uri;
import TextUtils = android.text.TextUtils;
import Base64 = android.util.Base64;
import Log = android.util.Log;

import Claim = com.auth0.android.jwt.Claim;
import DecodeException = com.auth0.android.jwt.DecodeException;
import JWT = com.auth0.android.jwt.JWT;

import SecureRandom = java.security.SecureRandom;

import { CustomTabsOptions } from './customTabsOptions';
import { CallbackHelper } from './callbackHelper';
import { AuthenticationException } from '../authentication/authenticationException';
import { AuthCallback } from './authCallback';
import { AuthorizeResult } from './authorizeResult';
import { Credentials } from '../../common/credentials';
import { PKCE } from './pkce';
import { Auth0 } from '../auth0';
import { AuthenticationAPIClient } from '../authentication/authenticationAPIClient';
import { authenticateUsingBrowser } from './authenticationActivity';

export class OAuthManager {
	private static readonly TAG: string = 'OAuthManager';

	public static readonly KEY_RESPONSE_TYPE: string = 'response_type';
	public static readonly KEY_STATE: string = 'state';
	public static readonly KEY_NONCE: string = 'nonce';
	public static readonly KEY_CONNECTION: string = 'connection';
	public static readonly RESPONSE_TYPE_ID_TOKEN: string = 'id_token';
	public static readonly RESPONSE_TYPE_CODE: string = 'code';

	private static readonly ERROR_VALUE_ACCESS_DENIED: string = 'access_denied';
	private static readonly ERROR_VALUE_UNAUTHORIZED: string = 'unauthorized';
	private static readonly ERROR_VALUE_LOGIN_REQUIRED: string = 'login_required';
	private static readonly METHOD_SHA_256: string = 'S256';
	private static readonly KEY_CODE_CHALLENGE: string = 'code_challenge';
	private static readonly KEY_CODE_CHALLENGE_METHOD: string = 'code_challenge_method';
	private static readonly KEY_CLIENT_ID: string = 'client_id';
	private static readonly KEY_REDIRECT_URI: string = 'redirect_uri';
	private static readonly KEY_TELEMETRY: string = 'auth0Client';
	private static readonly KEY_ERROR: string = 'error';
	private static readonly KEY_ERROR_DESCRIPTION: string = 'error_description';
	private static readonly KEY_ID_TOKEN: string = 'id_token';
	private static readonly KEY_ACCESS_TOKEN: string = 'access_token';
	private static readonly KEY_TOKEN_TYPE: string = 'token_type';
	private static readonly KEY_REFRESH_TOKEN: string = 'refresh_token';
	private static readonly KEY_EXPIRES_IN: string = 'expires_in';
	private static readonly KEY_CODE: string = 'code';
	private static readonly KEY_SCOPE: string = 'scope';

	private readonly account: Auth0;
	private readonly callback: AuthCallback;
	private readonly parameters: { [key: string]: string };

	private requestCode: number;
	private pkce: PKCE;
	private currentTimeInMillis: number;
	private ctOptions: CustomTabsOptions;

	constructor(account: Auth0, callback: AuthCallback, parameters: { [key: string]: string }) {
		this.account = account;
		this.callback = callback;
		this.parameters = parameters;
	}

	public setCustomTabsOptions(options: CustomTabsOptions | undefined) {
		this.ctOptions = options;
	}

	public setPKCE(pkce: PKCE) {
		this.pkce = pkce;
	}

	public startAuthorization(activity: Activity, redirectUri: string, requestCode: number) {
		this.addPKCEParameters(this.parameters, redirectUri);
		this.addClientParameters(this.parameters, redirectUri);
		Log.d(OAuthManager.TAG, 'Added client parameters');
		this.addValidationParameters(this.parameters);
		Log.d(OAuthManager.TAG, 'Added validation parameters');
		const uri = this.buildAuthorizeUri();
		Log.d(OAuthManager.TAG, 'Built authorize uri');
		this.requestCode = requestCode;

		authenticateUsingBrowser(activity, uri, this.ctOptions);
	}

	public resumeAuthorization(data: AuthorizeResult): boolean {
		if (!data.isValid(this.requestCode)) {
			Log.w(OAuthManager.TAG, 'The Authorize Result is invalid.');
			this.callback.onFailure(
				new AuthenticationException(
					{
						code: 'a0.invalid_response',
						description: 'The received response is invalid. Try again.',
					},
					0
				)
			);
			return false;
		}

		const values: { [key: string]: string } = CallbackHelper.getValuesFromUri(data.getIntent().getData());
		if (Object.keys(values).length === 0) {
			Log.w(OAuthManager.TAG, "The response didn't contain any of these values: code, state, id_token, access_token, token_type, refresh_token");
			this.callback.onFailure(
				new AuthenticationException(
					{
						code: 'a0.invalid_response',
						description: 'The received response is invalid. Try again.',
					},
					0
				)
			);
			return false;
		}
		this.logDebug('The parsed CallbackURI contains the following values: ' + values);

		try {
			this.assertNoError(values[OAuthManager.KEY_ERROR], values[OAuthManager.KEY_ERROR_DESCRIPTION]);
			OAuthManager.assertValidState(this.parameters[OAuthManager.KEY_STATE], values[OAuthManager.KEY_STATE]);
			if (this.parameters[OAuthManager.KEY_RESPONSE_TYPE] != null && this.parameters[OAuthManager.KEY_RESPONSE_TYPE].includes(OAuthManager.RESPONSE_TYPE_ID_TOKEN)) {
				OAuthManager.assertValidNonce(this.parameters[OAuthManager.KEY_NONCE], values[OAuthManager.KEY_ID_TOKEN]);
			}

			Log.d(OAuthManager.TAG, 'Authenticated using web flow');
			const expiresAt: Date = values[OAuthManager.KEY_EXPIRES_IN] == null ? null : new Date(this.getCurrentTimeInMillis() + Number(values[OAuthManager.KEY_EXPIRES_IN]) * 1000);
			const urlCredentials: Credentials = new Credentials(values[OAuthManager.KEY_ACCESS_TOKEN], values[OAuthManager.KEY_TOKEN_TYPE], values[OAuthManager.KEY_ID_TOKEN], values[OAuthManager.KEY_REFRESH_TOKEN], undefined, expiresAt, values[OAuthManager.KEY_SCOPE]);
			if (!this.shouldUsePKCE()) {
				this.callback.onSuccess(urlCredentials);
			} else {
				// Finish Code Exchange
				this.pkce.getToken(values[OAuthManager.KEY_CODE], {
					onFailure: (...args) => {
						this.callback.onFailure(args[0]);
					},
					onSuccess: (codeCredentials: Credentials) => {
						this.callback.onSuccess(OAuthManager.mergeCredentials(urlCredentials, codeCredentials));
					},
				});
			}
		} catch (e) {
			if (e instanceof AuthenticationException) {
				this.callback.onFailure(e);
			} else {
				throw e;
			}
		}
		return true;
	}

	private getCurrentTimeInMillis(): number {
		return this.currentTimeInMillis != null ? this.currentTimeInMillis : Date.now();
	}

	public setCurrentTimeInMillis(currentTimeInMillis: number) {
		this.currentTimeInMillis = currentTimeInMillis;
	}

	/// Helper Methods

	private assertNoError(errorValue: string, errorDescription: string) {
		if (errorValue == null) {
			return;
		}
		Log.e(OAuthManager.TAG, 'Error, access denied. Check that the required Permissions are granted and that the Application has this Connection configured in Auth0 Dashboard.');
		if (OAuthManager.ERROR_VALUE_ACCESS_DENIED === errorValue) {
			throw new AuthenticationException(
				{
					code: OAuthManager.ERROR_VALUE_ACCESS_DENIED,
					description: 'Permissions were not granted. Try again.',
				},
				0
			);
		} else if (OAuthManager.ERROR_VALUE_UNAUTHORIZED === errorValue) {
			throw new AuthenticationException(
				{
					code: OAuthManager.ERROR_VALUE_UNAUTHORIZED,
					description: errorDescription,
				},
				0
			);
		} else if (OAuthManager.ERROR_VALUE_LOGIN_REQUIRED === errorValue) {
			// Whitelist to allow SSO errors go through
			throw new AuthenticationException(
				{
					code: errorValue,
					description: errorDescription,
				},
				0
			);
		} else {
			throw new AuthenticationException(
				{
					code: 'a0.invalid_configuration',
					description: "The application isn't configured properly for the social connection. Please check your Auth0's application configuration",
				},
				0
			);
		}
	}

	public static assertValidState(requestState: string, responseState: string | undefined) {
		if (requestState !== responseState) {
			Log.e(OAuthManager.TAG, `Received state doesn't match. Received ${responseState} but expected ${requestState}`);
			throw new AuthenticationException(
				{
					code: OAuthManager.ERROR_VALUE_ACCESS_DENIED,
					description: 'The received state is invalid. Try again.',
				},
				0
			);
		}
	}

	public static assertValidNonce(requestNonce: string, idToken: string) {
		let valid: boolean = false;
		try {
			const token: JWT = new JWT(idToken);
			const nonceClaim: Claim = token.getClaim(OAuthManager.KEY_NONCE);
			valid = requestNonce === nonceClaim.asString();
		} catch (e) {
			if (e instanceof DecodeException) {
				Log.e(OAuthManager.TAG, "An exception occurred when trying to validate the token's 'nonce' claim. " + e.getMessage(), e);
			} else {
				throw e;
			}
		}
		if (!valid) {
			Log.e(OAuthManager.TAG, "Received nonce doesn't match.");
			throw new AuthenticationException(
				{
					code: OAuthManager.ERROR_VALUE_ACCESS_DENIED,
					description: 'The received nonce is invalid. Try again.',
				},
				0
			);
		}
	}

	private buildAuthorizeUri(): Uri {
		const authorizeUri: Uri = Uri.parse(this.account.getAuthorizeUrl());
		const builder: Uri.Builder = authorizeUri.buildUpon();
		for (const key in this.parameters) {
			builder.appendQueryParameter(key, this.parameters[key]);
		}
		const uri: Uri = builder.build();
		this.logDebug(`Using the following AuthorizeURI: ${uri.toString()}`);
		return uri;
	}

	private addPKCEParameters(parameters: { [key: string]: string }, redirectUri: string) {
		if (!this.shouldUsePKCE()) {
			return;
		}
		try {
			this.createPKCE(redirectUri);
			const codeChallenge: string = this.pkce.getCodeChallenge();
			parameters[OAuthManager.KEY_CODE_CHALLENGE] = codeChallenge;
			parameters[OAuthManager.KEY_CODE_CHALLENGE_METHOD] = OAuthManager.METHOD_SHA_256;
			Log.v(OAuthManager.TAG, 'Using PKCE authentication flow');
		} catch (e) {
			if (e instanceof java.lang.IllegalStateException) {
				Log.e(OAuthManager.TAG, "Some algorithms aren't available on this device and PKCE can't be used. Defaulting to token response_type.", e);
			} else {
				throw e;
			}
		}
	}

	private addValidationParameters(parameters: { [key: string]: string }) {
		const state: string = OAuthManager.getRandomString(parameters[OAuthManager.KEY_STATE]);
		parameters[OAuthManager.KEY_STATE] = state;

		if (parameters[OAuthManager.KEY_RESPONSE_TYPE] != null && parameters[OAuthManager.KEY_RESPONSE_TYPE].includes(OAuthManager.RESPONSE_TYPE_ID_TOKEN)) {
			const nonce: string = OAuthManager.getRandomString(parameters[OAuthManager.KEY_NONCE]);
			parameters[OAuthManager.KEY_NONCE] = nonce;
		}
	}

	private addClientParameters(parameters: { [key: string]: string }, redirectUri: string) {
		if (this.account.getTelemetry() != null) {
			parameters[OAuthManager.KEY_TELEMETRY] = this.account.getTelemetry().getValue();
		}
		parameters[OAuthManager.KEY_CLIENT_ID] = this.account.getClientId();
		parameters[OAuthManager.KEY_REDIRECT_URI] = redirectUri;
	}

	private createPKCE(redirectUri: string) {
		if (this.pkce == null) {
			this.pkce = new PKCE(new AuthenticationAPIClient(this.account), redirectUri);
		}
	}

	private shouldUsePKCE(): boolean {
		return this.parameters[OAuthManager.KEY_RESPONSE_TYPE] != null && this.parameters[OAuthManager.KEY_RESPONSE_TYPE].includes(OAuthManager.RESPONSE_TYPE_CODE) && PKCE.isAvailable();
	}

	public customTabsOptions(): CustomTabsOptions {
		return this.ctOptions;
	}

	public static mergeCredentials(urlCredentials: Credentials, codeCredentials: Credentials): Credentials {
		const accessToken: string = TextUtils.isEmpty(codeCredentials.accessToken) ? urlCredentials.accessToken : codeCredentials.accessToken;
		const tokenType: string = TextUtils.isEmpty(codeCredentials.tokenType) ? urlCredentials.tokenType : codeCredentials.tokenType;
		const idToken: string = TextUtils.isEmpty(codeCredentials.idToken) ? urlCredentials.idToken : codeCredentials.idToken;
		const refreshToken: string = TextUtils.isEmpty(codeCredentials.refreshToken) ? urlCredentials.refreshToken : codeCredentials.refreshToken;
		const expiresAt: Date = codeCredentials.expiresAt != null ? codeCredentials.expiresAt : urlCredentials.expiresAt;
		const scope: string = TextUtils.isEmpty(codeCredentials.scope) ? urlCredentials.scope : codeCredentials.scope;

		return new Credentials(accessToken, tokenType, idToken, refreshToken, undefined, expiresAt, scope);
	}

	public static getRandomString(defaultValue: string | undefined): string {
		return defaultValue != null ? defaultValue : OAuthManager.secureRandomString();
	}

	private static secureRandomString(): string {
		const sr: SecureRandom = new SecureRandom();
		const randomBytes = Array.create('byte', 32);
		sr.nextBytes(randomBytes);
		return android.util.Base64.encodeToString(randomBytes, Base64.URL_SAFE | Base64.NO_WRAP | Base64.NO_PADDING);
	}

	private logDebug(message: string) {
		if (this.account.isLoggingEnabled()) {
			Log.d(OAuthManager.TAG, message);
		}
	}
}
