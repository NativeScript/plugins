import { Credentials } from './common/credentials';
import { UserInfo } from './common/userInfo';

export enum ResponseType {
	CODE = 1,
	TOKEN = 2,
	ID_TOKEN = 4,
}

export interface WebAuthOptions {
	audience?: string;
	connection?: string;
	nonce?: string;
	responseType?: ResponseType;
	scheme?: string;
	scope?: string;
	state?: string;
	parameters?: { [param: string]: string };
}

export class WebAuthException extends Error {
	constructor(message) {
		super(message);
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

export abstract class Auth0Common {
	constructor(protected clientId: string, protected domain: string) {}

	public abstract webAuthentication(options: WebAuthOptions): Promise<Credentials>;
	public abstract renewCredentials(refreshToken: string): Promise<Credentials>;
	public abstract revokeRefreshToken(refreshToken: string): Promise<void>;
	public abstract getUserInfo(accessToken: string): Promise<UserInfo>;
	public abstract logoutUser(federated: boolean): Promise<boolean | string>;
}
