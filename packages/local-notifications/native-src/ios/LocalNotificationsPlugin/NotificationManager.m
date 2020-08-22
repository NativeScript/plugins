#import "NotificationManager.h"
#import <UIKit/UIApplication.h>
#import <UIKit/UILocalNotification.h>
#import <objc/runtime.h>

@implementation NotificationManager

static IMP didRegisterOriginalMethod = NULL;
static IMP didRegisterUserOriginalMethod = NULL;
static IMP didReceiveOriginalMethod = NULL;
static IMP didReceiveLocalOriginalMethod = NULL;
static IMP handleActionWithIdentifierLocalOriginalMethod = NULL;

+ (void)load {

    [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationDidBecomeActiveNotification object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification *note) {
        [NotificationManager myApplicationDidBecomeActive:[UIApplication sharedApplication]];
    }];
    
    [[NSNotificationCenter defaultCenter] addObserverForName:UIApplicationDidFinishLaunchingNotification object:nil queue:[NSOperationQueue mainQueue] usingBlock:^(NSNotification *note) {
        
        UIApplication *app = [UIApplication sharedApplication];
        id<UIApplicationDelegate> appDelegate = app.delegate;
        
        // didRegisterUserNotificationSettings swizzle
        Method didRegisterUserMethod = class_getInstanceMethod([NotificationManager class], @selector(my_application:didRegisterUserNotificationSettings:));
        IMP didRegisterUserMethodImp = method_getImplementation(didRegisterUserMethod);
        const char* didRegisterUserTypes = method_getTypeEncoding(didRegisterUserMethod);
        
        Method didRegisterUserOriginal = class_getInstanceMethod(appDelegate.class, @selector(application:didRegisterUserNotificationSettings:));
        if (didRegisterUserOriginal) {
            didRegisterUserOriginalMethod = method_getImplementation(didRegisterUserOriginal);
            method_exchangeImplementations(didRegisterUserOriginal, didRegisterUserMethod);
        } else {
            class_addMethod(appDelegate.class, @selector(application:didRegisterUserNotificationSettings:), didRegisterUserMethodImp, didRegisterUserTypes);
        }
        
        // didReceiveLocalNotification swizzle
        Method didReceiveLocalMethod = class_getInstanceMethod([NotificationManager class], @selector(my_application:didReceiveLocalNotification:));
        IMP didReceiveLocalMethodImp = method_getImplementation(didReceiveLocalMethod);
        const char* didReceiveLocalTypes = method_getTypeEncoding(didReceiveLocalMethod);
        
        Method didReceiveLocalOriginal = class_getInstanceMethod(appDelegate.class, @selector(application:didReceiveLocalNotification:));
        if (didReceiveLocalOriginal) {
            didReceiveLocalOriginalMethod = method_getImplementation(didReceiveLocalOriginal);
            method_exchangeImplementations(didReceiveLocalOriginal, didReceiveLocalMethod);
        } else {
            class_addMethod(appDelegate.class, @selector(application:didReceiveLocalNotification:), didReceiveLocalMethodImp, didReceiveLocalTypes);
        }
        
#if __IPHONE_OS_VERSION_MAX_ALLOWED >= 80000

        // handleActionWithIdentifier local swizzle
        Method handleActionWithIdentifierLocalMethod = class_getInstanceMethod([NotificationManager class], @selector(my_application:handleActionWithIdentifier:forLocalNotification:completionHandler:));
        IMP handleActionWithIdentifierMethodLocalImp = method_getImplementation(handleActionWithIdentifierLocalMethod);
        const char* handleActionWithIdentifierTypesLocal = method_getTypeEncoding(handleActionWithIdentifierLocalMethod);
        
        Method handleActionWithIdentifierLocalOriginal = class_getInstanceMethod(appDelegate.class, @selector(application:handleActionWithIdentifier:forLocalNotification:completionHandler:));
        if (handleActionWithIdentifierLocalOriginal) {
            handleActionWithIdentifierLocalOriginalMethod = method_getImplementation(handleActionWithIdentifierLocalOriginal);
            method_exchangeImplementations(handleActionWithIdentifierLocalOriginal, handleActionWithIdentifierLocalMethod);
        } else {
            class_addMethod(appDelegate.class, @selector(application:handleActionWithIdentifier:forLocalNotification:completionHandler:), handleActionWithIdentifierMethodLocalImp, handleActionWithIdentifierTypesLocal);
        }
#endif
    }];
    
}

-(id)init
{
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(createNotificationChecker:)
                                                 name:@"UIApplicationDidFinishLaunchingNotification" object:nil];
    return self;
}

- (void)createNotificationChecker:(NSNotification *)notification
{
    if (notification)
    {
        NSDictionary *launchOptions = [notification userInfo];
        if (launchOptions)
            [Notification sharedInstance].launchNotification = [launchOptions objectForKey: @"UIApplicationLaunchOptionsRemoteNotificationKey"];
    }
}

+ (void)myApplicationDidBecomeActive:(UIApplication *)application
{
    application.applicationIconBadgeNumber = 0;
    if ([Notification sharedInstance].launchNotification) {
        [Notification sharedInstance].launchNotification = nil;
        [[Notification sharedInstance] performSelectorOnMainThread:@selector(notificationReceived) withObject:[Notification sharedInstance] waitUntilDone:NO];
    }
}

- (void)my_application:(UIApplication *)application didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings {
    if (didRegisterOriginalMethod) {
        void (*originalImp)(id, SEL, UIApplication *, NSData *) = didRegisterOriginalMethod;
        originalImp(self, @selector(application:didRegisterUserNotificationSettings:), application, notificationSettings);
    }
    NSLog(@"%@", notificationSettings);
    [[Notification sharedInstance] didRegisterUserNotificationSettings:notificationSettings];
}

- (void)my_application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification {
    if (didReceiveLocalOriginalMethod) {
        void (*originalImp)(id, SEL, UIApplication *, UILocalNotification *) = didReceiveOriginalMethod;
        originalImp(self, @selector(application:didReceiveLocalNotification:), application, notification);
    }
    
    UIApplicationState appState = UIApplicationStateActive;
    if ([application respondsToSelector:@selector(applicationState)]) {
        appState = application.applicationState;
    }
    
    if (appState == UIApplicationStateActive) {
        [Notification sharedInstance].notificationMessage = notification;
        [Notification sharedInstance].isInline = YES;
        [[Notification sharedInstance] notificationReceived];
    } else {
        [Notification sharedInstance].launchNotification = notification;
        [Notification sharedInstance].notificationMessage = notification;
        [Notification sharedInstance].isInline = NO;
    }
}

- (void)my_application:(UIApplication *) application handleActionWithIdentifier: (NSString *) identifier forLocalNotification: (UILocalNotification *) notification completionHandler: (void (^)()) completionHandler {
    
    if (application.applicationState == UIApplicationStateActive) {
        [Notification sharedInstance].notificationMessage = notification;
        [Notification sharedInstance].isInline = YES;
        [[Notification sharedInstance] notificationReceived];
    } else {
        [Notification sharedInstance].notificationMessage = notification;
        [[Notification sharedInstance] performSelectorOnMainThread:@selector(notificationReceived) withObject:[Notification sharedInstance] waitUntilDone:NO];
    }
    
    if (handleActionWithIdentifierLocalOriginalMethod) {
        void (*originalImp)(id, SEL, UIApplication *, NSString *, UILocalNotification *, void(^)()) = handleActionWithIdentifierLocalOriginalMethod;
        originalImp(self, @selector(application:handleActionWithIdentifier:forLocalNotification:completionHandler:), application, identifier, notification, completionHandler);
    } else {
        completionHandler();
    }
}

@end
