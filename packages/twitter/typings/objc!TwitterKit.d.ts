
declare function NSStringFromTWTRMediaEntitySizeResizingMode(resizingMode: TWTRMediaEntitySizeResizingMode): string;

declare class TWTRAPIClient extends NSObject {

	static alloc(): TWTRAPIClient; // inherited from NSObject

	static clientWithCurrentUser(): TWTRAPIClient;

	static new(): TWTRAPIClient; // inherited from NSObject

	readonly userID: string;

	constructor(o: { userID: string; });

	URLRequestWithMethodURLStringParametersError(method: string, URLString: string, parameters: NSDictionary<any, any>): NSURLRequest;

	initWithUserID(userID: string): this;

	loadTweetWithIDCompletion(tweetID: string, completion: (p1: TWTRTweet, p2: NSError) => void): void;

	loadTweetsWithIDsCompletion(tweetIDStrings: NSArray<any> | any[], completion: (p1: NSArray<TWTRTweet>, p2: NSError) => void): void;

	loadUserWithIDCompletion(userID: string, completion: (p1: TWTRUser, p2: NSError) => void): void;

	requestEmailForCurrentUser(completion: (p1: string, p2: NSError) => void): void;

	sendTweetWithTextCompletion(tweetText: string, completion: (p1: TWTRTweet, p2: NSError) => void): void;

	sendTweetWithTextImageCompletion(tweetText: string, image: UIImage, completion: (p1: TWTRTweet, p2: NSError) => void): void;

	sendTweetWithTextVideoDataCompletion(tweetText: string, videoData: NSData, completion: (p1: TWTRTweet, p2: NSError) => void): void;

	sendTwitterRequestCompletion(request: NSURLRequest, completion: (p1: NSURLResponse, p2: NSData, p3: NSError) => void): NSProgress;

	uploadMediaContentTypeCompletion(media: NSData, contentType: string, completion: (p1: string, p2: NSError) => void): void;
}

declare var TWTRCancelledShareTweetNotification: string;

declare class TWTRCollectionTimelineDataSource extends NSObject implements TWTRTimelineDataSource {

	static alloc(): TWTRCollectionTimelineDataSource; // inherited from NSObject

	static new(): TWTRCollectionTimelineDataSource; // inherited from NSObject

	readonly collectionID: string;

	readonly maxTweetsPerRequest: number;

	APIClient: TWTRAPIClient; // inherited from TWTRTimelineDataSource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	timelineFilter: TWTRTimelineFilter; // inherited from TWTRTimelineDataSource

	readonly timelineType: TWTRTimelineType; // inherited from TWTRTimelineDataSource

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionID: string; APIClient: TWTRAPIClient; });

	constructor(o: { collectionID: string; APIClient: TWTRAPIClient; maxTweetsPerRequest: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCollectionIDAPIClient(collectionID: string, client: TWTRAPIClient): this;

	initWithCollectionIDAPIClientMaxTweetsPerRequest(collectionID: string, client: TWTRAPIClient, maxTweetsPerRequest: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPreviousTweetsBeforePositionCompletion(position: string, completion: (p1: NSArray<TWTRTweet>, p2: TWTRTimelineCursor, p3: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRComposer extends NSObject {

	static alloc(): TWTRComposer; // inherited from NSObject

	static new(): TWTRComposer; // inherited from NSObject

	setImage(image: UIImage): boolean;

	setText(text: string): boolean;

	setURL(url: NSURL): boolean;

	showFromViewControllerCompletion(fromController: UIViewController, completion: (p1: TWTRComposerResult) => void): void;
}

declare const enum TWTRComposerResult {

	Cancelled = 0,

	Done = 1
}

declare class TWTRComposerViewController extends UIViewController {

	static alloc(): TWTRComposerViewController; // inherited from NSObject

	static emptyComposer(): TWTRComposerViewController;

	static new(): TWTRComposerViewController; // inherited from NSObject

	delegate: TWTRComposerViewControllerDelegate;

	constructor(o: { initialText: string; image: UIImage; videoData: NSData; });

	constructor(o: { initialText: string; image: UIImage; videoURL: NSURL; });

	initWithInitialTextImageVideoData(initialText: string, image: UIImage, videoData: NSData): this;

	initWithInitialTextImageVideoURL(initialText: string, image: UIImage, videoURL: NSURL): this;
}

interface TWTRComposerViewControllerDelegate extends NSObjectProtocol {

	composerDidCancel?(controller: TWTRComposerViewController): void;

	composerDidFailWithError?(controller: TWTRComposerViewController, error: NSError): void;

	composerDidSucceedWithTweet?(controller: TWTRComposerViewController, tweet: TWTRTweet): void;
}
declare var TWTRComposerViewControllerDelegate: {

	prototype: TWTRComposerViewControllerDelegate;
};

declare var TWTRDidDismissVideoNotification: string;

declare var TWTRDidLikeTweetNotification: string;

declare var TWTRDidSelectTweetNotification: string;

declare var TWTRDidShareTweetNotification: string;

declare var TWTRDidShowTweetDetailNotification: string;

declare var TWTRDidUnlikeTweetNotification: string;

interface TWTRJSONConvertible extends NSObjectProtocol {

	initWithJSONDictionary?(dictionary: NSDictionary<any, any>): TWTRJSONConvertible;
}
declare var TWTRJSONConvertible: {

	prototype: TWTRJSONConvertible;
};

declare class TWTRListTimelineDataSource extends NSObject implements TWTRTimelineDataSource {

	static alloc(): TWTRListTimelineDataSource; // inherited from NSObject

	static new(): TWTRListTimelineDataSource; // inherited from NSObject

	readonly includeRetweets: boolean;

	readonly listID: string;

	readonly listOwnerScreenName: string;

	readonly listSlug: string;

	readonly maxTweetsPerRequest: number;

	APIClient: TWTRAPIClient; // inherited from TWTRTimelineDataSource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	timelineFilter: TWTRTimelineFilter; // inherited from TWTRTimelineDataSource

	readonly timelineType: TWTRTimelineType; // inherited from TWTRTimelineDataSource

	readonly  // inherited from NSObjectProtocol

	constructor(o: { listID: string; APIClient: TWTRAPIClient; });

	constructor(o: { listID: string; listSlug: string; listOwnerScreenName: string; APIClient: TWTRAPIClient; maxTweetsPerRequest: number; includeRetweets: boolean; });

	constructor(o: { listSlug: string; listOwnerScreenName: string; APIClient: TWTRAPIClient; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithListIDAPIClient(listID: string, client: TWTRAPIClient): this;

	initWithListIDListSlugListOwnerScreenNameAPIClientMaxTweetsPerRequestIncludeRetweets(listID: string, listSlug: string, listOwnerScreenName: string, client: TWTRAPIClient, maxTweetsPerRequest: number, includeRetweets: boolean): this;

	initWithListSlugListOwnerScreenNameAPIClient(listSlug: string, listOwnerScreenName: string, client: TWTRAPIClient): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPreviousTweetsBeforePositionCompletion(position: string, completion: (p1: NSArray<TWTRTweet>, p2: TWTRTimelineCursor, p3: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRLogInButton extends UIButton {

	static alloc(): TWTRLogInButton; // inherited from NSObject

	static appearance(): TWTRLogInButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWTRLogInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWTRLogInButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRLogInButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWTRLogInButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRLogInButton; // inherited from UIAppearance

	static buttonWithLogInCompletion(completion: (p1: TWTRSession, p2: NSError) => void): TWTRLogInButton;

	static buttonWithType(buttonType: UIButtonType): TWTRLogInButton; // inherited from UIButton

	static buttonWithTypePrimaryAction(buttonType: UIButtonType, primaryAction: UIAction): TWTRLogInButton; // inherited from UIButton

	static new(): TWTRLogInButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): TWTRLogInButton; // inherited from UIButton

	static systemButtonWithPrimaryAction(primaryAction: UIAction): TWTRLogInButton; // inherited from UIButton

	logInCompletion: (p1: TWTRSession, p2: NSError) => void;
}

declare var TWTRLoggedInUserIDKey: string;

declare var TWTRLoggedOutUserIDKey: string;

declare class TWTRMediaEntitySize extends NSObject implements NSCoding {

	static alloc(): TWTRMediaEntitySize; // inherited from NSObject

	static mediaEntitySizesWithJSONDictionary(dictionary: NSDictionary<any, any>): NSDictionary<any, any>;

	static new(): TWTRMediaEntitySize; // inherited from NSObject

	readonly name: string;

	readonly resizingMode: TWTRMediaEntitySizeResizingMode;

	readonly size: CGSize;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { name: string; resizingMode: TWTRMediaEntitySizeResizingMode; size: CGSize; });

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithNameResizingModeSize(name: string, resizingMode: TWTRMediaEntitySizeResizingMode, size: CGSize): this;

	isEqualToMediaEntitySize(otherSize: TWTRMediaEntitySize): boolean;
}

declare const enum TWTRMediaEntitySizeResizingMode {

	Fit = 0,

	Crop = 1
}

declare function TWTRMediaEntitySizeResizingModeFromString(resizingModeString: string): TWTRMediaEntitySizeResizingMode;

declare var TWTRMediaTypeM3u8: string;

declare var TWTRMediaTypeMP4: string;

declare class TWTRMoPubAdConfiguration extends NSObject {

	static alloc(): TWTRMoPubAdConfiguration; // inherited from NSObject

	static new(): TWTRMoPubAdConfiguration; // inherited from NSObject

	readonly adUnitID: string;

	readonly keywords: string;

	constructor(o: { adUnitID: string; keywords: string; });

	initWithAdUnitIDKeywords(adUnitID: string, keywords: string): this;
}

declare class TWTRMoPubNativeAdContainerView extends UIView implements UIAppearanceContainer {

	static alloc(): TWTRMoPubNativeAdContainerView; // inherited from NSObject

	static appearance(): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRMoPubNativeAdContainerView; // inherited from UIAppearance

	static new(): TWTRMoPubNativeAdContainerView; // inherited from NSObject

	adBackgroundColor: UIColor;

	buttonBackgroundColor: UIColor;

	primaryTextColor: UIColor;

	theme: TWTRNativeAdTheme;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TWTRNativeAdTheme {

	Light = 0,

	Dark = 1
}

declare var TWTRNotificationInfoTweet: string;

declare class TWTROAuthSigning extends NSObject implements TWTRCoreOAuthSigning {

	static alloc(): TWTROAuthSigning; // inherited from NSObject

	static new(): TWTROAuthSigning; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { authConfig: TWTRAuthConfig; authSession: TWTRSession; });

	OAuthEchoHeadersForRequestMethodURLStringParametersError(method: string, URLString: string, parameters: NSDictionary<any, any>): NSDictionary<any, any>;

	OAuthEchoHeadersToVerifyCredentials(): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithAuthConfigAuthSession(authConfig: TWTRAuthConfig, authSession: TWTRSession): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRSearchTimelineDataSource extends NSObject implements TWTRTimelineDataSource {

	static alloc(): TWTRSearchTimelineDataSource; // inherited from NSObject

	static new(): TWTRSearchTimelineDataSource; // inherited from NSObject

	filterSensitiveTweets: boolean;

	geocodeSpecifier: string;

	readonly languageCode: string;

	readonly maxTweetsPerRequest: number;

	resultType: string;

	readonly searchQuery: string;

	APIClient: TWTRAPIClient; // inherited from TWTRTimelineDataSource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	timelineFilter: TWTRTimelineFilter; // inherited from TWTRTimelineDataSource

	readonly timelineType: TWTRTimelineType; // inherited from TWTRTimelineDataSource

	readonly  // inherited from NSObjectProtocol

	constructor(o: { searchQuery: string; APIClient: TWTRAPIClient; });

	constructor(o: { searchQuery: string; APIClient: TWTRAPIClient; languageCode: string; maxTweetsPerRequest: number; resultType: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSearchQueryAPIClient(searchQuery: string, client: TWTRAPIClient): this;

	initWithSearchQueryAPIClientLanguageCodeMaxTweetsPerRequestResultType(searchQuery: string, client: TWTRAPIClient, languageCode: string, maxTweetsPerRequest: number, resultType: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPreviousTweetsBeforePositionCompletion(position: string, completion: (p1: NSArray<TWTRTweet>, p2: TWTRTimelineCursor, p3: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTimelineCursor extends NSObject {

	static alloc(): TWTRTimelineCursor; // inherited from NSObject

	static new(): TWTRTimelineCursor; // inherited from NSObject

	readonly maxPosition: string;

	readonly minPosition: string;

	constructor(o: { maxPosition: string; minPosition: string; });

	initWithMaxPositionMinPosition(maxPosition: string, minPosition: string): this;
}

interface TWTRTimelineDataSource extends NSObjectProtocol {

	APIClient: TWTRAPIClient;

	timelineFilter: TWTRTimelineFilter;

	timelineType: TWTRTimelineType;

	loadPreviousTweetsBeforePositionCompletion(position: string, completion: (p1: NSArray<TWTRTweet>, p2: TWTRTimelineCursor, p3: NSError) => void): void;
}
declare var TWTRTimelineDataSource: {

	prototype: TWTRTimelineDataSource;
};

interface TWTRTimelineDelegate extends NSObjectProtocol {

	timelineDidBeginLoading?(timeline: TWTRTimelineViewController): void;

	timelineDidFinishLoadingTweetsError?(timeline: TWTRTimelineViewController, tweets: NSArray<any> | any[], error: NSError): void;
}
declare var TWTRTimelineDelegate: {

	prototype: TWTRTimelineDelegate;
};

declare class TWTRTimelineFilter extends NSObject implements NSCopying {

	static alloc(): TWTRTimelineFilter; // inherited from NSObject

	static new(): TWTRTimelineFilter; // inherited from NSObject

	handles: NSSet<any>;

	hashtags: NSSet<any>;

	keywords: NSSet<any>;

	urls: NSSet<any>;

	constructor(o: { JSONDictionary: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	filterCount(): number;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;
}

declare const enum TWTRTimelineType {

	User = 1,

	Search = 2,

	Collection = 3,

	List = 4
}

declare class TWTRTimelineViewController extends UITableViewController {

	static alloc(): TWTRTimelineViewController; // inherited from NSObject

	static new(): TWTRTimelineViewController; // inherited from NSObject

	adConfiguration: TWTRMoPubAdConfiguration;

	dataSource: TWTRTimelineDataSource;

	showTweetActions: boolean;

	timelineDelegate: TWTRTimelineDelegate;

	tweetViewDelegate: TWTRTweetViewDelegate;

	constructor(o: { dataSource: TWTRTimelineDataSource; });

	constructor(o: { dataSource: TWTRTimelineDataSource; adConfiguration: TWTRMoPubAdConfiguration; });

	countOfTweets(): number;

	initWithDataSource(dataSource: TWTRTimelineDataSource): this;

	initWithDataSourceAdConfiguration(dataSource: TWTRTimelineDataSource, adConfiguration: TWTRMoPubAdConfiguration): this;

	refresh(): void;

	snapshotTweets(): NSArray<any>;

	tweetAtIndex(index: number): TWTRTweet;
}

declare class TWTRTweet extends NSObject implements NSCoding, TWTRJSONConvertible {

	static alloc(): TWTRTweet; // inherited from NSObject

	static new(): TWTRTweet; // inherited from NSObject

	static tweetsWithJSONArray(array: NSArray<any> | any[]): NSArray<any>;

	readonly author: TWTRUser;

	readonly createdAt: Date;

	readonly inReplyToScreenName: string;

	readonly inReplyToTweetID: string;

	readonly inReplyToUserID: string;

	readonly isLiked: boolean;

	readonly isQuoteTweet: boolean;

	readonly isRetweet: boolean;

	readonly isRetweeted: boolean;

	readonly languageCode: string;

	readonly likeCount: number;

	readonly permalink: NSURL;

	readonly perspectivalUserID: string;

	readonly quotedTweet: TWTRTweet;

	readonly retweetCount: number;

	readonly retweetID: string;

	readonly retweetedTweet: TWTRTweet;

	readonly text: string;

	readonly tweetID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	tweetWithLikeToggled(): TWTRTweet;
}

declare class TWTRTweetCashtagEntity extends TWTRTweetEntity implements NSCoding, TWTRJSONConvertible {

	static alloc(): TWTRTweetCashtagEntity; // inherited from NSObject

	static new(): TWTRTweetCashtagEntity; // inherited from NSObject

	readonly text: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTweetEntity extends NSObject implements NSCoding, NSCopying, TWTRJSONConvertible {

	static alloc(): TWTRTweetEntity; // inherited from NSObject

	static new(): TWTRTweetEntity; // inherited from NSObject

	readonly endIndex: number;

	readonly startIndex: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	constructor(o: { startIndex: number; endIndex: number; });

	accessibilityValue(): string;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	initWithStartIndexEndIndex(startIndex: number, endIndex: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTweetHashtagEntity extends TWTRTweetEntity implements NSCoding, TWTRJSONConvertible {

	static alloc(): TWTRTweetHashtagEntity; // inherited from NSObject

	static new(): TWTRTweetHashtagEntity; // inherited from NSObject

	readonly text: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTweetTableViewCell extends UITableViewCell {

	static alloc(): TWTRTweetTableViewCell; // inherited from NSObject

	static appearance(): TWTRTweetTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWTRTweetTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWTRTweetTableViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRTweetTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWTRTweetTableViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRTweetTableViewCell; // inherited from UIAppearance

	static heightForTweetStyleWidthShowingActions(tweet: TWTRTweet, style: TWTRTweetViewStyle, width: number, showActions: boolean): number;

	static new(): TWTRTweetTableViewCell; // inherited from NSObject

	readonly tweetView: TWTRTweetView;

	configureWithTweet(tweet: TWTRTweet): void;
}

declare class TWTRTweetUrlEntity extends TWTRTweetEntity implements NSCoding, TWTRJSONConvertible {

	static alloc(): TWTRTweetUrlEntity; // inherited from NSObject

	static new(): TWTRTweetUrlEntity; // inherited from NSObject

	readonly displayUrl: string;

	readonly expandedUrl: string;

	readonly url: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTweetUserMentionEntity extends TWTRTweetEntity implements NSCoding, TWTRJSONConvertible {

	static alloc(): TWTRTweetUserMentionEntity; // inherited from NSObject

	static new(): TWTRTweetUserMentionEntity; // inherited from NSObject

	readonly name: string;

	readonly screenName: string;

	readonly userID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRTweetView extends UIView implements UIAppearanceContainer {

	static alloc(): TWTRTweetView; // inherited from NSObject

	static appearance(): TWTRTweetView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWTRTweetView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWTRTweetView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRTweetView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWTRTweetView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): TWTRTweetView; // inherited from UIAppearance

	static new(): TWTRTweetView; // inherited from NSObject

	delegate: TWTRTweetViewDelegate;

	linkTextColor: UIColor;

	presenterViewController: UIViewController;

	primaryTextColor: UIColor;

	shouldPlayVideoMuted: boolean;

	showActionButtons: boolean;

	showBorder: boolean;

	readonly style: TWTRTweetViewStyle;

	theme: TWTRTweetViewTheme;

	readonly tweet: TWTRTweet;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { tweet: TWTRTweet; });

	constructor(o: { tweet: TWTRTweet; style: TWTRTweetViewStyle; });

	class(): typeof NSObject;

	configureWithTweet(tweet: TWTRTweet): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithTweet(tweet: TWTRTweet): this;

	initWithTweetStyle(tweet: TWTRTweet, style: TWTRTweetViewStyle): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	pauseVideo(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	playVideo(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface TWTRTweetViewDelegate extends NSObjectProtocol {

	tweetViewDidChangePlaybackState?(tweetView: TWTRTweetView, newState: TWTRVideoPlaybackState): void;

	tweetViewDidTapImageWithURL?(tweetView: TWTRTweetView, image: UIImage, imageURL: NSURL): void;

	tweetViewDidTapProfileImageForUser?(tweetView: TWTRTweetView, user: TWTRUser): void;

	tweetViewDidTapTweet?(tweetView: TWTRTweetView, tweet: TWTRTweet): void;

	tweetViewDidTapURL?(tweetView: TWTRTweetView, url: NSURL): void;

	tweetViewDidTapVideoWithURL?(tweetView: TWTRTweetView, videoURL: NSURL): void;
}
declare var TWTRTweetViewDelegate: {

	prototype: TWTRTweetViewDelegate;
};

declare const enum TWTRTweetViewStyle {

	Regular = 0,

	Compact = 1
}

declare const enum TWTRTweetViewTheme {

	Light = 0,

	Dark = 1
}

declare var TWTRTweetsNotLoadedKey: string;

declare class TWTRTwitter extends NSObject {

	static alloc(): TWTRTwitter; // inherited from NSObject

	static new(): TWTRTwitter; // inherited from NSObject

	static sharedInstance(): TWTRTwitter;

	readonly authConfig: TWTRAuthConfig;

	readonly sessionStore: TWTRSessionStore;

	readonly version: string;

	applicationOpenURLOptions(application: UIApplication, url: NSURL, options: NSDictionary<any, any>): boolean;

	logInWithCompletion(completion: (p1: TWTRSession, p2: NSError) => void): void;

	logInWithViewControllerCompletion(viewController: UIViewController, completion: (p1: TWTRSession, p2: NSError) => void): void;

	sceneOpenURLContexts(scene: UIScene, URLContexts: NSSet<UIOpenURLContext>): void;

	startWithConsumerKeyConsumerSecret(consumerKey: string, consumerSecret: string): void;

	startWithConsumerKeyConsumerSecretAccessGroup(consumerKey: string, consumerSecret: string, accessGroup: string): void;
}

declare class TWTRUser extends NSObject implements NSCoding, NSCopying, TWTRJSONConvertible {

	static alloc(): TWTRUser; // inherited from NSObject

	static new(): TWTRUser; // inherited from NSObject

	readonly formattedScreenName: string;

	readonly isProtected: boolean;

	readonly isVerified: boolean;

	readonly name: string;

	readonly profileImageLargeURL: string;

	readonly profileImageMiniURL: string;

	readonly profileImageURL: string;

	readonly profileURL: NSURL;

	readonly screenName: string;

	readonly userID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var TWTRUserDidLogInNotification: string;

declare var TWTRUserDidLogOutNotification: string;

declare class TWTRUserTimelineDataSource extends NSObject implements TWTRTimelineDataSource {

	static alloc(): TWTRUserTimelineDataSource; // inherited from NSObject

	static new(): TWTRUserTimelineDataSource; // inherited from NSObject

	readonly includeReplies: boolean;

	readonly includeRetweets: boolean;

	readonly maxTweetsPerRequest: number;

	readonly screenName: string;

	readonly userID: string;

	APIClient: TWTRAPIClient; // inherited from TWTRTimelineDataSource

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	timelineFilter: TWTRTimelineFilter; // inherited from TWTRTimelineDataSource

	readonly timelineType: TWTRTimelineType; // inherited from TWTRTimelineDataSource

	readonly  // inherited from NSObjectProtocol

	constructor(o: { screenName: string; APIClient: TWTRAPIClient; });

	constructor(o: { screenName: string; userID: string; APIClient: TWTRAPIClient; maxTweetsPerRequest: number; includeReplies: boolean; includeRetweets: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithScreenNameAPIClient(screenName: string, client: TWTRAPIClient): this;

	initWithScreenNameUserIDAPIClientMaxTweetsPerRequestIncludeRepliesIncludeRetweets(screenName: string, userID: string, client: TWTRAPIClient, maxTweetsPerRequest: number, includeReplies: boolean, includeRetweets: boolean): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadPreviousTweetsBeforePositionCompletion(position: string, completion: (p1: NSArray<TWTRTweet>, p2: TWTRTimelineCursor, p3: NSError) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRVideoMetaData extends NSObject implements NSCoding, NSCopying, TWTRJSONConvertible {

	static alloc(): TWTRVideoMetaData; // inherited from NSObject

	static new(): TWTRVideoMetaData; // inherited from NSObject

	readonly aspectRatio: number;

	readonly duration: number;

	readonly variants: NSArray<any>;

	readonly videoURL: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class TWTRVideoMetaDataVariant extends NSObject implements NSCoding, NSCopying, TWTRJSONConvertible {

	static alloc(): TWTRVideoMetaDataVariant; // inherited from NSObject

	static new(): TWTRVideoMetaDataVariant; // inherited from NSObject

	readonly URL: NSURL;

	readonly bitrate: number;

	readonly contentType: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { JSONDictionary: NSDictionary<any, any>; }); // inherited from TWTRJSONConvertible

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithJSONDictionary(dictionary: NSDictionary<any, any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum TWTRVideoPlaybackState {

	Paused = 0,

	Playing = 1,

	Completed = 2
}

declare var TWTRVideoPlaybackStateChangedNotification: string;

declare var TWTRVideoPlaybackStateKey: string;

declare var TWTRVideoStateValueCompleted: string;

declare var TWTRVideoStateValuePaused: string;

declare var TWTRVideoStateValuePlaying: string;

declare var TWTRVideoTypeGIF: string;

declare var TWTRVideoTypeKey: string;

declare var TWTRVideoTypeStandard: string;

declare var TWTRVideoTypeVine: string;

declare var TWTRWillPresentVideoNotification: string;

declare var TWTRWillShareTweetNotification: string;
