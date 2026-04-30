declare class IQKeyboardInfoObjC extends NSObject {
	static alloc(): IQKeyboardInfoObjC; // inherited from NSObject

	static new(): IQKeyboardInfoObjC; // inherited from NSObject

	readonly animationCurve: UIViewAnimationCurve;

	readonly animationDuration: number;

	readonly animationOptions: UIViewAnimationOptions;

	readonly beginFrame: CGRect;

	readonly endFrame: CGRect;

	readonly isLocal: boolean;

	readonly isVisible: boolean;

	animateAlongsideTransitionCompletion(transition: () => void, completion: () => void): void;
}

declare class IQKeyboardNotification extends NSObject {
	static alloc(): IQKeyboardNotification; // inherited from NSObject

	static new(): IQKeyboardNotification; // inherited from NSObject

	readonly frame: CGRect;

	readonly isVisible: boolean;

	readonly keyboardInfoObjc: IQKeyboardInfoObjC;

	readonly oldKeyboardInfoObjc: IQKeyboardInfoObjC;

	animateAlongsideTransitionCompletion(transition: () => void, completion: () => void): void;

	isSubscribedWithIdentifier(identifier: NSObject): boolean;

	unsubscribeWithIdentifier(identifier: NSObject): void;
}
