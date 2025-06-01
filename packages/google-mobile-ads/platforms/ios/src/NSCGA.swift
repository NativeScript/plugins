import Foundation
import GoogleMobileAds

@objcMembers
@objc(NSCGA)
public class NSCGA:NSObject {
    
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
    

    @objc(NSCAdLoaderAdType)
    public enum NSCAdLoaderAdType: Int, RawRepresentable {
        case CustomNative
        case GAMBanner
        case Native
        public typealias RawValue = String
        
        public init?(rawValue: String) {
            switch rawValue {
						
						case AdLoaderAdType.customNative.rawValue:
                self = .CustomNative
						case AdLoaderAdType.adManagerBanner.rawValue:
                self = .GAMBanner
						case AdLoaderAdType.native.rawValue:
                self = .Native
            default:
                return nil
            }
        }
        
        public var rawValue: RawValue {
            switch self {
            case .CustomNative:
								return AdLoaderAdType.customNative.rawValue
            case .GAMBanner:
                return AdLoaderAdType.adManagerBanner.rawValue
            case .Native:
                return AdLoaderAdType.native.rawValue
            }
        }
    }
    
    public static func AdLoaderAdTypeToString(_ type: NSCAdLoaderAdType) -> String {
        return type.rawValue
    }
    
	public static func createAnchoredAdaptiveBanner(_ width: CGFloat,_ orientation: Orientation) -> AdSize {
        switch orientation {
        case .Landscape:
					return landscapeAnchoredAdaptiveBanner(width: width)
        case .Portrait:
					return portraitAnchoredAdaptiveBanner(width: width)
        default:
					return currentOrientationAnchoredAdaptiveBanner(width: width)
        }
    }    
    
	public static func createInlineAdaptiveBanner(_ width: CGFloat, _ maxHeight: CGFloat,_ orientation: Orientation) -> AdSize {
        if(maxHeight > 0){
					return inlineAdaptiveBanner(width: width, maxHeight: maxHeight)
        }
        switch orientation {
        case .Landscape:
					return landscapeInlineAdaptiveBanner(width: width)
        case .Portrait:
					return portraitInlineAdaptiveBanner(width: width)
        default:
					return currentOrientationInlineAdaptiveBanner(width: width)
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

	public static func createBanner(_ size: NSCGABannersSize) -> AdSize {
        switch size {
        case .Banner:
					return AdSizeBanner
        case .FullBanner:
					return AdSizeFullBanner
        case .LargeBanner:
					return AdSizeLargeBanner
        case .LeaderBoard:
					return AdSizeLeaderboard
        case .MediumRectangle:
					return AdSizeMediumRectangle
        case .Fluid:
					return AdSizeFluid
        case .WideSkyScraper:
					return AdSizeSkyscraper
        case .Invalid:
					return AdSizeInvalid
        }
    }
}
