/// <reference path="../../../packages/iqkeyboardmanager/typings/index.d.ts" />

import { DemoSharedBase } from '../utils';

export class DemoSharedIqkeyboardmanager extends DemoSharedBase {
	private iqKeyboard: IQKeyboardManager | null = null;

	public iqKeyboardEnabled: boolean = true;
	public iqKeyboardToolbarEnabled: boolean = true;
	public keepKeyboardOpenOnTouchOutside: boolean = true;
	public showHintInToolbar: boolean = true;
	public keyboardAppearanceDark: boolean = false;
	public toggleDoneButtonTextChanged: boolean = false;
	public increaseKeyboardDistanceFromTextField: boolean = false;

	public textViewText = null;
	public textViewWithHintText = null;

	constructor() {
		super();
		if (__APPLE__) {
			this.iqKeyboard = IQKeyboardManager.shared;
			this.iqKeyboard.isEnabled = true;
			this.iqKeyboard.enableAutoToolbar = true;
		}

		// setInterval(() => {
		//   console.log("textViewText: " + this.textViewText);
		//   console.log("textViewWithHintText: " + this.textViewWithHintText);
		// }, 2000);
	}

	toggleIQKeyboard(): void {
		if (this.iqKeyboard) {
			this.iqKeyboard.isEnabled = !this.iqKeyboard.isEnabled;
		}
	}

	toggleIQKeyboardToolbar(): void {
		if (this.iqKeyboard) {
			this.iqKeyboard.enableAutoToolbar = !this.iqKeyboard.enableAutoToolbar;
		}
	}

	toggleKeepKeyboardOpen(): void {
		if (this.iqKeyboard) {
			this.iqKeyboard.resignOnTouchOutside = !this.iqKeyboard.resignOnTouchOutside;
		}
	}

	toggleShowHintInToolbar(): void {
		console.log('TODO: Does not work or the typings are incorrect, can investigate.');
		// this.iqKeyboard.shouldShowTextFieldPlaceholder = !this.iqKeyboard.shouldShowTextFieldPlaceholder;
	}

	isDark = false;
	toggleKeyboardAppearance(): void {
		const iqKeyboard = IQKeyboardManager.shared;
		const config = IQKeyboardAppearanceConfiguration.new();
		this.isDark = !this.isDark;
		config.appearance = this.isDark ? UIKeyboardAppearance.Dark : UIKeyboardAppearance.Default;
		config.overrideAppearance = true;
		iqKeyboard.keyboardConfiguration = config;
	}

	toggleDoneButtonText(): void {
		// todo: investigate with latest
		// const toolbar = IQKeyboardToolbarConfiguration.new();
		// const barButtonConfig = IQBarButtonItemConfiguration.new().initWithTitleAction(this.toggleDoneButtonTextChanged ? "Ready" : "Done", "onDoneButtonTapped");
		// toolbar.doneBarButtonConfiguration = barButtonConfig;
	}

	onDoneButtonTapped() {
		console.log('Done button tapped');
	}

	toggleIncreaseKeyboardDistanceFromTextField(): void {
		if (this.iqKeyboard) {
			this.iqKeyboard.keyboardDistance = this.iqKeyboard.keyboardDistance === 10 ? 30 : 10;
		}
	}
}

// @NativeClass()
// class TapHandlerKeyboardImpl extends NSObject {
// 	private _owner: WeakRef<DemoSharedIqkeyboardmanager>;

// 	public static initWithOwner(owner: WeakRef<DemoSharedIqkeyboardmanager>): TapHandlerKeyboardImpl {
// 		const handler = <TapHandlerKeyboardImpl>TapHandlerKeyboardImpl.new();
// 		handler._owner = owner;
// 		return handler;
// 	}

// 	public tap(args) {
// 		if (this._owner) {
// 			const owner = this._owner?.deref();
// 			if (owner) {
// 				owner._emit('tap');
// 			}
// 		}
// 	}

// 	public static ObjCExposedMethods = {
// 		tap: { returns: interop.types.void, params: [interop.types.id] },
// 	};
// }
