import { HttpRequestOptions, HttpResponse, HttpResponseEncoding, request as makeRequest } from '@nativescript/core/http';

import Uri = android.net.Uri;
import IOException = java.io.IOException;

import { Auth0Exception } from '../../auth0Exception';
import { ParameterBuilder } from '../../authentication/parameterBuilder';
import { ParameterizableRequest } from '../parameterizableRequest';
import { AuthorizableRequest } from '../authorizableRequest';
import { BaseCallback } from '../../callback/baseCallback';
import { ErrorBuilder } from '../errorBuilder';
import { JSONObjectPayload } from '../../../common/jsonObjectPayload';

export abstract class BaseRequest<T, U extends Auth0Exception> implements ParameterizableRequest<T, U>, AuthorizableRequest<T, U> {
	private readonly headers: { [key: string]: string };
	protected readonly url: Uri;
	private readonly adapter: JSONObjectPayload<T>;
	private readonly errorBuilder: ErrorBuilder<U>;

	private readonly builder: ParameterBuilder;
	private callback: BaseCallback<T, U>;

	constructor(url: Uri, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>, headers: { [key: string]: string } = {}, parameterBuilder: ParameterBuilder = ParameterBuilder.newBuilder()) {
		this.url = url;
		this.adapter = adapter;
		this.headers = headers;
		this.builder = parameterBuilder;
		this.errorBuilder = errorBuilder;
	}

	protected setCallback(callback: BaseCallback<T, U>): void {
		this.callback = callback;
	}

	protected postOnSuccess(payload: T): void {
		this.callback.onSuccess(payload);
	}

	protected postOnFailure(error: U): void {
		this.callback.onFailure(error);
	}

	protected newRequestOptions(method: string): HttpRequestOptions {
		const options: HttpRequestOptions = {
			url: this.url.toString(),
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		for (const entry in this.headers) {
			options.headers[entry] = this.headers[entry];
		}
		return options;
	}

	protected getAdapter(): JSONObjectPayload<T> {
		return this.adapter;
	}

	protected getErrorBuilder(): ErrorBuilder<U> {
		return this.errorBuilder;
	}

	public getCallback(): BaseCallback<T, U> {
		return this.callback;
	}

	protected buildBody(): string {
		const dictionary = this.builder.asDictionary();
		if (Object.keys(dictionary).length > 0) {
			return JSON.stringify(dictionary);
		}
		return null;
	}

	protected parseUnsuccessfulResponse(response: HttpResponse): U {
		let stringPayload: string | undefined = undefined;
		try {
			stringPayload = response.content.toString(HttpResponseEncoding.UTF8);
			return this.errorBuilder.from(JSON.parse(stringPayload));
		} catch (e) {
			if (e instanceof SyntaxError) {
				return this.errorBuilder.from(stringPayload, response.statusCode);
			} else if (e instanceof IOException) {
				const auth0Exception: Auth0Exception = new Auth0Exception(`Error parsing the server response ${e.toString()}`);
				return this.errorBuilder.from(`Request to ${this.url.toString()} failed`, auth0Exception);
			} else {
				throw e;
			}
		}
	}

	public onFailure(request: HttpRequestOptions, e: Error): void {
		const exception = new Auth0Exception(`Failed to execute request to ${this.url.toString()} - ${e.toString()}`);
		this.postOnFailure(this.errorBuilder.from('Request failed', exception));
	}

	public addHeader(name: string, value: string): ParameterizableRequest<T, U> {
		this.headers[name] = value;
		return this;
	}

	public setBearer(jwt: string): AuthorizableRequest<T, U> {
		this.addHeader('Authorization', `Bearer ${jwt}`);
		return this;
	}

	public addParameters(parameters: { [key: string]: any }): ParameterizableRequest<T, U> {
		this.builder.addAll(parameters);
		return this;
	}

	public addParameter(name: string, value: any): ParameterizableRequest<T, U> {
		this.builder.setParameter(name, value);
		return this;
	}

	public start(callback: BaseCallback<T, U>): void {
		this.setCallback(callback);
		const request = this.doBuildRequest();
		makeRequest(request)
			.then((response) => {
				this.onResponse(response);
			})
			.catch((error) => {
				this.onFailure(request, error);
			});
	}

	protected abstract doBuildRequest(): HttpRequestOptions;

	public abstract onResponse(response: HttpResponse): void;
}
