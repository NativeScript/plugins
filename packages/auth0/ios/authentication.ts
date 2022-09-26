import { Loggable } from './loggable';
import { Trackable, Telemetry } from './telemetry';
import { Credentials } from '../common/credentials';
import { Request } from './request';
import { AuthenticationError } from './authenticationError';
import { UserInfo } from '../common/userInfo';
import { WebAuth } from './webAuth';
import { Logger } from './logger';
import { DatabaseUser } from '../common/databaseUser';

/**
 Auth endpoints of Auth0
 - seeAlso: [Auth0 Auth API docs](https://auth0.com/docs/api/authentication)
 */
export abstract class Authentication implements Trackable, Loggable {
	abstract readonly clientId: string;
	abstract readonly url: NSURL;
	abstract readonly telemetry: Telemetry;
	abstract readonly logger: Logger | undefined;

	/**
     Login using username and password in a realm.

     ```
     Auth0
     .authentication(clientId: clientId, domain: "samples.auth0.com")
     .login(
         usernameOrEmail: "support@auth0.com",
         password: "a secret password",
         realm: "mydatabase")
     ```

     You can also specify audience and scope

     ```
     Auth0
     .authentication(clientId: clientId, domain: "samples.auth0.com")
     .login(
         usernameOrEmail: "support@auth0.com",
         password: "a secret password",
         realm: "mydatabase",
         audience: "https://myapi.com/api",
         scope: "openid profile")
     ```

     - parameter username:    username or email used of the user to authenticate
     - parameter password:    password of the user
     - parameter realm:       domain of the realm or connection name
     - parameter audience:    API Identifier that the client is requesting access to.
     - parameter scope:       scope value requested when authenticating the user.
     - parameter parameters:  additional parameters that are optionally sent with the authentication request

     - important: This only works if you have the OAuth 2.0 API Authorization flag on
     - returns: authentication request that will yield Auth0 User Credentials
     - requires: Grant `https://auth0.com/docs/api-auth/grant/password#realm-support`. Check [our documentation](https://auth0.com/docs/clients/client-grant-types) for more info and how to enable it.
     */
	public abstract login(username: string, password: string, realm: string, audience?: string | undefined, scope?: string | undefined, parameters?: { [param: string]: any } | undefined): Request<Credentials, AuthenticationError>;

	/**
     Login using One Time Password and MFA token.

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .login(withOTP: "123456", mfaToken: "mfa token value")
     }
     ```

     - parameter otp:       One time password supplied by MFA Authenticator
     - parameter mfaToken:  Token returned when authentication fails due to MFA requirement

     - requires: Grant `http://auth0.com/oauth/grant-type/mfa-otp`. Check [our documentation](https://auth0.com/docs/clients/client-grant-types) for more info and how to enable it.
     */
	public abstract loginWithOTP(otp: string, mfaToken: string): Request<Credentials, AuthenticationError>;

	/**
     Creates a user in a Database connection

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .createUser(email: "support@auth0.com", password: "a secret password", connection: "Username-Password-Authentication")
        .start { print($0) }
     ```

     you can also add additional attributes when creating the user

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .createUser(email: "support@auth0.com", password: "a secret password", connection: "Username-Password-Authentication", userMetadata: ["first_name": "support"])
        .start { print($0) }
     ```

     and if the database connection requires a username

     ```
     Auth0
        .authentication(clientId, domain: "samples.auth0.com")
        .createUser(email: "support@auth0.com", username: "support", password: "a secret password", connection: "Username-Password-Authentication")
        .start { print($0) }
     ```

     - parameter email:             email of the user to create
     - parameter username:          username of the user if the connection requires username. By default is 'null'
     - parameter password:          password for the new user
     - parameter connection:        name where the user will be created (Database connection)
     - parameter userMetadata:      additional userMetadata parameters that will be added to the newly created user.

     - returns: request that will yield a created database user (just email, username and email verified flag)
     */
	public abstract createUser(email: string, username: string | undefined, password: string, connection: string, userMetadata?: { [key: string]: any } | undefined): Request<DatabaseUser, AuthenticationError>;

	/**
     Resets a Database user password

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .resetPassword(email: "support@auth0.com", connection: "Username-Password-Authentication")
        .start { print($0) }
     ```

     - parameter email:      email of the database user
     - parameter connection: name of the Database connection

     - returns: request to reset password
     */
	public abstract resetPassword(email: string, connection: string): Request<void, AuthenticationError>;

	/**
     Returns OIDC standard claims information by performing a request
     to /userinfo endpoint.

     ```
     Auth0
     .authentication(clientId, domain: "samples.auth0.com")
     .userInfo(withAccessToken: accessToken)
     .start { print($0) }
     ```

     - parameter accessToken: accessToken obtained by authenticating the user

     - returns: a request that will yield user information
     - important: This method should be used for OIDC Conformant clients.
     */
	public abstract userInfo(accessToken: string): Request<UserInfo, AuthenticationError>;

	/**
     Perform a OAuth2 token request against Auth0.

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .tokenExchange(withParameters: ["key": "value"])
        .start { print($0) }
     ```

     - parameter parameters: request parameters

     - returns: a request that will yield Auth0 user's credentials
     - seeAlso: exchangeCode(codeVerifier:, redirectURI:) for PKCE
     */
	public abstract tokenExchangeWithParameters(parameters: { [key: string]: any }): Request<Credentials, AuthenticationError>;

	/**
     Performs the last step of Proof Key for Code Exchange [RFC 7636](https://tools.ietf.org/html/rfc7636).

     This will request User's token using the code and it's verifier after a request to `/oauth/authorize`

     ```
     Auth0
        .authentication(clientId: clientId, domain: "samples.auth0.com")
        .tokenExchange(withCode: "a code", codeVerifier: "code verifier", redirectURI: "https://samples.auth0.com/callback")
        .start { print($0) }
     ```

     - parameter code:         code returned after an `/oauth/authorize` request
     - parameter codeVerifier: verifier used to generate the challenge sent in `/oauth/authorize` request
     - parameter redirectURI:  redirect uri sent in `/oauth/authorize` request

     - returns: a request that will yield Auth0 user's credentials
     - seeAlso: https://tools.ietf.org/html/rfc7636
     */
	public abstract tokenExchangeWithCode(code: string, codeVerifier: string, redirectURI: string): Request<Credentials, AuthenticationError>;

	/**
     Renew user's credentials with a refresh_token grant for `/oauth/token`
     If you are not using OAuth 2.0 API Authorization please use `delegation(parameters:)`
     - parameter refreshToken: the client's refresh token obtained on auth
     - important: This method only works for a refresh token obtained after auth with OAuth 2.0 API Authorization.
     - returns: a request that will yield Auth0 user's credentials
     */
	public abstract renew(refreshToken: string): Request<Credentials, AuthenticationError>;

	/**
     Revoke a user's refresh_token with a call to `/oauth/revoke`

     ```
     Auth0
     .authentication(clientId: clientId, domain: "samples.auth0.com")
     .revoke(refreshToken: refreshToken)
     .start { print($0) }
     ```

     - parameter refreshToken: the client's refresh token obtained on auth
     - returns: a request
     */
	public abstract revoke(refreshToken: string): Request<void, AuthenticationError>;

	/**
     Creates a new WebAuth request to authenticate using Safari browser and OAuth authorize flow.

     With the connection name Auth0 will redirect to the associated IdP login page to authenticate

     ```
     Auth0
     .authentication(clientId: clientId, domain: "samples.auth0.com")
     .webAuth(withConnection: "facebook")
     .start { print($0) }
     ```

     If you need to show your Auth0 account login page just create the WebAuth object directly

     ```
     Auth0
        .webAuth(clientId: clientId, domain: "samples.auth0.com")
        .start { print($0) }
     ```

     - parameter connection: name of the connection to use
     - returns: a newly created WebAuth object.
     */
	public abstract webAuth(connection: string): WebAuth;
}
