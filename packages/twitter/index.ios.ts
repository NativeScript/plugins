import { Application, Device } from '@nativescript/core';
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
let appDelegate;

@ObjCClass(UIApplicationDelegate)
@NativeClass
class TwitterAppDelegateImpl extends UIResponder implements UIApplicationDelegate {
	static get sharedInstance() {
		if (!appDelegate) {
			appDelegate = TwitterAppDelegateImpl.alloc().init() as TwitterAppDelegateImpl;
		}
		return appDelegate;
	}

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
		TNSTwitter.handleOpenURL(url.absoluteString, Twitter.callback, false);
		return true;
	}

}


if (parseFloat(Device.sdkVersion) >= 13) {
	(<any>TwitterAppDelegateImpl).prototype.applicationConfigurationForConnectingSceneSessionOptions = (application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions) => {
		return UISceneConfiguration.configurationWithNameSessionRole(
			"Default Configuration",
			connectingSceneSession.role
		)
	}
}


export class TwitterUser implements ITwitterUser {
	#native: any;
	static fromNative(user: any) {
		if (user) {
			const usr = new TwitterUser();
			usr.#native = user;
			return usr;
		}
		return null;
	}

	get formattedScreenName(): string {
		return this.native.screen_name;
	}

	get isProtected(): boolean {
		return this.native.protected;
	}

	get isVerified(): boolean {
		return this.native.verified;
	}

	get name(): string {
		return this.native.name;
	}

	get profileImageUrl(): string {
		return this.native.profile_image_url_https;
	}

	get profileUrl(): string {
		return this.native.url;
	}

	get screenName(): string {
		return this.native.screen_name;
	}

	get userId(): string {
		return this.native.id_str;
	}

	get native() {
		return this.#native;
	}

	get ios() {
		return this.native;
	}


	toJSON() {
		return {
			formattedScreenName: this.formattedScreenName,
			isProtected: this.isProtected,
			isVerified: this.isVerified,
			name: this.name,
			profileImageUrl: this.profileImageUrl,
			profileUrl: this.profileUrl,
			screenName: this.screenName,
			userId: this.userId
		}
	}
}

export class Session implements ISession {
	#native: any;
	static fromNative(ts) {
		if (ts) {
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
	static _twitter: TNSTwitter;
	static callback: string;
	static init(consumerKey: string, consumerSecret: string) {
		this._twitter = TNSTwitter.alloc().init(consumerKey, consumerSecret);

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
			Twitter._twitter.authorizeWithBrowser(this.topViewController, Twitter.callback, (user, error) => {
				if (user) {
					try {
						resolve(Session.fromNative(JSON.parse(user)));
					} catch (e) {
						reject(TwitterError.fromNative(e));
					}
				} else {
					reject(TwitterError.fromNative(error));
				}
			})
		});
	}

	static logOut() { }

	static getCurrentUser(): Promise<TwitterUser> {
		return new Promise((resolve, reject) => {
			Twitter._twitter.verifyUser(false, false, true, (user, error) => {
				if (error) {
					reject(TwitterError.fromNative(error));
				} else {
					try {
						resolve(TwitterUser.fromNative(JSON.parse(user)));
					} catch (e) {
						reject(TwitterError.fromNative(e));
					}

				}
			})
		});
	}



	private static get topViewController(): UIViewController | undefined {
		const root = this.rootViewController;
		if (!root) {
			return undefined;
		}
		return this.findTopViewController(root);
	}

	private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow ? keyWindow.rootViewController : undefined;
	}

	private static findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return this.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return this.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return this.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return this.findTopViewController(selected);
		} else {
			return root;
		}
	}
}
