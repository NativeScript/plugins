import { Utils } from '@nativescript/core';
import { InputAccessoryManagerBase, InputAccessoryConfig } from './common';

export class InputAccessoryManager extends InputAccessoryManagerBase {
	private keyboardTrackingView: KeyboardTrackingView | null = null;
	private scrollView: UIScrollView | null = null;
	private inputContainerView: UIView | null = null;

	setup(config: InputAccessoryConfig): void {
		this.applyConfig(config);

		const scrollViewNative = config.scrollView.ios as UIScrollView;
		this.scrollView = scrollViewNative;
		this.inputContainerView = config.inputContainer.ios as UIView;

		// Determine initial height from the current frame or fall back to baseHeight
		const frameHeight = this.inputContainerView.frame.size.height;
		const inputHeight = frameHeight > 0 && frameHeight <= 50 ? frameHeight : this.baseHeight;
		this.baseHeight = inputHeight;

		// Get UIViewController from NativeScript Page
		const viewController = config.page.viewController as UIViewController;

		// Create native KeyboardTrackingView (invisible, just for first responder chain)
		this.keyboardTrackingView = KeyboardTrackingView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
		viewController.view.addSubview(this.keyboardTrackingView);

		// Must be set before setup so the accessory starts in the collapsed
		// (keyboard hidden) width state.
		this.keyboardTrackingView.setCollapsedHorizontalInset(this.collapsedHorizontalInset);

		// Swift moves the native UIView into the inputAccessoryView
		this.keyboardTrackingView.setupWithInputContainerScrollViewHeight(this.inputContainerView, scrollViewNative, inputHeight);

		// Collapse the NativeScript View in the parent GridLayout.
		// This makes the row = 0 height and prevents the parent from calling
		// _setNativeViewFrame (which would conflict with the accessory positioning).
		config.inputContainer.isCollapsed = true;
		if (config.inputContainer.parent) {
			config.inputContainer.parent.requestLayout();
		}

		// Set the callback so Swift can trigger ScrollView content relayout
		this.keyboardTrackingView.setScrollViewRelayoutCallback(() => {
			this.relayoutScrollViewContent();
		});

		// Invoked inside the native width animation block so the composer
		// children re-layout (and therefore animate) with the keyboard.
		this.keyboardTrackingView.setAccessoryRelayoutCallback(() => {
			this.relayoutAccessory();
		});

		// Configure UITextView for auto-growing
		const nativeTextView = config.textView.ios as UITextView;
		if (nativeTextView) {
			nativeTextView.scrollEnabled = false;
			// textContainerInset is core's: it maps the TextView's CSS padding
			// onto the inset and re-applies that mapping on every full style
			// pass (appearance change, trait change, hint transition), so a
			// value written here would be stomped later and misalign the text.
			// Callers size the text through the TextView's CSS padding.
			// Input traits (autocorrection, spell checking, smart punctuation,
			// inline predictions) stay at their UIKit defaults so the composer
			// follows the user's keyboard settings and the hosted TextView's
			// own attributes (e.g. autocorrect="false") apply.
			nativeTextView.inputAssistantItem.leadingBarButtonGroups = Utils.ios.collections.jsArrayToNSArray([]);
			nativeTextView.inputAssistantItem.trailingBarButtonGroups = Utils.ios.collections.jsArrayToNSArray([]);
			this.keyboardTrackingView.setTextInputView(nativeTextView);
		}

		// Run initial layout of children within the accessory dimensions
		setTimeout(() => this.relayoutAccessory(), 50);
	}

	updateAccessoryHeight(): void {
		if (!this.keyboardTrackingView || !this.textView) return;

		const nativeTextView = this.textView.ios as UITextView;
		if (!nativeTextView) return;

		// sizeThatFits returns the natural text height
		const currentWidth = nativeTextView.frame.size.width;
		const fittingSize = nativeTextView.sizeThatFits(CGSizeMake(currentWidth, 10000));

		const naturalHeight = fittingSize.height + this.containerPadding;
		const newHeight = Math.max(this.baseHeight, Math.min(naturalHeight, this.maxHeight));

		// Past the capped accessory height the bar can no longer grow, so the
		// TextView scrolls itself to keep the newest lines and the caret
		// reachable; below the cap it stays unscrollable and the bar grows.
		const shouldScroll = naturalHeight > this.maxHeight;
		if (nativeTextView.scrollEnabled !== shouldScroll) {
			nativeTextView.scrollEnabled = shouldScroll;
			if (!shouldScroll) {
				// Back below the cap: a leftover offset would leave the top lines clipped.
				nativeTextView.setContentOffsetAnimated(CGPointMake(0, 0), false);
			}
		}
		if (shouldScroll) {
			nativeTextView.scrollRangeToVisible(nativeTextView.selectedRange);
		}

		// Update native accessory container height
		this.keyboardTrackingView.updateHeight(newHeight);

		// Re-layout NativeScript children within the new dimensions
		this.relayoutAccessory();
	}

	/**
	 * Dismiss the keyboard by transferring first responder to the KeyboardTrackingView.
	 * This keeps the accessory visible (single transition) instead of dismissSoftInput()
	 * which briefly removes the accessory and causes a scroll jump.
	 */
	dismissKeyboard(): void {
		if (this.keyboardTrackingView) {
			this.keyboardTrackingView.dismissKeyboard();
			return;
		}
		Utils.dismissKeyboard();
	}

	/**
	 * Hide the docked accessory while a sheet/popover/dialog is presented over
	 * the host page. Sheet presentations keep the page in the window, and the
	 * accessory lives in the keyboard's own window which UIKit z-orders above
	 * the sheet, so without this the bar floats on top of the dialog. Animates
	 * the bar (and keyboard, if open) away and blocks the plugin's auto-restore
	 * paths until restore() is called.
	 */
	suspend(): void {
		this.keyboardTrackingView?.suspendAccessory();
	}

	/**
	 * Re-show the docked accessory after a modal that covered the host page was
	 * dismissed. UIKit does not restore first responder automatically, so call
	 * this when returning from a modal/resource view. Polls internally until the
	 * modal is fully gone, so it is safe to call as soon as the modal closes.
	 * Also lifts a suspend() suspension.
	 */
	restore(): void {
		this.keyboardTrackingView?.restoreAccessory();
	}

	cleanup(): void {
		if (this.keyboardTrackingView) {
			this.keyboardTrackingView.cleanup();
			this.keyboardTrackingView.removeFromSuperview();
			this.keyboardTrackingView = null;
		}
		this.scrollView = null;
		this.inputContainerView = null;
		this.cleanupBase();
	}

	// MARK: - iOS-specific relayout

	/**
	 * Manually trigger NativeScript's measure + layout cycle on the input container.
	 * Since isCollapsed=true prevents the parent from doing this, we call
	 * measure() and layout() directly.
	 */
	private relayoutAccessory(): void {
		if (!this.nsInputContainer || !this.inputContainerView) return;

		const frame = this.inputContainerView.frame;
		const width = frame.size.width;
		const height = frame.size.height;

		if (width <= 0 || height <= 0) return;

		// frame.origin.x carries the collapsed horizontal inset; laying out at
		// 0 would snap the container back to the screen edge.
		const dpX = Utils.layout.toDevicePixels(frame.origin.x);
		const dpWidth = Utils.layout.toDevicePixels(width);
		const dpHeight = Utils.layout.toDevicePixels(height);

		const widthSpec = Utils.layout.makeMeasureSpec(dpWidth, Utils.layout.EXACTLY);
		const heightSpec = Utils.layout.makeMeasureSpec(dpHeight, Utils.layout.EXACTLY);

		this.nsInputContainer.measure(widthSpec, heightSpec);
		this.nsInputContainer.layout(dpX, 0, dpX + dpWidth, dpHeight);

		// Force hint placeholder to re-render after reparenting into the accessory
		if (this.textView && (!this.textView.text || this.textView.text.length === 0)) {
			const hint = this.textView.hint;
			this.textView.hint = '';
			this.textView.hint = hint;
		}
	}

	// MARK: - Base class overrides

	protected getScrollViewWidth(): number {
		if (!this.scrollView) return 0;
		return Utils.layout.toDevicePixels(this.scrollView.frame.size.width);
	}

	protected updateScrollContentSize(width: number, measuredHeight: number): void {
		if (!this.scrollView) return;
		const dipWidth = Utils.layout.toDeviceIndependentPixels(width);
		const contentHeight = Utils.layout.toDeviceIndependentPixels(measuredHeight);
		this.scrollView.contentSize = CGSizeMake(dipWidth, contentHeight);
	}
}
