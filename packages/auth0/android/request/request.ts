import { Auth0Exception } from '../auth0Exception';
import { BaseCallback } from '../callback/baseCallback';

/**
 * Defines a request that can be started
 *
 * @param <T> the type this request will return on success.
 * @param <U> the {@link Auth0Exception} type this request will return on failure.
 */
export interface Request<T, U extends Auth0Exception> {
	/**
	 * Performs an async HTTP request against Auth0 API
	 *
	 * @param callback called either on success or failure
	 */
	start(callback: BaseCallback<T, U>);
}
