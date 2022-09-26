import { Loggable } from './loggable';
import { Logger } from './logger';
import { ResponseType } from './responseType';
import { SafariWebAuth } from './safariWebAuth';
import { TransactionStore } from './transactionStore';
import { a0_url } from './utils';
import { Trackable, Telemetry } from './telemetry';
import { Credentials } from '../common/credentials';
import { Result } from './result';

/**
 Auth0 iOS component for authenticating with web-based flow

 ```
 Auth0.webAuth(clientId: clientId, domain: "samples.auth0.com")
 ```

 - parameter clientId: id of your Auth0 client
 - parameter domain:   name of your Auth0 domain

 - returns: Auth0 WebAuth component
 */
/*export function webAuth(clientId: string, domain: string): WebAuth {
    return SafariWebAuth.init(clientId, a0_url(domain));
}*/

/**
 Resumes the current Auth session (if any).

 - parameter url:     url received by iOS application in AppDelegate
 - parameter options: dictionary with launch options received by iOS application in AppDelegate

 - returns: if the url was handled by an on going session or not.
 */
export function resumeAuth(url: NSURL, options: NSDictionary<string, string>): boolean {
	return TransactionStore.shared.resume(url, options);
}

/// WebAuth Authentication using Auth0
export abstract class WebAuth implements Trackable, Loggable {
	public abstract readonly clientId: string;
	public abstract readonly url: NSURL;
	public abstract telemetry: Telemetry;

	public abstract logger: Logger | undefined;

	/**
     For redirect url instead of a custom scheme it will use `https` and iOS 9 Universal Links.

     Before enabling this flag you'll need to configure Universal Links

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract useUniversalLink(): this;

	/**
     Specify a connection name to be used to authenticate.

     By default no connection is specified, so the hosted login page will be displayed

     - parameter connection: name of the connection to use

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract setConnection(connection: string): this;

	/**
     Scopes that will be requested during auth

     - parameter scope: a scope value like: `openid email`

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract setScope(scope: string): this;

	/**
     Provider scopes for oauth2/social connections. e.g. Facebook, Google etc

     - parameter connectionScope: oauth2/social comma separated scope list: `user_friends,email`

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract setConnectionScope(connectionScope: string): this;

	/**
     State value that will be echoed after authentication
     in order to check that the response is from your request and not other.

     By default a random value is used.

     - parameter state: a state value to send with the auth request

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract setState(state: string): this;

	/**
     Send additional parameters for authentication.

     - parameter parameters: additional auth parameters

     - returns: the same WebAuth instance to allow method chaining
     */
	public abstract setParameters(parameters: { [param: string]: string }): this;

	/// Setup the response types to be used for authentcation
	///
	/// - Parameter response: Array of ResponseOptions
	/// - Returns: the same WebAuth instance to allow method chaining
	public abstract setResponseType(response: ResponseType[]): this;

	/// Add nonce paramater for authentication, this is a requirement for
	/// when response type .id_token is specified.
	///
	/// - Parameter nonce: nonce string
	/// - Returns: the same WebAuth instance to allow method chaining
	public abstract setNonce(nonce: String): this;

	///  Audience name of the API that your application will call using the `access_token` returned after Auth.
	///  This value must match the one defined in Auth0 Dashboard [APIs Section](https://manage.auth0.com/#/apis)
	///
	/// - Parameter audience: an audience value like: `https://someapi.com/api`
	/// - Returns: the same WebAuth instance to allow method chaining
	public abstract setAudience(audience: String): this;

	/**
     Change the default grant used for auth from `code` (w/PKCE) to `token` (implicit grant)

     - returns: the same WebAuth instance to allow method chaining
     */
	// TODO: @available(*, deprecated, message: "use response([.token])")
	public abstract usingImplicitGrant(): this;

	/**
     Use `SFSafariViewController` instead of `SFAuthenticationSession` for WebAuth
     in iOS 11.0+.

     - returns: the same WebAuth instance to allow method chaining
     */
	// TODO: @available(iOS 11, *)
	public abstract useLegacyAuthentication(): this;

	/**
     Starts the WebAuth flow by modally presenting a ViewController in the top-most controller.

     ```
     Auth0
         .webAuth(clientId: clientId, domain: "samples.auth0.com")
         .start { result in
             print(result)
         }
     ```

     Then from `AppDelegate` we just need to resume the WebAuth Auth like this

     ```
     func application(app: UIApplication, openURL url: NSURL, options: [String : Any]) -> Bool {
         return Auth0.resumeAuth(url, options: options)
     }
     ```

     Any on going WebAuth Auth session will be automatically cancelled when starting a new one,
     and it's corresponding callback with be called with a failure result of `Authentication.Error.Cancelled`

     - parameter callback: callback called with the result of the WebAuth flow
     */
	public abstract start(callback: (result: Result<Credentials>) => void);

	/**
     Removes Auth0 session and optionally remove the Identity Provider session.
     - seeAlso: [Auth0 Logout docs](https://auth0.com/docs/logout)

     For iOS 11+ you will need to ensure that the **Callback URL** has been added
     to the **Allowed Logout URLs** section of your application in the [Auth0 Dashboard](https://manage.auth0.com/#/applications/).


     ```
     Auth0
         .webAuth()
         .clearSession { print($0) }
     ```

     Remove Auth0 session and remove the IdP session.

     ```
     Auth0
         .webAuth()
         .clearSession(federated: true) { print($0) }
     ```

     - parameter federated: Bool to remove the IdP session
     - parameter callback: callback called with bool outcome of the call
     */
	public abstract clearSession(federated: boolean, callback: (success: boolean) => void);
}
