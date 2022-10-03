import Foundation
import UIKit
import FBSDKCoreKit


@objc(NSCFacebookUIAppDelegateExt)
public class NSCFacebookUIAppDelegateExt: NSObject {

    @objc public static let sharedInstance = NSCFacebookUIAppDelegateExt()

    static var observing = false

    @objc public func observe(){
        if(NSCFacebookUIAppDelegateExt.observing){return}
        NotificationCenter.default.addObserver(NSCFacebookUIAppDelegateExt.sharedInstance, selector: #selector(NSCFacebookUIAppDelegateExt.applicationDidFinishLaunchingNotificationEvent(_:)), name: UIApplication.didFinishLaunchingNotification, object: nil)
        NSCFacebookUIAppDelegateExt.observing = true
    }


    @objc func applicationDidFinishLaunchingNotificationEvent(_ notification: NSNotification) {
        guard let info = notification.userInfo else {
            ApplicationDelegate.shared.application(
                UIApplication.shared,
                didFinishLaunchingWithOptions: nil
            )
            return

        }

        let sourceAppKey = info[UIApplication.LaunchOptionsKey.sourceApplication] as? String

        let url = info[UIApplication.LaunchOptionsKey.url] as? URL

        let annotation = info[UIApplication.OpenURLOptionsKey.annotation]

        if(url != nil){
            ApplicationDelegate.shared.application(
                UIApplication.shared,
                open: url!,
                sourceApplication: sourceAppKey,
                annotation: annotation
            )
        }


    }
}
