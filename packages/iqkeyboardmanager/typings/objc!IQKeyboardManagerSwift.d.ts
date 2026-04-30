declare const enum IQAutoToolbarManageBehaviorDeprecated {
	BySubviews = 0,

	ByTag = 1,

	ByPosition = 2,
}

declare class IQKeyboardAppearanceConfiguration extends NSObject {
	static alloc(): IQKeyboardAppearanceConfiguration; // inherited from NSObject

	static new(): IQKeyboardAppearanceConfiguration; // inherited from NSObject

	appearance: UIKeyboardAppearance;

	overrideAppearance: boolean;
}

declare class IQKeyboardManager extends NSObject {
	static alloc(): IQKeyboardManager; // inherited from NSObject

	static new(): IQKeyboardManager; // inherited from NSObject

	readonly canGoNext: boolean;

	readonly canGoPrevious: boolean;

	deepResponderAllowedContainerClasses: NSArray<typeof NSObject>;

	disabledDistanceHandlingClasses: NSArray<typeof NSObject>;

	disabledToolbarClasses: NSArray<typeof NSObject>;

	disabledTouchResignedClasses: NSArray<typeof NSObject>;

	enableAutoToolbar: boolean;

	enableToolbarDebugging: boolean;

	enabledDistanceHandlingClasses: NSArray<typeof NSObject>;

	enabledToolbarClasses: NSArray<typeof NSObject>;

	enabledTouchResignedClasses: NSArray<typeof NSObject>;

	isDebuggingEnabled: boolean;

	isEnabled: boolean;

	keyboardConfiguration: IQKeyboardAppearanceConfiguration;

	keyboardDistance: number;

	layoutIfNeededOnUpdate: boolean;

	readonly movedDistance: number;

	movedDistanceChanged: (p1: number) => void;

	playInputClicks: boolean;

	resignGesture: UITapGestureRecognizer;

	resignOnTouchOutside: boolean;

	readonly toolbarConfiguration: IQKeyboardToolbarConfiguration;

	touchResignedGestureIgnoreClasses: NSArray<typeof NSObject>;

	static readonly shared: IQKeyboardManager;

	goNext(): boolean;

	goPrevious(): boolean;

	reloadInputViews(): void;

	reloadLayoutIfNeeded(): void;

	resignFirstResponder(): boolean;
}

declare const enum IQPreviousNextDisplayModeDeprecated {
	Default = 0,

	AlwaysHide = 1,

	AlwaysShow = 2,
}
