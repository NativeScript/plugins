import Activity = android.app.Activity;
import Intent = android.content.Intent;
import Uri = android.net.Uri;
import Log = android.util.Log;

export class AuthorizeResult {
	private static readonly TAG: string = 'AuthorizeResult';
	private static readonly MISSING_REQUEST_CODE: number = -100;
	private readonly requestCode: number;
	private readonly resultCode: number;
	private readonly intent: Intent;

	/**
	 * Wrapper for data received in OnActivityResult / OnNewIntent methods.
	 *
	 * @param requestCode the response request code
	 * @param resultCode  the response result code
	 * @param intent      the response intent.
	 */
	constructor(requestCode: number, resultCode: number, intent?: Intent);

	/**
	 * Wrapper for data received in OnActivityResult / OnNewIntent methods.
	 *
	 * @param intent the response intent.
	 */
	constructor(intent?: Intent);

	constructor() {
		if (arguments.length >= 2) {
			this.requestCode = arguments[0];
			this.resultCode = arguments[1];
			this.intent = arguments[2];
		} else {
			this.requestCode = AuthorizeResult.MISSING_REQUEST_CODE;
			this.resultCode = Activity.RESULT_OK;
			this.intent = arguments[0];
		}
	}

	/**
	 * Checks if the received data is valid and can be parsed.
	 *
	 * @param expectedRequestCode the request code this activity is expecting to receive
	 * @return whether if the received uri data can be parsed or not.
	 */
	public isValid(expectedRequestCode: number): boolean {
		const uri: Uri = this.intent != null ? this.intent.getData() : null;
		if (uri == null) {
			Log.d(AuthorizeResult.TAG, "Result is invalid: Received Intent's Uri is null.");
			return false;
		}

		if (this.requestCode === AuthorizeResult.MISSING_REQUEST_CODE) {
			return true;
		}

		const fromRequest: boolean = this.getRequestCode() === expectedRequestCode;
		if (!fromRequest) {
			Log.d(AuthorizeResult.TAG, java.lang.String.format("Result is invalid: Received Request Code doesn't match the expected one. Was %d but expected %d", [this.getRequestCode(), expectedRequestCode]));
		}
		return fromRequest && this.resultCode === Activity.RESULT_OK;
	}

	public getIntent(): Intent {
		return this.intent;
	}

	public getRequestCode(): number {
		return this.requestCode;
	}

	public getResultCode(): number {
		return this.resultCode;
	}
}
