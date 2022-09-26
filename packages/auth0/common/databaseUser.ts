/**
 * Auth0 user created in a Database connection.
 *
 * @see AuthenticationAPIClient#signUp(String, String, String)
 */
export class DatabaseUser {
	public readonly email: string | undefined;
	public readonly username: string | undefined;
	public readonly emailVerified: boolean | undefined;

	constructor(email: string | undefined = undefined, username: string | undefined = undefined, emailVerified: boolean | undefined = undefined) {
		this.email = email;
		this.username = username;
		this.emailVerified = emailVerified;
	}

	public static initWithJson(json: { [key: string]: any }): DatabaseUser {
		const username = json['username'];

		const email = json['email'];
		let emailVerified: boolean | undefined;
		const emailVerifiedRaw = json['email_verified'];
		if (emailVerifiedRaw != null) {
			emailVerified = typeof emailVerifiedRaw === 'boolean' ? emailVerifiedRaw : emailVerifiedRaw === 'true';
		}
		return new DatabaseUser(email, username, emailVerified);
	}

	public toJSON() {
		return {
			email: this.email,
			username: this.username,
			email_verified: this.emailVerified,
		};
	}
}
