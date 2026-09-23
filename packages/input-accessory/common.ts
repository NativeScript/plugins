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

	/**
	 * Extra horizontal inset (DIPs) applied to the input container while the
	 * software keyboard is hidden, so the docked bar floats narrower against
	 * the device's rounded bottom corners. Animates to full width in sync
	 * with the keyboard opening. iOS only. Default: 0.
	 */
	collapsedHorizontalInset?: number;
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
	protected collapsedHorizontalInset: number = 0;
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
		if (config.collapsedHorizontalInset != null) this.collapsedHorizontalInset = config.collapsedHorizontalInset;
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

			// Content sits inside the safe-area insets of a viewport that
			// overflows them, and contentSize includes those insets, as in
			// core's ScrollView layout. Unlike core, contentSize is not padded
			// up to the viewport: the keyboard handling scrolls by what the
			// content really measures, so short content stays put.
			const insets = this.getScrollViewInsets();
			const contentWidth = Math.max(0, width - insets.left - insets.right);
			const widthSpec = Utils.layout.makeMeasureSpec(contentWidth, Utils.layout.EXACTLY);
			const heightSpec = Utils.layout.makeMeasureSpec(0, Utils.layout.UNSPECIFIED);

			stackLayout.measure(widthSpec, heightSpec);
			const measuredHeight = stackLayout.getMeasuredHeight();
			stackLayout.layout(insets.left, insets.top, insets.left + contentWidth, insets.top + measuredHeight);

			this.updateScrollContentSize(width, measuredHeight + insets.top + insets.bottom);
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
	 * The safe-area insets core lays the scroll content out with, in device
	 * pixels. Zero on Android and for an iOS-managed content inset, as in core.
	 */
	public getScrollViewInsets(): { left: number; top: number; right: number; bottom: number } {
		const scrollView = this.nsScrollViewContainer;
		const zero = { left: 0, top: 0, right: 0, bottom: 0 };
		if (!scrollView || typeof scrollView.getSafeAreaInsets !== 'function') return zero;
		const behavior = (scrollView as ScrollView & { iosContentInsetAdjustmentBehavior?: string }).iosContentInsetAdjustmentBehavior;
		if (behavior && behavior !== 'never') return zero;
		return scrollView.getSafeAreaInsets();
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
