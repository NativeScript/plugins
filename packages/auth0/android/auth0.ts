import Context = android.content.Context;
import Uri = android.net.Uri;

import { Telemetry } from './util/telemetry';

/**
 * Represents your Auth0 account information (clientId {@literal &} domain),
 * and it's used to obtain clients for Auth0's APIs.
 * <pre>{@code
 * Auth0 auth0 = new Auth0("YOUR_CLIENT_ID", "YOUR_DOMAIN");
 * }</pre>
 * For more information, please see the <a href="https://auth0.com/docs/api-auth/tutorials/adoption">OIDC adoption guide</a>.
 *
 * @see Auth0#setOIDCConformant(boolean)
 */
export class Auth0 {
	private static readonly AUTH0_US_CDN_URL: string = 'https://cdn.auth0.com';
	private static readonly DOT_AUTH0_DOT_COM: string = '.auth0.com';

	private readonly clientId: string;
	private readonly domainUrl: Uri;
	private readonly configurationUrl: Uri;
	private telemetry: Telemetry;
	private loggingEnabled: boolean;
	private tls12Enforced: boolean;

	/**
	 * Creates a new object using clientId, domain and configuration domain.
	 *
	 * @param clientId            of your Auth0 application
	 * @param domain              of your Auth0 account
	 * @param configurationDomain where Auth0's configuration will be fetched. By default is Auth0 public cloud
	 */
	constructor(clientId: string, domain: string, configurationDomain?: string) {
		this.clientId = clientId;
		this.domainUrl = this.ensureValidUrl(domain);
		if (this.domainUrl == null) {
			throw new java.lang.IllegalArgumentException(`Invalid domain url: '${domain}'`);
		}
		this.configurationUrl = this.resolveConfiguration(configurationDomain, this.domainUrl);
		this.telemetry = new Telemetry('Auth0.NativeScript', '0.0.0');
	}

	/**
	 * @return your Auth0 application client identifier
	 */
	public getClientId(): string {
		return this.clientId;
	}

	/**
	 * @return your Auth0 account domain url
	 */
	public getDomainUrl(): string {
		return this.domainUrl.toString();
	}

	/**
	 * @return your account configuration url
	 */
	public getConfigurationUrl(): string {
		return this.configurationUrl.toString();
	}

	/**
	 * @return Url to perform the web flow of OAuth
	 */
	public getAuthorizeUrl(): string {
		return this.domainUrl.buildUpon().appendEncodedPath('authorize').build().toString();
	}

	/**
	 * @return Auth0 telemetry info sent in every request
	 */
	public getTelemetry(): Telemetry {
		return this.telemetry;
	}

	/**
	 * Setter for the Telemetry to send in every request to Auth0.
	 *
	 * @param telemetry to send in every request to Auth0
	 */
	public setTelemetry(telemetry: Telemetry): void {
		this.telemetry = telemetry;
	}

	/**
	 * Avoid sending telemetry in every request to Auth0
	 */
	public doNotSendTelemetry(): void {
		this.telemetry = null;
	}

	/**
	 * Getter for the HTTP logger is enabled or not.
	 *
	 * @return whether every Request, Response and other sensitive information should be logged or not.
	 */
	public isLoggingEnabled(): boolean {
		return this.loggingEnabled;
	}

	/**
	 * Log every Request, Response and other sensitive information exchanged using the Auth0 APIs.
	 * You shouldn't enable logging in release builds as it may leak sensitive information.
	 *
	 * @param enabled if every Request, Response and other sensitive information should be logged.
	 */
	public setLoggingEnabled(enabled: boolean): void {
		this.loggingEnabled = enabled;
	}

	/**
	 * Getter for whether TLS 1.2 is enforced on devices with API 16-21.
	 *
	 * @return whether TLS 1.2 is enforced on devices with API 16-21.
	 */
	public isTLS12Enforced(): boolean {
		return this.tls12Enforced;
	}

	/**
	 * Set whether to enforce TLS 1.2 on devices with API 16-21.
	 *
	 * @param enforced whether TLS 1.2 is enforced on devices with API 16-21.
	 */
	public setTLS12Enforced(enforced: boolean): void {
		this.tls12Enforced = enforced;
	}

	private resolveConfiguration(configurationDomain: string, domainUrl: Uri): Uri {
		let url = this.ensureValidUrl(configurationDomain);
		if (url == null) {
			const host = domainUrl.getHost();
			if (host.endsWith(Auth0.DOT_AUTH0_DOT_COM)) {
				const parts = host.split('.');
				if (parts.length > 3) {
					url = Uri.parse(`https://cdn.${parts[parts.length - 3]}${Auth0.DOT_AUTH0_DOT_COM}`);
				} else {
					url = Uri.parse(Auth0.AUTH0_US_CDN_URL);
				}
			} else {
				url = domainUrl;
			}
		}
		return url;
	}

	private ensureValidUrl(url: string): Uri {
		if (url == null) {
			return null;
		}
		const safeUrl = url.startsWith('http') ? url : 'https://' + url;
		return Uri.parse(safeUrl);
	}

	private static getResourceFromContext(context: Context, resName: string): string {
		const stringRes: number = context.getResources().getIdentifier(resName, 'string', context.getPackageName());
		if (stringRes === 0) {
			throw new java.lang.IllegalArgumentException(`The 'R.string.${resName}' value it's not defined in your project's resources file.`);
		}
		return context.getString(stringRes);
	}
}
