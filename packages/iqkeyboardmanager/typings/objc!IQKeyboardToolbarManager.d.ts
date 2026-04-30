declare const enum IQAutoToolbarManageBehavior {
	BySubviews = 0,

	ByTag = 1,

	ByPosition = 2,
}

declare class IQDeepResponderContainerView extends UIView {
	static alloc(): IQDeepResponderContainerView; // inherited from NSObject

	static appearance(): IQDeepResponderContainerView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 */
	static appearanceForTraitCollection(trait: UITraitCollection): IQDeepResponderContainerView; // inherited from UIAppearance

	/**
	 * @since 8.0
	 * @deprecated 9.0
	 */
	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQDeepResponderContainerView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQDeepResponderContainerView; // inherited from UIAppearance

	/**
	 * @since 5.0
	 * @deprecated 9.0
	 */
	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQDeepResponderContainerView; // inherited from UIAppearance

	/**
	 * @since 9.0
	 */
	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | (typeof NSObject)[]): IQDeepResponderContainerView; // inherited from UIAppearance

	static new(): IQDeepResponderContainerView; // inherited from NSObject
}

declare class IQKeyboardToolbarConfiguration extends NSObject {
	static alloc(): IQKeyboardToolbarConfiguration; // inherited from NSObject

	static new(): IQKeyboardToolbarConfiguration; // inherited from NSObject

	barTintColor: UIColor;

	doneBarButtonConfiguration: IQBarButtonItemConfiguration;

	manageBehavior: IQKeyboardToolbarManageBehavior;

	nextBarButtonConfiguration: IQBarButtonItemConfiguration;

	readonly placeholderConfiguration: IQKeyboardToolbarPlaceholderConfiguration;

	previousBarButtonConfiguration: IQBarButtonItemConfiguration;

	previousNextDisplayMode: IQPreviousNextDisplayMode;

	tintColor: UIColor;

	useTextInputViewTintColor: boolean;
}

declare const enum IQKeyboardToolbarManageBehavior {
	BySubviews = 0,

	ByTag = 1,

	ByPosition = 2,
}

declare class IQKeyboardToolbarManager extends NSObject {
	static alloc(): IQKeyboardToolbarManager; // inherited from NSObject

	static new(): IQKeyboardToolbarManager; // inherited from NSObject

	readonly canGoNext: boolean;

	readonly canGoPrevious: boolean;

	deepResponderAllowedContainerClasses: NSArray<typeof NSObject>;

	disabledToolbarClasses: NSArray<typeof NSObject>;

	enabledToolbarClasses: NSArray<typeof NSObject>;

	isDebuggingEnabled: boolean;

	isEnabled: boolean;

	playInputClicks: boolean;

	readonly toolbarConfiguration: IQKeyboardToolbarConfiguration;

	static readonly shared: IQKeyboardToolbarManager;

	goNext(): boolean;

	goPrevious(): boolean;

	reloadInputViews(): void;
}

declare const enum IQPreviousNextDisplayMode {
	Default = 0,

	AlwaysHide = 1,

	AlwaysShow = 2,
}
