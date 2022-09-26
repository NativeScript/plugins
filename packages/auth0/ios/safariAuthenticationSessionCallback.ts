import { AuthTransaction } from './authTransaction';
import { TransactionStore } from './transactionStore';

export class SafariAuthenticationSessionCallback implements AuthTransaction {
	public state: string | undefined;
	public authSession: SFAuthenticationSession | undefined;
	public callback: (result: boolean) => void = () => {};

	constructor(url: NSURL, schemeURL: string, callback: (result: boolean) => void) {
		this.callback = callback;
		this.authSession = new SFAuthenticationSession({
			URL: url,
			callbackURLScheme: schemeURL,
			completionHandler: (url, error) => {
				this.callback(url != null);
				TransactionStore.shared.clear();
			},
		});
		this.authSession.start();
	}

	public resume(url: NSURL, options: { [key: string]: any }): boolean {
		this.callback(true);
		return true;
	}

	public cancel() {
		this.callback(false);
	}
}
