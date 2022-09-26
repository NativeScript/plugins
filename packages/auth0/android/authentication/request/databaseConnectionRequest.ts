import { Auth0Exception } from '../../auth0Exception';
import { ParameterizableRequest } from '../../request/parameterizableRequest';
import { ParameterBuilder } from '../parameterBuilder';
import { BaseCallback } from '../../callback/baseCallback';

/**
 * Request to perform a non-authentication related action
 * like creating a user or requesting a change password
 */
export class DatabaseConnectionRequest<T, U extends Auth0Exception> {
	private readonly request: ParameterizableRequest<T, U>;

	constructor(request: ParameterizableRequest<T, U>) {
		this.request = request;
	}

	/**
	 * Add the given parameters to the request
	 * @param parameters to be sent with the request
	 * @return itself
	 */
	public addParameters(parameters: { [key: string]: any }): DatabaseConnectionRequest<T, U> {
		this.request.addParameters(parameters);
		return this;
	}

	/**
	 * Add a parameter by name to the request
	 * @param name of the parameter
	 * @param value of the parameter
	 * @return itself
	 */
	public addParameter(name: string, value: any): DatabaseConnectionRequest<T, U> {
		this.request.addParameter(name, value);
		return this;
	}

	/**
	 * Add a header for request: the, e.g. "Authorization"
	 * @param name of the header
	 * @param value of the header
	 * @return itself
	 */
	public addHeader(name: string, value: string): DatabaseConnectionRequest<T, U> {
		this.request.addHeader(name, value);
		return this;
	}

	/**
	 * Set the Auth0 Database Connection used for this request using its name.
	 * @param connection name
	 * @return itself
	 */
	public setConnection(connection: string): DatabaseConnectionRequest<T, U> {
		this.request.addParameter(ParameterBuilder.CONNECTION_KEY, connection);
		return this;
	}

	/**
	 * Executes the request async and returns its results via callback
	 * @param callback called on success or failure of the request
	 */
	public start(callback: BaseCallback<T, U>): void {
		this.request.start(callback);
	}
}
