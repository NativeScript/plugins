import { ISession, ITwitterUser } from './common';

export class TwitterError extends Error {
	#native: NSError;
	static fromNative(native: NSError, message?: string) {
		const error = new TwitterError(message || native?.localizedDescription);
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}
}

let appDelegateInitialized = false;
let appDelegate: TwitterAppDelegateImpl;
@NativeClass
@ObjCClass(UIApplicationDelegate)
class TwitterAppDelegateImpl extends UIResponder implements UIApplicationDelegate {
	static get sharedInstance() {
		if (!appDelegate) {
			appDelegate = TwitterAppDelegateImpl.alloc().init() as TwitterAppDelegateImpl;
		}
		return appDelegate;
	}

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
		return TWTRTwitter.sharedInstance().applicationOpenURLOptions(app, url, options);
	}
}

export class TwitterUser implements ITwitterUser {
	#native: TWTRUser;
	static fromNative(user: TWTRUser) {
		if (user instanceof TWTRUser) {
			const usr = new TwitterUser();
			usr.#native = user;
			return usr;
		}
		return null;
	}

	get formattedScreenName(): string {
		return this.native.formattedScreenName;
	}

	get isProtected(): boolean {
		return this.native.isProtected;
	}

	get isVerified(): boolean {
		return this.isVerified;
	}

	get name(): string {
		return this.native.name;
	}

	get profileImageUrl(): string {
		return this.native.profileImageURL;
	}

	get profileUrl(): string {
		return this.native.profileURL?.absoluteString;
	}

	get screenName(): string {
		return this.native.screenName;
	}

	get userId(): string {
		return this.native.userID;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}
}

export class Session implements ISession {
	#native: TWTRSession;
	static fromNative(ts: TWTRSession) {
		if (ts instanceof TWTRSession) {
			const session = new Session();
			session.#native = ts;
			return session;
		}
		return null;
	}

	get authToken() {
		return this.native.authToken;
	}

	get authTokenSecret() {
		return this.native.authTokenSecret;
	}

	get userName() {
		return this.native.userName;
	}

	get userId() {
		return this.native.userID;
	}

	get native() {
		return this.#native;
	}
	get ios() {
		return this.native;
	}
}

export class Twitter {
	static init(consumerKey: string, consumerSecret: string) {
		TWTRTwitter.sharedInstance().startWithConsumerKeyConsumerSecret(consumerKey, consumerSecret);

		if (!appDelegateInitialized) {
			GULAppDelegateSwizzler.proxyOriginalDelegate();
			GULAppDelegateSwizzler.registerAppDelegateInterceptor(TwitterAppDelegateImpl.sharedInstance);
			appDelegateInitialized = true;
		}
	}
}

export class TwitterSignIn {
	static logIn() {
		return new Promise((resolve, reject) => {
			TWTRTwitter.sharedInstance().logInWithCompletion((session, error) => {
				if (session) {
					resolve(Session.fromNative(session));
				} else {
					reject(TwitterError.fromNative(error));
				}
			});
		});
	}
	static logOut() {
		const store = TWTRTwitter.sharedInstance().sessionStore;
		if (store) {
			const userId = store.session()?.userID;
			store.logOutUserID?.(userId);
		}
	}

	static getCurrentUser(): Promise<TwitterUser> {
		return new Promise((resolve, reject) => {
			const store = TWTRTwitter.sharedInstance().sessionStore;
			if (store) {
				const userId = store.session()?.userID || '';
				TWTRAPIClient.clientWithCurrentUser().loadUserWithIDCompletion(userId, (user, error) => {
					if (error) {
						reject(TwitterError.fromNative(error));
					} else {
						resolve(TwitterUser.fromNative(user));
					}
				});
			} else {
				resolve(null);
			}
		});
	}
}
