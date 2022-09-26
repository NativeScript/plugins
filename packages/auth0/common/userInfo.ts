/// OIDC Standard Claims user information
/// - note: [Claims](https://auth0.com/docs/protocols/oidc#claims)
export class UserInfo {
	public static readonly publicClaims = ['sub', 'name', 'given_name', 'family_name', 'middle_name', 'nickname', 'preferred_username', 'profile', 'picture', 'website', 'email', 'email_verified', 'gender', 'birthdate', 'zoneinfo', 'locale', 'phone_number', 'phone_number_verified', 'address', 'updated_at'];

	public readonly sub: string;

	public readonly name: string | undefined;
	public readonly givenName: string | undefined;
	public readonly familyName: string | undefined;
	public readonly middleName: string | undefined;
	public readonly nickname: string | undefined;
	public readonly preferredUsername: string | undefined;

	public readonly profileURL: string | undefined;
	public readonly pictureURL: string | undefined;
	public readonly websiteURL: string | undefined;

	public readonly email: string | undefined;
	public readonly emailVerified: boolean | undefined;

	public readonly gender: string | undefined;
	public readonly birthdate: string | undefined;

	public readonly zoneinfo: string | undefined;
	public readonly locale: string | undefined;

	public readonly phoneNumber: string | undefined;
	public readonly phoneNumberVerified: boolean | undefined;

	public readonly address: { [key: string]: string } | undefined;
	public readonly updatedAt: Date | undefined;

	public readonly customClaims: { [key: string]: any } | undefined;

	constructor(
		sub: string,
		name: string | undefined,
		givenName: string | undefined,
		familyName: string | undefined,
		middleName: string | undefined,
		nickname: string | undefined,
		preferredUsername: string | undefined,
		profileURL: string | undefined,
		pictureURL: string | undefined,
		websiteURL: string | undefined,
		email: string | undefined,
		emailVerified: boolean | undefined,
		gender: string | undefined,
		birthdate: string | undefined,
		zoneinfo: string | undefined,
		locale: string | undefined,
		phoneNumber: string | undefined,
		phoneNumberVerified: boolean | undefined,
		address: { [key: string]: string } | undefined,
		updatedAt: Date | undefined,
		customClaims: { [key: string]: any } | undefined
	) {
		this.sub = sub;

		this.name = name;
		this.givenName = givenName;
		this.familyName = familyName;
		this.middleName = middleName;
		this.nickname = nickname;
		this.preferredUsername = preferredUsername;

		this.profileURL = profileURL;
		this.pictureURL = pictureURL;
		this.websiteURL = websiteURL;

		this.email = email;
		this.emailVerified = emailVerified;

		this.gender = gender;
		this.birthdate = birthdate;

		this.zoneinfo = zoneinfo;
		this.locale = locale;

		this.phoneNumber = phoneNumber;
		this.phoneNumberVerified = phoneNumberVerified;
		this.address = address;

		this.updatedAt = updatedAt;

		this.customClaims = customClaims;
	}

	public static initWithJson(json: { [key: string]: any }): UserInfo | undefined {
		const sub = json['sub'];
		if (sub == null) {
			return undefined;
		}

		const name = json['name'];
		const givenName = json['given_name'];
		const familyName = json['family_name'];
		const middleName = json['middle_name'];
		const nickname = json['nickname'];
		const preferredUsername = json['preferred_username'];

		const profileURL = json['profile'];
		const pictureURL = json['picture'];
		const websiteURL = json['website'];

		const email = json['email'];
		let emailVerified: boolean | undefined;
		const emailVerifiedRaw = json['email_verified'];
		if (emailVerifiedRaw != null) {
			emailVerified = typeof emailVerifiedRaw === 'boolean' ? emailVerifiedRaw : emailVerifiedRaw === 'true';
		}

		const gender = json['gender'];
		const birthdate = json['birthdate'];

		const zoneinfo = json['zoneinfo'];
		const locale = json['locale'];

		const phoneNumber = json['phone_number'];
		let phoneNumberVerified: boolean | undefined;
		const phoneNumberVerifiedRaw = json['phone_number_verified'];
		if (phoneNumberVerifiedRaw != null) {
			phoneNumberVerified = typeof phoneNumberVerifiedRaw === 'boolean' ? phoneNumberVerifiedRaw : phoneNumberVerifiedRaw === 'true';
		}
		const address = json['address'] as { [key: string]: string } | undefined;

		let updatedAt: Date | undefined;
		const dateString = json['updated_at'];
		if (dateString != null) {
			updatedAt = new Date(dateString);
		}

		let customClaims = {};
		for (const key in json) {
			if (UserInfo.publicClaims.indexOf(key) > -1) {
				continue;
			}

			customClaims[key] = json[key];
		}

		return new UserInfo(sub, name, givenName, familyName, middleName, nickname, preferredUsername, profileURL, pictureURL, websiteURL, email, emailVerified, gender, birthdate, zoneinfo, locale, phoneNumber, phoneNumberVerified, address, updatedAt, customClaims);
	}

	public toJSON() {
		const data = {
			sub: this.sub,
			name: this.name,
			given_name: this.givenName,
			family_name: this.familyName,
			middle_name: this.middleName,
			nickname: this.nickname,
			preferred_username: this.preferredUsername,
			profile: this.profileURL,
			picture: this.pictureURL,
			website: this.websiteURL,
			email: this.email,
			email_verified: this.emailVerified,
			gender: this.gender,
			birthdate: this.birthdate,
			zoneinfo: this.zoneinfo,
			locale: this.locale,
			phone_number: this.phoneNumber,
			phone_number_verified: this.phoneNumberVerified,
			address: this.address,
			updated_at: this.updatedAt,
		};
		for (const key in this.customClaims) {
			data[key] = this.customClaims[key];
		}
		return data;
	}
}
