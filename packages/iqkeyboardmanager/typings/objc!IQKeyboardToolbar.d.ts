declare class IQBarButtonItem extends UIBarButtonItem {
	static alloc(): IQBarButtonItem; // inherited from NSObject

	static appearance(): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 26.0
	 */
	static fixedSpaceItem(): IQBarButtonItem; // inherited from UIBarButtonItem

	/**
	 * @since 14.0
	 */
	static fixedSpaceItemOfWidth(width: number): IQBarButtonItem; // inherited from UIBarButtonItem

	/**
	 * @since 14.0
	 */
	static flexibleSpaceItem(): IQBarButtonItem; // inherited from UIBarButtonItem

	static new(): IQBarButtonItem; // inherited from NSObject

	invocation: IQInvocation;

	setTargetAction(target: any, action: string): void;
}

declare class IQBarButtonItemConfiguration extends NSObject {
	static alloc(): IQBarButtonItemConfiguration; // inherited from NSObject

	static new(): IQBarButtonItemConfiguration; // inherited from NSObject

	action: string;

	readonly image: UIImage;

	readonly title: string;

	constructor(o: { image: UIImage; action: string });

	constructor(o: { systemItem: UIBarButtonSystemItem; action: string });

	constructor(o: { title: string; action: string });

	applyOnTarget(oldBarButtonItem: IQBarButtonItem, target: any): IQBarButtonItem;

	initWithImageAction(image: UIImage, action: string): this;

	initWithSystemItemAction(systemItem: UIBarButtonSystemItem, action: string): this;

	initWithTitleAction(title: string, action: string): this;
}

declare class IQInvocation extends NSObject {
	static alloc(): IQInvocation; // inherited from NSObject

	static new(): IQInvocation; // inherited from NSObject

	readonly action: string;

	target: any;

	constructor(o: { target: any; action: string });

	initWithTargetAction(target: any, action: string): this;

	invokeFrom(from: any): void;
}

declare class IQKeyboardToolbar extends UIToolbar implements UIInputViewAudioFeedback {
	static alloc(): IQKeyboardToolbar; // inherited from NSObject

	static appearance(): IQKeyboardToolbar; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): IQKeyboardToolbar; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQKeyboardToolbar; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQKeyboardToolbar; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQKeyboardToolbar; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQKeyboardToolbar; // inherited from UIAppearance

	static new(): IQKeyboardToolbar; // inherited from NSObject

	additionalLeadingItems: NSArray<UIBarButtonItem>;

	additionalTrailingItems: NSArray<UIBarButtonItem>;

	doneBarButton: IQBarButtonItem;

	nextBarButton: IQBarButtonItem;

	previousBarButton: IQBarButtonItem;

	titleBarButton: IQTitleBarButtonItem;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enableInputClicksWhenVisible: boolean; // inherited from UIInputViewAudioFeedback

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly; // inherited from NSObjectProtocol

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

declare class IQKeyboardToolbarPlaceholderConfiguration extends NSObject {
	static alloc(): IQKeyboardToolbarPlaceholderConfiguration; // inherited from NSObject

	static new(): IQKeyboardToolbarPlaceholderConfiguration; // inherited from NSObject

	buttonColor: UIColor;

	color: UIColor;

	font: UIFont;

	showPlaceholder: boolean;
}

interface IQPlaceholderable {
	attributedPlaceholder: NSAttributedString;

	placeholder: string;
}
declare var IQPlaceholderable: {
	prototype: IQPlaceholderable;
};

declare class IQTitleBarButtonItem extends IQBarButtonItem {
	static alloc(): IQTitleBarButtonItem; // inherited from NSObject

	static appearance(): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQTitleBarButtonItem; // inherited from UIAppearance

	/**
	 * @since 26.0
	 */
	static fixedSpaceItem(): IQTitleBarButtonItem; // inherited from UIBarButtonItem

	/**
	 * @since 14.0
	 */
	static fixedSpaceItemOfWidth(width: number): IQTitleBarButtonItem; // inherited from UIBarButtonItem

	/**
	 * @since 14.0
	 */
	static flexibleSpaceItem(): IQTitleBarButtonItem; // inherited from UIBarButtonItem

	static new(): IQTitleBarButtonItem; // inherited from NSObject

	selectableTitleColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	constructor(o: { title: string });

	initWithTitle(title: string): this;
}
