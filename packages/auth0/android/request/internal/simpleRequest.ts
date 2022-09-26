import { HttpRequestOptions, HttpResponse, HttpResponseEncoding } from '@nativescript/core/http';

import Uri = android.net.Uri;
import IOException = java.io.IOException;

import { BaseRequest } from './baseRequest';
import { Auth0Exception } from '../../auth0Exception';
import { ErrorBuilder } from '../errorBuilder';
import { ParameterizableRequest } from '../parameterizableRequest';
import { JSONObjectPayload } from '../../../common/jsonObjectPayload';

export class SimpleRequest<T, U extends Auth0Exception> extends BaseRequest<T, U> implements ParameterizableRequest<T, U> {
	private readonly method: string;

	constructor(url: Uri, httpMethod: string, clazz: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>);
	constructor(url: Uri, httpMethod: string, errorBuilder: ErrorBuilder<U>);
	constructor() {
		const url: Uri = arguments[0],
			httpMethod: string = arguments[1];
		if (arguments.length > 3) {
			const clazz: JSONObjectPayload<T> = arguments[2];
			const errorBuilder: ErrorBuilder<U> = arguments[3];
			super(url, clazz, errorBuilder);
		} else {
			const clazz: JSONObjectPayload<T> = { initWithJson: () => null };
			const errorBuilder: ErrorBuilder<U> = arguments[2];
			super(url, clazz, errorBuilder);
		}
		this.method = httpMethod;
	}

	public onResponse(response: HttpResponse): void {
		if (response.statusCode >= 400) {
			this.postOnFailure(this.parseUnsuccessfulResponse(response));
			return;
		}

		try {
			const body = response.content.toJSON(HttpResponseEncoding.UTF8);
			const payload = this.getAdapter().initWithJson(body);
			this.postOnSuccess(payload);
		} catch (e) {
			if (e instanceof IOException) {
				const auth0Exception = new Auth0Exception(`Failed to parse response to request to ${this.url} - ${e.toString()}`);
				this.postOnFailure(this.getErrorBuilder().from('Failed to parse a successful response', auth0Exception));
			} else {
				throw e;
			}
		}
	}

	protected doBuildRequest(): HttpRequestOptions {
		const sendBody = this.method === 'HEAD' || this.method === 'GET';
		return Object.assign({}, this.newRequestOptions(this.method), {
			content: sendBody ? undefined : this.buildBody(),
		});
	}
}
