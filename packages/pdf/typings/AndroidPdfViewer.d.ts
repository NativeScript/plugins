declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class AnimationManager {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager>;
					public startXAnimation(param0: number, param1: number): void;
					public stopFling(): void;
					public constructor(param0: com.github.barteksc.pdfviewer.PDFView);
					public startFlingAnimation(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
					public startZoomAnimation(param0: number, param1: number, param2: number, param3: number): void;
					public isFlinging(): boolean;
					public startYAnimation(param0: number, param1: number): void;
					public startPageFlingAnimation(param0: number): void;
					public stopAll(): void;
				}
				export module AnimationManager {
					export class XAnimation {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.XAnimation>;
						public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					}
					export class YAnimation {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.YAnimation>;
						public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
					}
					export class ZoomAnimation {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.AnimationManager.ZoomAnimation>;
						public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						public onAnimationRepeat(param0: globalAndroid.animation.Animator): void;
						public onAnimationUpdate(param0: globalAndroid.animation.ValueAnimator): void;
						public onAnimationCancel(param0: globalAndroid.animation.Animator): void;
						public onAnimationStart(param0: globalAndroid.animation.Animator): void;
						public constructor(param0: com.github.barteksc.pdfviewer.AnimationManager, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class CacheManager {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.CacheManager>;
					public upPartIfContained(param0: number, param1: globalAndroid.graphics.RectF, param2: number): boolean;
					public getPageParts(): java.util.List<com.github.barteksc.pdfviewer.model.PagePart>;
					public recycle(): void;
					public constructor();
					public cachePart(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
					public cacheThumbnail(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
					public makeANewSet(): void;
					public containsThumbnail(param0: number, param1: globalAndroid.graphics.RectF): boolean;
					public getThumbnails(): java.util.List<com.github.barteksc.pdfviewer.model.PagePart>;
				}
				export module CacheManager {
					export class PagePartComparator extends java.util.Comparator<com.github.barteksc.pdfviewer.model.PagePart> {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.CacheManager.PagePartComparator>;
						public compare(param0: com.github.barteksc.pdfviewer.model.PagePart, param1: com.github.barteksc.pdfviewer.model.PagePart): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class DecodingTask {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.DecodingTask>;
					public decodeIntoView(param0: com.github.barteksc.pdfviewer.PDFView): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class DragPinchManager {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.DragPinchManager>;
					public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
					public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
					public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public onLongPress(param0: globalAndroid.view.MotionEvent): void;
					public onSingleTapUp(param0: globalAndroid.view.MotionEvent): boolean;
					public onScroll(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					public onDown(param0: globalAndroid.view.MotionEvent): boolean;
					public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
					public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
					public onShowPress(param0: globalAndroid.view.MotionEvent): void;
					public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class PDFView {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView>;
					public static DEFAULT_MAX_SCALE: number;
					public static DEFAULT_MID_SCALE: number;
					public static DEFAULT_MIN_SCALE: number;
					public toRealScale(param0: number): number;
					public getDocumentMeta(): com.shockwave.pdfium.PdfDocument.Meta;
					public getPageSize(param0: number): com.shockwave.pdfium.util.SizeF;
					public isFitEachPage(): boolean;
					public recycle(): void;
					public getTableOfContents(): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
					public isZooming(): boolean;
					public moveRelativeTo(param0: number, param1: number): void;
					public fromUri(param0: globalAndroid.net.Uri): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public zoomWithAnimation(param0: number): void;
					public getPageFitPolicy(): com.github.barteksc.pdfviewer.util.FitPolicy;
					public getMaxZoom(): number;
					public doRenderDuringScale(): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public jumpTo(param0: number): void;
					public isAnnotationRendering(): boolean;
					public zoomWithAnimation(param0: number, param1: number, param2: number): void;
					public zoomCenteredRelativeTo(param0: number, param1: globalAndroid.graphics.PointF): void;
					public enableRenderDuringScale(param0: boolean): void;
					public isBestQuality(): boolean;
					public setPageSnap(param0: boolean): void;
					public jumpTo(param0: number, param1: boolean): void;
					public performPageSnap(): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public enableAnnotationRendering(param0: boolean): void;
					public fromAsset(param0: string): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public setNightMode(param0: boolean): void;
					public onBitmapRendered(param0: com.github.barteksc.pdfviewer.model.PagePart): void;
					public computeScroll(): void;
					public getCurrentPage(): number;
					public setSwipeEnabled(param0: boolean): void;
					public canScrollVertically(param0: number): boolean;
					public isPageFlingEnabled(): boolean;
					public getCurrentYOffset(): number;
					public getMinZoom(): number;
					public fromFile(param0: java.io.File): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public documentFitsView(): boolean;
					public isSwipeVertical(): boolean;
					public getMidZoom(): number;
					public setPositionOffset(param0: number, param1: boolean): void;
					public isSwipeEnabled(): boolean;
					public setMinZoom(param0: number): void;
					public useBestQuality(param0: boolean): void;
					public isAutoSpacingEnabled(): boolean;
					public getCurrentXOffset(): number;
					public zoomCenteredTo(param0: number, param1: globalAndroid.graphics.PointF): void;
					public setMaxZoom(param0: number): void;
					public fitToWidth(param0: number): void;
					public setPositionOffset(param0: number): void;
					public setPageFling(param0: boolean): void;
					public getLinks(param0: number): java.util.List<com.shockwave.pdfium.PdfDocument.Link>;
					public getZoom(): number;
					public fromBytes(param0: androidNative.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public pageFillsScreen(): boolean;
					public isPageSnap(): boolean;
					public onDetachedFromWindow(): void;
					public moveTo(param0: number, param1: number): void;
					public moveTo(param0: number, param1: number, param2: boolean): void;
					public getPageAtPositionOffset(param0: number): number;
					public fromStream(param0: java.io.InputStream): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public setMidZoom(param0: number): void;
					public resetZoom(): void;
					public canScrollHorizontally(param0: number): boolean;
					public zoomTo(param0: number): void;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public getPositionOffset(): number;
					public getPageCount(): number;
					public constructor(param0: globalAndroid.content.Context);
					public loadPages(): void;
					public stopFling(): void;
					public fromSource(param0: com.github.barteksc.pdfviewer.source.DocumentSource): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public enableAntialiasing(param0: boolean): void;
					public isRecycled(): boolean;
					public toCurrentScale(param0: number): number;
					public isAntialiasing(): boolean;
					public resetZoomWithAnimation(): void;
					public getSpacingPx(): number;
				}
				export module PDFView {
					export class Configurator {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.Configurator>;
						public onPageChange(param0: com.github.barteksc.pdfviewer.listener.OnPageChangeListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableAnnotationRendering(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public nightMode(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public spacing(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public fitEachPage(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pageSnap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableAntialiasing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pages(param0: androidNative.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public load(): void;
						public disableLongpress(): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public linkHandler(param0: com.github.barteksc.pdfviewer.link.LinkHandler): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableSwipe(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public defaultPage(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public scrollHandle(param0: com.github.barteksc.pdfviewer.scroll.ScrollHandle): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onRender(param0: com.github.barteksc.pdfviewer.listener.OnRenderListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public swipeHorizontal(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableDoubletap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public password(param0: string): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onPageError(param0: com.github.barteksc.pdfviewer.listener.OnPageErrorListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onDrawAll(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onLongPress(param0: com.github.barteksc.pdfviewer.listener.OnLongPressListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onError(param0: com.github.barteksc.pdfviewer.listener.OnErrorListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onLoad(param0: com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onTap(param0: com.github.barteksc.pdfviewer.listener.OnTapListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public autoSpacing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pageFling(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onDraw(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onPageScroll(param0: com.github.barteksc.pdfviewer.listener.OnPageScrollListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pageFitPolicy(param0: com.github.barteksc.pdfviewer.util.FitPolicy): com.github.barteksc.pdfviewer.PDFView.Configurator;
					}
					export class ScrollDir {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
						public static NONE: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static START: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static END: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static values(): androidNative.Array<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.ScrollDir;
					}
					export class State {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.State>;
						public static DEFAULT: com.github.barteksc.pdfviewer.PDFView.State;
						public static LOADED: com.github.barteksc.pdfviewer.PDFView.State;
						public static SHOWN: com.github.barteksc.pdfviewer.PDFView.State;
						public static ERROR: com.github.barteksc.pdfviewer.PDFView.State;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.State;
						public static values(): androidNative.Array<com.github.barteksc.pdfviewer.PDFView.State>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class PagesLoader {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader>;
				}
				export module PagesLoader {
					export class GridSize {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.GridSize>;
						public toString(): string;
					}
					export class Holder {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.Holder>;
						public toString(): string;
					}
					export class RenderRange {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PagesLoader.RenderRange>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class PdfFile {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.PdfFile>;
					public getDocLen(param0: number): number;
					public getPageSize(param0: number): com.shockwave.pdfium.util.SizeF;
					public getPageSpacing(param0: number, param1: number): number;
					public determineValidPageNumberFrom(param0: number): number;
					public pageHasError(param0: number): boolean;
					public dispose(): void;
					public getBookmarks(): java.util.List<com.shockwave.pdfium.PdfDocument.Bookmark>;
					public documentPage(param0: number): number;
					public getPageLength(param0: number, param1: number): number;
					public getMaxPageSize(): com.shockwave.pdfium.util.SizeF;
					public getScaledPageSize(param0: number, param1: number): com.shockwave.pdfium.util.SizeF;
					public mapRectToDevice(param0: number, param1: number, param2: number, param3: number, param4: number, param5: globalAndroid.graphics.RectF): globalAndroid.graphics.RectF;
					public getMaxPageWidth(): number;
					public getMetaData(): com.shockwave.pdfium.PdfDocument.Meta;
					public getPageOffset(param0: number, param1: number): number;
					public getSecondaryPageOffset(param0: number, param1: number): number;
					public getMaxPageHeight(): number;
					public getPageAtOffset(param0: number, param1: number): number;
					public getPagesCount(): number;
					public renderPageBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: globalAndroid.graphics.Rect, param3: boolean): void;
					public getPageLinks(param0: number): java.util.List<com.shockwave.pdfium.PdfDocument.Link>;
					public recalculatePageSizes(param0: com.shockwave.pdfium.util.Size): void;
					public openPage(param0: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class R {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.R>;
				}
				export module R {
					export class anim {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.anim>;
						public static abc_fade_in: number;
						public static abc_fade_out: number;
						public static abc_grow_fade_in_from_bottom: number;
						public static abc_popup_enter: number;
						public static abc_popup_exit: number;
						public static abc_shrink_fade_out_from_bottom: number;
						public static abc_slide_in_bottom: number;
						public static abc_slide_in_top: number;
						public static abc_slide_out_bottom: number;
						public static abc_slide_out_top: number;
						public static abc_tooltip_enter: number;
						public static abc_tooltip_exit: number;
						public static btn_checkbox_to_checked_box_inner_merged_animation: number;
						public static btn_checkbox_to_checked_box_outer_merged_animation: number;
						public static btn_checkbox_to_checked_icon_null_animation: number;
						public static btn_checkbox_to_unchecked_box_inner_merged_animation: number;
						public static btn_checkbox_to_unchecked_check_path_merged_animation: number;
						public static btn_checkbox_to_unchecked_icon_null_animation: number;
						public static btn_radio_to_off_mtrl_dot_group_animation: number;
						public static btn_radio_to_off_mtrl_ring_outer_animation: number;
						public static btn_radio_to_off_mtrl_ring_outer_path_animation: number;
						public static btn_radio_to_on_mtrl_dot_group_animation: number;
						public static btn_radio_to_on_mtrl_ring_outer_animation: number;
						public static btn_radio_to_on_mtrl_ring_outer_path_animation: number;
						public static fragment_fast_out_extra_slow_in: number;
					}
					export class animator {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.animator>;
						public static fragment_close_enter: number;
						public static fragment_close_exit: number;
						public static fragment_fade_enter: number;
						public static fragment_fade_exit: number;
						public static fragment_open_enter: number;
						public static fragment_open_exit: number;
					}
					export class attr {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.attr>;
						public static actionBarDivider: number;
						public static actionBarItemBackground: number;
						public static actionBarPopupTheme: number;
						public static actionBarSize: number;
						public static actionBarSplitStyle: number;
						public static actionBarStyle: number;
						public static actionBarTabBarStyle: number;
						public static actionBarTabStyle: number;
						public static actionBarTabTextStyle: number;
						public static actionBarTheme: number;
						public static actionBarWidgetTheme: number;
						public static actionButtonStyle: number;
						public static actionDropDownStyle: number;
						public static actionLayout: number;
						public static actionMenuTextAppearance: number;
						public static actionMenuTextColor: number;
						public static actionModeBackground: number;
						public static actionModeCloseButtonStyle: number;
						public static actionModeCloseContentDescription: number;
						public static actionModeCloseDrawable: number;
						public static actionModeCopyDrawable: number;
						public static actionModeCutDrawable: number;
						public static actionModeFindDrawable: number;
						public static actionModePasteDrawable: number;
						public static actionModePopupWindowStyle: number;
						public static actionModeSelectAllDrawable: number;
						public static actionModeShareDrawable: number;
						public static actionModeSplitBackground: number;
						public static actionModeStyle: number;
						public static actionModeTheme: number;
						public static actionModeWebSearchDrawable: number;
						public static actionOverflowButtonStyle: number;
						public static actionOverflowMenuStyle: number;
						public static actionProviderClass: number;
						public static actionViewClass: number;
						public static activityChooserViewStyle: number;
						public static alertDialogButtonGroupStyle: number;
						public static alertDialogCenterButtons: number;
						public static alertDialogStyle: number;
						public static alertDialogTheme: number;
						public static allowStacking: number;
						public static alpha: number;
						public static alphabeticModifiers: number;
						public static arrowHeadLength: number;
						public static arrowShaftLength: number;
						public static autoCompleteTextViewStyle: number;
						public static autoSizeMaxTextSize: number;
						public static autoSizeMinTextSize: number;
						public static autoSizePresetSizes: number;
						public static autoSizeStepGranularity: number;
						public static autoSizeTextType: number;
						public static background: number;
						public static backgroundSplit: number;
						public static backgroundStacked: number;
						public static backgroundTint: number;
						public static backgroundTintMode: number;
						public static barLength: number;
						public static borderlessButtonStyle: number;
						public static buttonBarButtonStyle: number;
						public static buttonBarNegativeButtonStyle: number;
						public static buttonBarNeutralButtonStyle: number;
						public static buttonBarPositiveButtonStyle: number;
						public static buttonBarStyle: number;
						public static buttonCompat: number;
						public static buttonGravity: number;
						public static buttonIconDimen: number;
						public static buttonPanelSideLayout: number;
						public static buttonStyle: number;
						public static buttonStyleSmall: number;
						public static buttonTint: number;
						public static buttonTintMode: number;
						public static checkMarkCompat: number;
						public static checkMarkTint: number;
						public static checkMarkTintMode: number;
						public static checkboxStyle: number;
						public static checkedTextViewStyle: number;
						public static closeIcon: number;
						public static closeItemLayout: number;
						public static collapseContentDescription: number;
						public static collapseIcon: number;
						public static color: number;
						public static colorAccent: number;
						public static colorBackgroundFloating: number;
						public static colorButtonNormal: number;
						public static colorControlActivated: number;
						public static colorControlHighlight: number;
						public static colorControlNormal: number;
						public static colorError: number;
						public static colorPrimary: number;
						public static colorPrimaryDark: number;
						public static colorSwitchThumbNormal: number;
						public static commitIcon: number;
						public static contentDescription: number;
						public static contentInsetEnd: number;
						public static contentInsetEndWithActions: number;
						public static contentInsetLeft: number;
						public static contentInsetRight: number;
						public static contentInsetStart: number;
						public static contentInsetStartWithNavigation: number;
						public static controlBackground: number;
						public static customNavigationLayout: number;
						public static defaultQueryHint: number;
						public static dialogCornerRadius: number;
						public static dialogPreferredPadding: number;
						public static dialogTheme: number;
						public static displayOptions: number;
						public static divider: number;
						public static dividerHorizontal: number;
						public static dividerPadding: number;
						public static dividerVertical: number;
						public static drawableBottomCompat: number;
						public static drawableEndCompat: number;
						public static drawableLeftCompat: number;
						public static drawableRightCompat: number;
						public static drawableSize: number;
						public static drawableStartCompat: number;
						public static drawableTint: number;
						public static drawableTintMode: number;
						public static drawableTopCompat: number;
						public static drawerArrowStyle: number;
						public static dropDownListViewStyle: number;
						public static dropdownListPreferredItemHeight: number;
						public static editTextBackground: number;
						public static editTextColor: number;
						public static editTextStyle: number;
						public static elevation: number;
						public static emojiCompatEnabled: number;
						public static expandActivityOverflowButtonDrawable: number;
						public static firstBaselineToTopHeight: number;
						public static font: number;
						public static fontFamily: number;
						public static fontProviderAuthority: number;
						public static fontProviderCerts: number;
						public static fontProviderFetchStrategy: number;
						public static fontProviderFetchTimeout: number;
						public static fontProviderPackage: number;
						public static fontProviderQuery: number;
						public static fontProviderSystemFontFamily: number;
						public static fontStyle: number;
						public static fontVariationSettings: number;
						public static fontWeight: number;
						public static gapBetweenBars: number;
						public static goIcon: number;
						public static height: number;
						public static hideOnContentScroll: number;
						public static homeAsUpIndicator: number;
						public static homeLayout: number;
						public static icon: number;
						public static iconTint: number;
						public static iconTintMode: number;
						public static iconifiedByDefault: number;
						public static imageButtonStyle: number;
						public static indeterminateProgressStyle: number;
						public static initialActivityCount: number;
						public static isLightTheme: number;
						public static itemPadding: number;
						public static lStar: number;
						public static lastBaselineToBottomHeight: number;
						public static layout: number;
						public static lineHeight: number;
						public static listChoiceBackgroundIndicator: number;
						public static listChoiceIndicatorMultipleAnimated: number;
						public static listChoiceIndicatorSingleAnimated: number;
						public static listDividerAlertDialog: number;
						public static listItemLayout: number;
						public static listLayout: number;
						public static listMenuViewStyle: number;
						public static listPopupWindowStyle: number;
						public static listPreferredItemHeight: number;
						public static listPreferredItemHeightLarge: number;
						public static listPreferredItemHeightSmall: number;
						public static listPreferredItemPaddingEnd: number;
						public static listPreferredItemPaddingLeft: number;
						public static listPreferredItemPaddingRight: number;
						public static listPreferredItemPaddingStart: number;
						public static logo: number;
						public static logoDescription: number;
						public static maxButtonHeight: number;
						public static measureWithLargestChild: number;
						public static menu: number;
						public static multiChoiceItemLayout: number;
						public static navigationContentDescription: number;
						public static navigationIcon: number;
						public static navigationMode: number;
						public static nestedScrollViewStyle: number;
						public static numericModifiers: number;
						public static overlapAnchor: number;
						public static paddingBottomNoButtons: number;
						public static paddingEnd: number;
						public static paddingStart: number;
						public static paddingTopNoTitle: number;
						public static panelBackground: number;
						public static panelMenuListTheme: number;
						public static panelMenuListWidth: number;
						public static popupMenuStyle: number;
						public static popupTheme: number;
						public static popupWindowStyle: number;
						public static preserveIconSpacing: number;
						public static progressBarPadding: number;
						public static progressBarStyle: number;
						public static queryBackground: number;
						public static queryHint: number;
						public static queryPatterns: number;
						public static radioButtonStyle: number;
						public static ratingBarStyle: number;
						public static ratingBarStyleIndicator: number;
						public static ratingBarStyleSmall: number;
						public static sb_handlerColor: number;
						public static sb_horizontal: number;
						public static sb_indicatorColor: number;
						public static sb_indicatorTextColor: number;
						public static searchHintIcon: number;
						public static searchIcon: number;
						public static searchViewStyle: number;
						public static seekBarStyle: number;
						public static selectableItemBackground: number;
						public static selectableItemBackgroundBorderless: number;
						public static shortcutMatchRequired: number;
						public static showAsAction: number;
						public static showDividers: number;
						public static showText: number;
						public static showTitle: number;
						public static singleChoiceItemLayout: number;
						public static spinBars: number;
						public static spinnerDropDownItemStyle: number;
						public static spinnerStyle: number;
						public static splitTrack: number;
						public static srcCompat: number;
						public static state_above_anchor: number;
						public static subMenuArrow: number;
						public static submitBackground: number;
						public static subtitle: number;
						public static subtitleTextAppearance: number;
						public static subtitleTextColor: number;
						public static subtitleTextStyle: number;
						public static suggestionRowLayout: number;
						public static switchMinWidth: number;
						public static switchPadding: number;
						public static switchStyle: number;
						public static switchTextAppearance: number;
						public static textAllCaps: number;
						public static textAppearanceLargePopupMenu: number;
						public static textAppearanceListItem: number;
						public static textAppearanceListItemSecondary: number;
						public static textAppearanceListItemSmall: number;
						public static textAppearancePopupMenuHeader: number;
						public static textAppearanceSearchResultSubtitle: number;
						public static textAppearanceSearchResultTitle: number;
						public static textAppearanceSmallPopupMenu: number;
						public static textColorAlertDialogListItem: number;
						public static textColorSearchUrl: number;
						public static textLocale: number;
						public static theme: number;
						public static thickness: number;
						public static thumbTextPadding: number;
						public static thumbTint: number;
						public static thumbTintMode: number;
						public static tickMark: number;
						public static tickMarkTint: number;
						public static tickMarkTintMode: number;
						public static tint: number;
						public static tintMode: number;
						public static title: number;
						public static titleMargin: number;
						public static titleMarginBottom: number;
						public static titleMarginEnd: number;
						public static titleMarginStart: number;
						public static titleMarginTop: number;
						public static titleMargins: number;
						public static titleTextAppearance: number;
						public static titleTextColor: number;
						public static titleTextStyle: number;
						public static toolbarNavigationButtonStyle: number;
						public static toolbarStyle: number;
						public static tooltipForegroundColor: number;
						public static tooltipFrameBackground: number;
						public static tooltipText: number;
						public static track: number;
						public static trackTint: number;
						public static trackTintMode: number;
						public static ttcIndex: number;
						public static viewInflaterClass: number;
						public static voiceIcon: number;
						public static windowActionBar: number;
						public static windowActionBarOverlay: number;
						public static windowActionModeOverlay: number;
						public static windowFixedHeightMajor: number;
						public static windowFixedHeightMinor: number;
						public static windowFixedWidthMajor: number;
						public static windowFixedWidthMinor: number;
						public static windowMinWidthMajor: number;
						public static windowMinWidthMinor: number;
						public static windowNoTitle: number;
					}
					export class bool {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.bool>;
						public static abc_action_bar_embed_tabs: number;
						public static abc_config_actionMenuItemAllCaps: number;
					}
					export class color {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.color>;
						public static abc_background_cache_hint_selector_material_dark: number;
						public static abc_background_cache_hint_selector_material_light: number;
						public static abc_btn_colored_borderless_text_material: number;
						public static abc_btn_colored_text_material: number;
						public static abc_color_highlight_material: number;
						public static abc_decor_view_status_guard: number;
						public static abc_decor_view_status_guard_light: number;
						public static abc_hint_foreground_material_dark: number;
						public static abc_hint_foreground_material_light: number;
						public static abc_primary_text_disable_only_material_dark: number;
						public static abc_primary_text_disable_only_material_light: number;
						public static abc_primary_text_material_dark: number;
						public static abc_primary_text_material_light: number;
						public static abc_search_url_text: number;
						public static abc_search_url_text_normal: number;
						public static abc_search_url_text_pressed: number;
						public static abc_search_url_text_selected: number;
						public static abc_secondary_text_material_dark: number;
						public static abc_secondary_text_material_light: number;
						public static abc_tint_btn_checkable: number;
						public static abc_tint_default: number;
						public static abc_tint_edittext: number;
						public static abc_tint_seek_thumb: number;
						public static abc_tint_spinner: number;
						public static abc_tint_switch_track: number;
						public static accent_material_dark: number;
						public static accent_material_light: number;
						public static androidx_core_ripple_material_light: number;
						public static androidx_core_secondary_text_default_material_light: number;
						public static background_floating_material_dark: number;
						public static background_floating_material_light: number;
						public static background_material_dark: number;
						public static background_material_light: number;
						public static bright_foreground_disabled_material_dark: number;
						public static bright_foreground_disabled_material_light: number;
						public static bright_foreground_inverse_material_dark: number;
						public static bright_foreground_inverse_material_light: number;
						public static bright_foreground_material_dark: number;
						public static bright_foreground_material_light: number;
						public static button_material_dark: number;
						public static button_material_light: number;
						public static dim_foreground_disabled_material_dark: number;
						public static dim_foreground_disabled_material_light: number;
						public static dim_foreground_material_dark: number;
						public static dim_foreground_material_light: number;
						public static error_color_material_dark: number;
						public static error_color_material_light: number;
						public static foreground_material_dark: number;
						public static foreground_material_light: number;
						public static highlighted_text_material_dark: number;
						public static highlighted_text_material_light: number;
						public static material_blue_grey_800: number;
						public static material_blue_grey_900: number;
						public static material_blue_grey_950: number;
						public static material_deep_teal_200: number;
						public static material_deep_teal_500: number;
						public static material_grey_100: number;
						public static material_grey_300: number;
						public static material_grey_50: number;
						public static material_grey_600: number;
						public static material_grey_800: number;
						public static material_grey_850: number;
						public static material_grey_900: number;
						public static notification_action_color_filter: number;
						public static notification_icon_bg_color: number;
						public static primary_dark_material_dark: number;
						public static primary_dark_material_light: number;
						public static primary_material_dark: number;
						public static primary_material_light: number;
						public static primary_text_default_material_dark: number;
						public static primary_text_default_material_light: number;
						public static primary_text_disabled_material_dark: number;
						public static primary_text_disabled_material_light: number;
						public static ripple_material_dark: number;
						public static ripple_material_light: number;
						public static secondary_text_default_material_dark: number;
						public static secondary_text_default_material_light: number;
						public static secondary_text_disabled_material_dark: number;
						public static secondary_text_disabled_material_light: number;
						public static switch_thumb_disabled_material_dark: number;
						public static switch_thumb_disabled_material_light: number;
						public static switch_thumb_material_dark: number;
						public static switch_thumb_material_light: number;
						public static switch_thumb_normal_material_dark: number;
						public static switch_thumb_normal_material_light: number;
						public static tooltip_background_dark: number;
						public static tooltip_background_light: number;
					}
					export class dimen {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.dimen>;
						public static abc_action_bar_content_inset_material: number;
						public static abc_action_bar_content_inset_with_nav: number;
						public static abc_action_bar_default_height_material: number;
						public static abc_action_bar_default_padding_end_material: number;
						public static abc_action_bar_default_padding_start_material: number;
						public static abc_action_bar_elevation_material: number;
						public static abc_action_bar_icon_vertical_padding_material: number;
						public static abc_action_bar_overflow_padding_end_material: number;
						public static abc_action_bar_overflow_padding_start_material: number;
						public static abc_action_bar_stacked_max_height: number;
						public static abc_action_bar_stacked_tab_max_width: number;
						public static abc_action_bar_subtitle_bottom_margin_material: number;
						public static abc_action_bar_subtitle_top_margin_material: number;
						public static abc_action_button_min_height_material: number;
						public static abc_action_button_min_width_material: number;
						public static abc_action_button_min_width_overflow_material: number;
						public static abc_alert_dialog_button_bar_height: number;
						public static abc_alert_dialog_button_dimen: number;
						public static abc_button_inset_horizontal_material: number;
						public static abc_button_inset_vertical_material: number;
						public static abc_button_padding_horizontal_material: number;
						public static abc_button_padding_vertical_material: number;
						public static abc_cascading_menus_min_smallest_width: number;
						public static abc_config_prefDialogWidth: number;
						public static abc_control_corner_material: number;
						public static abc_control_inset_material: number;
						public static abc_control_padding_material: number;
						public static abc_dialog_corner_radius_material: number;
						public static abc_dialog_fixed_height_major: number;
						public static abc_dialog_fixed_height_minor: number;
						public static abc_dialog_fixed_width_major: number;
						public static abc_dialog_fixed_width_minor: number;
						public static abc_dialog_list_padding_bottom_no_buttons: number;
						public static abc_dialog_list_padding_top_no_title: number;
						public static abc_dialog_min_width_major: number;
						public static abc_dialog_min_width_minor: number;
						public static abc_dialog_padding_material: number;
						public static abc_dialog_padding_top_material: number;
						public static abc_dialog_title_divider_material: number;
						public static abc_disabled_alpha_material_dark: number;
						public static abc_disabled_alpha_material_light: number;
						public static abc_dropdownitem_icon_width: number;
						public static abc_dropdownitem_text_padding_left: number;
						public static abc_dropdownitem_text_padding_right: number;
						public static abc_edit_text_inset_bottom_material: number;
						public static abc_edit_text_inset_horizontal_material: number;
						public static abc_edit_text_inset_top_material: number;
						public static abc_floating_window_z: number;
						public static abc_list_item_height_large_material: number;
						public static abc_list_item_height_material: number;
						public static abc_list_item_height_small_material: number;
						public static abc_list_item_padding_horizontal_material: number;
						public static abc_panel_menu_list_width: number;
						public static abc_progress_bar_height_material: number;
						public static abc_search_view_preferred_height: number;
						public static abc_search_view_preferred_width: number;
						public static abc_seekbar_track_background_height_material: number;
						public static abc_seekbar_track_progress_height_material: number;
						public static abc_select_dialog_padding_start_material: number;
						public static abc_star_big: number;
						public static abc_star_medium: number;
						public static abc_star_small: number;
						public static abc_switch_padding: number;
						public static abc_text_size_body_1_material: number;
						public static abc_text_size_body_2_material: number;
						public static abc_text_size_button_material: number;
						public static abc_text_size_caption_material: number;
						public static abc_text_size_display_1_material: number;
						public static abc_text_size_display_2_material: number;
						public static abc_text_size_display_3_material: number;
						public static abc_text_size_display_4_material: number;
						public static abc_text_size_headline_material: number;
						public static abc_text_size_large_material: number;
						public static abc_text_size_medium_material: number;
						public static abc_text_size_menu_header_material: number;
						public static abc_text_size_menu_material: number;
						public static abc_text_size_small_material: number;
						public static abc_text_size_subhead_material: number;
						public static abc_text_size_subtitle_material_toolbar: number;
						public static abc_text_size_title_material: number;
						public static abc_text_size_title_material_toolbar: number;
						public static compat_button_inset_horizontal_material: number;
						public static compat_button_inset_vertical_material: number;
						public static compat_button_padding_horizontal_material: number;
						public static compat_button_padding_vertical_material: number;
						public static compat_control_corner_material: number;
						public static compat_notification_large_icon_max_height: number;
						public static compat_notification_large_icon_max_width: number;
						public static disabled_alpha_material_dark: number;
						public static disabled_alpha_material_light: number;
						public static highlight_alpha_material_colored: number;
						public static highlight_alpha_material_dark: number;
						public static highlight_alpha_material_light: number;
						public static hint_alpha_material_dark: number;
						public static hint_alpha_material_light: number;
						public static hint_pressed_alpha_material_dark: number;
						public static hint_pressed_alpha_material_light: number;
						public static notification_action_icon_size: number;
						public static notification_action_text_size: number;
						public static notification_big_circle_margin: number;
						public static notification_content_margin_start: number;
						public static notification_large_icon_height: number;
						public static notification_large_icon_width: number;
						public static notification_main_column_padding_top: number;
						public static notification_media_narrow_margin: number;
						public static notification_right_icon_size: number;
						public static notification_right_side_padding_top: number;
						public static notification_small_icon_background_padding: number;
						public static notification_small_icon_size_as_large: number;
						public static notification_subtext_size: number;
						public static notification_top_pad: number;
						public static notification_top_pad_large_text: number;
						public static tooltip_corner_radius: number;
						public static tooltip_horizontal_padding: number;
						public static tooltip_margin: number;
						public static tooltip_precise_anchor_extra_offset: number;
						public static tooltip_precise_anchor_threshold: number;
						public static tooltip_vertical_padding: number;
						public static tooltip_y_offset_non_touch: number;
						public static tooltip_y_offset_touch: number;
					}
					export class drawable {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.drawable>;
						public static abc_ab_share_pack_mtrl_alpha: number;
						public static abc_action_bar_item_background_material: number;
						public static abc_btn_borderless_material: number;
						public static abc_btn_check_material: number;
						public static abc_btn_check_material_anim: number;
						public static abc_btn_check_to_on_mtrl_000: number;
						public static abc_btn_check_to_on_mtrl_015: number;
						public static abc_btn_colored_material: number;
						public static abc_btn_default_mtrl_shape: number;
						public static abc_btn_radio_material: number;
						public static abc_btn_radio_material_anim: number;
						public static abc_btn_radio_to_on_mtrl_000: number;
						public static abc_btn_radio_to_on_mtrl_015: number;
						public static abc_btn_switch_to_on_mtrl_00001: number;
						public static abc_btn_switch_to_on_mtrl_00012: number;
						public static abc_cab_background_internal_bg: number;
						public static abc_cab_background_top_material: number;
						public static abc_cab_background_top_mtrl_alpha: number;
						public static abc_control_background_material: number;
						public static abc_dialog_material_background: number;
						public static abc_edit_text_material: number;
						public static abc_ic_ab_back_material: number;
						public static abc_ic_arrow_drop_right_black_24dp: number;
						public static abc_ic_clear_material: number;
						public static abc_ic_commit_search_api_mtrl_alpha: number;
						public static abc_ic_go_search_api_material: number;
						public static abc_ic_menu_copy_mtrl_am_alpha: number;
						public static abc_ic_menu_cut_mtrl_alpha: number;
						public static abc_ic_menu_overflow_material: number;
						public static abc_ic_menu_paste_mtrl_am_alpha: number;
						public static abc_ic_menu_selectall_mtrl_alpha: number;
						public static abc_ic_menu_share_mtrl_alpha: number;
						public static abc_ic_search_api_material: number;
						public static abc_ic_voice_search_api_material: number;
						public static abc_item_background_holo_dark: number;
						public static abc_item_background_holo_light: number;
						public static abc_list_divider_material: number;
						public static abc_list_divider_mtrl_alpha: number;
						public static abc_list_focused_holo: number;
						public static abc_list_longpressed_holo: number;
						public static abc_list_pressed_holo_dark: number;
						public static abc_list_pressed_holo_light: number;
						public static abc_list_selector_background_transition_holo_dark: number;
						public static abc_list_selector_background_transition_holo_light: number;
						public static abc_list_selector_disabled_holo_dark: number;
						public static abc_list_selector_disabled_holo_light: number;
						public static abc_list_selector_holo_dark: number;
						public static abc_list_selector_holo_light: number;
						public static abc_menu_hardkey_panel_mtrl_mult: number;
						public static abc_popup_background_mtrl_mult: number;
						public static abc_ratingbar_indicator_material: number;
						public static abc_ratingbar_material: number;
						public static abc_ratingbar_small_material: number;
						public static abc_scrubber_control_off_mtrl_alpha: number;
						public static abc_scrubber_control_to_pressed_mtrl_000: number;
						public static abc_scrubber_control_to_pressed_mtrl_005: number;
						public static abc_scrubber_primary_mtrl_alpha: number;
						public static abc_scrubber_track_mtrl_alpha: number;
						public static abc_seekbar_thumb_material: number;
						public static abc_seekbar_tick_mark_material: number;
						public static abc_seekbar_track_material: number;
						public static abc_spinner_mtrl_am_alpha: number;
						public static abc_spinner_textfield_background_material: number;
						public static abc_star_black_48dp: number;
						public static abc_star_half_black_48dp: number;
						public static abc_switch_thumb_material: number;
						public static abc_switch_track_mtrl_alpha: number;
						public static abc_tab_indicator_material: number;
						public static abc_tab_indicator_mtrl_alpha: number;
						public static abc_text_cursor_material: number;
						public static abc_text_select_handle_left_mtrl: number;
						public static abc_text_select_handle_middle_mtrl: number;
						public static abc_text_select_handle_right_mtrl: number;
						public static abc_textfield_activated_mtrl_alpha: number;
						public static abc_textfield_default_mtrl_alpha: number;
						public static abc_textfield_search_activated_mtrl_alpha: number;
						public static abc_textfield_search_default_mtrl_alpha: number;
						public static abc_textfield_search_material: number;
						public static abc_vector_test: number;
						public static btn_checkbox_checked_mtrl: number;
						public static btn_checkbox_checked_to_unchecked_mtrl_animation: number;
						public static btn_checkbox_unchecked_mtrl: number;
						public static btn_checkbox_unchecked_to_checked_mtrl_animation: number;
						public static btn_radio_off_mtrl: number;
						public static btn_radio_off_to_on_mtrl_animation: number;
						public static btn_radio_on_mtrl: number;
						public static btn_radio_on_to_off_mtrl_animation: number;
						public static default_scroll_handle_bottom: number;
						public static default_scroll_handle_left: number;
						public static default_scroll_handle_right: number;
						public static default_scroll_handle_top: number;
						public static notification_action_background: number;
						public static notification_bg: number;
						public static notification_bg_low: number;
						public static notification_bg_low_normal: number;
						public static notification_bg_low_pressed: number;
						public static notification_bg_normal: number;
						public static notification_bg_normal_pressed: number;
						public static notification_icon_background: number;
						public static notification_template_icon_bg: number;
						public static notification_template_icon_low_bg: number;
						public static notification_tile_bg: number;
						public static notify_panel_notification_icon_bg: number;
						public static test_level_drawable: number;
						public static tooltip_frame_dark: number;
						public static tooltip_frame_light: number;
					}
					export class id {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.id>;
						public static accessibility_action_clickable_span: number;
						public static accessibility_custom_action_0: number;
						public static accessibility_custom_action_1: number;
						public static accessibility_custom_action_10: number;
						public static accessibility_custom_action_11: number;
						public static accessibility_custom_action_12: number;
						public static accessibility_custom_action_13: number;
						public static accessibility_custom_action_14: number;
						public static accessibility_custom_action_15: number;
						public static accessibility_custom_action_16: number;
						public static accessibility_custom_action_17: number;
						public static accessibility_custom_action_18: number;
						public static accessibility_custom_action_19: number;
						public static accessibility_custom_action_2: number;
						public static accessibility_custom_action_20: number;
						public static accessibility_custom_action_21: number;
						public static accessibility_custom_action_22: number;
						public static accessibility_custom_action_23: number;
						public static accessibility_custom_action_24: number;
						public static accessibility_custom_action_25: number;
						public static accessibility_custom_action_26: number;
						public static accessibility_custom_action_27: number;
						public static accessibility_custom_action_28: number;
						public static accessibility_custom_action_29: number;
						public static accessibility_custom_action_3: number;
						public static accessibility_custom_action_30: number;
						public static accessibility_custom_action_31: number;
						public static accessibility_custom_action_4: number;
						public static accessibility_custom_action_5: number;
						public static accessibility_custom_action_6: number;
						public static accessibility_custom_action_7: number;
						public static accessibility_custom_action_8: number;
						public static accessibility_custom_action_9: number;
						public static action_bar: number;
						public static action_bar_activity_content: number;
						public static action_bar_container: number;
						public static action_bar_root: number;
						public static action_bar_spinner: number;
						public static action_bar_subtitle: number;
						public static action_bar_title: number;
						public static action_container: number;
						public static action_context_bar: number;
						public static action_divider: number;
						public static action_image: number;
						public static action_menu_divider: number;
						public static action_menu_presenter: number;
						public static action_mode_bar: number;
						public static action_mode_bar_stub: number;
						public static action_mode_close_button: number;
						public static action_text: number;
						public static actions: number;
						public static activity_chooser_view_content: number;
						public static add: number;
						public static alertTitle: number;
						public static async: number;
						public static blocking: number;
						public static buttonPanel: number;
						public static checkbox: number;
						public static checked: number;
						public static chronometer: number;
						public static content: number;
						public static contentPanel: number;
						public static custom: number;
						public static customPanel: number;
						public static decor_content_parent: number;
						public static default_activity_button: number;
						public static dialog_button: number;
						public static edit_query: number;
						public static expand_activities_button: number;
						public static expanded_menu: number;
						public static forever: number;
						public static fragment_container_view_tag: number;
						public static group_divider: number;
						public static home: number;
						public static icon: number;
						public static icon_group: number;
						public static image: number;
						public static info: number;
						public static italic: number;
						public static line1: number;
						public static line3: number;
						public static listMode: number;
						public static list_item: number;
						public static message: number;
						public static multiply: number;
						public static none: number;
						public static normal: number;
						public static notification_background: number;
						public static notification_main_column: number;
						public static notification_main_column_container: number;
						public static off: number;
						public static on: number;
						public static parentPanel: number;
						public static progress_circular: number;
						public static progress_horizontal: number;
						public static radio: number;
						public static right_icon: number;
						public static right_side: number;
						public static screen: number;
						public static scrollIndicatorDown: number;
						public static scrollIndicatorUp: number;
						public static scrollView: number;
						public static search_badge: number;
						public static search_bar: number;
						public static search_button: number;
						public static search_close_btn: number;
						public static search_edit_frame: number;
						public static search_go_btn: number;
						public static search_mag_icon: number;
						public static search_plate: number;
						public static search_src_text: number;
						public static search_voice_btn: number;
						public static select_dialog_listview: number;
						public static shortcut: number;
						public static spacer: number;
						public static special_effects_controller_view_tag: number;
						public static split_action_bar: number;
						public static src_atop: number;
						public static src_in: number;
						public static src_over: number;
						public static submenuarrow: number;
						public static submit_area: number;
						public static tabMode: number;
						public static tag_accessibility_actions: number;
						public static tag_accessibility_clickable_spans: number;
						public static tag_accessibility_heading: number;
						public static tag_accessibility_pane_title: number;
						public static tag_on_apply_window_listener: number;
						public static tag_on_receive_content_listener: number;
						public static tag_on_receive_content_mime_types: number;
						public static tag_screen_reader_focusable: number;
						public static tag_state_description: number;
						public static tag_transition_group: number;
						public static tag_unhandled_key_event_manager: number;
						public static tag_unhandled_key_listeners: number;
						public static tag_window_insets_animation_callback: number;
						public static text: number;
						public static text2: number;
						public static textSpacerNoButtons: number;
						public static textSpacerNoTitle: number;
						public static time: number;
						public static title: number;
						public static titleDividerNoCustom: number;
						public static title_template: number;
						public static topPanel: number;
						public static unchecked: number;
						public static uniform: number;
						public static up: number;
						public static view_tree_lifecycle_owner: number;
						public static view_tree_on_back_pressed_dispatcher_owner: number;
						public static view_tree_saved_state_registry_owner: number;
						public static view_tree_view_model_store_owner: number;
						public static visible_removing_fragment_view_tag: number;
						public static wrap_content: number;
					}
					export class integer {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.integer>;
						public static abc_config_activityDefaultDur: number;
						public static abc_config_activityShortDur: number;
						public static cancel_button_image_alpha: number;
						public static config_tooltipAnimTime: number;
						public static status_bar_notification_info_maxnum: number;
					}
					export class interpolator {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.interpolator>;
						public static btn_checkbox_checked_mtrl_animation_interpolator_0: number;
						public static btn_checkbox_checked_mtrl_animation_interpolator_1: number;
						public static btn_checkbox_unchecked_mtrl_animation_interpolator_0: number;
						public static btn_checkbox_unchecked_mtrl_animation_interpolator_1: number;
						public static btn_radio_to_off_mtrl_animation_interpolator_0: number;
						public static btn_radio_to_on_mtrl_animation_interpolator_0: number;
						public static fast_out_slow_in: number;
					}
					export class layout {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.layout>;
						public static abc_action_bar_title_item: number;
						public static abc_action_bar_up_container: number;
						public static abc_action_menu_item_layout: number;
						public static abc_action_menu_layout: number;
						public static abc_action_mode_bar: number;
						public static abc_action_mode_close_item_material: number;
						public static abc_activity_chooser_view: number;
						public static abc_activity_chooser_view_list_item: number;
						public static abc_alert_dialog_button_bar_material: number;
						public static abc_alert_dialog_material: number;
						public static abc_alert_dialog_title_material: number;
						public static abc_cascading_menu_item_layout: number;
						public static abc_dialog_title_material: number;
						public static abc_expanded_menu_layout: number;
						public static abc_list_menu_item_checkbox: number;
						public static abc_list_menu_item_icon: number;
						public static abc_list_menu_item_layout: number;
						public static abc_list_menu_item_radio: number;
						public static abc_popup_menu_header_item_layout: number;
						public static abc_popup_menu_item_layout: number;
						public static abc_screen_content_include: number;
						public static abc_screen_simple: number;
						public static abc_screen_simple_overlay_action_mode: number;
						public static abc_screen_toolbar: number;
						public static abc_search_dropdown_item_icons_2line: number;
						public static abc_search_view: number;
						public static abc_select_dialog_material: number;
						public static abc_tooltip: number;
						public static custom_dialog: number;
						public static notification_action: number;
						public static notification_action_tombstone: number;
						public static notification_template_custom_big: number;
						public static notification_template_icon_group: number;
						public static notification_template_part_chronometer: number;
						public static notification_template_part_time: number;
						public static select_dialog_item_material: number;
						public static select_dialog_multichoice_material: number;
						public static select_dialog_singlechoice_material: number;
						public static support_simple_spinner_dropdown_item: number;
					}
					export class style {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.style>;
						public static AlertDialog_AppCompat: number;
						public static AlertDialog_AppCompat_Light: number;
						public static Animation_AppCompat_Dialog: number;
						public static Animation_AppCompat_DropDownUp: number;
						public static Animation_AppCompat_Tooltip: number;
						public static Base_AlertDialog_AppCompat: number;
						public static Base_AlertDialog_AppCompat_Light: number;
						public static Base_Animation_AppCompat_Dialog: number;
						public static Base_Animation_AppCompat_DropDownUp: number;
						public static Base_Animation_AppCompat_Tooltip: number;
						public static Base_DialogWindowTitleBackground_AppCompat: number;
						public static Base_DialogWindowTitle_AppCompat: number;
						public static Base_TextAppearance_AppCompat: number;
						public static Base_TextAppearance_AppCompat_Body1: number;
						public static Base_TextAppearance_AppCompat_Body2: number;
						public static Base_TextAppearance_AppCompat_Button: number;
						public static Base_TextAppearance_AppCompat_Caption: number;
						public static Base_TextAppearance_AppCompat_Display1: number;
						public static Base_TextAppearance_AppCompat_Display2: number;
						public static Base_TextAppearance_AppCompat_Display3: number;
						public static Base_TextAppearance_AppCompat_Display4: number;
						public static Base_TextAppearance_AppCompat_Headline: number;
						public static Base_TextAppearance_AppCompat_Inverse: number;
						public static Base_TextAppearance_AppCompat_Large: number;
						public static Base_TextAppearance_AppCompat_Large_Inverse: number;
						public static Base_TextAppearance_AppCompat_Light_Widget_PopupMenu_Large: number;
						public static Base_TextAppearance_AppCompat_Light_Widget_PopupMenu_Small: number;
						public static Base_TextAppearance_AppCompat_Medium: number;
						public static Base_TextAppearance_AppCompat_Medium_Inverse: number;
						public static Base_TextAppearance_AppCompat_Menu: number;
						public static Base_TextAppearance_AppCompat_SearchResult: number;
						public static Base_TextAppearance_AppCompat_SearchResult_Subtitle: number;
						public static Base_TextAppearance_AppCompat_SearchResult_Title: number;
						public static Base_TextAppearance_AppCompat_Small: number;
						public static Base_TextAppearance_AppCompat_Small_Inverse: number;
						public static Base_TextAppearance_AppCompat_Subhead: number;
						public static Base_TextAppearance_AppCompat_Subhead_Inverse: number;
						public static Base_TextAppearance_AppCompat_Title: number;
						public static Base_TextAppearance_AppCompat_Title_Inverse: number;
						public static Base_TextAppearance_AppCompat_Tooltip: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionBar_Menu: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionBar_Subtitle: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionBar_Subtitle_Inverse: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionBar_Title: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionBar_Title_Inverse: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionMode_Subtitle: number;
						public static Base_TextAppearance_AppCompat_Widget_ActionMode_Title: number;
						public static Base_TextAppearance_AppCompat_Widget_Button: number;
						public static Base_TextAppearance_AppCompat_Widget_Button_Borderless_Colored: number;
						public static Base_TextAppearance_AppCompat_Widget_Button_Colored: number;
						public static Base_TextAppearance_AppCompat_Widget_Button_Inverse: number;
						public static Base_TextAppearance_AppCompat_Widget_DropDownItem: number;
						public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Header: number;
						public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Large: number;
						public static Base_TextAppearance_AppCompat_Widget_PopupMenu_Small: number;
						public static Base_TextAppearance_AppCompat_Widget_Switch: number;
						public static Base_TextAppearance_AppCompat_Widget_TextView_SpinnerItem: number;
						public static Base_TextAppearance_Widget_AppCompat_ExpandedMenu_Item: number;
						public static Base_TextAppearance_Widget_AppCompat_Toolbar_Subtitle: number;
						public static Base_TextAppearance_Widget_AppCompat_Toolbar_Title: number;
						public static Base_ThemeOverlay_AppCompat: number;
						public static Base_ThemeOverlay_AppCompat_ActionBar: number;
						public static Base_ThemeOverlay_AppCompat_Dark: number;
						public static Base_ThemeOverlay_AppCompat_Dark_ActionBar: number;
						public static Base_ThemeOverlay_AppCompat_Dialog: number;
						public static Base_ThemeOverlay_AppCompat_Dialog_Alert: number;
						public static Base_ThemeOverlay_AppCompat_Light: number;
						public static Base_Theme_AppCompat: number;
						public static Base_Theme_AppCompat_CompactMenu: number;
						public static Base_Theme_AppCompat_Dialog: number;
						public static Base_Theme_AppCompat_DialogWhenLarge: number;
						public static Base_Theme_AppCompat_Dialog_Alert: number;
						public static Base_Theme_AppCompat_Dialog_FixedSize: number;
						public static Base_Theme_AppCompat_Dialog_MinWidth: number;
						public static Base_Theme_AppCompat_Light: number;
						public static Base_Theme_AppCompat_Light_DarkActionBar: number;
						public static Base_Theme_AppCompat_Light_Dialog: number;
						public static Base_Theme_AppCompat_Light_DialogWhenLarge: number;
						public static Base_Theme_AppCompat_Light_Dialog_Alert: number;
						public static Base_Theme_AppCompat_Light_Dialog_FixedSize: number;
						public static Base_Theme_AppCompat_Light_Dialog_MinWidth: number;
						public static Base_V21_ThemeOverlay_AppCompat_Dialog: number;
						public static Base_V21_Theme_AppCompat: number;
						public static Base_V21_Theme_AppCompat_Dialog: number;
						public static Base_V21_Theme_AppCompat_Light: number;
						public static Base_V21_Theme_AppCompat_Light_Dialog: number;
						public static Base_V22_Theme_AppCompat: number;
						public static Base_V22_Theme_AppCompat_Light: number;
						public static Base_V23_Theme_AppCompat: number;
						public static Base_V23_Theme_AppCompat_Light: number;
						public static Base_V26_Theme_AppCompat: number;
						public static Base_V26_Theme_AppCompat_Light: number;
						public static Base_V26_Widget_AppCompat_Toolbar: number;
						public static Base_V28_Theme_AppCompat: number;
						public static Base_V28_Theme_AppCompat_Light: number;
						public static Base_V7_ThemeOverlay_AppCompat_Dialog: number;
						public static Base_V7_Theme_AppCompat: number;
						public static Base_V7_Theme_AppCompat_Dialog: number;
						public static Base_V7_Theme_AppCompat_Light: number;
						public static Base_V7_Theme_AppCompat_Light_Dialog: number;
						public static Base_V7_Widget_AppCompat_AutoCompleteTextView: number;
						public static Base_V7_Widget_AppCompat_EditText: number;
						public static Base_V7_Widget_AppCompat_Toolbar: number;
						public static Base_Widget_AppCompat_ActionBar: number;
						public static Base_Widget_AppCompat_ActionBar_Solid: number;
						public static Base_Widget_AppCompat_ActionBar_TabBar: number;
						public static Base_Widget_AppCompat_ActionBar_TabText: number;
						public static Base_Widget_AppCompat_ActionBar_TabView: number;
						public static Base_Widget_AppCompat_ActionButton: number;
						public static Base_Widget_AppCompat_ActionButton_CloseMode: number;
						public static Base_Widget_AppCompat_ActionButton_Overflow: number;
						public static Base_Widget_AppCompat_ActionMode: number;
						public static Base_Widget_AppCompat_ActivityChooserView: number;
						public static Base_Widget_AppCompat_AutoCompleteTextView: number;
						public static Base_Widget_AppCompat_Button: number;
						public static Base_Widget_AppCompat_ButtonBar: number;
						public static Base_Widget_AppCompat_ButtonBar_AlertDialog: number;
						public static Base_Widget_AppCompat_Button_Borderless: number;
						public static Base_Widget_AppCompat_Button_Borderless_Colored: number;
						public static Base_Widget_AppCompat_Button_ButtonBar_AlertDialog: number;
						public static Base_Widget_AppCompat_Button_Colored: number;
						public static Base_Widget_AppCompat_Button_Small: number;
						public static Base_Widget_AppCompat_CompoundButton_CheckBox: number;
						public static Base_Widget_AppCompat_CompoundButton_RadioButton: number;
						public static Base_Widget_AppCompat_CompoundButton_Switch: number;
						public static Base_Widget_AppCompat_DrawerArrowToggle: number;
						public static Base_Widget_AppCompat_DrawerArrowToggle_Common: number;
						public static Base_Widget_AppCompat_DropDownItem_Spinner: number;
						public static Base_Widget_AppCompat_EditText: number;
						public static Base_Widget_AppCompat_ImageButton: number;
						public static Base_Widget_AppCompat_Light_ActionBar: number;
						public static Base_Widget_AppCompat_Light_ActionBar_Solid: number;
						public static Base_Widget_AppCompat_Light_ActionBar_TabBar: number;
						public static Base_Widget_AppCompat_Light_ActionBar_TabText: number;
						public static Base_Widget_AppCompat_Light_ActionBar_TabText_Inverse: number;
						public static Base_Widget_AppCompat_Light_ActionBar_TabView: number;
						public static Base_Widget_AppCompat_Light_PopupMenu: number;
						public static Base_Widget_AppCompat_Light_PopupMenu_Overflow: number;
						public static Base_Widget_AppCompat_ListMenuView: number;
						public static Base_Widget_AppCompat_ListPopupWindow: number;
						public static Base_Widget_AppCompat_ListView: number;
						public static Base_Widget_AppCompat_ListView_DropDown: number;
						public static Base_Widget_AppCompat_ListView_Menu: number;
						public static Base_Widget_AppCompat_PopupMenu: number;
						public static Base_Widget_AppCompat_PopupMenu_Overflow: number;
						public static Base_Widget_AppCompat_PopupWindow: number;
						public static Base_Widget_AppCompat_ProgressBar: number;
						public static Base_Widget_AppCompat_ProgressBar_Horizontal: number;
						public static Base_Widget_AppCompat_RatingBar: number;
						public static Base_Widget_AppCompat_RatingBar_Indicator: number;
						public static Base_Widget_AppCompat_RatingBar_Small: number;
						public static Base_Widget_AppCompat_SearchView: number;
						public static Base_Widget_AppCompat_SearchView_ActionBar: number;
						public static Base_Widget_AppCompat_SeekBar: number;
						public static Base_Widget_AppCompat_SeekBar_Discrete: number;
						public static Base_Widget_AppCompat_Spinner: number;
						public static Base_Widget_AppCompat_Spinner_Underlined: number;
						public static Base_Widget_AppCompat_TextView: number;
						public static Base_Widget_AppCompat_TextView_SpinnerItem: number;
						public static Base_Widget_AppCompat_Toolbar: number;
						public static Base_Widget_AppCompat_Toolbar_Button_Navigation: number;
						public static Platform_AppCompat: number;
						public static Platform_AppCompat_Light: number;
						public static Platform_ThemeOverlay_AppCompat: number;
						public static Platform_ThemeOverlay_AppCompat_Dark: number;
						public static Platform_ThemeOverlay_AppCompat_Light: number;
						public static Platform_V21_AppCompat: number;
						public static Platform_V21_AppCompat_Light: number;
						public static Platform_V25_AppCompat: number;
						public static Platform_V25_AppCompat_Light: number;
						public static Platform_Widget_AppCompat_Spinner: number;
						public static RtlOverlay_DialogWindowTitle_AppCompat: number;
						public static RtlOverlay_Widget_AppCompat_ActionBar_TitleItem: number;
						public static RtlOverlay_Widget_AppCompat_DialogTitle_Icon: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem_InternalGroup: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Shortcut: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem_SubmenuArrow: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Text: number;
						public static RtlOverlay_Widget_AppCompat_PopupMenuItem_Title: number;
						public static RtlOverlay_Widget_AppCompat_SearchView_MagIcon: number;
						public static RtlOverlay_Widget_AppCompat_Search_DropDown: number;
						public static RtlOverlay_Widget_AppCompat_Search_DropDown_Icon1: number;
						public static RtlOverlay_Widget_AppCompat_Search_DropDown_Icon2: number;
						public static RtlOverlay_Widget_AppCompat_Search_DropDown_Query: number;
						public static RtlOverlay_Widget_AppCompat_Search_DropDown_Text: number;
						public static RtlUnderlay_Widget_AppCompat_ActionButton: number;
						public static RtlUnderlay_Widget_AppCompat_ActionButton_Overflow: number;
						public static TextAppearance_AppCompat: number;
						public static TextAppearance_AppCompat_Body1: number;
						public static TextAppearance_AppCompat_Body2: number;
						public static TextAppearance_AppCompat_Button: number;
						public static TextAppearance_AppCompat_Caption: number;
						public static TextAppearance_AppCompat_Display1: number;
						public static TextAppearance_AppCompat_Display2: number;
						public static TextAppearance_AppCompat_Display3: number;
						public static TextAppearance_AppCompat_Display4: number;
						public static TextAppearance_AppCompat_Headline: number;
						public static TextAppearance_AppCompat_Inverse: number;
						public static TextAppearance_AppCompat_Large: number;
						public static TextAppearance_AppCompat_Large_Inverse: number;
						public static TextAppearance_AppCompat_Light_SearchResult_Subtitle: number;
						public static TextAppearance_AppCompat_Light_SearchResult_Title: number;
						public static TextAppearance_AppCompat_Light_Widget_PopupMenu_Large: number;
						public static TextAppearance_AppCompat_Light_Widget_PopupMenu_Small: number;
						public static TextAppearance_AppCompat_Medium: number;
						public static TextAppearance_AppCompat_Medium_Inverse: number;
						public static TextAppearance_AppCompat_Menu: number;
						public static TextAppearance_AppCompat_SearchResult_Subtitle: number;
						public static TextAppearance_AppCompat_SearchResult_Title: number;
						public static TextAppearance_AppCompat_Small: number;
						public static TextAppearance_AppCompat_Small_Inverse: number;
						public static TextAppearance_AppCompat_Subhead: number;
						public static TextAppearance_AppCompat_Subhead_Inverse: number;
						public static TextAppearance_AppCompat_Title: number;
						public static TextAppearance_AppCompat_Title_Inverse: number;
						public static TextAppearance_AppCompat_Tooltip: number;
						public static TextAppearance_AppCompat_Widget_ActionBar_Menu: number;
						public static TextAppearance_AppCompat_Widget_ActionBar_Subtitle: number;
						public static TextAppearance_AppCompat_Widget_ActionBar_Subtitle_Inverse: number;
						public static TextAppearance_AppCompat_Widget_ActionBar_Title: number;
						public static TextAppearance_AppCompat_Widget_ActionBar_Title_Inverse: number;
						public static TextAppearance_AppCompat_Widget_ActionMode_Subtitle: number;
						public static TextAppearance_AppCompat_Widget_ActionMode_Subtitle_Inverse: number;
						public static TextAppearance_AppCompat_Widget_ActionMode_Title: number;
						public static TextAppearance_AppCompat_Widget_ActionMode_Title_Inverse: number;
						public static TextAppearance_AppCompat_Widget_Button: number;
						public static TextAppearance_AppCompat_Widget_Button_Borderless_Colored: number;
						public static TextAppearance_AppCompat_Widget_Button_Colored: number;
						public static TextAppearance_AppCompat_Widget_Button_Inverse: number;
						public static TextAppearance_AppCompat_Widget_DropDownItem: number;
						public static TextAppearance_AppCompat_Widget_PopupMenu_Header: number;
						public static TextAppearance_AppCompat_Widget_PopupMenu_Large: number;
						public static TextAppearance_AppCompat_Widget_PopupMenu_Small: number;
						public static TextAppearance_AppCompat_Widget_Switch: number;
						public static TextAppearance_AppCompat_Widget_TextView_SpinnerItem: number;
						public static TextAppearance_Compat_Notification: number;
						public static TextAppearance_Compat_Notification_Info: number;
						public static TextAppearance_Compat_Notification_Line2: number;
						public static TextAppearance_Compat_Notification_Time: number;
						public static TextAppearance_Compat_Notification_Title: number;
						public static TextAppearance_Widget_AppCompat_ExpandedMenu_Item: number;
						public static TextAppearance_Widget_AppCompat_Toolbar_Subtitle: number;
						public static TextAppearance_Widget_AppCompat_Toolbar_Title: number;
						public static ThemeOverlay_AppCompat: number;
						public static ThemeOverlay_AppCompat_ActionBar: number;
						public static ThemeOverlay_AppCompat_Dark: number;
						public static ThemeOverlay_AppCompat_Dark_ActionBar: number;
						public static ThemeOverlay_AppCompat_DayNight: number;
						public static ThemeOverlay_AppCompat_DayNight_ActionBar: number;
						public static ThemeOverlay_AppCompat_Dialog: number;
						public static ThemeOverlay_AppCompat_Dialog_Alert: number;
						public static ThemeOverlay_AppCompat_Light: number;
						public static Theme_AppCompat: number;
						public static Theme_AppCompat_CompactMenu: number;
						public static Theme_AppCompat_DayNight: number;
						public static Theme_AppCompat_DayNight_DarkActionBar: number;
						public static Theme_AppCompat_DayNight_Dialog: number;
						public static Theme_AppCompat_DayNight_DialogWhenLarge: number;
						public static Theme_AppCompat_DayNight_Dialog_Alert: number;
						public static Theme_AppCompat_DayNight_Dialog_MinWidth: number;
						public static Theme_AppCompat_DayNight_NoActionBar: number;
						public static Theme_AppCompat_Dialog: number;
						public static Theme_AppCompat_DialogWhenLarge: number;
						public static Theme_AppCompat_Dialog_Alert: number;
						public static Theme_AppCompat_Dialog_MinWidth: number;
						public static Theme_AppCompat_Empty: number;
						public static Theme_AppCompat_Light: number;
						public static Theme_AppCompat_Light_DarkActionBar: number;
						public static Theme_AppCompat_Light_Dialog: number;
						public static Theme_AppCompat_Light_DialogWhenLarge: number;
						public static Theme_AppCompat_Light_Dialog_Alert: number;
						public static Theme_AppCompat_Light_Dialog_MinWidth: number;
						public static Theme_AppCompat_Light_NoActionBar: number;
						public static Theme_AppCompat_NoActionBar: number;
						public static Widget_AppCompat_ActionBar: number;
						public static Widget_AppCompat_ActionBar_Solid: number;
						public static Widget_AppCompat_ActionBar_TabBar: number;
						public static Widget_AppCompat_ActionBar_TabText: number;
						public static Widget_AppCompat_ActionBar_TabView: number;
						public static Widget_AppCompat_ActionButton: number;
						public static Widget_AppCompat_ActionButton_CloseMode: number;
						public static Widget_AppCompat_ActionButton_Overflow: number;
						public static Widget_AppCompat_ActionMode: number;
						public static Widget_AppCompat_ActivityChooserView: number;
						public static Widget_AppCompat_AutoCompleteTextView: number;
						public static Widget_AppCompat_Button: number;
						public static Widget_AppCompat_ButtonBar: number;
						public static Widget_AppCompat_ButtonBar_AlertDialog: number;
						public static Widget_AppCompat_Button_Borderless: number;
						public static Widget_AppCompat_Button_Borderless_Colored: number;
						public static Widget_AppCompat_Button_ButtonBar_AlertDialog: number;
						public static Widget_AppCompat_Button_Colored: number;
						public static Widget_AppCompat_Button_Small: number;
						public static Widget_AppCompat_CompoundButton_CheckBox: number;
						public static Widget_AppCompat_CompoundButton_RadioButton: number;
						public static Widget_AppCompat_CompoundButton_Switch: number;
						public static Widget_AppCompat_DrawerArrowToggle: number;
						public static Widget_AppCompat_DropDownItem_Spinner: number;
						public static Widget_AppCompat_EditText: number;
						public static Widget_AppCompat_ImageButton: number;
						public static Widget_AppCompat_Light_ActionBar: number;
						public static Widget_AppCompat_Light_ActionBar_Solid: number;
						public static Widget_AppCompat_Light_ActionBar_Solid_Inverse: number;
						public static Widget_AppCompat_Light_ActionBar_TabBar: number;
						public static Widget_AppCompat_Light_ActionBar_TabBar_Inverse: number;
						public static Widget_AppCompat_Light_ActionBar_TabText: number;
						public static Widget_AppCompat_Light_ActionBar_TabText_Inverse: number;
						public static Widget_AppCompat_Light_ActionBar_TabView: number;
						public static Widget_AppCompat_Light_ActionBar_TabView_Inverse: number;
						public static Widget_AppCompat_Light_ActionButton: number;
						public static Widget_AppCompat_Light_ActionButton_CloseMode: number;
						public static Widget_AppCompat_Light_ActionButton_Overflow: number;
						public static Widget_AppCompat_Light_ActionMode_Inverse: number;
						public static Widget_AppCompat_Light_ActivityChooserView: number;
						public static Widget_AppCompat_Light_AutoCompleteTextView: number;
						public static Widget_AppCompat_Light_DropDownItem_Spinner: number;
						public static Widget_AppCompat_Light_ListPopupWindow: number;
						public static Widget_AppCompat_Light_ListView_DropDown: number;
						public static Widget_AppCompat_Light_PopupMenu: number;
						public static Widget_AppCompat_Light_PopupMenu_Overflow: number;
						public static Widget_AppCompat_Light_SearchView: number;
						public static Widget_AppCompat_Light_Spinner_DropDown_ActionBar: number;
						public static Widget_AppCompat_ListMenuView: number;
						public static Widget_AppCompat_ListPopupWindow: number;
						public static Widget_AppCompat_ListView: number;
						public static Widget_AppCompat_ListView_DropDown: number;
						public static Widget_AppCompat_ListView_Menu: number;
						public static Widget_AppCompat_PopupMenu: number;
						public static Widget_AppCompat_PopupMenu_Overflow: number;
						public static Widget_AppCompat_PopupWindow: number;
						public static Widget_AppCompat_ProgressBar: number;
						public static Widget_AppCompat_ProgressBar_Horizontal: number;
						public static Widget_AppCompat_RatingBar: number;
						public static Widget_AppCompat_RatingBar_Indicator: number;
						public static Widget_AppCompat_RatingBar_Small: number;
						public static Widget_AppCompat_SearchView: number;
						public static Widget_AppCompat_SearchView_ActionBar: number;
						public static Widget_AppCompat_SeekBar: number;
						public static Widget_AppCompat_SeekBar_Discrete: number;
						public static Widget_AppCompat_Spinner: number;
						public static Widget_AppCompat_Spinner_DropDown: number;
						public static Widget_AppCompat_Spinner_DropDown_ActionBar: number;
						public static Widget_AppCompat_Spinner_Underlined: number;
						public static Widget_AppCompat_TextView: number;
						public static Widget_AppCompat_TextView_SpinnerItem: number;
						public static Widget_AppCompat_Toolbar: number;
						public static Widget_AppCompat_Toolbar_Button_Navigation: number;
						public static Widget_Compat_NotificationActionContainer: number;
						public static Widget_Compat_NotificationActionText: number;
					}
					export class styleable {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.R.styleable>;
						public static ActionBar: androidNative.Array<number>;
						public static ActionBar_background: number;
						public static ActionBar_backgroundSplit: number;
						public static ActionBar_backgroundStacked: number;
						public static ActionBar_contentInsetEnd: number;
						public static ActionBar_contentInsetEndWithActions: number;
						public static ActionBar_contentInsetLeft: number;
						public static ActionBar_contentInsetRight: number;
						public static ActionBar_contentInsetStart: number;
						public static ActionBar_contentInsetStartWithNavigation: number;
						public static ActionBar_customNavigationLayout: number;
						public static ActionBar_displayOptions: number;
						public static ActionBar_divider: number;
						public static ActionBar_elevation: number;
						public static ActionBar_height: number;
						public static ActionBar_hideOnContentScroll: number;
						public static ActionBar_homeAsUpIndicator: number;
						public static ActionBar_homeLayout: number;
						public static ActionBar_icon: number;
						public static ActionBar_indeterminateProgressStyle: number;
						public static ActionBar_itemPadding: number;
						public static ActionBar_logo: number;
						public static ActionBar_navigationMode: number;
						public static ActionBar_popupTheme: number;
						public static ActionBar_progressBarPadding: number;
						public static ActionBar_progressBarStyle: number;
						public static ActionBar_subtitle: number;
						public static ActionBar_subtitleTextStyle: number;
						public static ActionBar_title: number;
						public static ActionBar_titleTextStyle: number;
						public static ActionBarLayout: androidNative.Array<number>;
						public static ActionBarLayout_android_layout_gravity: number;
						public static ActionMenuItemView: androidNative.Array<number>;
						public static ActionMenuItemView_android_minWidth: number;
						public static ActionMenuView: androidNative.Array<number>;
						public static ActionMode: androidNative.Array<number>;
						public static ActionMode_background: number;
						public static ActionMode_backgroundSplit: number;
						public static ActionMode_closeItemLayout: number;
						public static ActionMode_height: number;
						public static ActionMode_subtitleTextStyle: number;
						public static ActionMode_titleTextStyle: number;
						public static ActivityChooserView: androidNative.Array<number>;
						public static ActivityChooserView_expandActivityOverflowButtonDrawable: number;
						public static ActivityChooserView_initialActivityCount: number;
						public static AlertDialog: androidNative.Array<number>;
						public static AlertDialog_android_layout: number;
						public static AlertDialog_buttonIconDimen: number;
						public static AlertDialog_buttonPanelSideLayout: number;
						public static AlertDialog_listItemLayout: number;
						public static AlertDialog_listLayout: number;
						public static AlertDialog_multiChoiceItemLayout: number;
						public static AlertDialog_showTitle: number;
						public static AlertDialog_singleChoiceItemLayout: number;
						public static AnimatedStateListDrawableCompat: androidNative.Array<number>;
						public static AnimatedStateListDrawableCompat_android_constantSize: number;
						public static AnimatedStateListDrawableCompat_android_dither: number;
						public static AnimatedStateListDrawableCompat_android_enterFadeDuration: number;
						public static AnimatedStateListDrawableCompat_android_exitFadeDuration: number;
						public static AnimatedStateListDrawableCompat_android_variablePadding: number;
						public static AnimatedStateListDrawableCompat_android_visible: number;
						public static AnimatedStateListDrawableItem: androidNative.Array<number>;
						public static AnimatedStateListDrawableItem_android_drawable: number;
						public static AnimatedStateListDrawableItem_android_id: number;
						public static AnimatedStateListDrawableTransition: androidNative.Array<number>;
						public static AnimatedStateListDrawableTransition_android_drawable: number;
						public static AnimatedStateListDrawableTransition_android_fromId: number;
						public static AnimatedStateListDrawableTransition_android_reversible: number;
						public static AnimatedStateListDrawableTransition_android_toId: number;
						public static AppCompatEmojiHelper: androidNative.Array<number>;
						public static AppCompatImageView: androidNative.Array<number>;
						public static AppCompatImageView_android_src: number;
						public static AppCompatImageView_srcCompat: number;
						public static AppCompatImageView_tint: number;
						public static AppCompatImageView_tintMode: number;
						public static AppCompatSeekBar: androidNative.Array<number>;
						public static AppCompatSeekBar_android_thumb: number;
						public static AppCompatSeekBar_tickMark: number;
						public static AppCompatSeekBar_tickMarkTint: number;
						public static AppCompatSeekBar_tickMarkTintMode: number;
						public static AppCompatTextHelper: androidNative.Array<number>;
						public static AppCompatTextHelper_android_drawableBottom: number;
						public static AppCompatTextHelper_android_drawableEnd: number;
						public static AppCompatTextHelper_android_drawableLeft: number;
						public static AppCompatTextHelper_android_drawableRight: number;
						public static AppCompatTextHelper_android_drawableStart: number;
						public static AppCompatTextHelper_android_drawableTop: number;
						public static AppCompatTextHelper_android_textAppearance: number;
						public static AppCompatTextView: androidNative.Array<number>;
						public static AppCompatTextView_android_textAppearance: number;
						public static AppCompatTextView_autoSizeMaxTextSize: number;
						public static AppCompatTextView_autoSizeMinTextSize: number;
						public static AppCompatTextView_autoSizePresetSizes: number;
						public static AppCompatTextView_autoSizeStepGranularity: number;
						public static AppCompatTextView_autoSizeTextType: number;
						public static AppCompatTextView_drawableBottomCompat: number;
						public static AppCompatTextView_drawableEndCompat: number;
						public static AppCompatTextView_drawableLeftCompat: number;
						public static AppCompatTextView_drawableRightCompat: number;
						public static AppCompatTextView_drawableStartCompat: number;
						public static AppCompatTextView_drawableTint: number;
						public static AppCompatTextView_drawableTintMode: number;
						public static AppCompatTextView_drawableTopCompat: number;
						public static AppCompatTextView_emojiCompatEnabled: number;
						public static AppCompatTextView_firstBaselineToTopHeight: number;
						public static AppCompatTextView_fontFamily: number;
						public static AppCompatTextView_fontVariationSettings: number;
						public static AppCompatTextView_lastBaselineToBottomHeight: number;
						public static AppCompatTextView_lineHeight: number;
						public static AppCompatTextView_textAllCaps: number;
						public static AppCompatTextView_textLocale: number;
						public static AppCompatTheme: androidNative.Array<number>;
						public static AppCompatTheme_actionBarDivider: number;
						public static AppCompatTheme_actionBarItemBackground: number;
						public static AppCompatTheme_actionBarPopupTheme: number;
						public static AppCompatTheme_actionBarSize: number;
						public static AppCompatTheme_actionBarSplitStyle: number;
						public static AppCompatTheme_actionBarStyle: number;
						public static AppCompatTheme_actionBarTabBarStyle: number;
						public static AppCompatTheme_actionBarTabStyle: number;
						public static AppCompatTheme_actionBarTabTextStyle: number;
						public static AppCompatTheme_actionBarTheme: number;
						public static AppCompatTheme_actionBarWidgetTheme: number;
						public static AppCompatTheme_actionButtonStyle: number;
						public static AppCompatTheme_actionDropDownStyle: number;
						public static AppCompatTheme_actionMenuTextAppearance: number;
						public static AppCompatTheme_actionMenuTextColor: number;
						public static AppCompatTheme_actionModeBackground: number;
						public static AppCompatTheme_actionModeCloseButtonStyle: number;
						public static AppCompatTheme_actionModeCloseContentDescription: number;
						public static AppCompatTheme_actionModeCloseDrawable: number;
						public static AppCompatTheme_actionModeCopyDrawable: number;
						public static AppCompatTheme_actionModeCutDrawable: number;
						public static AppCompatTheme_actionModeFindDrawable: number;
						public static AppCompatTheme_actionModePasteDrawable: number;
						public static AppCompatTheme_actionModePopupWindowStyle: number;
						public static AppCompatTheme_actionModeSelectAllDrawable: number;
						public static AppCompatTheme_actionModeShareDrawable: number;
						public static AppCompatTheme_actionModeSplitBackground: number;
						public static AppCompatTheme_actionModeStyle: number;
						public static AppCompatTheme_actionModeTheme: number;
						public static AppCompatTheme_actionModeWebSearchDrawable: number;
						public static AppCompatTheme_actionOverflowButtonStyle: number;
						public static AppCompatTheme_actionOverflowMenuStyle: number;
						public static AppCompatTheme_activityChooserViewStyle: number;
						public static AppCompatTheme_alertDialogButtonGroupStyle: number;
						public static AppCompatTheme_alertDialogCenterButtons: number;
						public static AppCompatTheme_alertDialogStyle: number;
						public static AppCompatTheme_alertDialogTheme: number;
						public static AppCompatTheme_android_windowAnimationStyle: number;
						public static AppCompatTheme_android_windowIsFloating: number;
						public static AppCompatTheme_autoCompleteTextViewStyle: number;
						public static AppCompatTheme_borderlessButtonStyle: number;
						public static AppCompatTheme_buttonBarButtonStyle: number;
						public static AppCompatTheme_buttonBarNegativeButtonStyle: number;
						public static AppCompatTheme_buttonBarNeutralButtonStyle: number;
						public static AppCompatTheme_buttonBarPositiveButtonStyle: number;
						public static AppCompatTheme_buttonBarStyle: number;
						public static AppCompatTheme_buttonStyle: number;
						public static AppCompatTheme_buttonStyleSmall: number;
						public static AppCompatTheme_checkboxStyle: number;
						public static AppCompatTheme_checkedTextViewStyle: number;
						public static AppCompatTheme_colorAccent: number;
						public static AppCompatTheme_colorBackgroundFloating: number;
						public static AppCompatTheme_colorButtonNormal: number;
						public static AppCompatTheme_colorControlActivated: number;
						public static AppCompatTheme_colorControlHighlight: number;
						public static AppCompatTheme_colorControlNormal: number;
						public static AppCompatTheme_colorError: number;
						public static AppCompatTheme_colorPrimary: number;
						public static AppCompatTheme_colorPrimaryDark: number;
						public static AppCompatTheme_colorSwitchThumbNormal: number;
						public static AppCompatTheme_controlBackground: number;
						public static AppCompatTheme_dialogCornerRadius: number;
						public static AppCompatTheme_dialogPreferredPadding: number;
						public static AppCompatTheme_dialogTheme: number;
						public static AppCompatTheme_dividerHorizontal: number;
						public static AppCompatTheme_dividerVertical: number;
						public static AppCompatTheme_dropDownListViewStyle: number;
						public static AppCompatTheme_dropdownListPreferredItemHeight: number;
						public static AppCompatTheme_editTextBackground: number;
						public static AppCompatTheme_editTextColor: number;
						public static AppCompatTheme_editTextStyle: number;
						public static AppCompatTheme_homeAsUpIndicator: number;
						public static AppCompatTheme_imageButtonStyle: number;
						public static AppCompatTheme_listChoiceBackgroundIndicator: number;
						public static AppCompatTheme_listChoiceIndicatorMultipleAnimated: number;
						public static AppCompatTheme_listChoiceIndicatorSingleAnimated: number;
						public static AppCompatTheme_listDividerAlertDialog: number;
						public static AppCompatTheme_listMenuViewStyle: number;
						public static AppCompatTheme_listPopupWindowStyle: number;
						public static AppCompatTheme_listPreferredItemHeight: number;
						public static AppCompatTheme_listPreferredItemHeightLarge: number;
						public static AppCompatTheme_listPreferredItemHeightSmall: number;
						public static AppCompatTheme_listPreferredItemPaddingEnd: number;
						public static AppCompatTheme_listPreferredItemPaddingLeft: number;
						public static AppCompatTheme_listPreferredItemPaddingRight: number;
						public static AppCompatTheme_listPreferredItemPaddingStart: number;
						public static AppCompatTheme_panelBackground: number;
						public static AppCompatTheme_panelMenuListTheme: number;
						public static AppCompatTheme_panelMenuListWidth: number;
						public static AppCompatTheme_popupMenuStyle: number;
						public static AppCompatTheme_popupWindowStyle: number;
						public static AppCompatTheme_radioButtonStyle: number;
						public static AppCompatTheme_ratingBarStyle: number;
						public static AppCompatTheme_ratingBarStyleIndicator: number;
						public static AppCompatTheme_ratingBarStyleSmall: number;
						public static AppCompatTheme_searchViewStyle: number;
						public static AppCompatTheme_seekBarStyle: number;
						public static AppCompatTheme_selectableItemBackground: number;
						public static AppCompatTheme_selectableItemBackgroundBorderless: number;
						public static AppCompatTheme_spinnerDropDownItemStyle: number;
						public static AppCompatTheme_spinnerStyle: number;
						public static AppCompatTheme_switchStyle: number;
						public static AppCompatTheme_textAppearanceLargePopupMenu: number;
						public static AppCompatTheme_textAppearanceListItem: number;
						public static AppCompatTheme_textAppearanceListItemSecondary: number;
						public static AppCompatTheme_textAppearanceListItemSmall: number;
						public static AppCompatTheme_textAppearancePopupMenuHeader: number;
						public static AppCompatTheme_textAppearanceSearchResultSubtitle: number;
						public static AppCompatTheme_textAppearanceSearchResultTitle: number;
						public static AppCompatTheme_textAppearanceSmallPopupMenu: number;
						public static AppCompatTheme_textColorAlertDialogListItem: number;
						public static AppCompatTheme_textColorSearchUrl: number;
						public static AppCompatTheme_toolbarNavigationButtonStyle: number;
						public static AppCompatTheme_toolbarStyle: number;
						public static AppCompatTheme_tooltipForegroundColor: number;
						public static AppCompatTheme_tooltipFrameBackground: number;
						public static AppCompatTheme_viewInflaterClass: number;
						public static AppCompatTheme_windowActionBar: number;
						public static AppCompatTheme_windowActionBarOverlay: number;
						public static AppCompatTheme_windowActionModeOverlay: number;
						public static AppCompatTheme_windowFixedHeightMajor: number;
						public static AppCompatTheme_windowFixedHeightMinor: number;
						public static AppCompatTheme_windowFixedWidthMajor: number;
						public static AppCompatTheme_windowFixedWidthMinor: number;
						public static AppCompatTheme_windowMinWidthMajor: number;
						public static AppCompatTheme_windowMinWidthMinor: number;
						public static AppCompatTheme_windowNoTitle: number;
						public static ButtonBarLayout: androidNative.Array<number>;
						public static ButtonBarLayout_allowStacking: number;
						public static Capability: androidNative.Array<number>;
						public static Capability_queryPatterns: number;
						public static Capability_shortcutMatchRequired: number;
						public static CheckedTextView: androidNative.Array<number>;
						public static CheckedTextView_android_checkMark: number;
						public static CheckedTextView_checkMarkCompat: number;
						public static CheckedTextView_checkMarkTint: number;
						public static CheckedTextView_checkMarkTintMode: number;
						public static ColorStateListItem: androidNative.Array<number>;
						public static ColorStateListItem_alpha: number;
						public static ColorStateListItem_android_alpha: number;
						public static ColorStateListItem_android_color: number;
						public static ColorStateListItem_android_lStar: number;
						public static ColorStateListItem_lStar: number;
						public static CompoundButton: androidNative.Array<number>;
						public static CompoundButton_android_button: number;
						public static CompoundButton_buttonCompat: number;
						public static CompoundButton_buttonTint: number;
						public static CompoundButton_buttonTintMode: number;
						public static DrawerArrowToggle: androidNative.Array<number>;
						public static DrawerArrowToggle_arrowHeadLength: number;
						public static DrawerArrowToggle_arrowShaftLength: number;
						public static DrawerArrowToggle_barLength: number;
						public static DrawerArrowToggle_color: number;
						public static DrawerArrowToggle_drawableSize: number;
						public static DrawerArrowToggle_gapBetweenBars: number;
						public static DrawerArrowToggle_spinBars: number;
						public static DrawerArrowToggle_thickness: number;
						public static FontFamily: androidNative.Array<number>;
						public static FontFamily_fontProviderAuthority: number;
						public static FontFamily_fontProviderCerts: number;
						public static FontFamily_fontProviderFetchStrategy: number;
						public static FontFamily_fontProviderFetchTimeout: number;
						public static FontFamily_fontProviderPackage: number;
						public static FontFamily_fontProviderQuery: number;
						public static FontFamily_fontProviderSystemFontFamily: number;
						public static FontFamilyFont: androidNative.Array<number>;
						public static FontFamilyFont_android_font: number;
						public static FontFamilyFont_android_fontStyle: number;
						public static FontFamilyFont_android_fontVariationSettings: number;
						public static FontFamilyFont_android_fontWeight: number;
						public static FontFamilyFont_android_ttcIndex: number;
						public static FontFamilyFont_font: number;
						public static FontFamilyFont_fontStyle: number;
						public static FontFamilyFont_fontVariationSettings: number;
						public static FontFamilyFont_fontWeight: number;
						public static FontFamilyFont_ttcIndex: number;
						public static Fragment: androidNative.Array<number>;
						public static Fragment_android_id: number;
						public static Fragment_android_name: number;
						public static Fragment_android_tag: number;
						public static FragmentContainerView: androidNative.Array<number>;
						public static FragmentContainerView_android_name: number;
						public static FragmentContainerView_android_tag: number;
						public static GradientColor: androidNative.Array<number>;
						public static GradientColor_android_centerColor: number;
						public static GradientColor_android_centerX: number;
						public static GradientColor_android_centerY: number;
						public static GradientColor_android_endColor: number;
						public static GradientColor_android_endX: number;
						public static GradientColor_android_endY: number;
						public static GradientColor_android_gradientRadius: number;
						public static GradientColor_android_startColor: number;
						public static GradientColor_android_startX: number;
						public static GradientColor_android_startY: number;
						public static GradientColor_android_tileMode: number;
						public static GradientColor_android_type: number;
						public static GradientColorItem: androidNative.Array<number>;
						public static GradientColorItem_android_color: number;
						public static GradientColorItem_android_offset: number;
						public static LinearLayoutCompat: androidNative.Array<number>;
						public static LinearLayoutCompat_android_baselineAligned: number;
						public static LinearLayoutCompat_android_baselineAlignedChildIndex: number;
						public static LinearLayoutCompat_android_gravity: number;
						public static LinearLayoutCompat_android_orientation: number;
						public static LinearLayoutCompat_android_weightSum: number;
						public static LinearLayoutCompat_divider: number;
						public static LinearLayoutCompat_dividerPadding: number;
						public static LinearLayoutCompat_measureWithLargestChild: number;
						public static LinearLayoutCompat_showDividers: number;
						public static LinearLayoutCompat_Layout: androidNative.Array<number>;
						public static LinearLayoutCompat_Layout_android_layout_gravity: number;
						public static LinearLayoutCompat_Layout_android_layout_height: number;
						public static LinearLayoutCompat_Layout_android_layout_weight: number;
						public static LinearLayoutCompat_Layout_android_layout_width: number;
						public static ListPopupWindow: androidNative.Array<number>;
						public static ListPopupWindow_android_dropDownHorizontalOffset: number;
						public static ListPopupWindow_android_dropDownVerticalOffset: number;
						public static MenuGroup: androidNative.Array<number>;
						public static MenuGroup_android_checkableBehavior: number;
						public static MenuGroup_android_enabled: number;
						public static MenuGroup_android_id: number;
						public static MenuGroup_android_menuCategory: number;
						public static MenuGroup_android_orderInCategory: number;
						public static MenuGroup_android_visible: number;
						public static MenuItem: androidNative.Array<number>;
						public static MenuItem_actionLayout: number;
						public static MenuItem_actionProviderClass: number;
						public static MenuItem_actionViewClass: number;
						public static MenuItem_alphabeticModifiers: number;
						public static MenuItem_android_alphabeticShortcut: number;
						public static MenuItem_android_checkable: number;
						public static MenuItem_android_checked: number;
						public static MenuItem_android_enabled: number;
						public static MenuItem_android_icon: number;
						public static MenuItem_android_id: number;
						public static MenuItem_android_menuCategory: number;
						public static MenuItem_android_numericShortcut: number;
						public static MenuItem_android_onClick: number;
						public static MenuItem_android_orderInCategory: number;
						public static MenuItem_android_title: number;
						public static MenuItem_android_titleCondensed: number;
						public static MenuItem_android_visible: number;
						public static MenuItem_contentDescription: number;
						public static MenuItem_iconTint: number;
						public static MenuItem_iconTintMode: number;
						public static MenuItem_numericModifiers: number;
						public static MenuItem_showAsAction: number;
						public static MenuItem_tooltipText: number;
						public static MenuView: androidNative.Array<number>;
						public static MenuView_android_headerBackground: number;
						public static MenuView_android_horizontalDivider: number;
						public static MenuView_android_itemBackground: number;
						public static MenuView_android_itemIconDisabledAlpha: number;
						public static MenuView_android_itemTextAppearance: number;
						public static MenuView_android_verticalDivider: number;
						public static MenuView_android_windowAnimationStyle: number;
						public static MenuView_preserveIconSpacing: number;
						public static MenuView_subMenuArrow: number;
						public static PopupWindow: androidNative.Array<number>;
						public static PopupWindow_android_popupAnimationStyle: number;
						public static PopupWindow_android_popupBackground: number;
						public static PopupWindow_overlapAnchor: number;
						public static PopupWindowBackgroundState: androidNative.Array<number>;
						public static PopupWindowBackgroundState_state_above_anchor: number;
						public static RecycleListView: androidNative.Array<number>;
						public static RecycleListView_paddingBottomNoButtons: number;
						public static RecycleListView_paddingTopNoTitle: number;
						public static ScrollBar: androidNative.Array<number>;
						public static ScrollBar_sb_handlerColor: number;
						public static ScrollBar_sb_horizontal: number;
						public static ScrollBar_sb_indicatorColor: number;
						public static ScrollBar_sb_indicatorTextColor: number;
						public static SearchView: androidNative.Array<number>;
						public static SearchView_android_focusable: number;
						public static SearchView_android_imeOptions: number;
						public static SearchView_android_inputType: number;
						public static SearchView_android_maxWidth: number;
						public static SearchView_closeIcon: number;
						public static SearchView_commitIcon: number;
						public static SearchView_defaultQueryHint: number;
						public static SearchView_goIcon: number;
						public static SearchView_iconifiedByDefault: number;
						public static SearchView_layout: number;
						public static SearchView_queryBackground: number;
						public static SearchView_queryHint: number;
						public static SearchView_searchHintIcon: number;
						public static SearchView_searchIcon: number;
						public static SearchView_submitBackground: number;
						public static SearchView_suggestionRowLayout: number;
						public static SearchView_voiceIcon: number;
						public static Spinner: androidNative.Array<number>;
						public static Spinner_android_dropDownWidth: number;
						public static Spinner_android_entries: number;
						public static Spinner_android_popupBackground: number;
						public static Spinner_android_prompt: number;
						public static Spinner_popupTheme: number;
						public static StateListDrawable: androidNative.Array<number>;
						public static StateListDrawable_android_constantSize: number;
						public static StateListDrawable_android_dither: number;
						public static StateListDrawable_android_enterFadeDuration: number;
						public static StateListDrawable_android_exitFadeDuration: number;
						public static StateListDrawable_android_variablePadding: number;
						public static StateListDrawable_android_visible: number;
						public static StateListDrawableItem: androidNative.Array<number>;
						public static StateListDrawableItem_android_drawable: number;
						public static SwitchCompat: androidNative.Array<number>;
						public static SwitchCompat_android_textOff: number;
						public static SwitchCompat_android_textOn: number;
						public static SwitchCompat_android_thumb: number;
						public static SwitchCompat_showText: number;
						public static SwitchCompat_splitTrack: number;
						public static SwitchCompat_switchMinWidth: number;
						public static SwitchCompat_switchPadding: number;
						public static SwitchCompat_switchTextAppearance: number;
						public static SwitchCompat_thumbTextPadding: number;
						public static SwitchCompat_thumbTint: number;
						public static SwitchCompat_thumbTintMode: number;
						public static SwitchCompat_track: number;
						public static SwitchCompat_trackTint: number;
						public static SwitchCompat_trackTintMode: number;
						public static TextAppearance: androidNative.Array<number>;
						public static TextAppearance_android_fontFamily: number;
						public static TextAppearance_android_shadowColor: number;
						public static TextAppearance_android_shadowDx: number;
						public static TextAppearance_android_shadowDy: number;
						public static TextAppearance_android_shadowRadius: number;
						public static TextAppearance_android_textColor: number;
						public static TextAppearance_android_textColorHint: number;
						public static TextAppearance_android_textColorLink: number;
						public static TextAppearance_android_textFontWeight: number;
						public static TextAppearance_android_textSize: number;
						public static TextAppearance_android_textStyle: number;
						public static TextAppearance_android_typeface: number;
						public static TextAppearance_fontFamily: number;
						public static TextAppearance_fontVariationSettings: number;
						public static TextAppearance_textAllCaps: number;
						public static TextAppearance_textLocale: number;
						public static Toolbar: androidNative.Array<number>;
						public static Toolbar_android_gravity: number;
						public static Toolbar_android_minHeight: number;
						public static Toolbar_buttonGravity: number;
						public static Toolbar_collapseContentDescription: number;
						public static Toolbar_collapseIcon: number;
						public static Toolbar_contentInsetEnd: number;
						public static Toolbar_contentInsetEndWithActions: number;
						public static Toolbar_contentInsetLeft: number;
						public static Toolbar_contentInsetRight: number;
						public static Toolbar_contentInsetStart: number;
						public static Toolbar_contentInsetStartWithNavigation: number;
						public static Toolbar_logo: number;
						public static Toolbar_logoDescription: number;
						public static Toolbar_maxButtonHeight: number;
						public static Toolbar_menu: number;
						public static Toolbar_navigationContentDescription: number;
						public static Toolbar_navigationIcon: number;
						public static Toolbar_popupTheme: number;
						public static Toolbar_subtitle: number;
						public static Toolbar_subtitleTextAppearance: number;
						public static Toolbar_subtitleTextColor: number;
						public static Toolbar_title: number;
						public static Toolbar_titleMargin: number;
						public static Toolbar_titleMarginBottom: number;
						public static Toolbar_titleMarginEnd: number;
						public static Toolbar_titleMarginStart: number;
						public static Toolbar_titleMarginTop: number;
						public static Toolbar_titleMargins: number;
						public static Toolbar_titleTextAppearance: number;
						public static Toolbar_titleTextColor: number;
						public static View: androidNative.Array<number>;
						public static View_android_focusable: number;
						public static View_android_theme: number;
						public static View_paddingEnd: number;
						public static View_paddingStart: number;
						public static View_theme: number;
						public static ViewBackgroundHelper: androidNative.Array<number>;
						public static ViewBackgroundHelper_android_background: number;
						public static ViewBackgroundHelper_backgroundTint: number;
						public static ViewBackgroundHelper_backgroundTintMode: number;
						public static ViewStubCompat: androidNative.Array<number>;
						public static ViewStubCompat_android_id: number;
						public static ViewStubCompat_android_inflatedId: number;
						public static ViewStubCompat_android_layout: number;
						public static<clinit>(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export class RenderingHandler {
					public static class: java.lang.Class<com.github.barteksc.pdfviewer.RenderingHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
				export module RenderingHandler {
					export class RenderingTask {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.RenderingHandler.RenderingTask>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module exception {
					export class PageRenderingException {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.exception.PageRenderingException>;
						public constructor(param0: number, param1: java.lang.Throwable);
						public getPage(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module link {
					export class DefaultLinkHandler extends com.github.barteksc.pdfviewer.link.LinkHandler {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.link.DefaultLinkHandler>;
						public handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
						public constructor(param0: com.github.barteksc.pdfviewer.PDFView);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module link {
					export class LinkHandler {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.link.LinkHandler>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.link.LinkHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void });
						public constructor();
						public handleLinkEvent(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class Callbacks {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.Callbacks>;
						public setOnDraw(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): void;
						public setOnError(param0: com.github.barteksc.pdfviewer.listener.OnErrorListener): void;
						public constructor();
						public callOnLoadComplete(param0: number): void;
						public setOnPageChange(param0: com.github.barteksc.pdfviewer.listener.OnPageChangeListener): void;
						public callOnLongPress(param0: globalAndroid.view.MotionEvent): void;
						public getOnError(): com.github.barteksc.pdfviewer.listener.OnErrorListener;
						public setOnPageScroll(param0: com.github.barteksc.pdfviewer.listener.OnPageScrollListener): void;
						public callLinkHandler(param0: com.github.barteksc.pdfviewer.model.LinkTapEvent): void;
						public callOnTap(param0: globalAndroid.view.MotionEvent): boolean;
						public setOnLoadComplete(param0: com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener): void;
						public setOnPageError(param0: com.github.barteksc.pdfviewer.listener.OnPageErrorListener): void;
						public setOnRender(param0: com.github.barteksc.pdfviewer.listener.OnRenderListener): void;
						public callOnPageChange(param0: number, param1: number): void;
						public setOnDrawAll(param0: com.github.barteksc.pdfviewer.listener.OnDrawListener): void;
						public getOnDrawAll(): com.github.barteksc.pdfviewer.listener.OnDrawListener;
						public setOnLongPress(param0: com.github.barteksc.pdfviewer.listener.OnLongPressListener): void;
						public setLinkHandler(param0: com.github.barteksc.pdfviewer.link.LinkHandler): void;
						public callOnPageScroll(param0: number, param1: number): void;
						public callOnPageError(param0: number, param1: java.lang.Throwable): boolean;
						public setOnTap(param0: com.github.barteksc.pdfviewer.listener.OnTapListener): void;
						public callOnRender(param0: number): void;
						public getOnDraw(): com.github.barteksc.pdfviewer.listener.OnDrawListener;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnDrawListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnDrawListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnDrawListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onLayerDrawn(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number): void });
						public constructor();
						public onLayerDrawn(param0: globalAndroid.graphics.Canvas, param1: number, param2: number, param3: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnErrorListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnErrorListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onError(param0: java.lang.Throwable): void });
						public constructor();
						public onError(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnLoadCompleteListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { loadComplete(param0: number): void });
						public constructor();
						public loadComplete(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnLongPressListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnLongPressListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnLongPressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onLongPress(param0: globalAndroid.view.MotionEvent): void });
						public constructor();
						public onLongPress(param0: globalAndroid.view.MotionEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnPageChangeListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageChangeListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPageChanged(param0: number, param1: number): void });
						public constructor();
						public onPageChanged(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnPageErrorListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageErrorListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPageError(param0: number, param1: java.lang.Throwable): void });
						public constructor();
						public onPageError(param0: number, param1: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnPageScrollListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnPageScrollListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnPageScrollListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onPageScrolled(param0: number, param1: number): void });
						public constructor();
						public onPageScrolled(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnRenderListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnRenderListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnRenderListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onInitiallyRendered(param0: number): void });
						public constructor();
						public onInitiallyRendered(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module listener {
					export class OnTapListener {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.listener.OnTapListener>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.listener.OnTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onTap(param0: globalAndroid.view.MotionEvent): boolean });
						public constructor();
						public onTap(param0: globalAndroid.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module model {
					export class LinkTapEvent {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.model.LinkTapEvent>;
						public getOriginalY(): number;
						public getDocumentY(): number;
						public getLink(): com.shockwave.pdfium.PdfDocument.Link;
						public getDocumentX(): number;
						public getMappedLinkRect(): globalAndroid.graphics.RectF;
						public getOriginalX(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: globalAndroid.graphics.RectF, param5: com.shockwave.pdfium.PdfDocument.Link);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module model {
					export class PagePart {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.model.PagePart>;
						public constructor(param0: number, param1: globalAndroid.graphics.Bitmap, param2: globalAndroid.graphics.RectF, param3: boolean, param4: number);
						public getCacheOrder(): number;
						public setCacheOrder(param0: number): void;
						public getRenderedBitmap(): globalAndroid.graphics.Bitmap;
						public equals(param0: any): boolean;
						public getPage(): number;
						public getPageRelativeBounds(): globalAndroid.graphics.RectF;
						public isThumbnail(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module scroll {
					export class DefaultScrollHandle implements com.github.barteksc.pdfviewer.scroll.ScrollHandle {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.scroll.DefaultScrollHandle>;
						public textView: globalAndroid.widget.TextView;
						public context: globalAndroid.content.Context;
						public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
						public constructor(param0: globalAndroid.content.Context);
						public hideDelayed(): void;
						public setScroll(param0: number): void;
						public shown(): boolean;
						public hide(): void;
						public setPageNum(param0: number): void;
						public constructor(param0: globalAndroid.content.Context, param1: boolean);
						public show(): void;
						public setTextColor(param0: number): void;
						public setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void;
						public destroyLayout(): void;
						public setTextSize(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module scroll {
					export class ScrollHandle {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.scroll.ScrollHandle>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.scroll.ScrollHandle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setScroll(param0: number): void; setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void; destroyLayout(): void; setPageNum(param0: number): void; shown(): boolean; show(): void; hide(): void; hideDelayed(): void });
						public constructor();
						public hideDelayed(): void;
						public show(): void;
						public setScroll(param0: number): void;
						public setupLayout(param0: com.github.barteksc.pdfviewer.PDFView): void;
						public destroyLayout(): void;
						public shown(): boolean;
						public hide(): void;
						public setPageNum(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class AssetSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.AssetSource>;
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class ByteArraySource extends com.github.barteksc.pdfviewer.source.DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.ByteArraySource>;
						public constructor(param0: androidNative.Array<number>);
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.DocumentSource>;
						/**
						 * Constructs a new instance of the com.github.barteksc.pdfviewer.source.DocumentSource interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument });
						public constructor();
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class FileSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.FileSource>;
						public constructor(param0: java.io.File);
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class InputStreamSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.InputStreamSource>;
						public constructor(param0: java.io.InputStream);
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module source {
					export class UriSource extends com.github.barteksc.pdfviewer.source.DocumentSource {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.source.UriSource>;
						public createDocument(param0: globalAndroid.content.Context, param1: com.shockwave.pdfium.PdfiumCore, param2: string): com.shockwave.pdfium.PdfDocument;
						public constructor(param0: globalAndroid.net.Uri);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class ArrayUtils {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.ArrayUtils>;
						public static arrayToString(param0: androidNative.Array<number>): string;
						public static deleteDuplicatedPages(param0: androidNative.Array<number>): androidNative.Array<number>;
						public static calculateIndexesInDuplicateArray(param0: androidNative.Array<number>): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class Constants {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants>;
						public static DEBUG_MODE: boolean;
						public static THUMBNAIL_RATIO: number;
						public static PART_SIZE: number;
						public static PRELOAD_OFFSET: number;
						public constructor();
					}
					export module Constants {
						export class Cache {
							public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants.Cache>;
							public static CACHE_SIZE: number;
							public static THUMBNAILS_CACHE_SIZE: number;
							public constructor();
						}
						export class Pinch {
							public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Constants.Pinch>;
							public static MAXIMUM_ZOOM: number;
							public static MINIMUM_ZOOM: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class FileUtils {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.FileUtils>;
						public static fileFromAsset(param0: globalAndroid.content.Context, param1: string): java.io.File;
						public static copy(param0: java.io.InputStream, param1: java.io.File): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class FitPolicy {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.FitPolicy>;
						public static WIDTH: com.github.barteksc.pdfviewer.util.FitPolicy;
						public static HEIGHT: com.github.barteksc.pdfviewer.util.FitPolicy;
						public static BOTH: com.github.barteksc.pdfviewer.util.FitPolicy;
						public static values(): androidNative.Array<com.github.barteksc.pdfviewer.util.FitPolicy>;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.util.FitPolicy;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class MathUtils {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.MathUtils>;
						public static ceil(param0: number): number;
						public static limit(param0: number, param1: number, param2: number): number;
						public static max(param0: number, param1: number): number;
						public static min(param0: number, param1: number): number;
						public static floor(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class PageSizeCalculator {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.PageSizeCalculator>;
						public calculate(param0: com.shockwave.pdfium.util.Size): com.shockwave.pdfium.util.SizeF;
						public getOptimalMaxWidthPageSize(): com.shockwave.pdfium.util.SizeF;
						public constructor(param0: com.github.barteksc.pdfviewer.util.FitPolicy, param1: com.shockwave.pdfium.util.Size, param2: com.shockwave.pdfium.util.Size, param3: com.shockwave.pdfium.util.Size, param4: boolean);
						public getOptimalMaxHeightPageSize(): com.shockwave.pdfium.util.SizeF;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class SnapEdge {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.SnapEdge>;
						public static START: com.github.barteksc.pdfviewer.util.SnapEdge;
						public static CENTER: com.github.barteksc.pdfviewer.util.SnapEdge;
						public static END: com.github.barteksc.pdfviewer.util.SnapEdge;
						public static NONE: com.github.barteksc.pdfviewer.util.SnapEdge;
						public static values(): androidNative.Array<com.github.barteksc.pdfviewer.util.SnapEdge>;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.util.SnapEdge;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module barteksc {
			export module pdfviewer {
				export module util {
					export class Util {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.util.Util>;
						public constructor();
						public static toByteArray(param0: java.io.InputStream): androidNative.Array<number>;
						public static getDP(param0: globalAndroid.content.Context, param1: number): number;
					}
				}
			}
		}
	}
}
