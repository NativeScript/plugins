import { AuthenticationException } from '../authenticationException';
import { Request } from '../../request/request';
import { ParameterizableRequest } from '../../request/parameterizableRequest';
import { BaseCallback } from '../../callback/baseCallback';
import { Credentials } from '../../../common/credentials';

/**
 * Auth Request to obtain tokens using OAuth2 {@literal /oauth/token} method
 */
export class TokenRequest implements Request<Credentials, AuthenticationException> {
	private static readonly OAUTH_CODE_VERIFIER_KEY: string = 'code_verifier';

	private readonly request: ParameterizableRequest<Credentials, AuthenticationException>;

	constructor(request: ParameterizableRequest<Credentials, AuthenticationException>) {
		this.request = request;
	}

	/**
	 * Adds the code verifier to the request (Public Clients)
	 *
	 * @param codeVerifier the code verifier used to generate the challenge sent to /authorize.
	 * @return itself
	 */
	public setCodeVerifier(codeVerifier: string): TokenRequest {
		this.request.addParameter(TokenRequest.OAUTH_CODE_VERIFIER_KEY, codeVerifier);
		return this;
	}

	public start(callback: BaseCallback<Credentials, AuthenticationException>): void {
		this.request.start(callback);
	}
}
