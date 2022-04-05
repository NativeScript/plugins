//
//  GMSMapID+Premium.h
//  Google Maps SDK for iOS
//
//  Copyright 2019 Google LLC
//
//  Usage of this SDK is subject to the Google Maps/Google Earth APIs Terms of
//  Service: https://developers.google.com/maps/terms
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/** An opaque identifier for a custom map configuration. */
@interface GMSMapID : NSObject <NSCopying>

- (instancetype)init NS_UNAVAILABLE;

/** Creates a new mapID with the given string value. */
- (instancetype)initWithIdentifier:(NSString *)identifier NS_DESIGNATED_INITIALIZER;

/** Creates a new mapID with the given string value. */
+ (instancetype)mapIDWithIdentifier:(NSString *)identifier
    NS_SWIFT_UNAVAILABLE("Use initializer instead");

@end

NS_ASSUME_NONNULL_END
