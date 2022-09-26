import { HttpRequestOptions, HttpResponse, HttpResponseEncoding } from '@nativescript/core/http';

export interface Logger {
	trace(request: HttpRequestOptions);
	trace(response: HttpResponse);
	trace(url: NSURL, source: string);
}

export interface LoggerOutput {
	log(message: string);
	newLine();
}

class DefaultOutput implements LoggerOutput {
	public log(message: string) {
		console.log(message);
	}
	public newLine() {
		console.log('');
	}
}

export class DefaultLogger implements Logger {
	public readonly output: LoggerOutput;

	constructor(output: LoggerOutput = new DefaultOutput()) {
		this.output = output;
	}

	public trace(request: HttpRequestOptions);
	public trace(response: HttpResponse);
	public trace(url: NSURL, source: string | undefined);
	public trace() {
		if (arguments[0] instanceof NSURL) {
			this.traceUrl(arguments[0], arguments[1]);
		} else if (arguments[0].url != null) {
			this.traceRequest(arguments[0]);
		}
		{
			this.traceResponse(arguments[0]);
		}
	}

	private traceRequest(request: HttpRequestOptions) {
		const method = request.method;
		const url = request.url;
		if (method == null || url == null) {
			return;
		}
		this.output.log(`${method} ${url} HTTP/1.1`);
		const headerFields = request.headers;
		if (headerFields != null) {
			for (const key in headerFields) {
				this.output.log(`${key}: ${headerFields[key]}`);
			}
		}
		const data = request.content;
		if (data != null) {
			this.output.newLine();
			this.output.log(String(data));
		}
		this.output.newLine();
	}

	private traceResponse(response: HttpResponse) {
		this.output.log(`HTTP/1.1 ${response.statusCode}`);
		for (const key in response.headers) {
			this.output.log(`${key}: ${response.headers[key]}`);
		}
		if (response.content.toString(HttpResponseEncoding.UTF8) != null) {
			const _string = response.content.toString(HttpResponseEncoding.UTF8);
			if (_string != null) {
				this.output.newLine();
				this.output.log(_string);
			}
		}
		this.output.newLine();
	}

	private traceUrl(url: NSURL, source: string | undefined) {
		this.output.log(`${source || 'URL'}: ${url.absoluteString}`);
	}
}
