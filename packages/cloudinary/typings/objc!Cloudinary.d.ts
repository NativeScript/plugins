
declare const enum AspectRatioLockState {

	EnabledAndOff = 0,

	EnabledAndOn = 1,

	Disabled = 2
}

declare class CLDAccessControlRule extends NSObject {

	static alloc(): CLDAccessControlRule; // inherited from NSObject

	static anonymousWithEnd(end: Date): CLDAccessControlRule;

	static anonymousWithStart(start: Date): CLDAccessControlRule;

	static anonymousWithStartEnd(start: Date, end: Date): CLDAccessControlRule;

	static new(): CLDAccessControlRule; // inherited from NSObject

	static token(): CLDAccessControlRule;
}

declare class CLDAccessibilityAnalysisResult extends CLDBaseResult {

	static alloc(): CLDAccessibilityAnalysisResult; // inherited from NSObject

	static new(): CLDAccessibilityAnalysisResult; // inherited from NSObject

	readonly colorblindAccessibilityAnalysis: CLDColorblindAccessibilityAnalysisResult;
}

declare class CLDAdvOcrResult extends CLDBaseResult {

	static alloc(): CLDAdvOcrResult; // inherited from NSObject

	static new(): CLDAdvOcrResult; // inherited from NSObject

	readonly data: NSArray<CLDOcrDataResult>;

	readonly status: string;
}

declare const enum CLDArtFilters {

	AlDente = 0,

	Athena = 1,

	Audrey = 2,

	Aurora = 3,

	Daguerre = 4,

	Eucalyptus = 5,

	Fes = 6,

	Frost = 7,

	Hairspray = 8,

	Hokusai = 9,

	Incognito = 10,

	Linen = 11,

	Peacock = 12,

	Primavera = 13,

	Quartz = 14,

	RedRock = 15,

	Refresh = 16,

	Sizzle = 17,

	Sonnet = 18,

	Ukulele = 19,

	Zorro = 20
}

declare class CLDAudio extends CLDBaseResult {

	static alloc(): CLDAudio; // inherited from NSObject

	static new(): CLDAudio; // inherited from NSObject

	readonly channelLayout: string;

	readonly codec: string;
}

declare class CLDBaseNetworkObject extends NSObject {

	static alloc(): CLDBaseNetworkObject; // inherited from NSObject

	static new(): CLDBaseNetworkObject; // inherited from NSObject
}

declare class CLDBaseParam extends NSObject {

	static alloc(): CLDBaseParam; // inherited from NSObject

	static new(): CLDBaseParam; // inherited from NSObject
}

declare class CLDBaseResult extends NSObject {

	static alloc(): CLDBaseResult; // inherited from NSObject

	static new(): CLDBaseResult; // inherited from NSObject

	readonly resultJson: NSDictionary<string, any>;
}

declare class CLDBoundingBox extends CLDBaseResult {

	static alloc(): CLDBoundingBox; // inherited from NSObject

	static new(): CLDBoundingBox; // inherited from NSObject
}

declare class CLDCloudinary extends NSObject {

	static alloc(): CLDCloudinary; // inherited from NSObject

	static new(): CLDCloudinary; // inherited from NSObject

	static setLogLevel(newValue: CLDLogLevel): void;

	cacheAssetMaxDiskCapacity: number;

	cacheAssetMaxMemoryTotalCost: number;

	cacheMaxDiskCapacity: number;

	cacheMaxMemoryTotalCost: number;

	cachePolicy: CLDImageCachePolicy;

	readonly config: CLDConfiguration;

	static logLevel: CLDLogLevel;

	constructor(o: { configuration: CLDConfiguration; networkAdapter: CLDNetworkAdapter; downloadAdapter: CLDNetworkAdapter; sessionConfiguration: NSURLSessionConfiguration; downloadSessionConfiguration: NSURLSessionConfiguration; });

	constructor(o: { configuration: CLDConfiguration; networkAdapter: CLDNetworkAdapter; sessionConfiguration: NSURLSessionConfiguration; });

	createDownloader(): CLDDownloader;

	createManagementApi(): CLDManagementApi;

	createUploader(): CLDUploader;

	createUrl(): CLDUrl;

	initWithConfigurationNetworkAdapterDownloadAdapterSessionConfigurationDownloadSessionConfiguration(configuration: CLDConfiguration, networkAdapter: CLDNetworkAdapter, downloadAdapter: CLDNetworkAdapter, sessionConfiguration: NSURLSessionConfiguration, downloadSessionConfiguration: NSURLSessionConfiguration): this;

	initWithConfigurationNetworkAdapterSessionConfiguration(configuration: CLDConfiguration, networkAdapter: CLDNetworkAdapter, sessionConfiguration: NSURLSessionConfiguration): this;

	removeFromCacheWithKey(key: string): void;

	setBackgroundCompletionHandler(newValue: () => void): void;

	setMaxConcurrentDownloads(maxConcurrentDownloads: number): void;

	setUserPlatformVersion(platformName: string, version: string): void;
}

declare class CLDColorblindAccessibilityAnalysisResult extends CLDBaseResult {

	static alloc(): CLDColorblindAccessibilityAnalysisResult; // inherited from NSObject

	static new(): CLDColorblindAccessibilityAnalysisResult; // inherited from NSObject

	readonly mostIndistinctPair: NSArray<string>;
}

declare class CLDConditionExpression extends CLDExpression {

	static alloc(): CLDConditionExpression; // inherited from NSObject

	static new(): CLDConditionExpression; // inherited from NSObject

	andExpression(value: CLDExpression): this;

	andString(value: string): this;

	aspectRatioConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	aspectRatioExpression(operatorString: string, object: CLDExpression): this;

	aspectRatioFloatValue(operatorString: string, object: number): this;

	aspectRatioIntValue(operatorString: string, object: number): this;

	aspectRatioString(operatorString: string, object: string): this;

	currentPageIndexConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	currentPageIndexExpression(operatorString: string, object: CLDExpression): this;

	currentPageIndexFloatValue(operatorString: string, object: number): this;

	currentPageIndexIntValue(operatorString: string, object: number): this;

	currentPageIndexString(operatorString: string, object: string): this;

	durationConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	durationExpression(operatorString: string, object: CLDExpression): this;

	durationFloatValue(operatorString: string, object: number): this;

	durationIntValue(operatorString: string, object: number): this;

	durationString(operatorString: string, object: string): this;

	equalToExpression(value: CLDExpression): this;

	equalToFloat(value: number): this;

	equalToInt(value: number): this;

	equalToString(value: string): this;

	faceCountConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	faceCountExpression(operatorString: string, object: CLDExpression): this;

	faceCountFloatValue(operatorString: string, object: number): this;

	faceCountIntValue(operatorString: string, object: number): this;

	faceCountString(operatorString: string, object: string): this;

	greaterOrEqualToExpression(value: CLDExpression): this;

	greaterOrEqualToFloat(value: number): this;

	greaterOrEqualToInt(value: number): this;

	greaterOrEqualToString(value: string): this;

	greaterThenExpression(value: CLDExpression): this;

	greaterThenFloat(value: number): this;

	greaterThenInt(value: number): this;

	greaterThenString(value: string): this;

	heightConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	heightExpression(operatorString: string, object: CLDExpression): this;

	heightFloatValue(operatorString: string, object: number): this;

	heightIntValue(operatorString: string, object: number): this;

	heightString(operatorString: string, object: string): this;

	illustrationScoreConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	illustrationScoreExpression(operatorString: string, object: CLDExpression): this;

	illustrationScoreFloatValue(operatorString: string, object: number): this;

	illustrationScoreIntValue(operatorString: string, object: number): this;

	illustrationScoreString(operatorString: string, object: string): this;

	initialAspectRatioConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	initialAspectRatioExpression(operatorString: string, object: CLDExpression): this;

	initialAspectRatioFloatValue(operatorString: string, object: number): this;

	initialAspectRatioIntValue(operatorString: string, object: number): this;

	initialAspectRatioString(operatorString: string, object: string): this;

	initialDurationConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	initialDurationExpression(operatorString: string, object: CLDExpression): this;

	initialDurationFloatValue(operatorString: string, object: number): this;

	initialDurationIntValue(operatorString: string, object: number): this;

	initialDurationString(operatorString: string, object: string): this;

	initialHeightConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	initialHeightExpression(operatorString: string, object: CLDExpression): this;

	initialHeightFloatValue(operatorString: string, object: number): this;

	initialHeightIntValue(operatorString: string, object: number): this;

	initialHeightString(operatorString: string, object: string): this;

	initialWidthConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	initialWidthExpression(operatorString: string, object: CLDExpression): this;

	initialWidthFloatValue(operatorString: string, object: number): this;

	initialWidthIntValue(operatorString: string, object: number): this;

	initialWidthString(operatorString: string, object: string): this;

	insideExpression(expression: CLDExpression): this;

	insideString(expression: string): this;

	lessOrEqualToExpression(value: CLDExpression): this;

	lessOrEqualToFloat(value: number): this;

	lessOrEqualToInt(value: number): this;

	lessOrEqualToString(value: string): this;

	lessThenExpression(value: CLDExpression): this;

	lessThenFloat(value: number): this;

	lessThenInt(value: number): this;

	lessThenString(value: string): this;

	notEqualToExpression(value: CLDExpression): this;

	notEqualToFloat(value: number): this;

	notEqualToInt(value: number): this;

	notEqualToString(value: string): this;

	notInsideExpression(expression: CLDExpression): this;

	notInsideString(expression: string): this;

	orExpression(value: CLDExpression): this;

	orString(value: string): this;

	pageCountConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	pageCountExpression(operatorString: string, object: CLDExpression): this;

	pageCountFloatValue(operatorString: string, object: number): this;

	pageCountIntValue(operatorString: string, object: number): this;

	pageCountString(operatorString: string, object: string): this;

	pageXOffsetConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	pageXOffsetExpression(operatorString: string, object: CLDExpression): this;

	pageXOffsetFloatValue(operatorString: string, object: number): this;

	pageXOffsetIntValue(operatorString: string, object: number): this;

	pageXOffsetString(operatorString: string, object: string): this;

	pageYOffsetConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	pageYOffsetExpression(operatorString: string, object: CLDExpression): this;

	pageYOffsetFloatValue(operatorString: string, object: number): this;

	pageYOffsetIntValue(operatorString: string, object: number): this;

	pageYOffsetString(operatorString: string, object: string): this;

	tagsConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	tagsExpression(operatorString: string, object: CLDExpression): this;

	tagsFloatValue(operatorString: string, object: number): this;

	tagsIntValue(operatorString: string, object: number): this;

	tagsString(operatorString: string, object: string): this;

	then(): CLDTransformation;

	valueFromExpression(expression: CLDExpression): this;

	valueFromString(expression: string): this;

	widthConditionExpression(operatorString: string, object: CLDConditionExpression): this;

	widthExpression(operatorString: string, object: CLDExpression): this;

	widthFloatValue(operatorString: string, object: number): this;

	widthIntValue(operatorString: string, object: number): this;

	widthString(operatorString: string, object: string): this;
}

declare class CLDConfiguration extends NSObject {

	static alloc(): CLDConfiguration; // inherited from NSObject

	static initWithEnvParams(): CLDConfiguration;

	static new(): CLDConfiguration; // inherited from NSObject

	readonly apiKey: string;

	readonly apiSecret: string;

	readonly cdnSubdomain: boolean;

	readonly cloudName: string;

	readonly cname: string;

	readonly longUrlSignature: boolean;

	readonly privateCdn: boolean;

	readonly secure: boolean;

	readonly secureCdnSubdomain: boolean;

	readonly secureDistribution: string;

	readonly signatureAlgorithm: SignatureAlgorithm;

	readonly timeout: number;

	readonly uploadPrefix: string;

	constructor(o: { cloudName: string; apiKey: string; apiSecret: string; privateCdn: boolean; secure: boolean; cdnSubdomain: boolean; secureCdnSubdomain: boolean; longUrlSignature: boolean; signatureAlgorithm: SignatureAlgorithm; secureDistribution: string; cname: string; uploadPrefix: string; timeout: number; });

	constructor(o: { cloudinaryUrl: string; });

	constructor(o: { options: NSDictionary<string, any>; });

	initWithCloudNameApiKeyApiSecretPrivateCdnSecureCdnSubdomainSecureCdnSubdomainLongUrlSignatureSignatureAlgorithmSecureDistributionCnameUploadPrefixTimeout(cloudName: string, apiKey: string, apiSecret: string, privateCdn: boolean, secure: boolean, cdnSubdomain: boolean, secureCdnSubdomain: boolean, longUrlSignature: boolean, signatureAlgorithm: SignatureAlgorithm, secureDistribution: string, cname: string, uploadPrefix: string, timeout: number): this;

	initWithCloudinaryUrl(cloudinaryUrl: string): this;

	initWithOptions(options: NSDictionary<string, any>): this;
}

declare class CLDCoordinate extends NSObject {

	static alloc(): CLDCoordinate; // inherited from NSObject

	static new(): CLDCoordinate; // inherited from NSObject

	constructor(o: { rect: CGRect; });

	initWithRect(rect: CGRect): this;
}

declare class CLDCoordinates extends CLDBaseResult {

	static alloc(): CLDCoordinates; // inherited from NSObject

	static new(): CLDCoordinates; // inherited from NSObject

	readonly custom: any;

	readonly faces: any;
}

declare const enum CLDCrop {

	Fill = 0,

	Crop = 1,

	Scale = 2,

	Fit = 3,

	Limit = 4,

	MFit = 5,

	LFill = 6,

	Pad = 7,

	LPad = 8,

	MPad = 9,

	Thumb = 10,

	ImaggaCrop = 11,

	ImaggaScale = 12
}

declare class CLDCropOverlayView extends UIView {

	static alloc(): CLDCropOverlayView; // inherited from NSObject

	static appearance(): CLDCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CLDCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CLDCropOverlayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CLDCropOverlayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropOverlayView; // inherited from UIAppearance

	static new(): CLDCropOverlayView; // inherited from NSObject

	gridColor: UIColor;

	isGridHidden: boolean;

	knobColor: UIColor;

	shouldDisplayHorizontalGridLines: boolean;

	shouldDisplayVerticalGridLines: boolean;

	setGridlinesWithHiddenAnimted(hidden: boolean, animted: boolean): void;
}

declare class CLDCropScrollView extends UIScrollView {

	static alloc(): CLDCropScrollView; // inherited from NSObject

	static appearance(): CLDCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CLDCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CLDCropScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CLDCropScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropScrollView; // inherited from UIAppearance

	static new(): CLDCropScrollView; // inherited from NSObject

	touchesBegan: () => void;

	touchesCancelled: () => void;

	touchesEnded: () => void;
}

declare class CLDCropView extends UIView implements UIGestureRecognizerDelegate {

	static alloc(): CLDCropView; // inherited from NSObject

	static appearance(): CLDCropView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CLDCropView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CLDCropView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CLDCropView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDCropView; // inherited from UIAppearance

	static new(): CLDCropView; // inherited from NSObject

	alwaysShowCroppingGrid: boolean;

	angle: number;

	aspectRatio: CGSize;

	aspectRatioLockDimensionSwapEnabled: boolean;

	aspectRatioLockEnabled: boolean;

	cropAdjustingDelay: number;

	readonly cropBoxFrame: CGRect;

	cropBoxResizeEnabled: boolean;

	cropRegionInsets: UIEdgeInsets;

	cropViewPadding: number;

	delegate: CLDCropViewDelegate;

	readonly dynamicBlurEffect: boolean;

	readonly foregroundContainerView: UIView;

	readonly gridOverlayView: CLDCropOverlayView;

	readonly image: UIImage;

	imageCropFrame: CGRect;

	internalLayoutDisabled: boolean;

	readonly isResettable: boolean;

	maximumZoomScale: number;

	minimumAspectRatio: number;

	resetAspectRatioEnabled: boolean;

	translucencyAlwaysHidden: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { image: UIImage; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	initWithImage(image: UIImage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	lockAspectRatioTo(aspectRatio: CGSize): void;

	moveCroppedContentToCenterAnimated(animated: boolean): void;

	performInitialSetup(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rotateImageNinetyDegreesAnimated(animated: boolean): void;

	rotateImageNinetyDegreesAnimatedClockwise(animated: boolean, clockwise: boolean): void;

	self(): this;

	setAspectRatioAnimated(newValue: CGSize, animated: boolean): void;
}

declare const enum CLDCropViewControllerAspectRatioPreset {

	Original = 0,

	Square = 1,

	Rect3x2 = 2,

	Rect5x3 = 3,

	Rect4x3 = 4,

	Rect5x4 = 5,

	Rect7x5 = 6,

	Rect16x9 = 7,

	Custom = 8
}

interface CLDCropViewDelegate extends NSObjectProtocol {

	cropViewDidChangeResettable?(cropView: CLDCropView, state: boolean): void;
}
declare var CLDCropViewDelegate: {

	prototype: CLDCropViewDelegate;
};

declare const enum CLDCropViewOverlayEdge {

	None = 0,

	TopLeft = 1,

	Top = 2,

	TopRight = 3,

	Right = 4,

	BottomRight = 5,

	Bottom = 6,

	BottomLeft = 7,

	Left = 8
}

declare class CLDCustomFunction extends CLDBaseParam {

	static alloc(): CLDCustomFunction; // inherited from NSObject

	static new(): CLDCustomFunction; // inherited from NSObject

	static remote(url: string): CLDCustomFunction;

	static wasm(publicId: string): CLDCustomFunction;
}

declare class CLDDeleteByTokenRequestParams extends CLDRequestParams {

	static alloc(): CLDDeleteByTokenRequestParams; // inherited from NSObject

	static new(): CLDDeleteByTokenRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;
}

declare class CLDDeleteRequest extends CLDRequest {

	static alloc(): CLDDeleteRequest; // inherited from NSObject

	static new(): CLDDeleteRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDDeleteResult, p2: NSError) => void): CLDDeleteRequest;
}

declare class CLDDeleteResult extends CLDBaseResult {

	static alloc(): CLDDeleteResult; // inherited from NSObject

	static new(): CLDDeleteResult; // inherited from NSObject

	readonly result: string;
}

declare class CLDDerived extends CLDBaseResult {

	static alloc(): CLDDerived; // inherited from NSObject

	static new(): CLDDerived; // inherited from NSObject

	readonly format: string;

	readonly identifier: string;

	readonly secureUrl: string;

	readonly transformation: string;

	readonly url: string;
}

declare class CLDDestroyRequestParams extends CLDRequestParams {

	static alloc(): CLDDestroyRequestParams; // inherited from NSObject

	static new(): CLDDestroyRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setInvalidate(invalidate: boolean): this;

	setType(type: string): this;

	setTypeWithType(type: CLDType): this;
}

declare class CLDDetection extends CLDBaseResult {

	static alloc(): CLDDetection; // inherited from NSObject

	static new(): CLDDetection; // inherited from NSObject

	readonly rekognitionFace: CLDRekognitionFace;
}

declare class CLDDownloader extends CLDBaseNetworkObject {

	static alloc(): CLDDownloader; // inherited from NSObject

	static new(): CLDDownloader; // inherited from NSObject

	fetchAssetCompletionHandler(url: string, progress: (p1: NSProgress) => void, completionHandler: (p1: NSData, p2: NSError) => void): CLDFetchAssetRequest;

	fetchImageCompletionHandler(url: string, progress: (p1: NSProgress) => void, completionHandler: (p1: UIImage, p2: NSError) => void): CLDFetchImageRequest;
}

declare class CLDEagerResult extends CLDBaseResult {

	static alloc(): CLDEagerResult; // inherited from NSObject

	static new(): CLDEagerResult; // inherited from NSObject

	readonly secureUrl: string;

	readonly url: string;
}

declare class CLDEagerTransformation extends CLDTransformation {

	static alloc(): CLDEagerTransformation; // inherited from NSObject

	static new(): CLDEagerTransformation; // inherited from NSObject

	setFormat(format: string): this;
}

declare const enum CLDEffect {

	Hue = 0,

	Red = 1,

	Green = 2,

	Blue = 3,

	Negate = 4,

	Brightness = 5,

	Sepia = 6,

	Grayscale = 7,

	Blackwhite = 8,

	Saturation = 9,

	Colorize = 10,

	Contrast = 11,

	AutoContrast = 12,

	Vibrance = 13,

	AutoColor = 14,

	Improve = 15,

	AutoBrightness = 16,

	FillLight = 17,

	ViesusCorrect = 18,

	Gamma = 19,

	Screen = 20,

	Multiply = 21,

	Overlay = 22,

	MakeTransparent = 23,

	Trim = 24,

	Shadow = 25,

	Distort = 26,

	Shear = 27,

	Displace = 28,

	OilPaint = 29,

	Redeye = 30,

	AdvRedeye = 31,

	Vignette = 32,

	GradientFade = 33,

	Pixelate = 34,

	PixelateRegion = 35,

	PixelateFaces = 36,

	Blur = 37,

	BlurRegion = 38,

	BlurFaces = 39,

	Sharpen = 40,

	UnsharpMask = 41,

	OrderedDither = 42,

	Art = 43,

	AssistColorblind = 44
}

declare class CLDExplicitRequest extends CLDRequest {

	static alloc(): CLDExplicitRequest; // inherited from NSObject

	static new(): CLDExplicitRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDExplicitResult, p2: NSError) => void): CLDExplicitRequest;
}

declare class CLDExplicitRequestParams extends CLDUploadRequestParams {

	static alloc(): CLDExplicitRequestParams; // inherited from NSObject

	static new(): CLDExplicitRequestParams; // inherited from NSObject
}

declare class CLDExplicitResult extends CLDUploadResult {

	static alloc(): CLDExplicitResult; // inherited from NSObject

	static new(): CLDExplicitResult; // inherited from NSObject
}

declare class CLDExplodeRequest extends CLDRequest {

	static alloc(): CLDExplodeRequest; // inherited from NSObject

	static new(): CLDExplodeRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDExplodeResult, p2: NSError) => void): CLDExplodeRequest;
}

declare class CLDExplodeRequestParams extends CLDRequestParams {

	static alloc(): CLDExplodeRequestParams; // inherited from NSObject

	static new(): CLDExplodeRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setAsync(async: boolean): this;

	setFormat(format: string): this;

	setNotificationUrl(notificationUrl: string): this;

	setType(type: string): this;

	setTypeWithType(type: CLDType): this;
}

declare class CLDExplodeResult extends CLDBaseResult {

	static alloc(): CLDExplodeResult; // inherited from NSObject

	static new(): CLDExplodeResult; // inherited from NSObject

	readonly batchId: string;

	readonly status: string;
}

declare class CLDExpression extends NSObject {

	static alloc(): CLDExpression; // inherited from NSObject

	static aspectRatio(): CLDExpression;

	static currentPageIndex(): CLDExpression;

	static duration(): CLDExpression;

	static faceCount(): CLDExpression;

	static height(): CLDExpression;

	static illustrationScore(): CLDExpression;

	static initialAspectRatio(): CLDExpression;

	static initialDuration(): CLDExpression;

	static initialHeight(): CLDExpression;

	static initialWidth(): CLDExpression;

	static new(): CLDExpression; // inherited from NSObject

	static pageCount(): CLDExpression;

	static pageXOffset(): CLDExpression;

	static pageYOffset(): CLDExpression;

	static tags(): CLDExpression;

	static width(): CLDExpression;

	constructor(o: { value: string; });

	addByFloat(number: number): this;

	addByInt(number: number): this;

	addByString(number: string): this;

	asParams(): NSDictionary<string, string>;

	asString(): string;

	divideByFloat(number: number): this;

	divideByInt(number: number): this;

	divideByString(number: string): this;

	initWithValue(value: string): this;

	multipleByFloat(number: number): this;

	multipleByInt(number: number): this;

	multipleByString(number: string): this;

	powerByFloat(number: number): this;

	powerByInt(number: number): this;

	powerByString(number: string): this;

	subtractByFloat(number: number): this;

	subtractByInt(number: number): this;

	subtractByString(number: string): this;
}

declare class CLDFace extends CLDBaseResult {

	static alloc(): CLDFace; // inherited from NSObject

	static new(): CLDFace; // inherited from NSObject

	readonly boundingBox: CLDBoundingBox;

	readonly emotion: NSDictionary<string, number>;

	readonly pose: NSDictionary<string, number>;

	readonly quality: NSDictionary<string, number>;

	readonly race: NSDictionary<string, number>;
}

interface CLDFetchAssetRequest extends CLDNetworkDataRequest {

	responseAsset(completionHandler: (p1: NSData, p2: NSError) => void): CLDFetchAssetRequest;
}
declare var CLDFetchAssetRequest: {

	prototype: CLDFetchAssetRequest;
};

interface CLDFetchImageRequest extends CLDNetworkDataRequest {

	responseImage(completionHandler: (p1: UIImage, p2: NSError) => void): CLDFetchImageRequest;
}
declare var CLDFetchImageRequest: {

	prototype: CLDFetchImageRequest;
};

declare class CLDFetchLayer extends CLDLayer {

	static alloc(): CLDFetchLayer; // inherited from NSObject

	static new(): CLDFetchLayer; // inherited from NSObject

	constructor(o: { url: string; });

	initWithUrl(url: string): this;
}

declare const enum CLDFontStyle {

	Normal = 0,

	Italic = 1
}

declare const enum CLDFontWeight {

	Normal = 0,

	Bold = 1
}

declare class CLDFps extends CLDBaseParam {

	static alloc(): CLDFps; // inherited from NSObject

	static new(): CLDFps; // inherited from NSObject
}

declare const enum CLDGravity {

	Center = 0,

	Auto = 1,

	Face = 2,

	FaceCenter = 3,

	Faces = 4,

	FacesCenter = 5,

	AdvFace = 6,

	AdvFaces = 7,

	AdvEyes = 8,

	North = 9,

	NorthWest = 10,

	NorthEast = 11,

	South = 12,

	SouthWest = 13,

	SouthEast = 14,

	East = 15,

	West = 16,

	XyCenter = 17,

	Custom = 18,

	CustomFace = 19,

	CustomFaces = 20,

	CustomAdvFace = 21,

	CustomAdvFaces = 22,

	AutoOcrText = 23,

	OcrText = 24,

	OcrTextAdvOcr = 25
}

declare const enum CLDImageCachePolicy {

	None = 0,

	Memory = 1,

	Disk = 2
}

declare class CLDImageInfo extends CLDBaseResult {

	static alloc(): CLDImageInfo; // inherited from NSObject

	static new(): CLDImageInfo; // inherited from NSObject
}

declare class CLDInfo extends CLDBaseResult {

	static alloc(): CLDInfo; // inherited from NSObject

	static new(): CLDInfo; // inherited from NSObject

	readonly detection: CLDDetection;

	readonly ocr: CLDOcrResult;
}

declare class CLDLayer extends NSObject {

	static alloc(): CLDLayer; // inherited from NSObject

	static new(): CLDLayer; // inherited from NSObject

	setFormatWithFormat(format: string): CLDLayer;

	setPublicIdWithPublicId(publicId: string): CLDLayer;

	setResourceTypeFromLayerResourceType(resourceType: LayerResourceType): CLDLayer;

	setResourceTypeFromString(resourceType: string): CLDLayer;

	setTypeFromString(rawType: string): CLDLayer;

	setTypeFromType(type: CLDType): CLDLayer;
}

declare const enum CLDLogLevel {

	Trace = 0,

	Debug = 1,

	Info = 2,

	Warning = 3,

	Error = 4,

	None = 5
}

declare class CLDManagementApi extends CLDBaseNetworkObject {

	static alloc(): CLDManagementApi; // inherited from NSObject

	static new(): CLDManagementApi; // inherited from NSObject

	addTagPublicIdsParamsCompletionHandler(tag: string, publicIds: NSArray<string> | string[], params: CLDTagsRequestParams, completionHandler: (p1: CLDTagResult, p2: NSError) => void): CLDTagRequest;

	deleteByTokenParamsCompletionHandler(token: string, params: CLDDeleteByTokenRequestParams, completionHandler: (p1: CLDDeleteResult, p2: NSError) => void): CLDDeleteRequest;

	destroyParamsCompletionHandler(publicId: string, params: CLDDestroyRequestParams, completionHandler: (p1: CLDDeleteResult, p2: NSError) => void): CLDDeleteRequest;

	explicitPublicIdStringTypeParamsCompletionHandler(publicId: string, type: string, params: CLDExplicitRequestParams, completionHandler: (p1: CLDExplicitResult, p2: NSError) => void): CLDExplicitRequest;

	explicitTypeParamsCompletionHandler(publicId: string, type: CLDType, params: CLDExplicitRequestParams, completionHandler: (p1: CLDExplicitResult, p2: NSError) => void): CLDExplicitRequest;

	explodeTransformationParamsCompletionHandler(publicId: string, transformation: CLDTransformation, params: CLDExplodeRequestParams, completionHandler: (p1: CLDExplodeResult, p2: NSError) => void): CLDExplodeRequest;

	generateSpriteParamsCompletionHandler(tag: string, params: CLDSpriteRequestParams, completionHandler: (p1: CLDSpriteResult, p2: NSError) => void): CLDSpriteRequest;

	multiParamsCompletionHandler(tag: string, params: CLDMultiRequestParams, completionHandler: (p1: CLDMultiResult, p2: NSError) => void): CLDMultiRequest;

	removeTagPublicIdsParamsCompletionHandler(tag: string, publicIds: NSArray<string> | string[], params: CLDTagsRequestParams, completionHandler: (p1: CLDTagResult, p2: NSError) => void): CLDTagRequest;

	replaceTagPublicIdsParamsCompletionHandler(tag: string, publicIds: NSArray<string> | string[], params: CLDTagsRequestParams, completionHandler: (p1: CLDTagResult, p2: NSError) => void): CLDTagRequest;

	textParamsCompletionHandler(text: string, params: CLDTextRequestParams, completionHandler: (p1: CLDTextResult, p2: NSError) => void): CLDTextRequest;
}

declare const enum CLDModeration {

	Manual = 0,

	Webpurify = 1
}

declare class CLDMultiRequest extends CLDRequest {

	static alloc(): CLDMultiRequest; // inherited from NSObject

	static new(): CLDMultiRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDMultiResult, p2: NSError) => void): CLDMultiRequest;
}

declare class CLDMultiRequestParams extends CLDRequestParams {

	static alloc(): CLDMultiRequestParams; // inherited from NSObject

	static new(): CLDMultiRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setAsync(async: boolean): this;

	setFormat(format: string): this;

	setNotificationUrl(notificationUrl: string): this;

	setTransformation(transformation: CLDTransformation): this;
}

declare class CLDMultiResult extends CLDBaseResult {

	static alloc(): CLDMultiResult; // inherited from NSObject

	static new(): CLDMultiResult; // inherited from NSObject

	readonly publicId: string;

	readonly secureUrl: string;

	readonly url: string;

	readonly version: string;
}

interface CLDNetworkAdapter {

	cloudinaryRequestHeadersParameters(url: string, headers: NSDictionary<string, string>, parameters: NSDictionary<string, any>): CLDNetworkDataRequest;

	downloadFromCloudinary(url: string): CLDNetworkDataRequest;

	getBackgroundCompletionHandler(): () => void;

	setBackgroundCompletionHandler(newValue: () => void): void;

	setMaxConcurrentDownloads(maxConcurrentDownloads: number): void;

	uploadToCloudinaryHeadersParametersData(url: string, headers: NSDictionary<string, string>, parameters: NSDictionary<string, any>, data: any): CLDNetworkDataRequest;
}
declare var CLDNetworkAdapter: {

	prototype: CLDNetworkAdapter;
};

interface CLDNetworkDataRequest extends CLDNetworkRequest {

	progress(progress: (p1: NSProgress) => void): CLDNetworkDataRequest;

	response(completionHandler: (p1: any, p2: NSError) => void): CLDNetworkRequest;
}
declare var CLDNetworkDataRequest: {

	prototype: CLDNetworkDataRequest;
};

interface CLDNetworkRequest {

	cancel(): void;

	resume(): void;

	suspend(): void;
}
declare var CLDNetworkRequest: {

	prototype: CLDNetworkRequest;
};

declare class CLDOcrBlockResult extends CLDBaseResult {

	static alloc(): CLDOcrBlockResult; // inherited from NSObject

	static new(): CLDOcrBlockResult; // inherited from NSObject

	readonly blockType: string;

	readonly boundingBox: CLDOcrBoundindBlockResult;

	readonly paragraphs: NSArray<CLDOcrParagraphResult>;

	readonly property: CLDOcrPropertyResult;
}

declare class CLDOcrBoundindBlockResult extends CLDBaseResult {

	static alloc(): CLDOcrBoundindBlockResult; // inherited from NSObject

	static new(): CLDOcrBoundindBlockResult; // inherited from NSObject

	readonly vertices: NSArray<NSValue>;
}

declare class CLDOcrDataResult extends CLDBaseResult {

	static alloc(): CLDOcrDataResult; // inherited from NSObject

	static new(): CLDOcrDataResult; // inherited from NSObject

	readonly fullTextAnnotation: CLDOcrFullTextAnnotationResult;

	readonly textAnnotations: NSArray<CLDOcrTextAnnotationResult>;
}

declare class CLDOcrDetectedLanguagesResult extends CLDBaseResult {

	static alloc(): CLDOcrDetectedLanguagesResult; // inherited from NSObject

	static new(): CLDOcrDetectedLanguagesResult; // inherited from NSObject

	readonly languageCode: string;
}

declare class CLDOcrFullTextAnnotationResult extends CLDBaseResult {

	static alloc(): CLDOcrFullTextAnnotationResult; // inherited from NSObject

	static new(): CLDOcrFullTextAnnotationResult; // inherited from NSObject

	readonly pages: NSArray<CLDOcrPageResult>;

	readonly text: string;
}

declare class CLDOcrPageResult extends CLDBaseResult {

	static alloc(): CLDOcrPageResult; // inherited from NSObject

	static new(): CLDOcrPageResult; // inherited from NSObject

	readonly blocks: NSArray<CLDOcrBlockResult>;

	readonly property: CLDOcrPropertyResult;
}

declare class CLDOcrParagraphResult extends CLDBaseResult {

	static alloc(): CLDOcrParagraphResult; // inherited from NSObject

	static new(): CLDOcrParagraphResult; // inherited from NSObject

	readonly boundingBox: CLDOcrBoundindBlockResult;

	readonly property: CLDOcrPropertyResult;

	readonly words: NSArray<CLDOcrWordResult>;
}

declare class CLDOcrPropertyResult extends CLDBaseResult {

	static alloc(): CLDOcrPropertyResult; // inherited from NSObject

	static new(): CLDOcrPropertyResult; // inherited from NSObject

	readonly detectedLanguages: NSArray<CLDOcrDetectedLanguagesResult>;
}

declare class CLDOcrResult extends CLDBaseResult {

	static alloc(): CLDOcrResult; // inherited from NSObject

	static new(): CLDOcrResult; // inherited from NSObject

	readonly advOcr: CLDAdvOcrResult;
}

declare class CLDOcrSymbolResult extends CLDBaseResult {

	static alloc(): CLDOcrSymbolResult; // inherited from NSObject

	static new(): CLDOcrSymbolResult; // inherited from NSObject

	readonly boundingBox: CLDOcrBoundindBlockResult;

	readonly property: CLDOcrPropertyResult;

	readonly text: string;
}

declare class CLDOcrTextAnnotationResult extends CLDBaseResult {

	static alloc(): CLDOcrTextAnnotationResult; // inherited from NSObject

	static new(): CLDOcrTextAnnotationResult; // inherited from NSObject

	readonly boundingBlock: CLDOcrBoundindBlockResult;

	readonly locale: string;

	readonly textDescription: string;
}

declare class CLDOcrWordResult extends CLDBaseResult {

	static alloc(): CLDOcrWordResult; // inherited from NSObject

	static new(): CLDOcrWordResult; // inherited from NSObject

	readonly boundingBox: CLDOcrBoundindBlockResult;

	readonly property: CLDOcrPropertyResult;

	readonly symbols: NSArray<CLDOcrSymbolResult>;
}

declare class CLDPredominant extends CLDBaseResult {

	static alloc(): CLDPredominant; // inherited from NSObject

	static new(): CLDPredominant; // inherited from NSObject

	readonly google: any;
}

declare class CLDQuality extends CLDBaseParam {

	static alloc(): CLDQuality; // inherited from NSObject

	static new(): CLDQuality; // inherited from NSObject
}

declare class CLDQualityAnalysis extends CLDBaseResult {

	static alloc(): CLDQualityAnalysis; // inherited from NSObject

	static new(): CLDQualityAnalysis; // inherited from NSObject

	readonly blockiness: number;

	readonly chromaSubsampling: number;

	readonly colorScore: number;

	readonly contrast: number;

	readonly dct: number;

	readonly exposure: number;

	readonly focus: number;

	readonly jpegChroma: number;

	readonly jpegQuality: number;

	readonly lighting: number;

	readonly noise: number;

	readonly pixelScore: number;

	readonly resolution: number;

	readonly saturation: number;
}

declare const enum CLDQualityAuto {

	Best = 0,

	Good = 1,

	Eco = 2,

	Low = 3
}

declare class CLDRekognitionFace extends CLDBaseResult {

	static alloc(): CLDRekognitionFace; // inherited from NSObject

	static new(): CLDRekognitionFace; // inherited from NSObject

	readonly faces: NSArray<CLDFace>;

	readonly status: string;
}

declare class CLDRenameRequest extends CLDRequest {

	static alloc(): CLDRenameRequest; // inherited from NSObject

	static new(): CLDRenameRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDRenameResult, p2: NSError) => void): CLDRenameRequest;
}

declare class CLDRenameRequestParams extends CLDRequestParams {

	static alloc(): CLDRenameRequestParams; // inherited from NSObject

	static new(): CLDRenameRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;
}

declare class CLDRenameResult extends CLDBaseResult {

	static alloc(): CLDRenameResult; // inherited from NSObject

	static new(): CLDRenameResult; // inherited from NSObject

	readonly colors: any;

	readonly context: any;

	readonly coordinates: CLDCoordinates;

	readonly createdAt: string;

	readonly derived: CLDDerived;

	readonly exif: NSDictionary<string, string>;

	readonly faces: any;

	readonly format: string;

	readonly info: CLDInfo;

	readonly metadata: NSDictionary<string, string>;

	readonly moderation: any;

	readonly nextCursor: string;

	readonly phash: string;

	readonly predominant: CLDPredominant;

	readonly publicId: string;

	readonly resourceType: string;

	readonly secureUrl: string;

	readonly tags: NSArray<string>;

	readonly type: string;

	readonly url: string;

	readonly version: string;
}

declare class CLDRequest extends NSObject {

	static alloc(): CLDRequest; // inherited from NSObject

	static new(): CLDRequest; // inherited from NSObject

	cancel(): void;

	responseRaw(completionHandler: (p1: any, p2: NSError) => void): CLDRequest;

	resume(): void;

	suspend(): void;
}

declare class CLDRequestParams extends NSObject {

	static alloc(): CLDRequestParams; // inherited from NSObject

	static new(): CLDRequestParams; // inherited from NSObject

	getParam(key: string): any;

	setParamValue(key: string, value: any): CLDRequestParams;

	setResourceTypeFromString(resourceType: string): CLDRequestParams;

	setResourceTypeFromUrlResourceType(resourceType: CLDUrlResourceType): CLDRequestParams;

	setSignatureWithSignature(signature: CLDSignature): CLDRequestParams;
}

declare class CLDResponsiveBreakpoints extends NSObject {

	static alloc(): CLDResponsiveBreakpoints; // inherited from NSObject

	static new(): CLDResponsiveBreakpoints; // inherited from NSObject

	constructor(o: { createDerived: boolean; });

	initWithCreateDerived(createDerived: boolean): this;

	setBytesStep(bytesStep: number): this;

	setFormat(format: string): this;

	setMaxImages(maxImages: number): this;

	setMaxWidth(maxWidth: number): this;

	setMinWidth(minWidth: number): this;

	setParamValue(key: string, value: any): this;

	setTransformations(transformation: CLDTransformation): this;
}

declare class CLDResponsiveParams extends NSObject {

	static alloc(): CLDResponsiveParams; // inherited from NSObject

	static autoFill(): CLDResponsiveParams;

	static fit(): CLDResponsiveParams;

	static new(): CLDResponsiveParams; // inherited from NSObject

	static readonly defaultMaxDimension: number;

	static readonly defaultMinDimension: number;

	static readonly defaultReloadOnSizeChange: boolean;

	static readonly defaultStepSize: number;

	setMaxDimension(maxDimension: number): this;

	setMinDimension(minDimension: number): this;

	setReloadOnSizeChange(reload: boolean): this;

	setStepSize(stepSize: number): this;
}

declare class CLDResponsiveViewHelper extends NSObject {

	static alloc(): CLDResponsiveViewHelper; // inherited from NSObject

	static new(): CLDResponsiveViewHelper; // inherited from NSObject

	cldSetImageWithViewPublicIdCloudinarySignUrlResourceTypeResponsiveParamsTransformationPlaceholder(view: UIImageView, publicId: string, cloudinary: CLDCloudinary, signUrl: boolean, resourceType: CLDUrlResourceType, responsiveParams: CLDResponsiveParams, transformation: CLDTransformation, placeholder: UIImage): void;

	onViewSizeKnownWithView(view: UIImageView): void;
}

declare class CLDSignature extends NSObject {

	static alloc(): CLDSignature; // inherited from NSObject

	static new(): CLDSignature; // inherited from NSObject

	readonly signature: string;

	readonly timestamp: number;

	constructor(o: { signature: string; timestamp: number; });

	initWithSignatureTimestamp(signature: string, timestamp: number): this;
}

declare class CLDSpriteRequest extends CLDRequest {

	static alloc(): CLDSpriteRequest; // inherited from NSObject

	static new(): CLDSpriteRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDSpriteResult, p2: NSError) => void): CLDSpriteRequest;
}

declare class CLDSpriteRequestParams extends CLDRequestParams {

	static alloc(): CLDSpriteRequestParams; // inherited from NSObject

	static new(): CLDSpriteRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setAsync(async: boolean): this;

	setFormat(format: string): this;

	setNotificationUrl(notificationUrl: string): this;

	setTransformation(transformation: CLDTransformation): this;
}

declare class CLDSpriteResult extends CLDBaseResult {

	static alloc(): CLDSpriteResult; // inherited from NSObject

	static new(): CLDSpriteResult; // inherited from NSObject

	readonly cssUrl: string;

	readonly imageInfos: NSDictionary<string, CLDImageInfo>;

	readonly imageUrl: string;

	readonly jsonUrl: string;

	readonly publicId: string;

	readonly secureCssUrl: string;

	readonly version: string;
}

declare class CLDSubtitlesLayer extends CLDTextLayer {

	static alloc(): CLDSubtitlesLayer; // inherited from NSObject

	static new(): CLDSubtitlesLayer; // inherited from NSObject
}

declare class CLDTagRequest extends CLDRequest {

	static alloc(): CLDTagRequest; // inherited from NSObject

	static new(): CLDTagRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDTagResult, p2: NSError) => void): CLDTagRequest;
}

declare class CLDTagResult extends CLDBaseResult {

	static alloc(): CLDTagResult; // inherited from NSObject

	static new(): CLDTagResult; // inherited from NSObject

	readonly publicIds: NSArray<string>;
}

declare class CLDTagsRequestParams extends CLDRequestParams {

	static alloc(): CLDTagsRequestParams; // inherited from NSObject

	static new(): CLDTagsRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;
}

declare const enum CLDTextDecoration {

	None = 0,

	Underline = 1
}

declare class CLDTextLayer extends CLDLayer {

	static alloc(): CLDTextLayer; // inherited from NSObject

	static new(): CLDTextLayer; // inherited from NSObject

	setFontAntialiasingString(antialiasing: string): CLDTextLayer;

	setFontFamilyWithFontFamily(fontFamily: string): CLDTextLayer;

	setFontHintingString(hinting: string): CLDTextLayer;

	setFontSizeFromInt(fontSize: number): CLDTextLayer;

	setFontSizeFromString(fontSize: string): CLDTextLayer;

	setFontStyleFromLayerFontStyle(fontStyle: CLDFontStyle): CLDTextLayer;

	setFontStyleFromString(fontStyle: string): CLDTextLayer;

	setFontWeightFromLayerFontWeight(fontWeight: CLDFontWeight): CLDTextLayer;

	setFontWeightFromString(fontWeight: string): CLDTextLayer;

	setLetterSpacingFromFloat(letterSpacing: number): CLDTextLayer;

	setLetterSpacingFromInt(letterSpacing: number): CLDTextLayer;

	setLetterSpacingString(letterSpacing: string): CLDTextLayer;

	setLineSpacingFromFloat(lineSpacing: number): CLDTextLayer;

	setLineSpacingFromInt(lineSpacing: number): CLDTextLayer;

	setLineSpacingString(lineSpacing: string): CLDTextLayer;

	setStrokeString(stroke: string): CLDTextLayer;

	setTextAlignString(textAlign: string): CLDTextLayer;

	setTextDecorationString(textDecoration: string): CLDTextLayer;

	setTextWithText(text: string): CLDTextLayer;
}

declare class CLDTextRequest extends CLDRequest {

	static alloc(): CLDTextRequest; // inherited from NSObject

	static new(): CLDTextRequest; // inherited from NSObject

	response(completionHandler: (p1: CLDTextResult, p2: NSError) => void): CLDTextRequest;
}

declare class CLDTextRequestParams extends CLDRequestParams {

	static alloc(): CLDTextRequestParams; // inherited from NSObject

	static new(): CLDTextRequestParams; // inherited from NSObject

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setBackground(background: string): CLDTextRequestParams;

	setFontColor(fontColor: string): CLDTextRequestParams;

	setFontFamily(fontFamily: string): CLDTextRequestParams;

	setFontSize(fontSize: string): CLDTextRequestParams;

	setFontSizeFromInt(fontSize: number): CLDTextRequestParams;

	setFontStyle(fontStyle: string): CLDTextRequestParams;

	setFontStyleFromFontStyle(fontStyle: CLDFontStyle): CLDTextRequestParams;

	setFontWeight(fontWeight: string): CLDTextRequestParams;

	setFontWeightFromFontWeight(fontWeight: CLDFontWeight): CLDTextRequestParams;

	setOpacity(opacity: number): CLDTextRequestParams;

	setPublicId(publicId: string): CLDTextRequestParams;

	setTextDecoration(textDecoration: string): CLDTextRequestParams;

	setTextDecorationFromTextDecoration(textDecoration: CLDTextDecoration): CLDTextRequestParams;
}

declare class CLDTextResult extends CLDBaseResult {

	static alloc(): CLDTextResult; // inherited from NSObject

	static new(): CLDTextResult; // inherited from NSObject
}

declare class CLDTransformation extends NSObject {

	static alloc(): CLDTransformation; // inherited from NSObject

	static new(): CLDTransformation; // inherited from NSObject

	readonly angle: string;

	readonly aspectRatio: string;

	readonly audioCodec: string;

	readonly audioFrequency: string;

	readonly background: string;

	readonly bitRate: string;

	readonly border: string;

	readonly color: string;

	readonly colorSpace: string;

	readonly crop: string;

	readonly customFunction: string;

	readonly customPreFunction: string;

	readonly defaultImage: string;

	readonly delay: string;

	readonly density: string;

	readonly dpr: string;

	readonly duration: string;

	readonly effect: string;

	readonly endOffset: string;

	readonly fetchFormat: string;

	readonly flags: string;

	readonly fps: string;

	readonly gravity: string;

	readonly height: string;

	readonly ifParam: string;

	readonly keyframeInterval: string;

	readonly named: string;

	readonly offset: NSArray<string>;

	readonly opacity: string;

	readonly overlay: string;

	readonly page: string;

	readonly prefix: string;

	readonly quality: string;

	readonly radius: string;

	readonly rawTransformation: string;

	readonly startOffset: string;

	readonly streamingProfile: string;

	readonly underlay: string;

	readonly variables: string;

	readonly videoCodec: string;

	readonly videoSampling: string;

	readonly width: string;

	readonly x: string;

	readonly y: string;

	readonly zoom: string;

	constructor(o: { input: NSArray<CLDTransformation> | CLDTransformation[]; });

	asString(): string;

	chain(): this;

	endIf(): this;

	getParam(param: string): string;

	ifCondition(): CLDConditionExpression;

	ifConditionFromString(condition: string): this;

	ifConditionThen(condition: CLDConditionExpression, transformation: CLDExpression): this;

	ifElse(): this;

	initWithInput(input: NSArray<CLDTransformation> | CLDTransformation[]): this;

	setAngle(angle: string): this;

	setAngleWithArray(angles: NSArray<string> | string[]): this;

	setAngleWithInt(angle: number): this;

	setAspectRatio(aspectRatio: string): this;

	setAspectRatioWithFloat(aspectRatio: number): this;

	setAspectRatioWithNominatorDenominator(nominator: number, denominator: number): this;

	setAudioCodec(audioCodec: string): this;

	setAudioFrequency(audioFrequency: string): this;

	setAudioFrequencyWithInt(audioFrequency: number): this;

	setBackground(background: string): this;

	setBitRate(bitRate: string): this;

	setBitRateWithInt(bitRate: number): this;

	setBitRateWithKb(bitRate: number): this;

	setBorder(border: string): this;

	setBorderColor(width: number, color: string): this;

	setColor(color: string): this;

	setColorSpace(colorSpace: string): this;

	setCrop(crop: string): this;

	setCropWithCrop(crop: CLDCrop): this;

	setCustomFunction(customFunction: CLDCustomFunction): this;

	setCustomPreFunction(customPreFunction: CLDCustomFunction): this;

	setDefaultImage(defaultImage: string): this;

	setDelay(delay: string): this;

	setDelayWithInt(delay: number): this;

	setDensity(density: string): this;

	setDensityWithInt(density: number): this;

	setDpr(dpr: string): this;

	setDprAuto(): this;

	setDprWithFloat(dpr: number): this;

	setDuration(duration: string): this;

	setDurationWithPercent(percent: number): this;

	setDurationWithSeconds(seconds: number): this;

	setEffect(effect: string): this;

	setEffectParam(effect: string, param: string): this;

	setEffectWithArtFilter(effect: CLDArtFilters): CLDTransformation;

	setEffectWithEffect(effect: CLDEffect): this;

	setEffectWithEffectParam(effect: CLDEffect, param: string): this;

	setEndOffset(duration: string): this;

	setEndOffsetWithPercent(percent: number): this;

	setEndOffsetWithSeconds(seconds: number): this;

	setFetchFormat(fetchFormat: string): this;

	setFlags(flags: string): this;

	setFlagsWithArray(flags: NSArray<string> | string[]): this;

	setFps(fps: CLDFps): this;

	setFpsWithFloat(fps: number): this;

	setFpsWithString(fps: string): this;

	setGravity(gravity: string): this;

	setGravityWithGravity(gravity: CLDGravity): this;

	setHeight(height: string): this;

	setHeightWithExpression(input: CLDExpression): this;

	setHeightWithFloat(height: number): this;

	setHeightWithInt(height: number): this;

	setKeyframeInterval(interval: string): this;

	setKeyframeIntervalWithInterval(interval: number): this;

	setNamed(names: string): this;

	setNamedWithArray(names: NSArray<string> | string[]): this;

	setOpacity(opacity: string): this;

	setOpacityWithInt(opacity: number): this;

	setOverlay(overlay: string): this;

	setOverlayWithLayer(layer: CLDLayer): this;

	setPage(page: string): this;

	setPageWithInt(page: number): this;

	setParamValue(key: string, value: string): this;

	setPrefix(prefix: string): this;

	setQuality(quality: string): this;

	setQualityFromInt(quality: number): this;

	setQualityFromQuality(quality: CLDQuality): this;

	setRadius(radius: string): this;

	setRadiusFromArray(radius: NSArray<any> | any[]): this;

	setRadiusFromExpression(input: CLDExpression): this;

	setRadiusFromInt(radius: number): this;

	setRawTransformation(rawTransformation: string): this;

	setStartOffset(duration: string): this;

	setStartOffsetAndEndOffsetWithStartPercentEndPercent(startPercent: number, endPercent: number): this;

	setStartOffsetAndEndOffsetWithStartSecondsEndSeconds(startSeconds: number, endSeconds: number): this;

	setStartOffsetWithPercent(percent: number): this;

	setStartOffsetWithSeconds(seconds: number): this;

	setStreamingProfile(streamingProfile: string): this;

	setTopLeftPoint(point: CGPoint): this;

	setUnderlay(underlay: string): this;

	setUnderlayWithLayer(layer: CLDLayer): this;

	setVariableFloatValue(name: string, value: number): this;

	setVariableIntValue(name: string, value: number): this;

	setVariableString(name: string, value: string): this;

	setVariableValuesArray(name: string, values: NSArray<string> | string[]): this;

	setVariableWithVariable(variable: CLDVariable): this;

	setVariablesWithVariablesArray(variables: NSArray<CLDVariable> | CLDVariable[]): this;

	setVideoCodec(videoCodec: string): this;

	setVideoCodecAndProfileAndLevelVideoProfileLevel(videoCodec: string, videoProfile: string, level: string): this;

	setVideoSampling(videoSampling: string): this;

	setVideoSamplingWithDelay(delay: number): this;

	setVideoSamplingWithFrames(frames: number): this;

	setWidth(width: string): this;

	setWidthWithExpression(input: CLDExpression): this;

	setWidthWithFloat(width: number): this;

	setWidthWithInt(width: number): this;

	setX(x: string): this;

	setXFromExpression(input: CLDExpression): this;

	setXFromFloat(x: number): this;

	setXFromInt(x: number): this;

	setY(y: string): this;

	setYFromExpression(input: CLDExpression): this;

	setYFromFloat(y: number): this;

	setYFromInt(y: number): this;

	setZoom(zoom: string): this;

	setZoomWithFloat(zoom: number): this;
}

declare const enum CLDType {

	Upload = 0,

	Fetch = 1,

	Facebook = 2,

	Twitter = 3,

	TwitterName = 4,

	Sprite = 5,

	Private = 6,

	Authenticated = 7
}

declare class CLDUIImageView extends UIImageView {

	static alloc(): CLDUIImageView; // inherited from NSObject

	static appearance(): CLDUIImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): CLDUIImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): CLDUIImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDUIImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): CLDUIImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): CLDUIImageView; // inherited from UIAppearance

	static new(): CLDUIImageView; // inherited from NSObject

	cldSetImageWithPublicIdCloudinarySignUrlResourceTypeResponsiveParamsTransformationPlaceholder(publicId: string, cloudinary: CLDCloudinary, signUrl: boolean, resourceType: CLDUrlResourceType, responsiveParams: CLDResponsiveParams, transformation: CLDTransformation, placeholder: UIImage): void;
}

declare class CLDUploadRequest extends NSObject {

	static alloc(): CLDUploadRequest; // inherited from NSObject

	static new(): CLDUploadRequest; // inherited from NSObject

	cancel(): void;

	progress(progress: (p1: NSProgress) => void): CLDUploadRequest;

	response(completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	responseRaw(completionHandler: (p1: any, p2: NSError) => void): CLDUploadRequest;

	resume(): void;

	suspend(): void;
}

declare class CLDUploadRequestParams extends CLDRequestParams {

	static alloc(): CLDUploadRequestParams; // inherited from NSObject

	static new(): CLDUploadRequestParams; // inherited from NSObject

	readonly accessControl: string;

	readonly allowedFormats: string;

	readonly autoTagging: string;

	readonly categorization: string;

	readonly context: string;

	readonly customCoordinates: string;

	readonly detection: string;

	readonly eager: string;

	readonly eagerNotificationUrl: string;

	readonly eval: string;

	readonly faceCoordinates: string;

	readonly folder: string;

	readonly format: string;

	readonly headers: string;

	readonly moderation: string;

	readonly notificationUrl: string;

	readonly ocr: boolean;

	readonly proxy: string;

	readonly publicId: string;

	readonly rawConvert: string;

	readonly similaritySearch: string;

	readonly tags: string;

	readonly transformation: string;

	readonly type: string;

	constructor(o: { params: NSDictionary<string, any>; });

	initWithParams(params: NSDictionary<string, any>): this;

	setAccessControl(accessControl: NSArray<CLDAccessControlRule> | CLDAccessControlRule[]): this;

	setAccessControlWithString(accessControl: string): this;

	setAccessibilityAnalysis(accessibilityAnalysis: boolean): this;

	setAllowedFormats(allowedFormats: string): this;

	setAllowedFormatsWithArray(allowedFormats: NSArray<string> | string[]): this;

	setAsync(async: boolean): this;

	setAutoTagging(autoTagging: string): this;

	setAutoTaggingWithDouble(autoTagging: number): this;

	setBackup(backup: boolean): this;

	setCategorization(categorization: string): this;

	setColors(colors: boolean): this;

	setContext(context: string): this;

	setContextFromDictionary(context: NSDictionary<string, string>): this;

	setCustomCoordinates(customCoordinates: string): this;

	setCustomCoordinatesFromCoordinates(customCoordinates: NSArray<CLDCoordinate> | CLDCoordinate[]): this;

	setDetection(detection: string): this;

	setDiscardOriginalFilename(discardOriginalFilename: boolean): this;

	setEager(eager: string): this;

	setEagerAsync(eagerAsync: boolean): this;

	setEagerFromTransformationArray(eager: NSArray<CLDTransformation> | CLDTransformation[]): this;

	setEagerNotificationUrl(eagerNotificationUrl: string): this;

	setEvalFromString(eval: string): this;

	setFaceCoordinates(faceCoordinates: string): this;

	setFaceCoordinatesFromCoordinates(faceCoordinates: NSArray<CLDCoordinate> | CLDCoordinate[]): this;

	setFaces(faces: boolean): this;

	setFolder(folder: string): this;

	setFormat(format: string): this;

	setHeaders(headers: string): this;

	setHeadersWithDictionary(headers: NSDictionary<string, string>): this;

	setImageMetadata(imageMetadata: boolean): this;

	setInvalidate(invalidate: boolean): this;

	setModeration(moderation: string): this;

	setModerationFromModeration(moderation: CLDModeration): this;

	setNotificationUrl(notificationUrl: string): this;

	setOcr(enable: boolean): this;

	setOcrString(ocrString: string): this;

	setOverwrite(overwrite: boolean): this;

	setPhash(phash: boolean): this;

	setProxy(proxy: string): this;

	setPublicId(publicId: string): this;

	setQualityAnalysis(qualityAnalysis: boolean): this;

	setQualityOverrideFromQuality(quality: CLDQuality): this;

	setQualityOverrideFromString(quality: string): this;

	setRawConvert(rawConvert: string): this;

	setResponsiveBreakpoints(responsiveBreakpoints: NSArray<CLDResponsiveBreakpoints> | CLDResponsiveBreakpoints[]): this;

	setReturnDeleteToken(returnDeleteToken: boolean): this;

	setSimilaritySearch(similaritySearch: string): this;

	setTags(tags: string): this;

	setTagsWithArray(tags: NSArray<string> | string[]): this;

	setTransformation(transformation: string): this;

	setTransformationFromTransformation(transformation: CLDTransformation): this;

	setType(type: string): this;

	setTypeFromType(type: CLDType): this;

	setUniqueFilename(uniqueFilename: boolean): this;

	setUploadPreset(uploadPreset: string): this;

	setUseFilename(useFilename: boolean): this;
}

declare class CLDUploadResult extends CLDBaseResult {

	static alloc(): CLDUploadResult; // inherited from NSObject

	static new(): CLDUploadResult; // inherited from NSObject

	readonly accessControl: NSArray<CLDAccessControlRule>;

	readonly accessibilityAnalysis: CLDAccessibilityAnalysisResult;

	readonly audio: CLDAudio;

	readonly colors: any;

	readonly context: NSDictionary<string, NSDictionary<string, string>>;

	readonly coordinates: CLDCoordinates;

	readonly createdAt: string;

	readonly deleteToken: string;

	readonly eager: NSArray<CLDEagerResult>;

	readonly exif: NSDictionary<string, string>;

	readonly faces: any;

	readonly format: string;

	readonly info: CLDInfo;

	readonly metadata: NSDictionary<string, string>;

	readonly moderation: any;

	readonly phash: string;

	readonly publicId: string;

	readonly qualityAnalysis: NSDictionary<string, any>;

	readonly qualityAnalysisResult: CLDQualityAnalysis;

	readonly resourceType: string;

	readonly responsiveBreakpoints: NSArray<ResponsiveBreakpointsResult>;

	readonly secureUrl: string;

	readonly signature: string;

	readonly tags: NSArray<string>;

	readonly type: string;

	readonly url: string;

	readonly version: string;

	readonly video: CLDVideo;
}

declare class CLDUploadType extends NSObject {

	static alloc(): CLDUploadType; // inherited from NSObject

	static new(): CLDUploadType; // inherited from NSObject

	constructor(o: { signed: boolean; preset: string; });

	initWithSignedPreset(signed_: boolean, preset: string): this;
}

declare class CLDUploader extends CLDBaseNetworkObject {

	static alloc(): CLDUploader; // inherited from NSObject

	static new(): CLDUploader; // inherited from NSObject

	static readonly defaultChunkSize: number;

	signedUploadLargeWithUrlParamsChunkSizeProgressCompletionHandler(url: NSURL, params: CLDUploadRequestParams, chunkSize: number, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	signedUploadWithDataParamsProgressCompletionHandler(data: NSData, params: CLDUploadRequestParams, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	signedUploadWithUrlParamsProgressCompletionHandler(url: NSURL, params: CLDUploadRequestParams, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	uploadLargeWithUrlUploadPresetParamsChunkSizeProgressCompletionHandler(url: NSURL, uploadPreset: string, params: CLDUploadRequestParams, chunkSize: number, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	uploadWithDataUploadPresetParamsProgressCompletionHandler(data: NSData, uploadPreset: string, params: CLDUploadRequestParams, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;

	uploadWithUrlUploadPresetParamsProgressCompletionHandler(url: NSURL, uploadPreset: string, params: CLDUploadRequestParams, progress: (p1: NSProgress) => void, completionHandler: (p1: CLDUploadResult, p2: NSError) => void): CLDUploadRequest;
}

declare class CLDUploaderWidget extends NSObject implements UIImagePickerControllerDelegate, UINavigationControllerDelegate {

	static alloc(): CLDUploaderWidget; // inherited from NSObject

	static new(): CLDUploaderWidget; // inherited from NSObject

	readonly cloudinaryObject: CLDCloudinary;

	readonly configuration: CLDWidgetConfiguration;

	delegate: CLDUploaderWidgetDelegate;

	readonly images: NSArray<UIImage>;

	readonly rootViewController: UIViewController;

	readonly videos: NSArray<AVPlayerItem>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { cloudinary: CLDCloudinary; configuration: CLDWidgetConfiguration; images: NSArray<UIImage> | UIImage[]; delegate: CLDUploaderWidgetDelegate; });

	constructor(o: { cloudinary: CLDCloudinary; configuration: CLDWidgetConfiguration; images: NSArray<UIImage> | UIImage[]; videos: NSArray<AVPlayerItem> | AVPlayerItem[]; delegate: CLDUploaderWidgetDelegate; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissWidget(): void;

	imagePickerControllerDidCancel(picker: UIImagePickerController): void;

	imagePickerControllerDidFinishPickingImageEditingInfo(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<string, any>): void;

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: UIImagePickerController, info: NSDictionary<string, any>): void;

	initWithCloudinaryConfigurationImagesDelegate(cloudinary: CLDCloudinary, configuration: CLDWidgetConfiguration, images: NSArray<UIImage> | UIImage[], delegate: CLDUploaderWidgetDelegate): this;

	initWithCloudinaryConfigurationImagesVideosDelegate(cloudinary: CLDCloudinary, configuration: CLDWidgetConfiguration, images: NSArray<UIImage> | UIImage[], videos: NSArray<AVPlayerItem> | AVPlayerItem[], delegate: CLDUploaderWidgetDelegate): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	navigationControllerAnimationControllerForOperationFromViewControllerToViewController(navigationController: UINavigationController, operation: UINavigationControllerOperation, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;

	navigationControllerDidShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	navigationControllerInteractionControllerForAnimationController(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;

	navigationControllerPreferredInterfaceOrientationForPresentation(navigationController: UINavigationController): UIInterfaceOrientation;

	navigationControllerSupportedInterfaceOrientations(navigationController: UINavigationController): UIInterfaceOrientationMask;

	navigationControllerWillShowViewControllerAnimated(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentWidgetFrom(viewController: UIViewController): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setCloudinaryFromCloudinary(cloudinary: CLDCloudinary): this;

	setConfigurationFromConfiguration(configuration: CLDWidgetConfiguration): this;

	setDelegateFromDelegate(delegate: CLDUploaderWidgetDelegate): this;

	setImagesFromImages(images: NSArray<UIImage> | UIImage[]): this;

	setVideosFromVideoItems(videoItems: NSArray<AVPlayerItem> | AVPlayerItem[]): this;

	setVideosFromVideoUrls(videoUrls: NSArray<NSURL> | NSURL[]): this;
}

interface CLDUploaderWidgetDelegate {

	uploadWidgetDidDismiss(): void;

	uploadWidgetWillCall(widget: CLDUploaderWidget, uploadRequests: NSArray<CLDUploadRequest> | CLDUploadRequest[]): void;

	widgetDidCancel(widget: CLDUploaderWidget): void;
}
declare var CLDUploaderWidgetDelegate: {

	prototype: CLDUploaderWidgetDelegate;
};

declare class CLDUrl extends NSObject {

	static alloc(): CLDUrl; // inherited from NSObject

	static new(): CLDUrl; // inherited from NSObject

	generateSignUrl(publicId: string, signUrl: boolean): string;

	generateWithSignUrl(signUrl: boolean): string;

	setForceVersion(forceVersion: boolean): CLDUrl;

	setFormat(format: string): CLDUrl;

	setPublicId(publicId: string): CLDUrl;

	setResourceType(resourceType: string): CLDUrl;

	setResourceTypeFromUrlResourceType(resourceType: CLDUrlResourceType): CLDUrl;

	setShortenUrl(shortenUrl: boolean): CLDUrl;

	setSuffix(suffix: string): CLDUrl;

	setTransformation(transformation: CLDTransformation): CLDUrl;

	setType(type: string): CLDUrl;

	setTypeFromType(type: CLDType): CLDUrl;

	setUseRootPath(useRootPath: boolean): CLDUrl;

	setVersion(version: string): CLDUrl;
}

declare const enum CLDUrlResourceType {

	Image = 0,

	Raw = 1,

	Video = 2,

	Auto = 3
}

declare class CLDVariable extends NSObject {

	static alloc(): CLDVariable; // inherited from NSObject

	static new(): CLDVariable; // inherited from NSObject

	name: string;

	value: string;

	static readonly variableNamePrefix: string;

	constructor(o: { name: string; doubleValue: number; });

	constructor(o: { name: string; intValue: number; });

	constructor(o: { name: string; stringValue: string; });

	constructor(o: { name: string; values: NSArray<string> | string[]; });

	asParams(): NSDictionary<string, string>;

	asString(): string;

	initWithNameDoubleValue(variableName: string, variableValue: number): this;

	initWithNameIntValue(variableName: string, variableValue: number): this;

	initWithNameStringValue(variableName: string, variableValue: string): this;

	initWithNameValues(variableName: string, values: NSArray<string> | string[]): this;
}

declare class CLDVideo extends CLDBaseResult {

	static alloc(): CLDVideo; // inherited from NSObject

	static new(): CLDVideo; // inherited from NSObject

	readonly codec: string;

	readonly format: string;
}

declare class CLDWidgetConfiguration extends NSObject {

	static alloc(): CLDWidgetConfiguration; // inherited from NSObject

	static new(): CLDWidgetConfiguration; // inherited from NSObject

	allowRotate: boolean;

	initialAspectLockState: AspectRatioLockState;

	uploadType: CLDUploadType;

	constructor(o: { allowRotate: boolean; initialAspectLockState: AspectRatioLockState; uploadType: CLDUploadType; });

	initWithAllowRotateInitialAspectLockStateUploadType(allowRotate: boolean, initialAspectLockState: AspectRatioLockState, uploadType: CLDUploadType): this;
}

declare var CloudinaryVersionNumber: number;

declare var CloudinaryVersionNumberVar: number;

declare var CloudinaryVersionString: interop.Reference<number>;

declare var CloudinaryVersionStringVar: interop.Reference<number>;

declare const enum LayerResourceType {

	Image = 0,

	Raw = 1,

	Auto = 2,

	Text = 3,

	Subtitles = 4,

	Video = 5,

	Fetch = 6
}

declare class ResponsiveBreakpoint extends CLDBaseResult {

	static alloc(): ResponsiveBreakpoint; // inherited from NSObject

	static new(): ResponsiveBreakpoint; // inherited from NSObject

	readonly secureUrl: string;

	readonly url: string;
}

declare class ResponsiveBreakpointsResult extends CLDBaseResult {

	static alloc(): ResponsiveBreakpointsResult; // inherited from NSObject

	static new(): ResponsiveBreakpointsResult; // inherited from NSObject

	readonly breakpoints: NSArray<ResponsiveBreakpoint>;

	readonly transformation: string;
}

declare const enum SignatureAlgorithm {

	Sha1 = 0,

	Sha256 = 1
}
