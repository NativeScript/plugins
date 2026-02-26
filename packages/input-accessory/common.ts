import { View, TextView, Utils, ScrollView, Page } from '@nativescript/core';

/**
 * Configuration for setting up the input accessory behavior.
 */
export interface InputAccessoryConfig {
	/**
	 * The NativeScript Page instance.
	 * On iOS, used to access the UIViewController for the KeyboardTrackingView.
	 * On Android, used to access the Activity.
	 */
	page: Page;

	/**
	 * The NativeScript ScrollView that contains the chat messages.
	 * The plugin manages its content insets (iOS) / padding (Android)
	 * and handles auto-scroll behavior.
	 */
	scrollView: ScrollView;

	/**
	 * The NativeScript View (any layout) that serves as the input bar.
	 * On iOS, this view is moved into the inputAccessoryView.
	 * On Android, translationY animation keeps it above the keyboard.
	 */
	inputContainer: View;

	/**
	 * The NativeScript TextView used for text input.
	 * Used for auto-height calculation as text grows/shrinks.
	 * On iOS, the plugin configures scrollEnabled=false and textContainerInset.
	 */
	textView: TextView;

	/**
	 * Base height of the input container in DIPs. Default: 48.
	 */
	baseHeight?: number;

	/**
	 * Maximum height the input container can grow to in DIPs. Default: 200.
	 */
	maxHeight?: number;

	/**
	 * Padding added to the text height when calculating container height. Default: 16.
	 */
	containerPadding?: number;
}

/**
 * Shared base class for InputAccessoryManager.
 * Contains platform-agnostic logic for ScrollView content relayout
 * and common configuration storage.
 */
export class InputAccessoryManagerBase {
	protected nsScrollViewContainer: ScrollView | null = null;
	protected nsInputContainer: View | null = null;
	protected textView: TextView | null = null;
	protected baseHeight: number = 48;
	protected maxHeight: number = 200;
	protected containerPadding: number = 16;
	protected isRelayoutingScrollView: boolean = false;

	/**
	 * Store common config properties. Platform subclasses call this from setup().
	 */
	protected applyConfig(config: InputAccessoryConfig): void {
		this.nsScrollViewContainer = config.scrollView;
		this.nsInputContainer = config.inputContainer;
		this.textView = config.textView;
		if (config.baseHeight != null) this.baseHeight = config.baseHeight;
		if (config.maxHeight != null) this.maxHeight = config.maxHeight;
		if (config.containerPadding != null) this.containerPadding = config.containerPadding;
	}

	/**
	 * Relayout ScrollView content after native frame/padding changes.
	 * Remeasures the NativeScript content child and updates scroll dimensions.
	 */
	public relayoutScrollViewContent(): void {
		if (this.isRelayoutingScrollView) return;
		if (!this.nsScrollViewContainer) return;

		this.isRelayoutingScrollView = true;
		try {
			const stackLayout = this.nsScrollViewContainer.content;
			if (!stackLayout) return;

			const width = this.getScrollViewWidth();
			if (width <= 0) return;

			const widthSpec = Utils.layout.makeMeasureSpec(width, Utils.layout.EXACTLY);
			const heightSpec = Utils.layout.makeMeasureSpec(0, Utils.layout.UNSPECIFIED);

			stackLayout.measure(widthSpec, heightSpec);
			const measuredHeight = stackLayout.getMeasuredHeight();
			stackLayout.layout(0, 0, width, measuredHeight);

			this.updateScrollContentSize(width, measuredHeight);
		} finally {
			this.isRelayoutingScrollView = false;
		}
	}

	/**
	 * Override per platform to return the native scroll view width in device pixels.
	 */
	protected getScrollViewWidth(): number {
		return 0;
	}

	/**
	 * Override on iOS to set UIScrollView.contentSize. No-op on Android.
	 */
	protected updateScrollContentSize(_width: number, _measuredHeight: number): void {}

	/**
	 * Common cleanup of TypeScript-side references.
	 */
	protected cleanupBase(): void {
		this.nsScrollViewContainer = null;
		this.nsInputContainer = null;
		this.textView = null;
	}
}
