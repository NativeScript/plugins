import { HttpRequestOptions } from '@nativescript/core/http';

import { a0_encodeBase64URLSafe } from './utils';

export class Telemetry {
	public static readonly NameKey: string = 'name';
	public static readonly VersionKey: string = 'version';
	public static readonly WrappedVersion: string = 'lib_version';

	public static readonly NoVersion: string = '0.0.0';
	public static readonly LibraryName: string = 'Auth0.NativeScript';

	public enabled: boolean = true;

	public info?: string;

	public get value(): string | undefined {
		return this.enabled ? this.info : undefined;
	}

	constructor() {
		this.info = Telemetry.generateValue();
	}

	public wrapped(name: string, version: string) {
		const info = Telemetry.versionInformation();
		const wrapped = {
			[Telemetry.NameKey]: name,
			[Telemetry.VersionKey]: version,
			[Telemetry.WrappedVersion]: info[Telemetry.VersionKey] || Telemetry.NoVersion,
		};
		this.info = Telemetry.generateValue(wrapped);
	}

	public addTelemetryHeader(request: HttpRequestOptions) {
		const value = this.value;
		if (value != null) {
			request.headers['Auth0-Client'] = value;
		} else {
			request.headers['Auth0-Client'] = null;
		}
	}

	public queryItemsWithTelemetry(queryItems: NSURLQueryItem[]): NSURLQueryItem[] {
		const items = queryItems;
		const value = this.value;
		if (value != null) {
			items.push(new NSURLQueryItem({ name: 'auth0Client', value: value }));
		}
		return items;
	}

	public static versionInformation(): { [key: string]: string } {
		const dict = {
			[Telemetry.NameKey]: Telemetry.LibraryName,
			[Telemetry.VersionKey]: Telemetry.NoVersion, // TODO: get a version to specify
			'swift-version': '3.2',
		};
		return dict;
	}

	public static generateValue(info: { [key: string]: string } = Telemetry.versionInformation()): string | undefined {
		let data = JSON.stringify(info);
		return a0_encodeBase64URLSafe(data);
	}
}

export interface Trackable {
	telemetry: Telemetry;
}

export class TrackableExtension {
	/**
     Avoid Auth0.swift sending its version on every request to Auth0 API.
     By default we collect our libraries and SDKs versions to help us during support and evaluate usage.

     - parameter enabled: if Auth0.swift should send it's version on every request.
     */
	public static tracking(trackable: Trackable, enabled: boolean) {
		trackable.telemetry.enabled = enabled;
	}

	/**
     Send the library/framework, that has Auth0.swift as dependency, when sending telemetry information

     - parameter name:    name of library or framework that uses Auth0.swift
     - parameter version: version of library or framework
     */
	public static using(trackable: Trackable, name: string, version: string) {
		trackable.telemetry.wrapped(name, version);
	}
}
