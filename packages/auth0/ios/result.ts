/**
 Result object for Auth0 APIs requests

 - Success: request completed successfuly with it's response body
 - Failure: request failed with a specific error
 */
export interface Result<T> {
	success?: T;
	failure?: Error;
}
