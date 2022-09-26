import { Auth0Exception } from '../auth0Exception';

export interface ErrorBuilder<U extends Auth0Exception> {
	/**
	 * @param message the description
	 * @return a new exception instance
	 */
	from(message: string): U;

	/**
	 * @param message   the description
	 * @param exception the exception raised.
	 * @return a new exception instance
	 */
	from(message: string, exception: Auth0Exception): U;

	/**
	 * @param values the payload values
	 * @return a new exception instance
	 */
	from(values: { [key: string]: any }): U;

	/**
	 * @param payload    the String payload from the response.
	 * @param statusCode the http status code.
	 * @return a new exception instance
	 */
	from(payload: string, statusCode: number): U;
}
