import { ISession, ITwitterUser } from './common';

export declare class TwitterError extends Error {
	readonly native;
}

export declare class TwitterUser implements ITwitterUser {
	readonly formattedScreenName: string;

	readonly isProtected: boolean;

	readonly isVerified: boolean;

	readonly name: string;

	readonly profileImageUrl: string;

	readonly profileUrl: string;

	readonly screenName: string;

	readonly userId: string;
}

export declare class Session implements ISession {
	readonly authToken: string;

	readonly authTokenSecret: string;

	readonly userName: string;

	readonly userId: string;

	readonly native;

	readonly ios;

	readonly android;
}

export declare class Twitter {
	static init(consumerKey: string, consumerSecret: string);
}

export declare class TwitterSignIn {
	static logIn(): Promise<Session>;
	static logOut();
	static getCurrentUser(): Promise<TwitterUser>
}
