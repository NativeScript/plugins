import { Response } from './response';
import { AuthenticationError } from './authenticationError';
import { Result } from './result';
import { JSONObjectPayload } from '../common/jsonObjectPayload';
import { HttpResponseEncoding } from '@nativescript/core/http';
import { emptyBodyError, Auth0Error } from './auth0Error';

export function plainJson(response: Response<AuthenticationError>, callback: (result: Result<{ [key: string]: any }>) => void) {
	try {
		const dictionary = response.result() as { [key: string]: any };
		if (dictionary != null) {
			callback({
				success: dictionary,
			});
		} else {
			callback({
				failure: new AuthenticationError(response.data.toString(HttpResponseEncoding.UTF8)),
			});
		}
	} catch (error) {
		callback({
			failure: error,
		});
	}
}

export function authenticationObject<T>(TClass: JSONObjectPayload<T>) {
	return (response: Response<AuthenticationError>, callback: (result: Result<T>) => void) => {
		try {
			const dictionary = response.result() as { [key: string]: any };
			const object = dictionary != null ? TClass.initWithJson(dictionary) : undefined;
			if (object != null) {
				callback({
					success: object,
				});
			} else {
				callback({
					failure: new AuthenticationError(response.data.toString(HttpResponseEncoding.UTF8)),
				});
			}
		} catch (error) {
			callback({
				failure: error,
			});
		}
	};
}

export function noBody(response: Response<AuthenticationError>, callback: (result: Result<void>) => void) {
	try {
		const _ = response.result();
		callback({
			success: true as undefined,
		});
	} catch (error) {
		if (error instanceof Auth0Error && error.code === emptyBodyError) {
			callback({
				success: true as undefined,
			});
		} else {
			callback({
				failure: error,
			});
		}
	}
}
