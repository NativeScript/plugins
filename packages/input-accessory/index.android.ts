import { Utils, Application } from '@nativescript/core';
import { InputAccessoryManagerBase, InputAccessoryConfig } from './common';

export class InputAccessoryManager extends InputAccessoryManagerBase {
	private helper: org.nativescript.inputaccessory.KeyboardAccessoryHelper | null = null;

	setup(config: InputAccessoryConfig): void {
		this.applyConfig(config);

		const nativeScrollView = config.scrollView.android as android.widget.ScrollView;
		const nativeInputContainer = config.inputContainer.android as android.view.View;

		if (!nativeScrollView || !nativeInputContainer) {
			console.error('[InputAccessory] Native views not ready');
			return;
		}

		// API 30+ required for reliable WindowInsetsAnimationCompat.
		// On older APIs, skip — NativeScript's default keyboard behavior works fine.
		if (android.os.Build.VERSION.SDK_INT < 30) {
			console.log('[InputAccessory] API < 30, using default keyboard behavior');
			return;
		}

		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		if (!activity) {
			console.error('[InputAccessory] No activity available');
			return;
		}

		// Get initial height in pixels
		const frameHeight = nativeInputContainer.getHeight();
		const maxInitialPx = Utils.layout.toDevicePixels(50);
		const inputHeightPx = frameHeight > 0 && frameHeight <= maxInitialPx ? frameHeight : Utils.layout.toDevicePixels(this.baseHeight);
		this.baseHeight = Utils.layout.toDeviceIndependentPixels(inputHeightPx);

		// Create native helper
		this.helper = new org.nativescript.inputaccessory.KeyboardAccessoryHelper(activity, nativeInputContainer, nativeScrollView, inputHeightPx);

		// Bridge callback: Kotlin -> TypeScript
		const self = this;
		const callbackImpl = new org.nativescript.inputaccessory.KeyboardAccessoryHelper.KeyboardStateCallback({
			onKeyboardHeightChanged(_heightPx: number, _isAnimating: boolean): void {
				// Per-frame during animation — handled by Kotlin (translationY + padding)
			},
			onKeyboardFullyShown(_heightPx: number): void {
				self.handleKeyboardShown();
			},
			onKeyboardFullyHidden(): void {
				self.handleKeyboardHidden();
			},
			onRelayoutScrollContent(): void {
				self.relayoutScrollViewContent();
			},
		});

		this.helper.setup(callbackImpl);
	}

	updateAccessoryHeight(): void {
		if (!this.helper || !this.textView) return;

		const nativeEditText = this.textView.android as android.widget.EditText;
		if (!nativeEditText) return;

		// Measure natural text height using Android's measure system
		const currentWidth = nativeEditText.getWidth();
		if (currentWidth <= 0) return;

		const widthSpec = android.view.View.MeasureSpec.makeMeasureSpec(currentWidth, android.view.View.MeasureSpec.EXACTLY);
		const heightSpec = android.view.View.MeasureSpec.makeMeasureSpec(0, android.view.View.MeasureSpec.UNSPECIFIED);
		nativeEditText.measure(widthSpec, heightSpec);
		const textHeightDip = Utils.layout.toDeviceIndependentPixels(nativeEditText.getMeasuredHeight());

		let newHeight = textHeightDip + this.containerPadding;
		newHeight = Math.max(this.baseHeight, Math.min(newHeight, this.maxHeight));

		// Update native helper (pass pixels)
		this.helper.updateAccessoryHeight(Utils.layout.toDevicePixels(newHeight));
	}

	dismissKeyboard(): void {
		if (this.helper) {
			this.helper.dismissKeyboard();
		}
	}

	cleanup(): void {
		if (this.helper) {
			this.helper.cleanup();
			this.helper = null;
		}
		this.cleanupBase();
	}

	// MARK: - Android-specific scroll behavior

	private handleKeyboardShown(): void {
		if (!this.helper) return;
		// Small delay to let padding settle before scrolling
		setTimeout(() => {
			this.helper?.scrollToBottom();
		}, 50);
	}

	private handleKeyboardHidden(): void {
		if (!this.helper) return;
		this.helper.clampScrollPosition();
		this.relayoutScrollViewContent();
	}

	// MARK: - Base class overrides

	protected getScrollViewWidth(): number {
		if (!this.nsScrollViewContainer) return 0;
		const nativeScrollView = this.nsScrollViewContainer.android as android.widget.ScrollView;
		if (!nativeScrollView) return 0;
		return nativeScrollView.getWidth(); // Already in device pixels on Android
	}
}
