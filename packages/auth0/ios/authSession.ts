import { AuthTransaction } from './authTransaction';
import { Credentials } from '../common/credentials';
import { Logger } from './logger';
import { Result } from './result';
import { OAuth2Grant } from './oauth2Grant';
import { AuthenticationError } from './authenticationError';
import { WebAuthError } from './webAuthError';

export class AuthSession implements AuthTransaction {
	readonly redirectURL: NSURL;
	readonly state: string | undefined;
	readonly finish: (result: Result<Credentials>) => void;
	readonly handler: OAuth2Grant;
	readonly logger: Logger | undefined;

	constructor(redirectURL: NSURL, state: string | undefined = undefined, handler: OAuth2Grant, finish: (result: Result<Credentials>) => void, logger: Logger | undefined) {
		this.redirectURL = redirectURL;
		this.state = state;
		this.finish = finish;
		this.handler = handler;
		this.logger = logger;
	}

	/**
     Tries to resume (and complete) the OAuth2 session from the received URL

     - parameter url:     url received in application's AppDelegate
     - parameter options: a dictionary of launch options received from application's AppDelegate

     - returns: `true` if the url completed (successfuly or not) this session, `false` otherwise
     */
	public resume(url: NSURL, options: NSDictionary<string, any> = NSDictionary.alloc<string, any>()): boolean {
		if (this.logger != null) {
			this.logger.trace(url, 'iOS Safari');
		}
		const hasPrefix = url.absoluteString.toLowerCase().startsWith(this.redirectURL.absoluteString.toLowerCase());
		if (hasPrefix === false) {
			return false;
		}

		const components = new NSURLComponents({ URL: url, resolvingAgainstBaseURL: true });
		if (components == null) {
			this.finish({
				failure: new AuthenticationError(url.absoluteString, 200),
			});
			return false;
		}
		let items = this.handler.values(components);
		const has = this.has(this.state, items);
		if (has === false) {
			return false;
		}
		if (items['error'] != null) {
			this.finish({
				failure: new AuthenticationError(items, 0),
			});
		} else {
			this.handler.credentials(items, this.finish);
		}
		return true;
	}

	public cancel() {
		this.finish({
			failure: WebAuthError.userCancelled,
		});
	}

	private has(state: string | undefined, items: { [key: string]: string }): boolean {
		return state === null || items['state'] === state;
	}
}
