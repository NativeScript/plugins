declare class IQTextInputViewInfoObjC extends NSObject {
	static alloc(): IQTextInputViewInfoObjC; // inherited from NSObject

	static new(): IQTextInputViewInfoObjC; // inherited from NSObject

	readonly textInputView: IQTextInputView;
}

declare class IQTextInputViewNotification extends NSObject {
	static alloc(): IQTextInputViewNotification; // inherited from NSObject

	static new(): IQTextInputViewNotification; // inherited from NSObject

	readonly textInputView: IQTextInputView;

	readonly textInputViewInfoObjc: IQTextInputViewInfoObjC;

	isSubscribedWithIdentifier(identifier: NSObject): boolean;

	unsubscribeWithIdentifier(identifier: NSObject): void;
}
