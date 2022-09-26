import { Auth0Exception } from '../auth0Exception';
import { Request } from './request';

/**
 * Defines a request that can be configured (payload and headers)
 *
 * @param <T> the type this request will return on success.
 * @param <U> the {@link Auth0Exception} type this request will return on failure.
 */
export interface ParameterizableRequest<T, U extends Auth0Exception> extends Request<T, U> {
	/**
	 * Add parameters to the request as a Map of Object with the keys as String
	 *
	 * @param parameters to send with the request
	 * @return itself
	 */
	addParameters(parameters: { [key: string]: any }): ParameterizableRequest<T, U>;

	/**
	 * Add parameter to the request with a given name
	 *
	 * @param name  of the parameter
	 * @param value of the parameter
	 * @return itself
	 */
	addParameter(name: string, value: any): ParameterizableRequest<T, U>;

	/**
	 * Adds an additional header for the request
	 *
	 * @param name  of the header
	 * @param value of the header
	 * @return itself
	 */
	addHeader(name: string, value: string): ParameterizableRequest<T, U>;
}
