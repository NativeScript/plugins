package org.nativescript.inputaccessory

import android.app.Activity
import android.view.MotionEvent
import android.view.View
import android.view.ViewGroup
import android.view.animation.LinearInterpolator
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsAnimationCompat
import androidx.core.view.WindowInsetsAnimationControllerCompat
import androidx.core.view.WindowInsetsAnimationControlListenerCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.core.graphics.Insets
import java.lang.ref.WeakReference
import kotlin.math.abs
import kotlin.math.max

/**
 * KeyboardAccessoryHelper
 *
 * Works WITH NativeScript's layout system using the "deferred transition" pattern:
 * - NativeScript handles the actual keyboard layout (resize, reposition)
 * - We smooth the transition with translationY animation
 * - We provide interactive swipe-to-dismiss that tracks the finger
 * - We report keyboard state changes to TypeScript
 *
 * Does NOT override softInputMode or setDecorFitsSystemWindows —
 * NativeScript handles those via androidOverflowEdge and its defaults.
 */
class KeyboardAccessoryHelper(
    activity: Activity,
    private val inputContainer: View,
    private val scrollView: View,  // NativeScript's VerticalScrollView
    private var accessoryHeightPx: Int
) {
    /**
     * Callback interface for TypeScript bridge.
     * All methods are called on the main thread.
     */
    interface KeyboardStateCallback {
        fun onKeyboardHeightChanged(heightPx: Int, isAnimating: Boolean)
        fun onKeyboardFullyShown(heightPx: Int)
        fun onKeyboardFullyHidden()
        fun onRelayoutScrollContent()
    }

    private val scrollViewGroup: ViewGroup = scrollView as ViewGroup
    private val activityRef = WeakReference(activity)
    private var callback: KeyboardStateCallback? = null
    private var currentKeyboardHeightPx = 0
    private var isKeyboardVisible = false

    // Deferred transition: positions captured before/after NativeScript relayout
    private var inputStartBottom = 0
    private var scrollStartBottom = 0

    // Interactive dismiss state
    private var insetsController: WindowInsetsControllerCompat? = null
    private var animationController: WindowInsetsAnimationControllerCompat? = null
    private var isInteractiveDismissActive = false
    private var isControllerReady = false
    private var touchStartY = 0f
    // Y position of the last raw touch — updated every ACTION_MOVE for velocity/position
    private var lastTouchY = 0f

    // ──────────────────────────────────────────────
    // Public API
    // ──────────────────────────────────────────────

    fun setup(cb: KeyboardStateCallback) {
        val activity = activityRef.get() ?: return
        this.callback = cb

        // DO NOT change softInputMode or setDecorFitsSystemWindows.
        // NativeScript handles keyboard layout via its defaults + androidOverflowEdge.

        insetsController = WindowCompat.getInsetsController(activity.window, activity.window.decorView)

        // Set up smooth animation and interactive dismiss
        setupInsetsAnimation(activity)
        setupInteractiveDismiss()

        // clipToPadding=false allows content to scroll behind the input bar
        scrollViewGroup.clipToPadding = false
        applyScrollViewPadding()
    }

    fun updateAccessoryHeight(newHeightPx: Int) {
        if (abs(accessoryHeightPx - newHeightPx) < 2) return
        accessoryHeightPx = newHeightPx
        applyScrollViewPadding()
    }

    fun dismissKeyboard() {
        insetsController?.hide(WindowInsetsCompat.Type.ime())
    }

    fun showKeyboard() {
        insetsController?.show(WindowInsetsCompat.Type.ime())
    }

    fun cleanup() {
        val activity = activityRef.get()
        if (activity != null) {
            ViewCompat.setWindowInsetsAnimationCallback(activity.window.decorView, null)
        }

        // Reset any lingering translation
        inputContainer.translationY = 0f

        // Remove touch listener
        scrollView.setOnTouchListener(null)

        callback = null
        insetsController = null
        animationController = null
        isControllerReady = false
    }

    // ──────────────────────────────────────────────
    // Deferred transition — smooth keyboard animation
    // ──────────────────────────────────────────────

    private fun setupInsetsAnimation(activity: Activity) {
        val decorView = activity.window.decorView

        ViewCompat.setWindowInsetsAnimationCallback(
            decorView,
            object : WindowInsetsAnimationCompat.Callback(DISPATCH_MODE_CONTINUE_ON_SUBTREE) {

                override fun onPrepare(animation: WindowInsetsAnimationCompat) {
                    // BEFORE layout change: capture current positions
                    inputStartBottom = inputContainer.bottom
                    scrollStartBottom = scrollView.bottom
                }

                override fun onStart(
                    animation: WindowInsetsAnimationCompat,
                    bounds: WindowInsetsAnimationCompat.BoundsCompat
                ): WindowInsetsAnimationCompat.BoundsCompat {
                    // AFTER layout change: NativeScript has repositioned views to final state.
                    // Apply reverse translationY so views APPEAR at their original positions.
                    // onProgress will animate translationY toward 0 (final position).
                    val inputDelta = (inputStartBottom - inputContainer.bottom).toFloat()
                    inputContainer.translationY = inputDelta

                    return bounds
                }

                override fun onProgress(
                    insets: WindowInsetsCompat,
                    runningAnimations: List<WindowInsetsAnimationCompat>
                ): WindowInsetsCompat {
                    val imeAnim = runningAnimations.find {
                        it.typeMask and WindowInsetsCompat.Type.ime() != 0
                    } ?: return insets

                    // During interactive dismiss, hold at start position until controller is ready.
                    // This prevents the input bar from jumping before we can track the finger.
                    val fraction = if (isInteractiveDismissActive && !isControllerReady) {
                        0f
                    } else {
                        imeAnim.interpolatedFraction
                    }

                    // Interpolate: from start position (full delta) toward end position (0)
                    val inputDelta = (inputStartBottom - inputContainer.bottom).toFloat()
                    inputContainer.translationY = inputDelta * (1f - fraction)

                    // Report keyboard height for scroll behavior
                    val imeInsets = insets.getInsets(WindowInsetsCompat.Type.ime())
                    val navInsets = insets.getInsets(WindowInsetsCompat.Type.systemBars())
                    val kbHeight = max(0, imeInsets.bottom - navInsets.bottom)
                    callback?.onKeyboardHeightChanged(kbHeight, true)

                    return insets
                }

                override fun onEnd(animation: WindowInsetsAnimationCompat) {
                    // Animation complete — clear translation, views at final NativeScript positions
                    inputContainer.translationY = 0f

                    val insets = ViewCompat.getRootWindowInsets(decorView) ?: return
                    val imeVisible = insets.isVisible(WindowInsetsCompat.Type.ime())
                    val imeInsets = insets.getInsets(WindowInsetsCompat.Type.ime())
                    val navInsets = insets.getInsets(WindowInsetsCompat.Type.systemBars())

                    val keyboardHeight = if (imeVisible) {
                        max(0, imeInsets.bottom - navInsets.bottom)
                    } else 0

                    val wasVisible = isKeyboardVisible
                    currentKeyboardHeightPx = keyboardHeight
                    isKeyboardVisible = imeVisible

                    callback?.onRelayoutScrollContent()

                    if (imeVisible && !wasVisible) {
                        callback?.onKeyboardFullyShown(keyboardHeight)
                    } else if (!imeVisible && wasVisible) {
                        callback?.onKeyboardFullyHidden()
                    }
                }
            }
        )
    }

    // ──────────────────────────────────────────────
    // ScrollView padding (for scroll-behind effect)
    // ──────────────────────────────────────────────

    private fun applyScrollViewPadding() {
        // Bottom padding = accessory height so content can scroll behind the input bar
        scrollView.setPadding(
            scrollView.paddingLeft,
            scrollView.paddingTop,
            scrollView.paddingRight,
            accessoryHeightPx
        )
    }

    // ──────────────────────────────────────────────
    // Scroll behavior (matches iOS)
    // ──────────────────────────────────────────────

    /**
     * Auto-scroll to bottom when keyboard opens.
     * Called from TypeScript after onKeyboardFullyShown.
     */
    fun scrollToBottom() {
        val contentHeight = getScrollContentHeight()
        val visibleHeight = scrollView.height - scrollView.paddingBottom
        val maxScroll = max(0, contentHeight - visibleHeight)
        if (contentHeight > visibleHeight) {
            scrollView.scrollTo(0, maxScroll)
        }
    }

    /**
     * Clamp scroll position to valid range.
     * Called from TypeScript after onKeyboardFullyHidden.
     */
    fun clampScrollPosition() {
        val contentHeight = getScrollContentHeight()
        val visibleHeight = scrollView.height - scrollView.paddingBottom
        val maxScroll = max(0, contentHeight - visibleHeight)
        val clamped = max(0, Math.min(scrollView.scrollY, maxScroll))
        if (clamped != scrollView.scrollY) {
            scrollView.scrollTo(0, clamped)
        }
    }

    private fun getScrollContentHeight(): Int {
        return if (scrollViewGroup.childCount > 0) scrollViewGroup.getChildAt(0).height else 0
    }

    // ──────────────────────────────────────────────
    // Interactive swipe-to-dismiss
    //
    // Flow:
    // 1. ACTION_DOWN on scroll view → record start Y
    // 2. ACTION_MOVE with keyboard visible + downward drag > threshold at scroll bottom
    //    → request animation control via controlWindowInsetsAnimation()
    // 3. onReady → anchor keyboard at shown position (prevents snap), mark ready
    // 4. ACTION_MOVE with controller ready → setInsetsAndAlpha to track finger
    // 5. ACTION_UP → finish(false) to dismiss or finish(true) to snap back
    //
    // The deferred transition callback (onPrepare/onStart/onProgress/onEnd) handles
    // the input bar positioning automatically during the controlled animation.
    // ──────────────────────────────────────────────

    private fun setupInteractiveDismiss() {
        scrollView.setOnTouchListener(object : View.OnTouchListener {
            override fun onTouch(v: View, event: MotionEvent): Boolean {
                when (event.actionMasked) {
                    MotionEvent.ACTION_DOWN -> {
                        touchStartY = event.rawY
                        lastTouchY = event.rawY
                    }
                    MotionEvent.ACTION_MOVE -> {
                        lastTouchY = event.rawY

                        if (!isInteractiveDismissActive && isKeyboardVisible) {
                            val deltaY = event.rawY - touchStartY
                            // Only start interactive dismiss when:
                            // 1. User is swiping down (deltaY > 0)
                            // 2. Significant enough movement (> 20px)
                            // 3. ScrollView is at or near bottom
                            if (deltaY > 20 && isScrolledNearBottom()) {
                                startInteractiveDismiss()
                            }
                        }

                        if (isInteractiveDismissActive) {
                            if (isControllerReady) {
                                // Controller ready — track the finger
                                val deltaY = event.rawY - touchStartY
                                updateInteractiveDismiss(deltaY)
                            }
                            // Consume touch whether controller is ready or not,
                            // so ScrollView doesn't interfere with the gesture
                            return true
                        }
                    }
                    MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
                        if (isInteractiveDismissActive) {
                            val deltaY = event.rawY - touchStartY
                            finishInteractiveDismiss(deltaY)
                            return true
                        }
                    }
                }
                return false // Let ScrollView handle its own touches
            }
        })
    }

    private fun isScrolledNearBottom(): Boolean {
        val contentHeight = getScrollContentHeight()
        val visibleHeight = scrollView.height - scrollView.paddingBottom
        val maxScroll = max(0, contentHeight - visibleHeight)
        return (maxScroll < 10) || (maxScroll - scrollView.scrollY < 50)
    }

    private fun startInteractiveDismiss() {
        val activity = activityRef.get() ?: return
        isInteractiveDismissActive = true
        isControllerReady = false

        val controller = WindowCompat.getInsetsController(activity.window, activity.window.decorView)
        controller.controlWindowInsetsAnimation(
            WindowInsetsCompat.Type.ime(),
            -1, // no duration limit — we drive the animation
            LinearInterpolator(),
            null,
            object : WindowInsetsAnimationControlListenerCompat {
                override fun onReady(
                    ctrl: WindowInsetsAnimationControllerCompat,
                    types: Int
                ) {
                    animationController = ctrl
                    isControllerReady = true

                    // Anchor keyboard at shown position immediately.
                    // This prevents the keyboard from snapping to hidden
                    // during the gap between requesting control and getting it.
                    ctrl.setInsetsAndAlpha(ctrl.shownStateInsets, 1f, 0f)
                }

                override fun onFinished(ctrl: WindowInsetsAnimationControllerCompat) {
                    animationController = null
                    isInteractiveDismissActive = false
                    isControllerReady = false
                }

                override fun onCancelled(ctrl: WindowInsetsAnimationControllerCompat?) {
                    animationController = null
                    isInteractiveDismissActive = false
                    isControllerReady = false
                }
            }
        )
    }

    private fun updateInteractiveDismiss(deltaY: Float) {
        val ctrl = animationController ?: return

        val shownInsets = ctrl.shownStateInsets
        val hiddenInsets = ctrl.hiddenStateInsets
        val totalRange = shownInsets.bottom - hiddenInsets.bottom

        if (totalRange <= 0) return

        // Map finger delta to keyboard position.
        // deltaY > 0 = finger moved down → keyboard should move down (fraction increases)
        val fraction = (deltaY / totalRange).coerceIn(0f, 1f)
        val currentBottom = (shownInsets.bottom - (totalRange * fraction)).toInt()
            .coerceIn(hiddenInsets.bottom, shownInsets.bottom)

        ctrl.setInsetsAndAlpha(
            Insets.of(0, 0, 0, currentBottom),
            1f,
            fraction
        )
    }

    private fun finishInteractiveDismiss(deltaY: Float) {
        val ctrl = animationController ?: run {
            isInteractiveDismissActive = false
            isControllerReady = false
            return
        }

        val shownInsets = ctrl.shownStateInsets
        val hiddenInsets = ctrl.hiddenStateInsets
        val totalRange = shownInsets.bottom - hiddenInsets.bottom

        if (totalRange <= 0) {
            ctrl.finish(true) // show keyboard
            return
        }

        val fraction = (deltaY / totalRange).coerceIn(0f, 1f)

        // If user dragged more than 30% of keyboard height, dismiss; otherwise snap back
        if (fraction > 0.3f) {
            ctrl.finish(false) // hide keyboard
        } else {
            ctrl.finish(true) // snap back (show keyboard)
        }
    }
}
