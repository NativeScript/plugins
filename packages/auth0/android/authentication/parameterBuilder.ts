/**
 * Builder for Auth0 Authentication API parameters
 * You can build your parameters like this
 * <pre>
 * {@code
 * parameters: { [key: string]: any } = ParameterBuilder.newBuilder()
 *      .setClientId("{CLIENT_ID}")
 *      .setConnection("{CONNECTION}")
 *      .set("{PARAMETER_NAME}", "{PARAMETER_VALUE}")
 *      .asDictionary();
 * }
 * </pre>
 *
 * @see ParameterBuilder#newBuilder()
 * @see ParameterBuilder#newAuthenticationBuilder()
 */
export class ParameterBuilder {
	public static readonly GRANT_TYPE_REFRESH_TOKEN: string = 'refresh_token';
	public static readonly GRANT_TYPE_PASSWORD: string = 'password';
	public static readonly GRANT_TYPE_PASSWORD_REALM: string = 'http://auth0.com/oauth/grant-type/password-realm';
	public static readonly GRANT_TYPE_AUTHORIZATION_CODE: string = 'authorization_code';
	public static readonly GRANT_TYPE_MFA_OTP: string = 'http://auth0.com/oauth/grant-type/mfa-otp';

	public static readonly SCOPE_OPENID: string = 'openid';
	public static readonly SCOPE_OFFLINE_ACCESS: string = 'openid offline_access';

	public static readonly ID_TOKEN_KEY: string = 'id_token';
	public static readonly SCOPE_KEY: string = 'scope';
	public static readonly REFRESH_TOKEN_KEY: string = 'refresh_token';
	public static readonly CONNECTION_KEY: string = 'connection';
	public static readonly REALM_KEY: string = 'realm';
	public static readonly ACCESS_TOKEN_KEY: string = 'access_token';
	public static readonly CLIENT_ID_KEY: string = 'client_id';
	public static readonly GRANT_TYPE_KEY: string = 'grant_type';
	public static readonly AUDIENCE_KEY: string = 'audience';

	private parameters: { [key: string]: any };

	constructor(parameters: { [key: string]: any }) {
		if (parameters == null) {
			throw new java.lang.IllegalArgumentException('Must provide non-null parameters');
		}
		this.parameters = Object.assign({}, parameters);
	}

	/**
	 * Sets the 'client_id' parameter
	 *
	 * @param clientId the application's client id
	 * @return itself
	 */
	public setClientId(clientId: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.CLIENT_ID_KEY, clientId);
	}

	/**
	 * Sets the 'grant_type' parameter
	 *
	 * @param grantType grant type
	 * @return itself
	 */
	public setGrantType(grantType: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.GRANT_TYPE_KEY, grantType);
	}

	/**
	 * Sets the 'connection' parameter
	 *
	 * @param connection name of the connection
	 * @return itself
	 */
	public setConnection(connection: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.CONNECTION_KEY, connection);
	}

	/**
	 * Sets the 'realm' parameter. A realm identifies the host against which the authentication will be made, and usually helps to know which username and password to use.
	 *
	 * @param realm name of the realm
	 * @return itself
	 */
	public setRealm(realm: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.REALM_KEY, realm);
	}

	/**
	 * Sets the 'scope' parameter.
	 *
	 * @param scope a scope value
	 * @return itself
	 */
	public setScope(scope: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.SCOPE_KEY, scope);
	}

	/**
	 * Sets the 'audience' parameter.
	 *
	 * @param audience an audience value
	 * @return itself
	 */
	public setAudience(audience: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.AUDIENCE_KEY, audience);
	}

	/**
	 * Sets the 'access_token' parameter
	 *
	 * @param accessToken a access token
	 * @return itself
	 */
	public setAccessToken(accessToken: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.ACCESS_TOKEN_KEY, accessToken);
	}

	/**
	 * Sets the 'refresh_token' parameter
	 *
	 * @param refreshToken a access token
	 * @return itself
	 */
	public setRefreshToken(refreshToken: string): ParameterBuilder {
		return this.setParameter(ParameterBuilder.REFRESH_TOKEN_KEY, refreshToken);
	}

	/**
	 * Sets a parameter
	 *
	 * @param key   parameter name
	 * @param value parameter value. A null value will remove the key if present.
	 * @return itself
	 */
	public setParameter(key: string, value: any): ParameterBuilder {
		if (value == null) {
			delete this.parameters[key];
		} else {
			this.parameters[key] = value;
		}
		return this;
	}

	/**
	 * Adds all parameter from a map
	 *
	 * @param parameters map with parameters to add. Null values will be skipped.
	 * @return itself
	 */
	public addAll(parameters: { [key: string]: any }): ParameterBuilder {
		if (parameters != null) {
			for (const k in parameters) {
				if (parameters[k] != null) {
					this.parameters[k] = parameters[k];
				}
			}
		}
		return this;
	}

	/**
	 * Clears all existing parameters
	 *
	 * @return itself
	 */
	public clearAll(): ParameterBuilder {
		this.parameters.clear();
		return this;
	}

	/**
	 * Create a {@link Map} with all the parameters
	 *
	 * @return all parameters added previously as a {@link Map}
	 */
	public asDictionary(): { [key: string]: any } {
		return Object.assign({}, this.parameters);
	}

	/**
	 * Creates a new instance of the builder using default values for login request, e.g. 'openid' for scope.
	 *
	 * @return a new builder
	 */
	public static newAuthenticationBuilder(): ParameterBuilder {
		return ParameterBuilder.newBuilder().setScope(ParameterBuilder.SCOPE_OPENID);
	}

	/**
	 * Creates a new instance of the builder.
	 * This builder may have some initial parameters.
	 *
	 * @param parameters initial parameters
	 * @return a new builder
	 */
	public static newBuilder(parameters?: { [key: string]: any }): ParameterBuilder {
		return new ParameterBuilder(parameters || {});
	}
}
