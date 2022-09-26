import { Credentials } from '../../common/credentials';
import { AuthenticationException } from '../authentication/authenticationException';
import { Request } from './request';

/**
 * Request to authenticate a user with Auth0 Authentication API
 */
export interface AuthenticationRequest extends Request<Credentials, AuthenticationException> {
	/**
	 * Sets the 'grant_type' parameter
	 *
	 * @param grantType grant type
	 * @return itself
	 */
	setGrantType(grantType: string): AuthenticationRequest;

	/**
	 * Sets the 'realm' parameter. A realm identifies the host against which the authentication will be made, and usually helps to know which username and password to use.
	 *
	 * @param realm name of the realm to use.
	 * @return itself
	 */
	setRealm(realm: string): AuthenticationRequest;

	/**
	 * Sets the 'scope' parameter.
	 *
	 * @param scope a scope value
	 * @return itself
	 */
	setScope(scope: string): AuthenticationRequest;

	/**
	 * Sets the 'audience' parameter.
	 *
	 * @param audience an audience value
	 * @return itself
	 */
	setAudience(audience: string): AuthenticationRequest;

	/**
	 * Sets the 'access_token' parameter
	 *
	 * @param accessToken a access token
	 * @return itself
	 */
	setAccessToken(accessToken: string): AuthenticationRequest;

	/**
	 * All all entries of the map as parameters of this request
	 *
	 * @param parameters to be added to the request
	 * @return itself
	 */
	addAuthenticationParameters(parameters: { [key: string]: any }): AuthenticationRequest;
}
