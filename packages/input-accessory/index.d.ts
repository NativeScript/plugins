import { View, TextView, ScrollView, Page } from '@nativescript/core';

export { InputAccessoryConfig } from './common';

/**
 * Manages keyboard accessory behavior for chat-style interfaces.
 *
 * On iOS: Moves the input container into a UIInputAccessoryView docked to the
 * keyboard with blur effect, interactive dismiss, and auto-scroll.
 *
 * On Android: Uses WindowInsetsAnimationCompat for smooth keyboard transitions
 * with translationY animation and interactive swipe-to-dismiss.
 */
export class InputAccessoryManager {
	/**
	 * Initialize the keyboard accessory with the given configuration.
	 * Call after all views are loaded
	 */
	setup(config: InputAccessoryConfig): void;

	/**
	 * Recalculate and update the accessory height based on current text content.
	 * Call on every text change event.
	 */
	updateAccessoryHeight(): void;

	/**
	 * Dismiss the keyboard programmatically.
	 */
	dismissKeyboard(): void;

	/**
	 * Hide the docked accessory bar while a sheet, popover or dialog is
	 * presented over the host page. On iOS, sheet-style presentations keep the
	 * presenting page in the window and the accessory lives in the keyboard's
	 * own window (UITextEffectsWindow), which UIKit z-orders above the sheet,
	 * so the bar would float on top of the dialog. Call this as the dialog
	 * opens: the bar (and keyboard, if open) slides away with the standard
	 * UIKit animation and the plugin's auto-restore paths are gated off. Pair
	 * with restore() when the dialog closes. Safe to call repeatedly. No-op on
	 * Android (dialogs are separate windows that already draw above the bar).
	 */
	suspend(): void;

	/**
	 * Re-show the docked accessory bar after a modal that covered the host page
	 * is dismissed, and lift a suspend() suspension. On iOS, UIKit does not
	 * restore first responder (and thus the inputAccessoryView) automatically
	 * after a full-screen modal closes, so the input bar would stay gone. Call
	 * this when returning from such a modal. It polls internally until the
	 * modal is fully gone, so it is safe to call as soon as the modal begins
	 * closing. No-op on Android.
	 */
	restore(): void;

	/**
	 * Relayout ScrollView content after external changes (e.g., new messages).
	 */
	relayoutScrollViewContent(): void;

	/**
	 * Clean up all listeners, observers, and native resources.
	 */
	cleanup(): void;
}
