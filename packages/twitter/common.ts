export interface ISession {
	readonly authToken: string;

	readonly authTokenSecret: string;

	readonly userName: string;

	readonly userId: string;
}

export interface ITwitterUser {
	readonly formattedScreenName: string;

	readonly isProtected: boolean;

	readonly isVerified: boolean;

	readonly name: string;

	readonly profileImageUrl: string;

	readonly profileUrl: string;

	readonly screenName: string;

	readonly userId: string;
}
