#import <Foundation/Foundation.h>
#import <UIKit/UIApplication.h>

@interface Notification : NSObject <UIApplicationDelegate>
{
    UILocalNotification *notificationMessage;
    BOOL isInline;
}

@property (nonatomic, strong) UILocalNotification *notificationMessage;
@property BOOL isInline;
@property (nonatomic, retain) UILocalNotification *launchNotification;

+ (instancetype)sharedInstance;

//-(void)register:(NSMutableDictionary *)options;
//-(void)registerUserNotificationSettings:(NSDictionary*)options;
-(void)setApplicationIconBadgeNumber:(NSMutableDictionary *)options;
-(void)didRegisterUserNotificationSettings:(UIUserNotificationSettings *)notificationSettings;
-(void)notificationReceived;
-(void)success:(NSString *)eventName WithMessage:(NSString *)message;
-(void)success:(NSString *)eventName WithDictionary:(NSMutableDictionary *)userInfo;
-(void)fail:(NSString *)eventName WithMessage:(NSString *)message withError:(NSError *)error;
@end
