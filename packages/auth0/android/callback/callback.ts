import { Auth0Exception } from '../auth0Exception';

/**
 * Interface for all callbacks used with Auth0 API clients
 */
export interface Callback<U extends Auth0Exception> {
	/**
	 * Method called on Auth0 API request failure
	 *
	 * @param error The reason of the failure
	 */
	onFailure(error: U);
}
