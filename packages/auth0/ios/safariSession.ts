import { OAuth2Grant } from './oauth2Grant';
import { AuthSession } from './authSession';
import { Result } from './result';
import { Credentials } from '../common/credentials';
import { Logger } from './logger';
import { TransactionStore } from './transactionStore';

@NativeClass()
export class SafariSessionDelegate extends NSObject {
	public static ObjCProtocols = [SFSafariViewControllerDelegate];
	private _owner: WeakRef<SafariSession>;

	public static initWithOwner(owner: WeakRef<SafariSession>): SafariSessionDelegate {
		const delegate = SafariSessionDelegate.new() as SafariSessionDelegate;
		delegate._owner = owner;

		return delegate;
	}

	public safariViewControllerDidFinish(controller: SFSafariViewController) {
		TransactionStore.shared.cancel(this._owner.get());
	}
}

export class SafariSession extends AuthSession {
	controller: WeakRef<UIViewController>;
	private _delegate: SafariSessionDelegate;

	constructor(controller: SFSafariViewController, redirectURL: NSURL, state: string | undefined = undefined, handler: OAuth2Grant, finish: (result: Result<Credentials>) => void, logger: Logger | undefined) {
		super(redirectURL, state, handler, finish, logger);
		this.controller = new WeakRef(controller);
		this._delegate = SafariSessionDelegate.initWithOwner(new WeakRef(this));
		controller.delegate = this._delegate;
	}
}
