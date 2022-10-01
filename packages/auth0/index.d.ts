import { Credentials } from './common/credentials';
import { UserInfo } from './common/userInfo';
export { Credentials, UserInfo };
export { ResponseType } from './auth0-common';

/**
 * iOS Only
 * Used with AppDelegate applicationOpenURLOptions
 * @param url NSURL
 * @param options NSDictionary
 */
export declare function resumeAuth(url: any, options: any): boolean;

export interface WebAuthOptions {
	audience?: string;
	connection?: string;
	/**
	 * Not supported by iOS yet.
	 */
	nonce?: string;
	/**
	 * Not supported by iOS yet.
	 */
	responseType?: ResponseType;
	/**
	 * Not supported by iOS yet.
	 */
	scheme?: string;
	scope?: string;
	state?: string;
	parameters?: { [param: string]: string };
	redirectPrefix?: string;
}

export class WebAuthException extends Error {
	constructor(message);
}

export class Auth0 {
	constructor(clientId: string, domain: string);

	public webAuthentication(options: WebAuthOptions): Promise<Credentials>;
	public renewCredentials(refreshToken: string): Promise<Credentials>;
	public revokeRefreshToken(refreshToken: string): Promise<void>;
	public getUserInfo(accessToken: string): Promise<UserInfo>;
	public logoutUser(federated: boolean): Promise<boolean | string>;
}
