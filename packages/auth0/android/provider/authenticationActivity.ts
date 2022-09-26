import Context = android.content.Context;
import Intent = android.content.Intent;
import Uri = android.net.Uri;
import Bundle = android.os.Bundle;
import Log = android.util.Log;

import { CustomTabsOptions } from './customTabsOptions';
import { WebAuthProvider } from './webAuthProvider';
import { CustomTabsController } from './customTabsController';

const TAG: string = 'AuthenticationActivity';

export const EXTRA_CONNECTION_NAME: string = 'org.nativescript.auth0.EXTRA_CONNECTION_NAME';
export const EXTRA_AUTHORIZE_URI: string = 'org.nativescript.auth0.EXTRA_AUTHORIZE_URI';
export const EXTRA_INTENT_LAUNCHED: string = 'org.nativescript.auth0.EXTRA_INTENT_LAUNCHED';
export const EXTRA_CT_OPTIONS: string = 'org.nativescript.auth0.EXTRA_CT_OPTIONS';

export function authenticateUsingBrowser(context: Context, authorizeUri: Uri, options: CustomTabsOptions = undefined): void {
	Log.d(TAG, 'Building intent');
	const clazz = AuthenticationActivity.class;
	Log.d(TAG, 'Got class');
	const intent = new Intent(context, clazz);
	Log.d(TAG, 'Init intent');
	intent.putExtra(EXTRA_AUTHORIZE_URI, authorizeUri);
	Log.d(TAG, 'Put extra 1');
	intent.putExtra(EXTRA_CT_OPTIONS, options);
	Log.d(TAG, 'Put extra 2');
	intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
	Log.d(TAG, 'Starting authentication...');
	context.startActivity(intent);
}

@NativeClass()
@JavaProxy('org.nativescript.auth0.AuthenticationActivity')
class AuthenticationActivity extends android.app.Activity {
	private intentLaunched: boolean;
	private customTabsController: CustomTabsController;

	constructor() {
		super();
		return global.__native(this);
	}

	public onNewIntent(intent: Intent): void {
		super.onNewIntent(intent);
		this.setIntent(intent);
	}

	public onActivityResult(requestCode: number, resultCode: number, data: Intent): void {
		if (resultCode === android.app.Activity.RESULT_OK) {
			this.deliverAuthenticationResult(data);
		}
		this.finish();
	}

	public onSaveInstanceState(outState: Bundle): void {
		super.onSaveInstanceState(outState);
		outState.putBoolean(EXTRA_INTENT_LAUNCHED, this.intentLaunched);
	}

	public onCreate(savedInstanceState?: Bundle): void {
		super.onCreate(savedInstanceState);
		if (savedInstanceState != null) {
			this.intentLaunched = savedInstanceState.getBoolean(EXTRA_INTENT_LAUNCHED, false);
		}
	}

	public onResume(): void {
		super.onResume();

		if (!this.intentLaunched && this.getIntent().getExtras() == null) {
			// Activity was launched in an unexpected way
			this.finish();
			return;
		} else if (!this.intentLaunched) {
			this.intentLaunched = true;
			this.launchAuthenticationIntent();
			return;
		}

		this.deliverAuthenticationResult(this.getIntent());
		this.setResult(android.app.Activity.RESULT_CANCELED);
		this.finish();
	}

	public onDestroy(): void {
		super.onDestroy();
		if (this.customTabsController != null) {
			this.customTabsController.unbindService();
			this.customTabsController = null;
		}
	}

	private launchAuthenticationIntent(): void {
		const extras = this.getIntent().getExtras();
		const authorizeUri = extras.getParcelable(EXTRA_AUTHORIZE_URI) as Uri;

		this.customTabsController = this.createCustomTabsController(this);
		this.customTabsController.setCustomizationOptions(extras.getParcelable(EXTRA_CT_OPTIONS) as CustomTabsOptions);
		this.customTabsController.bindService();
		this.customTabsController.launchUri(authorizeUri);
	}

	public createCustomTabsController(context: Context): CustomTabsController {
		return new CustomTabsController(context);
	}

	public deliverAuthenticationResult(result: Intent): void {
		WebAuthProvider.resume(result);
	}
}

export { AuthenticationActivity };
