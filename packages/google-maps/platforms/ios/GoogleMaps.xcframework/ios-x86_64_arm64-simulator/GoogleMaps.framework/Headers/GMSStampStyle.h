//
//  GMSStampStyle.h
//  Google Maps SDK for iOS
//
//  Copyright 2020 Google LLC
//
//  Usage of this SDK is subject to the Google Maps/Google Earth APIs Terms of
//  Service: https://developers.google.com/maps/terms
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * The abstract base class for polyline styles that draw a repeating image over a @c GMSStyleSpan.
 */
@interface GMSStampStyle : NSObject

/**
 * The image or texture that will repeated over a stroke.
 * Note that this image will be compressed into a square - so for best results have a square image.
 * The rendered stamps will be the width of the line that the GMSStrokeStyle is set on. The image
 * will be oriented with the top of the image towards the start point, and the bottom of the image
 * towards the end point. For example, if the underlying line has two points and the start point is
 * directly above the endpoint, the stamp will appear in an upright orientation.
 */
@property(nonatomic, readonly) UIImage *stampImage;

- (instancetype)init NS_UNAVAILABLE;

@end

/** A polyline style that draws a repeating image over a @c GMSStyleSpan. */
@interface GMSTextureStyle : GMSStampStyle

/**
 * Returns a texture stamp style with the given image.
 *
 * @param image A @c UIImage object to use as the stamp image.
 * @return An initialized texture stamp style.
 */
+ (instancetype)textureStyleWithImage:(UIImage *)image
    NS_SWIFT_UNAVAILABLE("Use initializer instead");

/**
 * Returns an initialized texture stamp style with the given image.
 *
 * @param image A @c UIImage object to use as the stamp image.
 * @return An initialized texture stamp style.
 */
- (instancetype)initWithImage:(UIImage *)image NS_DESIGNATED_INITIALIZER;

@end

NS_ASSUME_NONNULL_END
