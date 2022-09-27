#import <UIKit/UIKit.h>

@interface NSObject (NSCFacebookUIAppDelegateExt) <UIApplicationDelegate>
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(nullable NSDictionary<UIApplicationLaunchOptionsKey, id> *)launchOptions;
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(nullable NSString *)sourceApplication annotation:(id)annotation;
@end

