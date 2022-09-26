import { AuthenticationException } from '../authenticationException';
import { Request } from '../../request/request';
import { AuthenticationRequest } from '../../request/authenticationRequest';
import { BaseCallback } from '../../callback/baseCallback';
import { Credentials } from '../../../common/credentials';
import { DatabaseConnectionRequest } from './databaseConnectionRequest';
import { DatabaseUser } from '../../../common/databaseUser';

/**
 * Represent a request that creates a user in a Auth0 Database connection and then logs in.
 */
export class SignUpRequest implements Request<Credentials, AuthenticationException>, AuthenticationRequest {
	private readonly signUpRequest: DatabaseConnectionRequest<DatabaseUser, AuthenticationException>;
	private readonly authenticationRequest: AuthenticationRequest;

	constructor(signUpRequest: DatabaseConnectionRequest<DatabaseUser, AuthenticationException>, authenticationRequest: AuthenticationRequest) {
		this.signUpRequest = signUpRequest;
		this.authenticationRequest = authenticationRequest;
	}

	/**
	 * Add additional parameters sent when creating a user.
	 *
	 * @param parameters sent with the request and must be non-null
	 * @see ParameterBuilder
	 * @return itself
	 */
	public addSignUpParameters(parameters: Map<String, Object>): SignUpRequest {
		this.signUpRequest.addParameters(parameters);
		return this;
	}

	/**
	 * Add additional parameters sent when logging the user in
	 *
	 * @param parameters sent with the request and must be non-null
	 * @return itself
	 * @see ParameterBuilder
	 */
	public addAuthenticationParameters(parameters: { [key: string]: any }): SignUpRequest {
		this.authenticationRequest.addAuthenticationParameters(parameters);
		return this;
	}

	public setScope(scope: string): SignUpRequest {
		this.authenticationRequest.setScope(scope);
		return this;
	}

	public setAudience(audience: string): SignUpRequest {
		this.authenticationRequest.setAudience(audience);
		return this;
	}

	public setAccessToken(accessToken: string): SignUpRequest {
		this.authenticationRequest.setAccessToken(accessToken);
		return this;
	}

	public setGrantType(grantType: string): SignUpRequest {
		this.authenticationRequest.setGrantType(grantType);
		return this;
	}

	public setRealm(realm: string): SignUpRequest {
		this.signUpRequest.setConnection(realm);
		this.authenticationRequest.setRealm(realm);
		return this;
	}

	/**
	 * Starts to execute create user request and then logs the user in.
	 *
	 * @param callback called on either success or failure.
	 */
	public start(callback: BaseCallback<Credentials, AuthenticationException>): void {
		this.signUpRequest.start({
			onSuccess: (user: DatabaseUser): void => {
				this.authenticationRequest.start(callback);
			},
			onFailure: (error: AuthenticationException): void => {
				callback.onFailure(error);
			},
		});
	}
}
