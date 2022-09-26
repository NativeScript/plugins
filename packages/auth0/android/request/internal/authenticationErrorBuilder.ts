import { ErrorBuilder } from '../errorBuilder';
import { AuthenticationException } from '../../authentication/authenticationException';
import { Auth0Exception } from '../../auth0Exception';

export class AuthenticationErrorBuilder implements ErrorBuilder<AuthenticationException> {
	public from(message: string): AuthenticationException;
	public from(message: string, exception: Auth0Exception): AuthenticationException;
	public from(values: { [key: string]: any }): AuthenticationException;
	public from(payload: string, statusCode: number): AuthenticationException;
	public from(): AuthenticationException {
		if (arguments.length === 1) {
			if (typeof arguments[0] === 'string') {
				return new AuthenticationException({ description: arguments[0] }, 0);
			} else {
				return new AuthenticationException(arguments[0], 0);
			}
		} else {
			if (typeof arguments[1] === 'number') {
				return new AuthenticationException(arguments[0], arguments[1]);
			} else {
				return new AuthenticationException(
					{
						description: `${arguments[0]} - ${arguments[1].toString()}`,
					},
					0
				);
			}
		}
	}
}
