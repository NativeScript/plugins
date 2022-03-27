import { UIChartsViewBase } from './common';
export declare class UIChartsView extends UIChartsViewBase {
	_chartInitialized: boolean;
	customLayoutChangeListener: any;
	chartHeight: any;
	chartWidth: any;
	maxHeight: any;
	onLoaded(): void;
	createNativeView(): any;
	onUnloaded(): void;
	/**
	 * Initializes properties/listeners of the native view.
	 */
	initNativeView(): void;
	disposeNativeView(): void;
	onOrientationChange(): void;
	setOptions(opts: any): void;
	updateOptions(opts: any): void;
	setLangOptions(opts: any): void;
	setExtremes(newMin: any, newMax: any, xAxisIndex?: number): void;
	enableAnnotationsModule(): void;
}
