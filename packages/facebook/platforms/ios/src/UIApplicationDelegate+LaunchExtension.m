#import "UIApplicationDelegate+LaunchExtension.h"
#import <objc/runtime.h>
#import <FBSDKCoreKit/FBSDKCoreKit.h>

@implementation NSObject (NSCFacebookUIAppDelegateExt)
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(nullable NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions {
    [[FBSDKApplicationDelegate sharedInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    return YES;
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    return [[FBSDKApplicationDelegate sharedInstance] application:app openURL:url sourceApplication:options[UIApplicationOpenURLOptionsSourceApplicationKey] annotation: options[UIApplicationOpenURLOptionsAnnotationKey]];
}
@end
