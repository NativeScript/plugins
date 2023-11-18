import { Screen, View, CoreTypes, Page, TabView, Utils, Frame } from '@nativescript/core';
import { ToolbarBase } from './common';

export class Toolbar extends ToolbarBase {
	private startPositionY: number;
	private lastHeight: number;
	private navbarHeight: number;
	private navbarHeightWhenKeyboardOpen: number;
	private isNavbarVisible: boolean;
	private lastKeyboardHeight: number;
	private onGlobalLayoutListener: android.view.ViewTreeObserver.OnGlobalLayoutListener;
	private thePage: any;
	private static supportVirtualKeyboardCheck;

	// private onScrollChangedListener: android.view.ViewTreeObserver.OnScrollChangedListener;

	constructor() {
		super();
		this.verticalAlignment = CoreTypes.VerticalAlignment.top;
	}

	protected _loaded(): void {
		setTimeout(() => this.applyInitialPosition(), 300);

		setTimeout(() => {
			const prepFocusEvents = (forView) => {
				forView.on('focus', () => {
					this.hasFocus = true;
					if (that.lastKeyboardHeight) {
						this.showToolbar(<View>this.content.parent);
					}
				});

				forView.on('blur', () => {
					this.hasFocus = false;
					this.hideToolbar(<View>this.content.parent);
				});
			};

			let pg;
			if (Frame.topmost()) {
				pg = Frame.topmost().currentPage;
			} else {
				pg = this.content.parent;
				while (pg && !(pg instanceof Page)) {
					pg = pg.parent;
				}
			}
			this.thePage = pg;
			const forView = <View>this.thePage.getViewById(this.forId);

			if (forView) {
				prepFocusEvents(forView);
				return;
			}

			// let's see if we're inside a tabview, because of https://github.com/EddyVerbruggen/nativescript-keyboard-toolbar/issues/7
			let p = this.thePage.parent;
			while (p && !(p instanceof TabView)) {
				p = p.parent;
			}

			if (p instanceof TabView) {
				p.on(TabView.selectedIndexChangedEvent, () => {
					let forView2 = p.getViewById(this.forId);
					if (forView2) {
						prepFocusEvents(forView2);
						p.off(TabView.selectedIndexChangedEvent);
					}
				});
			} else {
				console.log(`\n⌨ ⌨ ⌨ Please make sure forId="<view id>" resolves to a visible view, or the toolbar won't render correctly! Example: <Toolbar forId="${this.forId || 'myId'}" height="44">\n\n`);
			}
		}, 500);

		const that = this;

		this.onGlobalLayoutListener = new android.view.ViewTreeObserver.OnGlobalLayoutListener({
			onGlobalLayout(): void {
				// this can happen during livesync - no problemo
				if (!that.content.android) {
					return;
				}

				const rect = new android.graphics.Rect();
				that.content.android.getWindowVisibleDisplayFrame(rect);

				const newKeyboardHeight = (Toolbar.getUsableScreenSizeY() - rect.bottom) / Screen.mainScreen.scale;
				if (newKeyboardHeight <= 0 && that.lastKeyboardHeight === undefined) {
					return;
				}

				if (newKeyboardHeight === that.lastKeyboardHeight) {
					return;
				}

				// TODO see if orientation needs to be accounted for: https://github.com/siebeprojects/samples-keyboardheight/blob/c6f8aded59447748266515afeb9c54cf8e666610/app/src/main/java/com/siebeprojects/samples/keyboardheight/KeyboardHeightProvider.java#L163
				that.lastKeyboardHeight = newKeyboardHeight;

				if (that.hasFocus) {
					if (newKeyboardHeight <= 0) {
						that.hideToolbar(that.content.parent);
					} else {
						that.showToolbar(that.content.parent);
					}
				}
			},
		});

		that.content.android.getViewTreeObserver().addOnGlobalLayoutListener(that.onGlobalLayoutListener);
		// that.content.android.getViewTreeObserver().addOnScrollChangedListener(that.onScrollChangedListener);
	}

	protected _unloaded(): void {
		this.content.android.getViewTreeObserver().removeOnGlobalLayoutListener(this.onGlobalLayoutListener);
		// this.content.android.getViewTreeObserver().removeOnScrollChangedListener(this.onScrollChangedListener);
		this.onGlobalLayoutListener = undefined;
		// this.onScrollChangedListener = undefined;
	}

	private showToolbar(parent): void {
		let navbarHeight = this.isNavbarVisible ? 0 : this.navbarHeight;

		// some devices (Samsung S8) with a hidden virtual navbar show the navbar when the keyboard is open, so subtract its height
		if (!this.isNavbarVisible) {
			const isNavbarVisibleWhenKeyboardOpen = this.thePage.getMeasuredHeight() < Toolbar.getUsableScreenSizeY() && (Toolbar.isVirtualNavbarHidden_butShowsWhenKeyboardIsOpen() || Toolbar.hasPermanentMenuKey());
			if (isNavbarVisibleWhenKeyboardOpen) {
				// caching for (very minor) performance reasons
				if (!this.navbarHeightWhenKeyboardOpen) {
					this.navbarHeightWhenKeyboardOpen = Toolbar.getNavbarHeightWhenKeyboardOpen();
				}
				navbarHeight = this.navbarHeightWhenKeyboardOpen;
			}
		}

		const animateToY = this.startPositionY - this.lastKeyboardHeight - (this.showWhenKeyboardHidden === true ? 0 : this.lastHeight / Screen.mainScreen.scale) - navbarHeight;

		parent
			.animate({
				translate: { x: 0, y: animateToY },
				curve: CoreTypes.AnimationCurve.cubicBezier(0.32, 0.49, 0.56, 1),
				duration: 370,
			})
			.then(() => {});
	}

	private hideToolbar(parent): void {
		const animateToY = this.showWhenKeyboardHidden === true && this.showAtBottomWhenKeyboardHidden !== true ? 0 : this.startPositionY + this.navbarHeight;
		// console.log("hideToolbar, animateToY: " + animateToY);
		parent
			.animate({
				translate: { x: 0, y: animateToY },
				curve: CoreTypes.AnimationCurve.cubicBezier(0.32, 0.49, 0.56, 1), // perhaps make this one a little different as it's the same as the 'show' animation
				duration: 370,
			})
			.then(() => {});
	}

	private applyInitialPosition(): void {
		if (this.startPositionY !== undefined) {
			return;
		}

		const parent = <View>this.content.parent;

		// at this point, topmost().currentPage is null, so do it like this:
		this.thePage = parent;
		while (!this.thePage && !this.thePage.frame) {
			this.thePage = this.thePage.parent;
		}

		const loc = parent.getLocationOnScreen();
		if (!loc) {
			return;
		}
		const y = loc.y;
		const newHeight = parent.getMeasuredHeight();

		// this is the bottom navbar - which may be hidden by the user.. so figure out its actual height
		this.navbarHeight = Toolbar.getNavbarHeight();
		this.isNavbarVisible = !!this.navbarHeight;

		this.startPositionY = Screen.mainScreen.heightDIPs - y - (this.showWhenKeyboardHidden === true ? newHeight : 0) / Screen.mainScreen.scale - (this.isNavbarVisible ? this.navbarHeight : 0);

		if (this.lastHeight === undefined) {
			// this moves the keyboardview to the bottom (just move it offscreen/toggle visibility(?) if the user doesn't want to show it without the keyboard being up)
			if (this.showWhenKeyboardHidden === true) {
				if (this.showAtBottomWhenKeyboardHidden === true) {
					parent.translateY = this.startPositionY;
				}
			} else {
				parent.translateY = this.startPositionY + this.navbarHeight;
			}
		} else if (this.lastHeight !== newHeight) {
			parent.translateY = this.startPositionY + this.navbarHeight;
		}
		this.lastHeight = newHeight;
	}

	private static getNavbarHeight() {
		// detect correct height from: https://shiv19.com/how-to-get-android-navbar-height-nativescript-vanilla/
		const context = Utils.android.getApplicationContext();
		let navBarHeight = 0;
		let windowManager = context.getSystemService(android.content.Context.WINDOW_SERVICE);
		let d = windowManager.getDefaultDisplay();

		let realDisplayMetrics = new android.util.DisplayMetrics();
		d.getRealMetrics(realDisplayMetrics);

		let realHeight = realDisplayMetrics.heightPixels;
		let realWidth = realDisplayMetrics.widthPixels;

		let displayMetrics = new android.util.DisplayMetrics();
		d.getMetrics(displayMetrics);

		let displayHeight = displayMetrics.heightPixels;
		let displayWidth = displayMetrics.widthPixels;

		if (realHeight - displayHeight > 0) {
			// Portrait
			navBarHeight = realHeight - displayHeight;
		} else if (realWidth - displayWidth > 0) {
			// Landscape
			navBarHeight = realWidth - displayWidth;
		}

		// Convert to device independent pixels and return
		return navBarHeight / context.getResources().getDisplayMetrics().density;
	}

	private static getNavbarHeightWhenKeyboardOpen() {
		const resources = Utils.android.getApplicationContext().getResources();
		const resourceId = resources.getIdentifier('navigation_bar_height', 'dimen', 'android');
		if (resourceId > 0) {
			return resources.getDimensionPixelSize(resourceId) / Screen.mainScreen.scale;
		}
		return 0;
	}

	private static hasPermanentMenuKey() {
		const permMenuKey = (Utils.android.getApplicationContext() as any).hasPermanentMenuKey;
		if (permMenuKey) {
			return android.view.ViewConfiguration.get(permMenuKey);
		}
		return null;
	}

	private static isVirtualNavbarHidden_butShowsWhenKeyboardIsOpen(): boolean {
		if (Toolbar.supportVirtualKeyboardCheck !== undefined) {
			return Toolbar.supportVirtualKeyboardCheck;
		}
		const SAMSUNG_NAVIGATION_EVENT = 'navigationbar_hide_bar_enabled';
		try {
			// eventId is 1 in case the virtual navbar is hidden (but it shows when the keyboard opens)
			Toolbar.supportVirtualKeyboardCheck = android.provider.Settings.Global.getInt(Utils.android.getCurrentActivity().getContentResolver(), SAMSUNG_NAVIGATION_EVENT) === 1;
		} catch (e) {
			// non-Samsung devices throw a 'SettingNotFoundException'
			console.log('>> e: ' + e);
			Toolbar.supportVirtualKeyboardCheck = false;
		}
		return Toolbar.supportVirtualKeyboardCheck;
	}

	private static getUsableScreenSizeY(): number {
		const screenSize = new android.graphics.Point();
		Utils.android.getCurrentActivity().getWindowManager().getDefaultDisplay().getSize(screenSize);
		return screenSize.y;
	}
}
