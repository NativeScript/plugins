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
	 * Relayout ScrollView content after external changes (e.g., new messages).
	 */
	relayoutScrollViewContent(): void;

	/**
	 * Clean up all listeners, observers, and native resources.
	 */
	cleanup(): void;
}
