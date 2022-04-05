//
//  GMSMapView+Premium.h
//  Google Maps SDK for iOS
//
//  Copyright 2019 Google LLC
//
//  Usage of this SDK is subject to the Google Maps/Google Earth APIs Terms of
//  Service: https://developers.google.com/maps/terms
//

#import "GMSMapView.h"

#import <Foundation/Foundation.h>

@class GMSCameraPosition;
@class GMSMapID;

NS_ASSUME_NONNULL_BEGIN

@interface GMSMapView (Style)

/**
 * Convenience initializer to build and return a map view with a frame, map ID and camera.
 */
+ (instancetype)mapWithFrame:(CGRect)frame
                       mapID:(GMSMapID *)mapID
                      camera:(GMSCameraPosition *)camera
    NS_SWIFT_UNAVAILABLE("Use initializer instead");

/**
 * Builds and returns a map view with a frame, map ID and camera.
 */
- (instancetype)initWithFrame:(CGRect)frame
                        mapID:(GMSMapID *)mapID
                       camera:(GMSCameraPosition *)camera;

@end

NS_ASSUME_NONNULL_END
