import { AuthenticationException } from '../authenticationException';
import { Request } from '../../request/request';
import { Authentication } from '../../result/authentication';
import { AuthenticationRequest } from '../../request/authenticationRequest';
import { ParameterizableRequest } from '../../request/parameterizableRequest';
import { UserInfo } from '../../../common/userInfo';
import { BaseCallback } from '../../callback/baseCallback';
import { Credentials } from '../../../common/credentials';

/**
 * Request to fetch a profile after a successful authentication with Auth0 Authentication API
 */
export class ProfileRequest implements Request<Authentication, AuthenticationException> {
	private static readonly HEADER_AUTHORIZATION: string = 'Authorization';

	private readonly credentialsRequest: AuthenticationRequest;
	private readonly userInfoRequest: ParameterizableRequest<UserInfo, AuthenticationException>;

	constructor(credentialsRequest: AuthenticationRequest, userInfoRequest: ParameterizableRequest<UserInfo, AuthenticationException>) {
		this.credentialsRequest = credentialsRequest;
		this.userInfoRequest = userInfoRequest;
	}

	/**
	 * Adds additional parameters for the login request
	 *
	 * @param parameters as a non-null dictionary
	 * @return itself
	 */
	public addParameters(parameters: { [key: string]: any }): ProfileRequest {
		this.credentialsRequest.addAuthenticationParameters(parameters);
		return this;
	}

	/**
	 * Set the scope used to authenticate the user
	 *
	 * @param scope value
	 * @return itself
	 */
	public setScope(scope: string): ProfileRequest {
		this.credentialsRequest.setScope(scope);
		return this;
	}

	/**
	 * Starts the log in request and then fetches the user's profile
	 *
	 * @param callback called on either success or failure
	 */
	public start(callback: BaseCallback<Authentication, AuthenticationException>): void {
		this.credentialsRequest.start({
			onSuccess: (credentials: Credentials): void => {
				this.userInfoRequest.addHeader(ProfileRequest.HEADER_AUTHORIZATION, `Bearer ${credentials.accessToken}`).start({
					onSuccess: function (profile: UserInfo): void {
						callback.onSuccess(new Authentication(profile, credentials));
					},
					onFailure: function (error: AuthenticationException): void {
						callback.onFailure(error);
					},
				});
			},
			onFailure: (error: AuthenticationException): void => {
				callback.onFailure(error);
			},
		});
	}
}
