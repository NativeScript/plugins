import Dialog = android.app.Dialog;

import { AuthenticationException } from '../authentication/authenticationException';
import { Credentials } from '../../common/credentials';

/**
 * Callback called on success/failure of an Identity Provider authentication.
 * Only one of the success or failure methods will be called for a single authentication request.
 */
export interface AuthCallback {
	/**
	 * Called when the failure reason is displayed in a {@link android.app.Dialog}.
	 *
	 * @param dialog error dialog
	 */
	onFailure(dialog: Dialog);

	/**
	 * Called with an AuthenticationException that describes the error.
	 *
	 * @param exception cause of the error
	 */
	onFailure(exception: AuthenticationException);

	/**
	 * Called when the authentication is successful using web authentication against Auth0
	 *
	 * @param credentials Auth0 credentials information (id_token, refresh_token, etc).
	 */
	onSuccess(credentials: Credentials);
}
