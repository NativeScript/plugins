import Uri = android.net.Uri;
import Log = android.util.Log;
import URLUtil = android.webkit.URLUtil;

export abstract class CallbackHelper {
	private static readonly TAG: string = 'CallbackHelper';

	/**
	 * Generates the callback Uri for the given domain.
	 *
	 * @return the callback Uri.
	 */
	public static getCallbackUri(scheme: string, packageName: string, domain: string): string {
		if (!URLUtil.isValidUrl(domain)) {
			Log.e(CallbackHelper.TAG, 'The Domain is invalid and the Callback URI will not be set. You used: ' + domain);
			return null;
		}

		const uri = Uri.parse(domain).buildUpon().scheme(scheme).appendPath('android').appendPath(packageName).appendPath('callback').build();

		Log.v(CallbackHelper.TAG, 'The Callback URI is: ' + uri);
		return uri.toString();
	}

	public static getValuesFromUri(uri: Uri): { [key: string]: string } {
		return CallbackHelper.asMap(uri.getQuery() != null ? uri.getQuery() : uri.getFragment());
	}

	private static asMap(valueString: string | undefined): { [key: string]: string } {
		if (valueString == null) {
			return {};
		}
		const entries = valueString.length > 0 ? valueString.split('&') : <string[]>[];
		const values = {};
		for (const entry of entries) {
			const value = entry.split('=');
			if (value.length === 2) {
				values[value[0]] = value[1];
			}
		}
		return values;
	}
}
