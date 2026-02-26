// Native Android type declarations for @nativescript/input-accessory

declare namespace org {
	namespace nativescript {
		namespace inputaccessory {
			class KeyboardAccessoryHelper {
				constructor(activity: android.app.Activity, inputContainer: android.view.View, scrollView: android.view.View, inputContainerHeight: number);

				setup(callback: org.nativescript.inputaccessory.KeyboardAccessoryHelper.KeyboardStateCallback): void;
				updateAccessoryHeight(newHeightPx: number): void;
				dismissKeyboard(): void;
				showKeyboard(): void;
				scrollToBottom(): void;
				clampScrollPosition(): void;
				cleanup(): void;
			}

			namespace KeyboardAccessoryHelper {
				class KeyboardStateCallback {
					constructor(implementation: { onKeyboardHeightChanged(heightPx: number, isAnimating: boolean): void; onKeyboardFullyShown(heightPx: number): void; onKeyboardFullyHidden(): void; onRelayoutScrollContent(): void });
				}
			}
		}
	}
}
