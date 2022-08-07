import UIKit
import FBSDKCoreKit

@objc public class NSCFBAppDelegate: UIResponder, UIApplicationDelegate {    
    @objc public func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {          
        ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }
          
    @objc public func application(
        _ app: UIApplication,
        open url: URL,
        options: [UIApplication.OpenURLOptionsKey : Any] = [:]
    ) -> Bool {
        ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )
    }  
}
