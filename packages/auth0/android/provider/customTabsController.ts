import ActivityNotFoundException = android.content.ActivityNotFoundException;
import ComponentName = android.content.ComponentName;
import Context = android.content.Context;
import Intent = android.content.Intent;
import PackageManager = android.content.pm.PackageManager;
import ResolveInfo = android.content.pm.ResolveInfo;
import Uri = android.net.Uri;
import Build = android.os.Build;
import CustomTabsClient = androidx.browser.customtabs.CustomTabsClient;
import CustomTabsServiceConnection = androidx.browser.customtabs.CustomTabsServiceConnection;
import CustomTabsSession = androidx.browser.customtabs.CustomTabsSession;
import Log = android.util.Log;

import AtomicReference = java.util.concurrent.atomic.AtomicReference;

import { CustomTabsOptions } from './customTabsOptions';

@NativeClass()
class CustomTabsController extends CustomTabsServiceConnection {
	private static readonly TAG: string = 'CustomTabsController';
	private static readonly MAX_WAIT_TIME_SECONDS: number = 1;
	private static readonly ACTION_CUSTOM_TABS_CONNECTION: string = 'android.support.customtabs.action.CustomTabsService';

	// Known Browsers with Custom Tabs support
	private static readonly CHROME_STABLE: string = 'com.android.chrome';
	private static readonly CHROME_SYSTEM: string = 'com.google.android.apps.chrome';
	private static readonly CHROME_BETA: string = 'com.android.chrome.beta';
	private static readonly CHROME_DEV: string = 'com.android.chrome.dev';

	private readonly context: WeakRef<Context>;
	private readonly session: AtomicReference<CustomTabsSession>;
	private readonly sessionLatch: Promise<boolean>;
	private readonly preferredPackage: string;

	private customTabsOptions: CustomTabsOptions;
	private isBound: boolean;
	private sessionLatchReady: (value: boolean) => void;

	constructor(context: Context, browserPackage: string = CustomTabsController.getBestBrowserPackage(context)) {
		super();
		this.context = new WeakRef(context);
		this.session = new AtomicReference<CustomTabsSession>();
		this.sessionLatch = new Promise<boolean>((resolve, reject) => {
			this.sessionLatchReady = resolve;
		});
		this.preferredPackage = browserPackage;

		return global.__native(this);
	}

	public clearContext() {
		this.context.clear();
	}

	public setCustomizationOptions(options?: CustomTabsOptions) {
		this.customTabsOptions = options;
	}

	public getCustomizationOptions(): CustomTabsOptions {
		return this.customTabsOptions;
	}

	public onCustomTabsServiceConnected(componentName: ComponentName, customTabsClient: CustomTabsClient): void {
		if (customTabsClient == null) {
			return;
		}
		Log.d(CustomTabsController.TAG, 'CustomTabs Service connected');
		customTabsClient.warmup(0);
		this.session.set(customTabsClient.newSession(null));
		this.sessionLatchReady(true);
	}

	public onServiceDisconnected(componentName: ComponentName): void {
		Log.d(CustomTabsController.TAG, 'CustomTabs Service disconnected');
		this.session.set(null);
	}

	/**
	 * Attempts to bind the Custom Tabs Service to the Context.
	 */
	public bindService(): void {
		Log.v(CustomTabsController.TAG, 'Trying to bind the service');
		const context = this.context.get();
		this.isBound = false;
		if (context != null && this.preferredPackage != null) {
			this.isBound = CustomTabsClient.bindCustomTabsService(context, this.preferredPackage, this);
		}
		Log.v(CustomTabsController.TAG, 'Bind request result: ' + this.isBound);
	}

	/**
	 * Attempts to unbind the Custom Tabs Service from the Context.
	 */
	public unbindService(): void {
		Log.v(CustomTabsController.TAG, 'Trying to unbind the service');
		const context = this.context.get();
		if (this.isBound && context != null) {
			context.unbindService(this);
			this.isBound = false;
		}
	}

	/**
	 * Opens a Uri in a Custom Tab or Browser.
	 * The Custom Tab service will be given up to {@link CustomTabsController#MAX_WAIT_TIME_SECONDS} to be connected.
	 * If it fails to connect the Uri will be opened on a Browser.
	 * <p>
	 * In the exceptional case that no Browser app is installed on the device, this method will fail silently and do nothing.
	 * Please, ensure the {@link Intent#ACTION_VIEW} action can be handled before calling this method.
	 *
	 * @param uri the uri to open in a Custom Tab or Browser.
	 */
	public launchUri(uri: Uri): void {
		const context: Context = this.context.get();
		if (context == null) {
			Log.v(CustomTabsController.TAG, 'Custom Tab Context was no numberer valid.');
			return;
		}

		if (this.customTabsOptions == null) {
			this.customTabsOptions = CustomTabsOptions.create();
		}

		setTimeout(() => this.sessionLatchReady(false), CustomTabsController.MAX_WAIT_TIME_SECONDS * 1000);

		this.sessionLatch.then((available) => {
			Log.d(CustomTabsController.TAG, `Launching URI. Custom Tabs available: ${available}`);

			const intent: Intent = this.customTabsOptions.toIntent(context, this.session.get());
			intent.setData(uri);
			try {
				context.startActivity(intent);
			} catch (ex) {
				if (ex instanceof ActivityNotFoundException) {
					Log.e(CustomTabsController.TAG, 'Could not find any Browser application installed in this device to handle the intent.');
				} else {
					throw ex;
				}
			}
		});
	}

	/**
	 * Query the OS for a Custom Tab compatible Browser application.
	 * It will pick the default browser first if is Custom Tab compatible, then any Chrome browser or the first Custom Tab compatible browser.
	 *
	 * @param context a valid Context
	 * @return the recommended Browser application package name, compatible with Custom Tabs. Null if no compatible browser is found.
	 */
	public static getBestBrowserPackage(context: Context): string {
		const pm = context.getPackageManager();
		const browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse('http://www.example.com'));
		const activityResolveFlag = Build.VERSION.SDK_INT >= 23 /*Build.VERSION_CODES.M*/ ? 0x00020000 /*PackageManager.MATCH_ALL*/ : PackageManager.MATCH_DEFAULT_ONLY;
		const webHandler: ResolveInfo = pm.resolveActivity(browserIntent, activityResolveFlag);
		let defaultBrowser: string | undefined;
		if (webHandler != null) {
			defaultBrowser = webHandler.activityInfo.packageName;
		}

		const resolvedActivityList = pm.queryIntentActivities(browserIntent, activityResolveFlag);
		const customTabsBrowsers: string[] = [];
		for (let i = 0; i < resolvedActivityList.size(); i++) {
			const info = resolvedActivityList.get(i);
			const serviceIntent = new Intent();
			serviceIntent.setAction(CustomTabsController.ACTION_CUSTOM_TABS_CONNECTION);
			serviceIntent.setPackage(info.activityInfo.packageName);
			if (pm.resolveService(serviceIntent, 0) != null) {
				customTabsBrowsers.push(info.activityInfo.packageName);
			}
		}
		if (customTabsBrowsers.indexOf(defaultBrowser) > -1) {
			return defaultBrowser;
		} else if (customTabsBrowsers.indexOf(CustomTabsController.CHROME_STABLE) > -1) {
			return CustomTabsController.CHROME_STABLE;
		} else if (customTabsBrowsers.indexOf(CustomTabsController.CHROME_SYSTEM) > -1) {
			return CustomTabsController.CHROME_SYSTEM;
		} else if (customTabsBrowsers.indexOf(CustomTabsController.CHROME_BETA) > -1) {
			return CustomTabsController.CHROME_BETA;
		} else if (customTabsBrowsers.indexOf(CustomTabsController.CHROME_DEV) > -1) {
			return CustomTabsController.CHROME_DEV;
		} else if (customTabsBrowsers.length !== 0) {
			return customTabsBrowsers[0];
		} else {
			return null;
		}
	}
}
export { CustomTabsController, CustomTabsOptions };
