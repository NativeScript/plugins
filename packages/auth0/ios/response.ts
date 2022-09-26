import { HttpResponseEncoding, HttpRequestOptions, HttpResponse, HttpContent } from '@nativescript/core/http';

import { Auth0Error } from './auth0Error';

export function json<T>(data: HttpContent | undefined): T | undefined {
	if (data == null) {
		return undefined;
	}
	return data.toJSON(HttpResponseEncoding.UTF8);
}

export function string(data: HttpContent | undefined): string | undefined {
	if (data == null) {
		return undefined;
	}
	return data.toString(HttpResponseEncoding.UTF8);
}

export class Response<E extends Auth0Error> {
	readonly data: HttpContent | undefined;
	readonly request: HttpRequestOptions | undefined;
	readonly response: HttpResponse | undefined;
	readonly error: Error | undefined;
	readonly EClass: typeof Auth0Error;

	constructor(data: HttpContent | undefined, request: HttpRequestOptions | undefined, response: HttpResponse | undefined, error: Error | undefined, EClass: typeof Auth0Error) {
		this.data = data;
		this.request = request;
		this.response = response;
		this.error = error;
		this.EClass = EClass;
	}

	public result(): any | undefined {
		if (this.error != null) {
			throw this.error;
		}
		const request = this.request;
		const response = this.response;
		if (response.statusCode >= 300) {
			const j = json(this.data);
			if (j == null) {
				throw new this.EClass(json, response.statusCode);
			}
			throw new this.EClass(string(this.data), response.statusCode);
		}
		if (this.data == null) {
			if (response.statusCode === 204) {
				return undefined;
			}
			throw new this.EClass(undefined, response.statusCode);
		}
		const obj = json(this.data);
		if (obj != null) {
			return obj;
		}
		// This piece of code is dedicated to our friends the backend devs :)
		const url = request.url;
		if (url != null && new NSURL({ string: url }).path.endsWith('change_password')) {
			return undefined;
		} else {
			throw new this.EClass(string(this.data), response.statusCode);
		}
	}
}
