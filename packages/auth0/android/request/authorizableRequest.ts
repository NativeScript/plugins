import { Auth0Exception } from '../auth0Exception';
import { ParameterizableRequest } from './parameterizableRequest';

/**
 * Interface for a Auth0 request that need Authorization using a JWT.
 *
 * @param <T> the type this request will return on success.
 * @param <U> the {@link Auth0Exception} type this request will return on failure.
 */
export interface AuthorizableRequest<T, U extends Auth0Exception> extends ParameterizableRequest<T, U> {
	/**
	 * Set the JWT used in 'Authorization' header value
	 *
	 * @param jwt token to send to the API
	 * @return itself
	 */
	setBearer(jwt: string): AuthorizableRequest<T, U>;
}
