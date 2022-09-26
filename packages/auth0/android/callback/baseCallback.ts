import { Auth0Exception } from '../auth0Exception';
import { Callback } from './callback';

/**
 * Callback that receives a single value on success.
 */
export interface BaseCallback<T, U extends Auth0Exception> extends Callback<U> {
	/**
	 * Method called on success with the payload or null.
	 *
	 * @param payload Request payload or null
	 */
	onSuccess(payload: T);
}
