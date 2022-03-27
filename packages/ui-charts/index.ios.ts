import { UIChartsViewBase } from './common';
import { optionsHandler } from './options-handlers/options-handler';
import { langHandler } from './options-handlers/lang/lang-handler';

export class UIChartsView extends UIChartsViewBase {
	public _chartInitialized: boolean = false;
	private _delegate: HighchartsViewDelegateImpl;

	createNativeView() {
		const chartView = HIChartView.alloc().initWithFrame(CGRectMake(0, 0, 200, 200));
		this._delegate = HighchartsViewDelegateImpl.initWithOwner();
		chartView.delegate = this._delegate;
		this.checkController(chartView);
		return chartView;
	}

	disposeNativeView() {
		this._chartInitialized = false;
		super.disposeNativeView();
	}

	/**
	 * Initializes properties/listeners of the native view.
	 */
	initNativeView(): void {
		// Attach the owner to nativeView.
		// When nativeView is tapped we get the owning JS object through this field.
		(<any>this.nativeView).owner = new WeakRef(this);
		super.initNativeView();
		this.checkController();

		// NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock("valueChange", null, NSOperationQueue.mainQueue, this.onValueChange);
	}

	private checkController(nativeView?: HIChartView) {
		nativeView = nativeView || this.nativeView;
		if (nativeView && !nativeView.viewController) {
			const currentVC = getVisibleViewController();
			if (currentVC) {
				nativeView.viewController = currentVC;
			}
		}
	}

	setOptions(opts: any) {
		this.options = opts;
		const hiOptions = optionsHandler(this.options);
		if (this.nativeView) {
			this.checkController();
			this.nativeView.options = hiOptions;
			this._chartInitialized = true;
			this.nativeView.reload();
		}
	}

	setLangOptions(opts: any) {
		const hiLang = langHandler(opts);
		if (this.nativeView) {
			this.nativeView.lang = hiLang;
		}
	}

	updateOptions(opts) {
		this.options = opts;
		const hiOptions = optionsHandler(this.options);
		if (this.nativeView) {
			this.checkController();
			this.nativeView.updateRedrawOneToOneAnimation(hiOptions, 1, 1, new HIAnimationOptionsObject());
		}
	}

	setExtremes(newMin, newMax, xAxisIndex = 0) {
		const nativeview = this.nativeView;
		if (nativeview) {
			const opts = nativeview.options;
			const xaxis = opts.xAxis.objectAtIndex(xAxisIndex);

			if (xaxis) {
				xaxis.min = newMin;
				xaxis.max = newMax;
			}
			nativeview.zoomOut();
			nativeview.updateRedrawOneToOneAnimation(nativeview.options, 1, 1, new HIAnimationOptionsObject());
		}
	}

	enableAnnotationsModule() {
		if (this.nativeView) {
			this.nativeView.plugins = ['annotations'];
		}
	}
}

@NativeClass()
class HighchartsViewDelegateImpl extends NSObject implements HIChartViewDelegate {
	static ObjCProtocols = [HIChartViewDelegate]; // define our native protocalls

	static initWithOwner(): HighchartsViewDelegateImpl {
		return <HighchartsViewDelegateImpl>HighchartsViewDelegateImpl.new();
	}

	chartViewDidLoad(chart) {
		// console.log('HighchartsViewDelegateImpl Did load chart:', chart);
	}
}

function getVisibleViewController(rootViewController?: UIViewController | UINavigationController): UIViewController {
	if (UIApplication.sharedApplication && UIApplication.sharedApplication.keyWindow) {
		if (!rootViewController) {
			rootViewController = UIApplication.sharedApplication.keyWindow.rootViewController;
		}
		if (rootViewController) {
			if (rootViewController.presentedViewController) {
				return getVisibleViewController(rootViewController.presentedViewController);
			}
			if (rootViewController.isKindOfClass(UINavigationController.class())) {
				return getVisibleViewController((<UINavigationController>rootViewController).visibleViewController);
			}
			if (rootViewController.isKindOfClass(UITabBarController.class())) {
				return getVisibleViewController(rootViewController);
			}
		}
	}

	return rootViewController;
}
