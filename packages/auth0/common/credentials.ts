/**
 User's credentials obtained from Auth0.
 What values are available depends on what type of Auth request you perfomed,
 so if you used WebAuth (`/authorize` call) the `response_type` and `scope` will determine what tokens you get
 */
export class Credentials {
	/// Token used that allows calling to the requested APIs (audience sent on Auth)
	public readonly accessToken: string | undefined;
	/// Type of the access token
	public readonly tokenType: string | undefined;
	/// The token lifetime in seconds
	public readonly expiresIn: number | undefined;
	/// The token expiration date
	public readonly expiresAt: Date | undefined;
	/// If the API allows you to request new access tokens and the scope `offline_access` was included on Auth
	public readonly refreshToken: string | undefined;

	// Token that details the user identity after authentication
	public readonly idToken: string | undefined;
	// Granted scopes, only populated when a requested scope or scopes was not granted and Auth is OIDC Conformant
	public readonly scope: string | undefined;

	constructor(accessToken: string | undefined = undefined, tokenType: string | undefined = undefined, idToken: string | undefined = undefined, refreshToken: string | undefined = undefined, expiresIn: number | undefined = undefined, expiresAt: Date | undefined = undefined, scope: string | undefined = undefined) {
		this.accessToken = accessToken;
		this.tokenType = tokenType;
		this.idToken = idToken;
		this.refreshToken = refreshToken;
		this.expiresIn = expiresIn;
		this.expiresAt = expiresAt;
		this.scope = scope;

		if (expiresAt == null && expiresIn != null) {
			this.expiresAt = new Date(Date.now() + expiresIn * 1000);
		}
		if (expiresIn == null && expiresAt != null) {
			this.expiresIn = (expiresAt.getTime() - Date.now()) / 1000;
		}
	}

	public static initWithJson(json: { [key: string]: any }): Credentials {
		const accessToken = json['access_token'];
		const tokenType = json['token_type'];
		const idToken = json['id_token'];
		const refreshToken = json['refresh_token'];
		const expiresIn = json['expires_in'];
		const expiresAt = json['expires_at'];
		const scope = json['scope'];
		return new Credentials(accessToken, tokenType, idToken, refreshToken, expiresIn != null ? Number(expiresIn) : undefined, expiresAt != null ? new Date(expiresAt) : undefined, scope);
	}

	public toJSON() {
		return {
			access_token: this.accessToken,
			token_type: this.tokenType,
			id_token: this.idToken,
			refresh_token: this.refreshToken,
			expires_in: this.expiresIn,
			expires_at: this.expiresAt,
			scope: this.scope,
		};
	}
}
