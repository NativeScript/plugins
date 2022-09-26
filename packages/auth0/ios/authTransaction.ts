/**
 Represents an on going Auth transaction with an Identity Provider (Auth0 or a third party).

 The Auth will be done outside of application control, Safari or third party application.
 The only way to communicate the results back is using a url with a registered custom scheme in your application so iOS can open it on success/failure.
 When that happens iOS will call a method in your `AppDelegate` and that is where you need to handle the result.

 Ideally Auth0.swift will handle the current transaction by itself wether is OAuth2 or Native so you only need to add the following in the AppDelegate

 ```
 func application(app: UIApplication, openURL url: NSURL, options: [UIApplicationOpenURLOptionsKey : Any]) -> Bool {
    return Auth0.resumeAuth(url, options: options)
 }
 ```

 - important: Only one AuthTransaction can be active at a given time for Auth0.swift, if you start a new one before finishing the current one it will be cancelled.
 */
export interface AuthTransaction {
	/// value of the OAuth 2.0 state parameter. It must be a cryptographically secure randon string used to protect the app with request forgery.
	readonly state?: string;

	/**
     Resumes the transaction when the third party application notifies the application using an url with a custom scheme.
     This method should be called from the Application's `AppDelegate` or using `public func resumeAuth(_ url: URL, options: [UIApplicationOpenURLOptionsKey: Any]) -> Bool` method.

     - parameter url: the url send by the third party application that contains the result of the Auth
     - parameter options: options recieved in the openUrl method of the `AppDelegate`
     - returns: if the url was expected and properly formatted otherwise it will return false.
    */
	resume(url: NSURL, options: NSDictionary<string, any>): boolean;

	/**
     Terminates the transaction and reports back that it was cancelled.
    */
	cancel();
}
