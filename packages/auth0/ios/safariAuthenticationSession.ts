import { AuthSession } from './authSession';
import { Credentials } from '../common/credentials';
import { Result } from './result';
import { Logger } from './logger';
import { OAuth2Grant } from './oauth2Grant';
import { TransactionStore } from './transactionStore';
import { WebAuthError } from './webAuthError';

export class SafariAuthenticationSession extends AuthSession {
	public authSession: SFAuthenticationSession | undefined;
	public readonly authorizeURL: NSURL;

	constructor(authorizeURL: NSURL, redirectURL: NSURL, state: string | undefined = null, handler: OAuth2Grant, finish: (result: Result<Credentials>) => void, logger: Logger | undefined) {
		super(redirectURL, state, handler, finish, logger);
		this.authorizeURL = authorizeURL;
		this.authSession = new SFAuthenticationSession({
			URL: this.authorizeURL,
			callbackURLScheme: this.redirectURL.absoluteString,
			completionHandler: (url, error) => {
				if (error != null || url == null) {
					if (SFAuthenticationError.CanceledLogin === error.code) {
						this.finish({
							failure: WebAuthError.userCancelled,
						});
					} else {
						this.finish({
							failure: new WebAuthError(error.description),
						});
					}
					return TransactionStore.shared.clear();
				}
				const _ = TransactionStore.shared.resume(url, NSDictionary.dictionary());
			},
		});
		if (this.authSession != null) {
			this.authSession.start();
		}
	}
}
