import Locale = java.util.Locale;
import Uri = android.net.Uri;

import { Telemetry } from '../../util/telemetry';
import { VoidRequest } from './voidRequest';
import { Auth0Exception } from '../../auth0Exception';
import { AuthenticationRequest } from '../authenticationRequest';
import { ErrorBuilder } from '../errorBuilder';
import { ParameterizableRequest } from '../parameterizableRequest';
import { Credentials } from '../../../common/credentials';
import { JSONObjectPayload } from '../../../common/jsonObjectPayload';
import { SimpleRequest } from './simpleRequest';
import { BaseAuthenticationRequest } from './baseAuthenticationRequest';

export class RequestFactory {
	public static readonly DEFAULT_LOCALE_IF_MISSING: string = 'en_US';

	private static readonly AUTHORIZATION_HEADER: string = 'Authorization';
	private static readonly USER_AGENT_HEADER: string = 'User-Agent';
	private static readonly ACCEPT_LANGUAGE_HEADER: string = 'Accept-Language';
	private static readonly CLIENT_INFO_HEADER: string = Telemetry.HEADER_NAME;

	private readonly headers: { [key: string]: string };

	public constructor(bearerToken?: string) {
		this.headers = {};
		this.headers[RequestFactory.ACCEPT_LANGUAGE_HEADER] = RequestFactory.getDefaultLocale();
		if (bearerToken != null) {
			this.headers[RequestFactory.AUTHORIZATION_HEADER] = `Bearer ${bearerToken}`;
		}
	}

	public setClientInfo(clientInfo: string): void {
		this.headers[RequestFactory.CLIENT_INFO_HEADER] = clientInfo;
	}

	public setUserAgent(userAgent: string): void {
		this.headers[RequestFactory.USER_AGENT_HEADER] = userAgent;
	}

	public authenticationPOST(url: Uri): AuthenticationRequest {
		const request: AuthenticationRequest = this.createAuthenticationRequest(url, 'POST');
		this.addMetrics(request as any);
		return request;
	}

	public POST<T, U extends Auth0Exception>(url: Uri, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<T, U>;
	public POST<U extends Auth0Exception>(url: Uri, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<void, U>;
	public POST(): ParameterizableRequest<any, any> {
		if (arguments.length > 2) {
			const request = this.createSimpleRequest(arguments[0], 'POST', arguments[1], arguments[2]);
			this.addMetrics(request);
			return request;
		} else {
			const request = this.createVoidRequest(arguments[0], 'POST', arguments[1]);
			this.addMetrics(request);
			return request;
		}
	}

	public PATCH<T, U extends Auth0Exception>(url: Uri, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<T, U> {
		const request = this.createSimpleRequest(url, 'PATCH', adapter, errorBuilder);
		this.addMetrics(request);
		return request;
	}

	public DELETE<T, U extends Auth0Exception>(url: Uri, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<T, U> {
		const request = this.createSimpleRequest(url, 'DELETE', adapter, errorBuilder);
		this.addMetrics(request);
		return request;
	}

	public GET<T, U extends Auth0Exception>(url: Uri, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<T, U> {
		const request = this.createSimpleRequest(url, 'GET', adapter, errorBuilder);
		this.addMetrics(request);
		return request;
	}

	private addMetrics<T, U extends Auth0Exception>(request: ParameterizableRequest<T, U>): void {
		for (const entry in this.headers) {
			request.addHeader(entry, this.headers[entry]);
		}
	}

	public createSimpleRequest<T, U extends Auth0Exception>(url: Uri, method: string, adapter: JSONObjectPayload<T>, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<T, U> {
		return new SimpleRequest(url, method, adapter, errorBuilder);
	}

	public createAuthenticationRequest(url: Uri, method: string): AuthenticationRequest {
		return new BaseAuthenticationRequest(url, method, Credentials);
	}

	public createVoidRequest<U extends Auth0Exception>(url: Uri, method: string, errorBuilder: ErrorBuilder<U>): ParameterizableRequest<void, U> {
		return new VoidRequest<U>(url, method, errorBuilder);
	}

	public getHeaders(): { [key: string]: string } {
		return this.headers;
	}

	public static getDefaultLocale(): string {
		const language = Locale.getDefault().toString();
		return language !== '' ? language : RequestFactory.DEFAULT_LOCALE_IF_MISSING;
	}
}
