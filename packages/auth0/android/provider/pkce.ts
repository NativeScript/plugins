import Log = android.util.Log;

import { BaseCallback } from '../callback/baseCallback';
import { AuthCallback } from './authCallback';
import { Credentials } from '../../common/credentials';
import { AlgorithmHelper } from './algorithmHelper';
import { AuthenticationException } from '../authentication/authenticationException';
import { AuthenticationAPIClient } from '../authentication/authenticationAPIClient';

/**
 * Performs code exchange according to Proof Key for Code Exchange (PKCE) spec.
 */
export class PKCE {
	private static readonly TAG: string = 'PKCE';

	private readonly apiClient: AuthenticationAPIClient;
	private readonly codeVerifier: string;
	private readonly redirectUri: string;
	private readonly codeChallenge: string;

	/**
	 * Creates a new instance of this class with the given AuthenticationAPIClient.
	 * The instance should be disposed after a call to getToken().
	 *
	 * @param apiClient   to get the OAuth Token.
	 * @param redirectUri going to be used in the OAuth code request.
	 * @throws IllegalStateException when either 'US-ASCII` encoding or 'SHA-256' algorithm is not available.
	 * @see #isAvailable()
	 */
	constructor(apiClient: AuthenticationAPIClient, redirectUri: string, algorithmHelper: AlgorithmHelper = new AlgorithmHelper()) {
		this.apiClient = apiClient;
		this.redirectUri = redirectUri;
		this.codeVerifier = algorithmHelper.generateCodeVerifier();
		this.codeChallenge = algorithmHelper.generateCodeChallenge(this.codeVerifier);
	}

	/**
	 * Returns the Code Challenge generated using a Code Verifier.
	 *
	 * @return the Code Challenge for this session.
	 */
	public getCodeChallenge(): string {
		return this.codeChallenge;
	}

	/**
	 * Performs a request to the Auth0 API to get the OAuth Token and end the PKCE flow.
	 * The instance of this class must be disposed after this method is called.
	 *
	 * @param authorizationCode received in the call to /authorize with a "grant_type=code"
	 * @param callback          to notify the result of this call to.
	 */
	public getToken(authorizationCode: string, callback: AuthCallback) {
		this.apiClient
			.token(authorizationCode, this.redirectUri)
			.setCodeVerifier(this.codeVerifier)
			.start(<BaseCallback<Credentials, AuthenticationException>>{
				onSuccess: function (payload: Credentials) {
					callback.onSuccess(payload);
				},
				onFailure: function (error: AuthenticationException) {
					if ('Unauthorized' === error.getDescription()) {
						Log.e(PKCE.TAG, `Please go to 'https://manage.auth0.com/#/applications/${this.apiClient.getClientId()}/settings' and set 'Client Type' to 'Native' to enable PKCE.`);
					}
					callback.onFailure(error);
				},
			});
	}

	/**
	 * Checks if this device is capable of using the PKCE flow when performing calls to the
	 * /authorize endpoint.
	 *
	 * @return if this device can use PKCE flow or not.
	 */
	public static isAvailable(algorithmHelper: AlgorithmHelper = new AlgorithmHelper()): boolean {
		try {
			const input = algorithmHelper.getASCIIBytes('test');
			algorithmHelper.getSHA256(input);
		} catch (ignored) {
			return false;
		}
		return true;
	}
}
