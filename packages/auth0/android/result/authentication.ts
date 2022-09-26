import { UserInfo } from '../../common/userInfo';
import { Credentials } from '../../common/credentials';

/**
 * The result of a successful authentication against Auth0
 * Contains the logged in user's {@link Credentials} and {@link UserProfile}.
 *
 * @see AuthenticationAPIClient#getProfileAfter(AuthenticationRequest)
 */
export class Authentication {
	private readonly profile: UserInfo;
	private readonly credentials: Credentials;

	constructor(profile: UserInfo, credentials: Credentials) {
		if (profile == null) {
			throw new Error('profile must be non-null');
		}
		if (credentials == null) {
			throw new Error('credentials must be non-null');
		}
		this.profile = profile;
		this.credentials = credentials;
	}

	public getProfile(): UserInfo {
		return this.profile;
	}

	public getCredentials(): Credentials {
		return this.credentials;
	}
}
