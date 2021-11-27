import { AndroidApplication, Application, Utils, AndroidActivityResultEventData } from '@nativescript/core';
import { ISession, ITwitterUser } from './common';
export class TwitterError extends Error {
	#native: com.twitter.sdk.android.core.TwitterException;
	static fromNative(native, message?: string) {
		const error = new TwitterError(message || native?.getMessage?.());
		error.#native = native;
		return error;
	}

	get native() {
		return this.#native;
	}
}

export class TwitterUser implements ITwitterUser {
	#native: com.twitter.sdk.android.core.models.User;
	static fromNative(user: com.twitter.sdk.android.core.models.User) {
		if (user instanceof com.twitter.sdk.android.core.models.User) {
			const usr = new TwitterUser();
			usr.#native = user;
			return usr;
		}
		return null;
	}

	get formattedScreenName(): string {
		return com.twitter.sdk.android.core.internal.UserUtils.formatScreenName(this.native.screenName);
	}

	get isProtected(): boolean {
		return this.native.protectedUser;
	}

	get isVerified(): boolean {
		return this.native.verified;
	}

	get name(): string {
		return this.native.name;
	}

	get profileImageUrl(): string {
		return this.native.profileImageUrl;
	}

	get profileUrl(): string {
		return this.native.url;
	}

	get screenName(): string {
		return this.native.screenName;
	}

	get userId(): string {
		return this.native.idStr;
	}

	get native() {
		return this.#native;
	}

	get android() {
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

export class Twitter {
	static init(consumerKey: string, consumerSecret: string) {
		const config = new com.twitter.sdk.android.core.TwitterConfig.Builder(Utils.android.getApplicationContext());
		config.twitterAuthConfig(new com.twitter.sdk.android.core.TwitterAuthConfig(consumerKey, consumerSecret));
		com.twitter.sdk.android.core.Twitter.initialize(config.build());
	}
}

export class Session implements ISession {
	#native: com.twitter.sdk.android.core.TwitterSession;
	#authToken: string;
	#authTokenSecret: string;

	static fromNative(ts: com.twitter.sdk.android.core.TwitterSession) {
		if (ts instanceof com.twitter.sdk.android.core.TwitterSession) {
			const session = new Session();
			session.#native = ts;
			return session;
		}
		return null;
	}

	get authToken() {
		if (!this.#authToken) {
			this.#authToken = this.native.getAuthToken().token;
		}
		return this.#authToken;
	}

	get authTokenSecret(): string {
		if (!this.#authTokenSecret) {
			this.#authTokenSecret = this.native.getAuthToken().secret;
		}
		return this.#authTokenSecret;
	}

	get userName() {
		return this.native.getUserName();
	}

	get userId() {
		return String(this.native.getUserId());
	}

	get native() {
		return this.#native;
	}
	get android() {
		return this.native;
	}
}

let Callback;
function ensureClass() {
	if (Callback) {
		return;
	}
	@NativeClass()
	class CallbackImpl extends com.twitter.sdk.android.core.Callback<com.twitter.sdk.android.core.TwitterSession> {
		_resolve;
		_reject;
		constructor(resolve, reject) {
			super();
			this._resolve = resolve;
			this._reject = reject;
			return global.__native(this);
		}

		success(param0: com.twitter.sdk.android.core.Result<com.twitter.sdk.android.core.TwitterSession>) {
			this._resolve?.(Session.fromNative(param0.data));
		}

		failure(param0: com.twitter.sdk.android.core.TwitterException) {
			this._reject?.(TwitterError.fromNative(param0));
		}
	}
	Callback = CallbackImpl;
}

export class TwitterSignIn {
	static #client: com.twitter.sdk.android.core.identity.TwitterAuthClient;
	static #didAttach = false;
	static logIn() {
		ensureClass();
		return new Promise((resolve, reject) => {
			if (!this.#client) {
				this.#client = new com.twitter.sdk.android.core.identity.TwitterAuthClient();
			}

			if (!this.#didAttach) {
				Application.android.on(AndroidApplication.activityResultEvent, (data: AndroidActivityResultEventData) => {
					if (this.#client && this.#client.getRequestCode() === data.requestCode) {
						this.#client.onActivityResult(data.requestCode, data.resultCode, data.intent);
					}
				});

				this.#didAttach = true;
			}

			this.#client.authorize(Application.android.foregroundActivity || Application.android.startActivity, new Callback(resolve, reject));
		});
	}
	static logOut() {
		try {
			const instance = com.twitter.sdk.android.core.TwitterCore.getInstance();
			const sessionManager = instance.getSessionManager();
			const sessions = sessionManager.getSessionMap();

			const sessids = sessions.keySet().toArray();
			for (let i = 0; i < sessids.length; i++) {
				const sessid = sessids[i];
				instance.getSessionManager().clearSession(sessid);
			}

			sessionManager.clearActiveSession();
		} catch (e) { }
	}

	static getCurrentUser() {
		return new Promise((resolve, reject) => {
			org.nativescript.plugins.twitter.Twitter.verifyUser(
				false,
				false,
				true,
				new org.nativescript.plugins.twitter.Twitter.Callback<com.twitter.sdk.android.core.models.User>({
					onSuccess(user) {
						resolve(TwitterUser.fromNative(user));
					},
					onError(e) {
						reject(TwitterError.fromNative(e));
					},
				})
			);
		});
	}
}
