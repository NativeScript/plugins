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
					public isFitEachPage(): boolean;
					public recycle(): void;
					public isZooming(): boolean;
					public moveRelativeTo(param0: number, param1: number): void;
					public fromUri(param0: globalAndroid.net.Uri): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public zoomWithAnimation(param0: number): void;
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
					public fromBytes(param0: native.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
					public getZoom(): number;
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
					public loadPages(): void;
					public stopFling(): void;
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
						public enableAnnotationRendering(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public nightMode(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public spacing(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public fitEachPage(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pageSnap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableAntialiasing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public load(): void;
						public disableLongpress(): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableSwipe(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public defaultPage(param0: number): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public swipeHorizontal(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public enableDoubletap(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public password(param0: string): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public onLoad(param0: com.github.barteksc.pdfviewer.listener.OnLoadCompleteListener): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public autoSpacing(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pageFling(param0: boolean): com.github.barteksc.pdfviewer.PDFView.Configurator;
						public pages(param0: native.Array<number>): com.github.barteksc.pdfviewer.PDFView.Configurator;
					}
					export class ScrollDir {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
						public static NONE: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static START: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static END: com.github.barteksc.pdfviewer.PDFView.ScrollDir;
						public static values(): native.Array<com.github.barteksc.pdfviewer.PDFView.ScrollDir>;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.ScrollDir;
					}
					export class State {
						public static class: java.lang.Class<com.github.barteksc.pdfviewer.PDFView.State>;
						public static DEFAULT: com.github.barteksc.pdfviewer.PDFView.State;
						public static LOADED: com.github.barteksc.pdfviewer.PDFView.State;
						public static SHOWN: com.github.barteksc.pdfviewer.PDFView.State;
						public static ERROR: com.github.barteksc.pdfviewer.PDFView.State;
						public static valueOf(param0: string): com.github.barteksc.pdfviewer.PDFView.State;
						public static values(): native.Array<com.github.barteksc.pdfviewer.PDFView.State>;
					}
				}

				export module listener {
					export interface OnErrorListener {
						onError(throwable: java.lang.Throwable): void;
					}

					interface IOnLoadCompleteListener {
						/**
						 * Called when the PDF is loaded
						 * @param numPages the number of pages in this PDF file
						 */
						loadComplete(numPages: number): void;
					}

					export class OnLoadCompleteListener implements IOnLoadCompleteListener {
						constructor(implementation: IOnLoadCompleteListener);

						/**
						 * Called when the PDF is loaded
						 * @param numPages the number of pages in this PDF file
						 */
						loadComplete(numPages: number): void;
					}
				}
			}
		}
	}
}

import pdfviewer = com.github.barteksc.pdfviewer;

declare class Configurator {
	load(): void;
	defaultPage(pageNumber: number): this;
	pages(...pageNumbers: number[]): this;
	enableAnnotationRendering(enable: boolean): this;
	enableDoubletap(enable: boolean): this;
	enableSwipe(enable: boolean): this;
	fitEachPage(enable: boolean): this;
	spacing(spacing: number): this;
	onLoad(onLoadCompleteListener: pdfviewer.listener.OnLoadCompleteListener): this;
	autoSpacing(enable: boolean): this;
	swipeHorizontal(horizontal: boolean): this;
}
