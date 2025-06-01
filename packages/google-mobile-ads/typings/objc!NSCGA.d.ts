declare const enum NSCGABannersSize {
	Banner = 0,

	FullBanner = 1,

	LargeBanner = 2,

	LeaderBoard = 3,

	MediumRectangle = 4,

	Fluid = 5,

	WideSkyScraper = 6,

	Invalid = 7,
}

declare const enum NSCAdLoaderAdType {
	CustomNative = 0,

	GAMBanner = 1,

	Native = 2,
}

declare const enum Orientation {
	Portrait = 0,

	Landscape = 1,

	Device = 2,
}

declare class NSCGA extends NSObject {
	static alloc(): NSCGA; // inherited from NSObject

	static createAnchoredAdaptiveBanner(width: number, orientation: Orientation): GADAdSize;

	static createInlineAdaptiveBanner(width: number, maxHeight: number, orientation: Orientation): GADAdSize;

	static AdLoaderAdTypeToString(type: NSCAdLoaderAdType): string;

	static new(): NSCGA; // inherited from NSObject

	static createBanner(size: NSCGABannersSize): GADAdSize;
}
