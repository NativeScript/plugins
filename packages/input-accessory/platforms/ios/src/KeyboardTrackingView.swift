import UIKit

/**
 * KeyboardTrackingView - A custom UIView that provides interactive keyboard tracking
 * by using itself as a first responder with an inputAccessoryView.
 * 
 * This enables the proper iOS behavior where the input bar is docked to the keyboard
 * and moves with it during interactive dismissal (like iMessage).
 */
@objcMembers
public class KeyboardTrackingView: UIView {
    
    // The view that will be docked to the keyboard
    private var _keyboardAccessoryView: InputAccessoryContainerView?
    
    // Height for the accessory container
    private var accessoryHeight: CGFloat = 48
    
    // The actual content view (our input container)
    private var contentView: UIView?
    
    // Reference to the scroll view for inset adjustments
    private weak var trackedScrollView: UIScrollView?

    // Maximum height for the input area (prevents infinite growth)
    private let maxAccessoryHeight: CGFloat = 200

    // Home-indicator padding used when the accessory is visible without the keyboard.
    private var safeAreaBottomInset: CGFloat = 0

    // Active bottom padding inside the accessory. This is removed while the
    // software keyboard is visible so the bar sits flush above the keyboard.
    private var currentAccessoryBottomInset: CGFloat = 0

    // Track previous keyboard position to detect show/hide direction
    private var previousKeyboardY: CGFloat = 0

    // Flag to suppress animation during programmatic keyboard dismiss (tap close).
    private var isDismissingKeyboard: Bool = false

    // Text input hosted inside the accessory. When it resigns first responder,
    // the tracking view must take first responder back or iOS removes the
    // inputAccessoryView from the screen.
    private weak var textInputView: UIView?
    private var isCleaningUp: Bool = false

    // Callback for triggering ScrollView content relayout from TypeScript
    private var scrollViewRelayoutCallback: (() -> Void)?

    // Interactive keyboard dismiss tracking via CADisplayLink
    private var displayLink: CADisplayLink?
    private var displayLinkProxy: DisplayLinkProxy?
    private var isInteractiveDismissActive: Bool = false
    
    
    // MARK: - First Responder Support
    
    public override var canBecomeFirstResponder: Bool {
        return true
    }
    
    public override var inputAccessoryView: UIView? {
        return _keyboardAccessoryView
    }
    
    // MARK: - Setup
    
    /**
     * Setup the keyboard tracking with the input container view
     * @param inputContainer The view that should dock to the keyboard
     * @param scrollView The scroll view to configure for interactive dismiss
     * @param height The height of the input container
     */
    public func setup(inputContainer: UIView, scrollView: UIScrollView, height: CGFloat) {
        self.isCleaningUp = false
        self.accessoryHeight = height
        self.trackedScrollView = scrollView
        self.contentView = inputContainer

        // Initialize keyboard tracking (keyboard starts hidden at bottom of screen)
        self.previousKeyboardY = UIScreen.main.bounds.height

        // Get safe area bottom inset for home indicator padding
        if #available(iOS 15.0, *) {
            if let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene,
               let window = windowScene.windows.first {
                self.safeAreaBottomInset = max(0, window.safeAreaInsets.bottom - 20)
            }
        } else {
            if let window = UIApplication.shared.windows.first {
                self.safeAreaBottomInset = max(0, window.safeAreaInsets.bottom - 20)
            }
        }
        
        self.currentAccessoryBottomInset = self.safeAreaBottomInset

        // Total height includes content height + safe area for home indicator
        let totalHeight = height + self.currentAccessoryBottomInset
        
        // Create the accessory view container
        let screenWidth = UIScreen.main.bounds.width
        let accessoryContainer = InputAccessoryContainerView(frame: CGRect(x: 0, y: 0, width: screenWidth, height: totalHeight))
        accessoryContainer.safeAreaBottomInset = self.currentAccessoryBottomInset
        accessoryContainer.contentHeight = height
        
        // Store original superview and subview index before removal
        let originalSuperview = inputContainer.superview
        var originalIndex = 0
        if let superview = originalSuperview,
           let idx = superview.subviews.firstIndex(of: inputContainer) {
            originalIndex = idx
        }

        // Move input container into accessory view
        inputContainer.removeFromSuperview()

        // Force clear background so the blur effect shows through
        inputContainer.backgroundColor = .clear

        // Use frame-based positioning for the NativeScript view.
        // NativeScript uses frame-based layout internally — setting the frame triggers
        // layoutSubviews which triggers NativeScript's measure+layout cycle for children.
        // Auto Layout bypasses this, causing children (like the TextView) not to resize.
        inputContainer.frame = CGRect(x: 0, y: 0, width: screenWidth, height: height)
        inputContainer.autoresizingMask = [.flexibleWidth]
        accessoryContainer.addSubview(inputContainer)
        accessoryContainer.contentViewRef = inputContainer

        // Create a zero-height, non-interactive placeholder at the original position.
        // The NativeScript side sets isCollapsed=true on the View, so the GridLayout
        // gives row 2 zero height and skips layoutChild entirely.
        // This placeholder keeps the native subview array consistent for the parent.
        if let superview = originalSuperview {
            let placeholder = UIView(frame: CGRect(x: 0, y: 0, width: superview.bounds.width, height: 0))
            placeholder.backgroundColor = .clear
            placeholder.isUserInteractionEnabled = false
            placeholder.isHidden = true
            placeholder.tag = 9999
            superview.insertSubview(placeholder, at: originalIndex)
        }

        self._keyboardAccessoryView = accessoryContainer
        
        addScrollEdgeElementContainerInteractionIfAvailable(to: accessoryContainer, scrollView: scrollView)

        // Set up scroll view for interactive dismiss
        scrollView.keyboardDismissMode = .interactive

        // Content extends behind the translucent accessory for the blur effect.
        // contentInset ensures content rests above the accessory while allowing
        // scroll-through visibility (like Apple Messages).
        scrollView.contentInset = UIEdgeInsets(top: 0, left: 0, bottom: totalHeight, right: 0)
        scrollView.verticalScrollIndicatorInsets = UIEdgeInsets(top: 0, left: 0, bottom: totalHeight, right: 0)

        // Track pan gesture for interactive keyboard dismiss tracking
        scrollView.panGestureRecognizer.addTarget(self, action: #selector(handleScrollViewPan(_:)))

        // Observe keyboard to adjust scroll insets
        NotificationCenter.default.addObserver(
            self,
            selector: #selector(keyboardWillChangeFrame(_:)),
            name: UIResponder.keyboardWillChangeFrameNotification,
            object: nil
        )
        
        // Become first responder to show the accessory view
        // We need to do this after a slight delay to ensure view hierarchy is ready
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) { [weak self] in
            self?.becomeFirstResponder()
        }
    }

    private func addScrollEdgeElementContainerInteractionIfAvailable(to containerView: UIView, scrollView: UIScrollView) {
        guard #available(iOS 26.0, *) else { return }

        // UIScrollEdgeElementContainerInteraction is an iOS 26 SDK symbol. Resolve
        // it dynamically so the plugin still compiles with Xcode 16.x / iOS 18.x SDKs.
        let interactionClass = (
            NSClassFromString("UIScrollEdgeElementContainerInteraction")
                ?? NSClassFromString("UIKit.UIScrollEdgeElementContainerInteraction")
        ) as? NSObject.Type

        guard let interactionClass = interactionClass else { return }

        let interaction = interactionClass.init()
        interaction.setValue(scrollView, forKey: "scrollView")
        interaction.setValue(NSNumber(value: UIRectEdge.bottom.rawValue), forKey: "edge")

        guard let edgeInteraction = interaction as? UIInteraction else { return }
        containerView.addInteraction(edgeInteraction)
    }
    
    /**
     * Set the callback for relayouting ScrollView content
     * Called from TypeScript during setup
     */
    public func setScrollViewRelayoutCallback(_ callback: @escaping () -> Void) {
        self.scrollViewRelayoutCallback = callback
    }

    /**
     * Register the editable view hosted inside the accessory. This lets the
     * plugin recover when callers use UIApplication/endEditing based dismissal
     * instead of InputAccessoryManager.dismissKeyboard().
     */
    public func setTextInputView(_ textInputView: UIView) {
        self.textInputView = textInputView
        suppressTextInputAssistant(for: textInputView)

        if textInputView is UITextView {
            NotificationCenter.default.addObserver(
                self,
                selector: #selector(textInputDidBeginEditing(_:)),
                name: UITextView.textDidBeginEditingNotification,
                object: textInputView
            )
            NotificationCenter.default.addObserver(
                self,
                selector: #selector(textInputDidEndEditing(_:)),
                name: UITextView.textDidEndEditingNotification,
                object: textInputView
            )
        }

        if textInputView is UITextField {
            NotificationCenter.default.addObserver(
                self,
                selector: #selector(textInputDidBeginEditing(_:)),
                name: UITextField.textDidBeginEditingNotification,
                object: textInputView
            )
            NotificationCenter.default.addObserver(
                self,
                selector: #selector(textInputDidEndEditing(_:)),
                name: UITextField.textDidEndEditingNotification,
                object: textInputView
            )
        }
    }

    private func suppressTextInputAssistant(for textInputView: UIView) {
        textInputView.inputAssistantItem.leadingBarButtonGroups = []
        textInputView.inputAssistantItem.trailingBarButtonGroups = []

        if let textView = textInputView as? UITextView {
            textView.autocorrectionType = .no
            textView.spellCheckingType = .no
            textView.smartQuotesType = .no
            textView.smartDashesType = .no
            textView.smartInsertDeleteType = .no
            textView.textContentType = nil
            if #available(iOS 17.0, *) {
                textView.inlinePredictionType = .no
            }
            textView.reloadInputViews()
            return
        }

        if let textField = textInputView as? UITextField {
            textField.autocorrectionType = .no
            textField.spellCheckingType = .no
            textField.smartQuotesType = .no
            textField.smartDashesType = .no
            textField.smartInsertDeleteType = .no
            textField.textContentType = nil
            if #available(iOS 17.0, *) {
                textField.inlinePredictionType = .no
            }
            textField.reloadInputViews()
        }
    }

    /**
     * Trigger NativeScript content remeasurement for ScrollView after frame resize
     */
    private func relayoutScrollViewContent() {
        // Call back to TypeScript to remeasure ScrollView content
        // This ensures contentSize is recalculated after frame changes
        scrollViewRelayoutCallback?()
    }

    // MARK: - Interactive Keyboard Dismiss Tracking

    /**
     * Track scroll view pan gesture to detect interactive keyboard dismiss.
     * When the user swipes down, iOS moves the keyboard interactively but
     * keyboardWillChangeFrame only fires at the end. We use a CADisplayLink
     * to poll the accessory position and resize the ScrollView every frame.
     */
    @objc private func handleScrollViewPan(_ gesture: UIPanGestureRecognizer) {
        switch gesture.state {
        case .changed:
            if !isInteractiveDismissActive {
                // Only start tracking when the keyboard is actually showing.
                // This avoids activating the display link during normal scrolling.
                let screenHeight = UIScreen.main.bounds.height
                let accessoryOnlyThreshold = self.accessoryHeight + self.safeAreaBottomInset + 10
                if previousKeyboardY < screenHeight - accessoryOnlyThreshold {
                    startInteractiveTracking()
                }
            }
        case .ended, .cancelled, .failed:
            // After the snap animation completes (~0.25s), finalize the ScrollView height.
            // This is a safety net: the notification handler may have already set the correct
            // frame, but in edge cases (notification missed, display link race) it might not.
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in
                self?.stopInteractiveTracking()
                self?.finalizeScrollViewHeight()
            }
        default:
            break
        }
    }

    private func startInteractiveTracking() {
        guard displayLink == nil else { return }
        isInteractiveDismissActive = true
        let proxy = DisplayLinkProxy(self)
        displayLinkProxy = proxy
        displayLink = CADisplayLink(target: proxy, selector: #selector(DisplayLinkProxy.tick))
        displayLink?.add(to: .main, forMode: .common)
    }

    private func stopInteractiveTracking() {
        displayLink?.invalidate()
        displayLink = nil
        displayLinkProxy = nil
        isInteractiveDismissActive = false
    }

    /**
     * Safety net: ensure the ScrollView fills from its top to the accessory top.
     * Called after the snap animation should be complete (~0.5s after gesture ends).
     * Handles edge cases where the notification handler didn't fire or was overridden.
     */
    private func finalizeScrollViewHeight() {
        guard let accessoryView = _keyboardAccessoryView,
              let window = accessoryView.window,
              let scrollView = trackedScrollView else { return }

        let screenHeight = UIScreen.main.bounds.height
        var frameInWindow = accessoryView.convert(accessoryView.bounds, to: window)
        var accessoryTop = frameInWindow.origin.y
        updateAccessoryBottomInsetForAccessoryPosition(accessoryTop, screenHeight: screenHeight)
        frameInWindow = accessoryView.convert(accessoryView.bounds, to: window)
        accessoryTop = frameInWindow.origin.y

        let scrollViewTopInWindow = scrollView.superview?.convert(
            scrollView.frame.origin, to: nil).y ?? scrollView.frame.origin.y

        let targetFrameHeight = max(100, screenHeight - scrollViewTopInWindow)
        let accessoryTotalHeight = self.accessoryHeight + self.currentAccessoryBottomInset
        let keyboardOverlap = max(accessoryTotalHeight, screenHeight - accessoryTop)

        let frameChanged = abs(targetFrameHeight - scrollView.frame.size.height) > 1
        let insetChanged = abs(keyboardOverlap - scrollView.contentInset.bottom) > 1
        guard frameChanged || insetChanged else { return }

        if frameChanged {
            var newFrame = scrollView.frame
            newFrame.size.height = targetFrameHeight
            scrollView.frame = newFrame
        }

        scrollView.contentInset.bottom = keyboardOverlap
        scrollView.verticalScrollIndicatorInsets.bottom = keyboardOverlap

        self.relayoutScrollViewContent()
    }

    /**
     * Called every frame by the CADisplayLink during interactive dismiss.
     * Reads the inputAccessoryView's position in the window and resizes the
     * ScrollView so it always fills from its top down to the accessory top.
     */
    @objc func trackKeyboardPosition() {
        guard let accessoryView = _keyboardAccessoryView,
              let window = accessoryView.window,
              let scrollView = trackedScrollView else { return }

        let frameInWindow = accessoryView.convert(accessoryView.bounds, to: window)
        let accessoryTop = frameInWindow.origin.y

        let screenHeight = UIScreen.main.bounds.height
        let scrollViewTopInWindow = scrollView.superview?.convert(
            scrollView.frame.origin, to: nil).y ?? scrollView.frame.origin.y

        // Frame always extends to screen bottom
        let targetFrameHeight = max(100, screenHeight - scrollViewTopInWindow)

        // contentInset tracks the moving keyboard+accessory area
        let accessoryTotalHeight = self.accessoryHeight + self.currentAccessoryBottomInset
        let keyboardOverlap = max(accessoryTotalHeight, screenHeight - accessoryTop)

        let frameChanged = abs(targetFrameHeight - scrollView.frame.size.height) > 0.5
        let insetChanged = abs(keyboardOverlap - scrollView.contentInset.bottom) > 0.5
        guard frameChanged || insetChanged else { return }

        // Check if user is near bottom before changes (account for contentInset)
        let contentHeight = scrollView.contentSize.height
        let currentVisibleHeight = scrollView.bounds.height - scrollView.contentInset.bottom
        let currentMaxOffset = max(0, contentHeight - currentVisibleHeight)
        let currentOffset = scrollView.contentOffset.y
        let isNearBottom = (currentMaxOffset < 10) || (currentMaxOffset - currentOffset < 50)

        // Update frame if needed (no animation — tracks finger position)
        if frameChanged {
            var newFrame = scrollView.frame
            newFrame.size.height = targetFrameHeight
            scrollView.frame = newFrame
        }

        // Update insets
        scrollView.contentInset.bottom = keyboardOverlap
        scrollView.verticalScrollIndicatorInsets.bottom = keyboardOverlap

        // Keep content at bottom if user was near bottom
        if isNearBottom {
            let newVisibleHeight = targetFrameHeight - keyboardOverlap
            let newMaxOffset = max(0, contentHeight - newVisibleHeight)
            if contentHeight > newVisibleHeight {
                scrollView.contentOffset = CGPoint(x: 0, y: newMaxOffset)
            }
        }
    }

    /**
     * Update the height of the accessory view when content size changes (e.g., TextView grows)
     */
    public func updateHeight(_ newHeight: CGFloat) {
        let clampedHeight = min(max(48, newHeight), maxAccessoryHeight)

        guard let accessoryView = _keyboardAccessoryView,
              abs(self.accessoryHeight - clampedHeight) > 1 else {
            return
        }

        self.accessoryHeight = clampedHeight

        // Total height includes the currently active bottom inset. This is
        // zero while the keyboard is open and safe-area padding when closed.
        let totalHeight = clampedHeight + self.currentAccessoryBottomInset

        // Update the container's heights
        accessoryView.contentHeight = clampedHeight
        accessoryView.safeAreaBottomInset = self.currentAccessoryBottomInset

        // Update via the internal height constraint - the reliable way to resize inputAccessoryViews
        accessoryView.updateHeightConstraint(totalHeight)

        // Note: contentInset is NOT updated here. reloadInputViews() below triggers
        // a keyboardWillChangeFrame notification which recalculates the full overlap
        // (keyboard + accessory) and sets the correct contentInset.bottom.

        // Update the content view's frame - this triggers NativeScript's layoutSubviews
        // which re-measures and re-lays out children (making the TextView actually resize)
        if let contentView = self.contentView {
            contentView.frame = CGRect(x: 0, y: 0, width: accessoryView.bounds.width, height: clampedHeight)
        }

        // reloadInputViews must be called on the ACTUAL first responder.
        // When the user is typing, the UITextView (inside our accessory) is first responder,
        // not this KeyboardTrackingView. Find and reload on whichever view is first responder.
        if let firstResponder = self.findFirstResponder(in: accessoryView) {
            firstResponder.reloadInputViews()
        } else {
            self.reloadInputViews()
        }
    }

    /// Recursively find the first responder within a view hierarchy
    private func findFirstResponder(in view: UIView) -> UIView? {
        if view.isFirstResponder {
            return view
        }
        for subview in view.subviews {
            if let responder = findFirstResponder(in: subview) {
                return responder
            }
        }
        return nil
    }

    private func updateAccessoryBottomInset(_ bottomInset: CGFloat) {
        guard abs(self.currentAccessoryBottomInset - bottomInset) > 0.5 else {
            return
        }

        self.currentAccessoryBottomInset = bottomInset

        guard let accessoryView = _keyboardAccessoryView else {
            return
        }

        accessoryView.safeAreaBottomInset = bottomInset
        accessoryView.updateHeightConstraint(self.accessoryHeight + bottomInset)

        if let contentView = self.contentView {
            contentView.frame = CGRect(x: 0, y: 0, width: accessoryView.bounds.width, height: self.accessoryHeight)
        }
    }

    private func updateAccessoryBottomInsetForAccessoryPosition(_ accessoryTop: CGFloat, screenHeight: CGFloat) {
        let accessoryOnlyThreshold = self.accessoryHeight + self.safeAreaBottomInset + 10
        let keyboardOverlap = max(0, screenHeight - accessoryTop)
        let isKeyboardShowing = keyboardOverlap > accessoryOnlyThreshold
        updateAccessoryBottomInset(isKeyboardShowing ? 0 : self.safeAreaBottomInset)
    }
    
    /**
     * Show the keyboard (make text field first responder)
     */
    public func showKeyboard(textField: UITextField) {
        textField.becomeFirstResponder()
    }

    /**
     * Signal that the keyboard is being dismissed programmatically (tap close).
     * Must be called immediately before becomeFirstResponder().
     */
    public func setDismissingKeyboard() {
        isDismissingKeyboard = true
        // Pre-set to keyboard-hidden position so any subsequent notification
        // sees "keyboard was already hidden" and won't detect a transition.
        previousKeyboardY = UIScreen.main.bounds.height
        // Keep the flag active for the full dismiss transition (~0.5s).
        // Multiple keyboardWillChangeFrame notifications can fire during the
        // first-responder transfer; clearing on the first one lets the second
        // go through the animated path and cause the jump.
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) { [weak self] in
            self?.isDismissingKeyboard = false
        }
    }

    /**
     * Dismiss the software keyboard while keeping the inputAccessoryView alive.
     * This transfers first responder from the hosted TextView/TextField back to
     * KeyboardTrackingView, producing an accessory-only state instead of fully
     * removing the input bar.
     */
    public func dismissKeyboard() {
        stopInteractiveTracking()
        setDismissingKeyboard()

        if !self.isFirstResponder {
            self.becomeFirstResponder()
        } else {
            self.reloadInputViews()
        }

        // The frame notification usually handles this, but finalize on the next
        // turn as a guard against UIKit sending notification(s) before the
        // responder transfer settles.
        DispatchQueue.main.async { [weak self] in
            self?.finalizeScrollViewHeight()
        }
    }

    @objc private func textInputDidBeginEditing(_ notification: Notification) {
        if let textInputView = notification.object as? UIView {
            suppressTextInputAssistant(for: textInputView)
        }
    }

    @objc private func textInputDidEndEditing(_ notification: Notification) {
        guard !isCleaningUp,
              let accessoryView = _keyboardAccessoryView,
              accessoryView.window != nil else { return }

        restoreAccessoryFirstResponderIfNeeded()
    }

    private func restoreAccessoryFirstResponderIfNeeded() {
        guard !isCleaningUp,
              let accessoryView = _keyboardAccessoryView,
              let window = accessoryView.window else { return }

        if let activeResponder = findFirstResponder(in: window),
           activeResponder !== self,
           !isView(activeResponder, descendantOf: accessoryView) {
            return
        }

        guard !self.isFirstResponder else { return }

        setDismissingKeyboard()
        DispatchQueue.main.async { [weak self] in
            guard let self = self, !self.isCleaningUp else { return }
            if !self.isFirstResponder {
                self.becomeFirstResponder()
            }
            self.finalizeScrollViewHeight()
        }
    }

    private func isView(_ view: UIView, descendantOf ancestor: UIView) -> Bool {
        var currentView: UIView? = view
        while let candidate = currentView {
            if candidate === ancestor {
                return true
            }
            currentView = candidate.superview
        }
        return false
    }

    // MARK: - Keyboard Handling
    
    @objc private func keyboardWillChangeFrame(_ notification: Notification) {
        // During interactive dismiss, the display link is already tracking the
        // keyboard position every frame. Skip the notification handler to avoid
        // a race (stopping the display link + trying to animate can leave the
        // ScrollView compressed until the safety-net fires).
        // Just update previousKeyboardY so state detection stays correct.
        if isInteractiveDismissActive {
            if let userInfo = notification.userInfo,
               let endFrame = userInfo[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect {
                previousKeyboardY = endFrame.origin.y
            }
            return
        }

        // Stop any leftover interactive tracking (e.g. from delayed cleanup)
        stopInteractiveTracking()

        guard let scrollView = trackedScrollView,
              let userInfo = notification.userInfo,
              let endFrame = userInfo[UIResponder.keyboardFrameEndUserInfoKey] as? CGRect else {
            return
        }

        let duration = userInfo[UIResponder.keyboardAnimationDurationUserInfoKey] as? TimeInterval ?? 0.25
        let curveValue = userInfo[UIResponder.keyboardAnimationCurveUserInfoKey] as? UInt ?? 7
        let curve = UIView.AnimationOptions(rawValue: curveValue << 16)

        let screenHeight = UIScreen.main.bounds.height
        let scrollViewTopInWindow = scrollView.superview?.convert(scrollView.frame.origin, to: nil).y ?? scrollView.frame.origin.y

        // Frame always extends to the screen bottom so content is behind both
        // the translucent accessory AND the keyboard (for blur-through visibility).
        let targetFrameHeight = max(100, screenHeight - scrollViewTopInWindow)

        // Detect keyboard showing/hiding for scroll behavior.
        // iOS includes the inputAccessoryView in the reported keyboard frame,
        // so when only the accessory is visible (keyboard hidden), endFrame.origin.y
        // is screenHeight - accessoryHeight - safeArea (~90pt above bottom).
        // Use the accessory's total height + buffer as the threshold.
        let accessoryOnlyThreshold = self.accessoryHeight + self.safeAreaBottomInset + 10
        let isKeyboardShowing = endFrame.origin.y < screenHeight - accessoryOnlyThreshold
        let wasKeyboardHidden = previousKeyboardY >= screenHeight - accessoryOnlyThreshold
        let keyboardJustAppeared = isKeyboardShowing && wasKeyboardHidden
        let desiredBottomInset: CGFloat = isKeyboardShowing ? 0 : self.safeAreaBottomInset
        updateAccessoryBottomInset(desiredBottomInset)

        // contentInset covers the full keyboard+accessory area from the screen bottom.
        // Clamp to at least the accessory height — the accessory is always visible
        // (KeyboardTrackingView is always first responder), so the overlap never drops
        // below it. This prevents a transient inset=0 state during first-responder
        // transfers (e.g., UITextView → KeyboardTrackingView) that would cause a scroll jump.
        let accessoryTotalHeight = self.accessoryHeight + self.currentAccessoryBottomInset
        let keyboardOverlap = max(accessoryTotalHeight, screenHeight - endFrame.origin.y)

        // Store current position for next comparison
        previousKeyboardY = endFrame.origin.y

        // Calculate if user is at or near bottom BEFORE any changes.
        // Account for contentInset: visible content area = bounds - inset.
        let currentOffset = scrollView.contentOffset.y
        let currentVisibleHeight = scrollView.bounds.height - scrollView.contentInset.bottom
        let currentMaxOffset = max(0, scrollView.contentSize.height - currentVisibleHeight)
        let isNearBottom = (currentMaxOffset < 10) || (currentMaxOffset - currentOffset < 100)

        // Trigger NativeScript content remeasurement — updates contentSize
        self.relayoutScrollViewContent()

        // Only proceed if frame or inset actually changes
        let frameChanged = abs(targetFrameHeight - scrollView.frame.size.height) > 1
        let insetChanged = abs(keyboardOverlap - scrollView.contentInset.bottom) > 1
        guard frameChanged || insetChanged else {
            return
        }

        if isDismissingKeyboard {
            // Don't clear flag here — the timer in setDismissingKeyboard() handles it.
            // This ensures ALL notifications during the transition are handled instantly.

            if frameChanged {
                var newFrame = scrollView.frame
                newFrame.size.height = targetFrameHeight
                scrollView.frame = newFrame
            }

            scrollView.contentInset.bottom = keyboardOverlap
            scrollView.verticalScrollIndicatorInsets.bottom = keyboardOverlap

            // Preserve visual position for short content. Clamping to zero while
            // the keyboard is handing off causes a visible up/down jump, and the
            // chat view will issue its own scroll after adding the sent message.
            let contentHeight = scrollView.contentSize.height
            let visibleHeight = targetFrameHeight - keyboardOverlap
            let maxOffset = max(0, contentHeight - visibleHeight)
            if contentHeight > visibleHeight {
                let clampedOffset = max(0, min(currentOffset, maxOffset))
                if abs(clampedOffset - currentOffset) > 0.5 {
                    scrollView.contentOffset = CGPoint(x: 0, y: clampedOffset)
                }
            }

            self.relayoutScrollViewContent()
            return
        }

        // Animate frame, inset, and scroll position together.
        UIView.animate(withDuration: duration, delay: 0, options: curve) {
            if frameChanged {
                var newFrame = scrollView.frame
                newFrame.size.height = targetFrameHeight
                scrollView.frame = newFrame
            }

            scrollView.contentInset.bottom = keyboardOverlap
            scrollView.verticalScrollIndicatorInsets.bottom = keyboardOverlap

            // visibleHeight = frame minus the occluded area (keyboard + accessory).
            let contentHeight = scrollView.contentSize.height
            let visibleHeight = targetFrameHeight - keyboardOverlap
            let maxOffset = max(0, contentHeight - visibleHeight)

            // Apple Messages behavior:
            if keyboardJustAppeared {
                // Keyboard just opened - scroll to bottom only if there's content to scroll to
                if contentHeight > visibleHeight {
                    scrollView.contentOffset = CGPoint(x: 0, y: maxOffset)
                }
            } else if isKeyboardShowing && isNearBottom {
                // User was at bottom - keep them there as frame changes
                if contentHeight > visibleHeight {
                    scrollView.contentOffset = CGPoint(x: 0, y: maxOffset)
                }
            } else if !isKeyboardShowing && currentOffset > 0 {
                // Keyboard is hiding - adjust offset to maintain relative position
                let newOffset = max(0, min(currentOffset, maxOffset))
                scrollView.contentOffset = CGPoint(x: 0, y: newOffset)
            }
        }
    }
    
    // MARK: - Cleanup
    
    public func cleanup() {
        isCleaningUp = true
        stopInteractiveTracking()
        trackedScrollView?.panGestureRecognizer.removeTarget(self, action: #selector(handleScrollViewPan(_:)))
        NotificationCenter.default.removeObserver(self)
        self._keyboardAccessoryView = nil
        self.contentView = nil
        self.textInputView = nil
        self.trackedScrollView = nil
        self.scrollViewRelayoutCallback = nil
        self.resignFirstResponder()
    }
    
    deinit {
        cleanup()
    }
}

/**
 * Custom input accessory container that properly sizes itself and supports dynamic height.
 * Uses an internal height constraint which is the reliable way to resize inputAccessoryViews.
 * Extends UIInputView with .keyboard style so the background matches the system keyboard exactly.
 */
class InputAccessoryContainerView: UIInputView {

    var safeAreaBottomInset: CGFloat = 0
    var contentHeight: CGFloat = 48

    // Direct reference to the NativeScript content view
    weak var contentViewRef: UIView?

    // Internal height constraint - the reliable mechanism for inputAccessoryView resizing
    private var heightConstraint: NSLayoutConstraint!

    init(frame: CGRect) {
        // .keyboard style gives the exact same translucent blur as the system keyboard.
        // No separate UIVisualEffectView needed — the accessory blends seamlessly.
        super.init(frame: frame, inputViewStyle: .keyboard)

        self.allowsSelfSizing = true

        // Create an internal height constraint.
        // The keyboard system monitors this to resize the accessory view.
        self.translatesAutoresizingMaskIntoConstraints = false
        heightConstraint = self.heightAnchor.constraint(equalToConstant: frame.size.height)
        heightConstraint.priority = .required
        heightConstraint.isActive = true
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

    func updateHeightConstraint(_ newHeight: CGFloat) {
        heightConstraint.constant = newHeight
        invalidateIntrinsicContentSize()
        superview?.setNeedsLayout()
        superview?.layoutIfNeeded()
    }

    override var intrinsicContentSize: CGSize {
        return CGSize(width: UIView.noIntrinsicMetric, height: heightConstraint.constant)
    }

    override func layoutSubviews() {
        super.layoutSubviews()
        // Enforce content view positioning on every layout pass.
        if let contentView = contentViewRef {
            contentView.frame = CGRect(x: 0, y: 0, width: bounds.width, height: contentHeight)
        }
    }

    override func didMoveToSuperview() {
        super.didMoveToSuperview()
        if #available(iOS 11.0, *) {
            insetsLayoutMarginsFromSafeArea = false
        }
    }

    override var safeAreaInsets: UIEdgeInsets {
        return .zero
    }
}

/**
 * Weak-reference proxy for CADisplayLink to avoid a retain cycle.
 * CADisplayLink retains its target, so using `self` directly would
 * prevent KeyboardTrackingView from being deallocated.
 */
private class DisplayLinkProxy: NSObject {
    weak var target: KeyboardTrackingView?
    init(_ target: KeyboardTrackingView) { self.target = target }
    @objc func tick() { target?.trackKeyboardPosition() }
}
