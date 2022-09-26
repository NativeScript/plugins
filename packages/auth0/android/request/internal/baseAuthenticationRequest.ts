import Uri = android.net.Uri;

import { SimpleRequest } from './simpleRequest';
import { Credentials } from '../../../common/credentials';
import { AuthenticationException } from '../../authentication/authenticationException';
import { AuthenticationRequest } from '../authenticationRequest';
import { JSONObjectPayload } from '../../../common/jsonObjectPayload';
import { AuthenticationErrorBuilder } from './authenticationErrorBuilder';
import { ParameterBuilder } from '../../authentication/parameterBuilder';

export class BaseAuthenticationRequest extends SimpleRequest<Credentials, AuthenticationException> implements AuthenticationRequest {
	private static readonly TAG: string = 'BaseAuthenticationRequest';

	constructor(url: Uri, httpMethod: string, clazz: JSONObjectPayload<Credentials>) {
		super(url, httpMethod, clazz, new AuthenticationErrorBuilder());
	}

	/**
	 * Sets the 'grant_type' parameter
	 *
	 * @param grantType grant type
	 * @return itself
	 */
	public setGrantType(grantType: String): AuthenticationRequest {
		this.addParameter(ParameterBuilder.GRANT_TYPE_KEY, grantType);
		return this;
	}

	/**
	 * Sets the 'realm' parameter. A realm identifies the host against which the authentication will made: be, and usually helps to know which username and password to use.
	 *
	 * @param realm name of the realm
	 * @return itself
	 */
	public setRealm(realm: String): AuthenticationRequest {
		this.addParameter(ParameterBuilder.REALM_KEY, realm);
		return this;
	}

	/**
	 * Sets the 'scope' parameter.
	 *
	 * @param scope a scope value
	 * @return itself
	 */
	public setScope(scope: String): AuthenticationRequest {
		this.addParameter(ParameterBuilder.SCOPE_KEY, scope);
		return this;
	}

	/**
	 * Sets the 'audience' parameter.
	 *
	 * @param audience an audience value
	 * @return itself
	 */
	public setAudience(audience: String): AuthenticationRequest {
		this.addParameter(ParameterBuilder.AUDIENCE_KEY, audience);
		return this;
	}

	/**
	 * Sets the 'access_token' parameter
	 *
	 * @param accessToken a access token
	 * @return itself
	 */
	public setAccessToken(accessToken: String): AuthenticationRequest {
		this.addParameter(ParameterBuilder.ACCESS_TOKEN_KEY, accessToken);
		return this;
	}

	public addAuthenticationParameters(parameters: { [key: string]: any }): AuthenticationRequest {
		const params = Object.assign({}, parameters);
		this.addParameters(params);
		return this;
	}
}
