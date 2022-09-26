import { HttpRequestOptions, HttpResponse } from '@nativescript/core/http';

import Uri = android.net.Uri;

import { BaseRequest } from './baseRequest';
import { Auth0Exception } from '../../auth0Exception';
import { ErrorBuilder } from '../errorBuilder';

export class VoidRequest<U extends Auth0Exception> extends BaseRequest<void, U> {
	private readonly httpMethod: string;

	constructor(url: Uri, httpMethod: string, errorBuilder: ErrorBuilder<U>) {
		super(url, { initWithJson: () => null }, errorBuilder);
		this.httpMethod = httpMethod;
	}

	public onResponse(response: HttpResponse): void {
		if (response.statusCode >= 400) {
			this.postOnFailure(this.parseUnsuccessfulResponse(response));
			return;
		}

		this.postOnSuccess(null);
	}

	protected doBuildRequest(): HttpRequestOptions {
		const body = this.buildBody();
		return Object.assign({}, this.newRequestOptions(this.httpMethod), {
			content: body,
		});
	}
}
