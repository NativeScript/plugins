import Foundation
import GoogleMobileAds

@objcMembers
@objc(TNSGA)
public class TNSGA:NSObject {
    
    @objc(Orientation)
    public enum Orientation:Int, RawRepresentable {
        case Portrait
        case Landscape
        case Device
        public typealias RawValue = UInt32
        
        public init?(rawValue: UInt32) {
            switch rawValue {
            case 0:
                self = .Portrait
            case 1:
                self = .Landscape
            case 2:
                self = .Device
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .Portrait:
                return 0
            case .Landscape:
                return 1
            case .Device:
                return 2
            }
        }
    }
    

    @objc(AdLoaderAdType)
    public enum AdLoaderAdType: Int, RawRepresentable {
        case CustomNative
        case GAMBanner
        case Native
        public typealias RawValue = String
        
        public init?(rawValue: String) {
            switch rawValue {
            case GADAdLoaderAdType.customNative.rawValue:
                self = .CustomNative
            case GADAdLoaderAdType.gamBanner.rawValue:
                self = .GAMBanner
            case GADAdLoaderAdType.native.rawValue:
                self = .Native
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .CustomNative:
                return GADAdLoaderAdType.customNative.rawValue
            case .GAMBanner:
                return GADAdLoaderAdType.gamBanner.rawValue
            case .Native:
                return GADAdLoaderAdType.native.rawValue
            }
        }
    }
    
    public static func AdLoaderAdTypeToString(_ type: AdLoaderAdType) -> String {
        return type.rawValue
    }
    
    public static func createAnchoredAdaptiveBanner(_ width: CGFloat,_ orientation: Orientation) -> GADAdSize {
        switch orientation {
        case .Landscape:
            return GADLandscapeAnchoredAdaptiveBannerAdSizeWithWidth(width)
        case .Portrait:
            return GADPortraitAnchoredAdaptiveBannerAdSizeWithWidth(width)
        default:
            return GADCurrentOrientationAnchoredAdaptiveBannerAdSizeWithWidth(width)
        }
    }    
    
    public static func createInlineAdaptiveBanner(_ width: CGFloat, _ maxHeight: CGFloat,_ orientation: Orientation) -> GADAdSize {
        if(maxHeight > 0){
            return GADInlineAdaptiveBannerAdSizeWithWidthAndMaxHeight(width, maxHeight)
        }
        switch orientation {
        case .Landscape:
            return GADLandscapeInlineAdaptiveBannerAdSizeWithWidth(width)
        case .Portrait:
            return GADPortraitInlineAdaptiveBannerAdSizeWithWidth(width)
        default:
            return GADCurrentOrientationInlineAdaptiveBannerAdSizeWithWidth(width)
        }
    }
    
    @objc(NSCGABannersSize)
    public enum NSCGABannersSize: Int8, RawRepresentable {
        public typealias RawValue = Int8
        case Banner
        case FullBanner
        case LargeBanner
        case LeaderBoard
        case MediumRectangle
        case Fluid
        case WideSkyScraper
        case Invalid
    }

    public static func createBanner(_ size: NSCGABannersSize) -> GADAdSize {
        switch size {
        case .Banner:
            return GADAdSizeBanner
        case .FullBanner:
            return GADAdSizeFullBanner
        case .LargeBanner:
            return GADAdSizeLargeBanner
        case .LeaderBoard:
            return GADAdSizeLeaderboard
        case .MediumRectangle:
            return GADAdSizeMediumRectangle
        case .Fluid:
            return GADAdSizeFluid
        case .WideSkyScraper:
            return GADAdSizeSkyscraper
        case .Invalid:
            return GADAdSizeInvalid
        }
    }
}
