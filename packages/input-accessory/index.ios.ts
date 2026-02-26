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

		// Configure UITextView for auto-growing
		const nativeTextView = config.textView.ios as UITextView;
		if (nativeTextView) {
			nativeTextView.scrollEnabled = false;
			nativeTextView.textContainerInset = new UIEdgeInsets({
				top: 10,
				left: 10,
				bottom: 10,
				right: 10,
			});
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

		let newHeight = fittingSize.height + this.containerPadding;
		newHeight = Math.max(this.baseHeight, Math.min(newHeight, this.maxHeight));

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
			this.keyboardTrackingView.setDismissingKeyboard();
			this.keyboardTrackingView.becomeFirstResponder();
		}
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

		const dpWidth = Utils.layout.toDevicePixels(width);
		const dpHeight = Utils.layout.toDevicePixels(height);

		const widthSpec = Utils.layout.makeMeasureSpec(dpWidth, Utils.layout.EXACTLY);
		const heightSpec = Utils.layout.makeMeasureSpec(dpHeight, Utils.layout.EXACTLY);

		this.nsInputContainer.measure(widthSpec, heightSpec);
		this.nsInputContainer.layout(0, 0, dpWidth, dpHeight);

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
