import { Authentication } from './authentication';
import { Telemetry } from './telemetry';
import { Logger } from './logger';
import { Credentials } from '../common/credentials';
import { AuthenticationError } from './authenticationError';
import { Request } from './request';
import { authenticationObject, noBody, plainJson } from './handlers';
import { UserInfo } from '../common/userInfo';
import { SafariWebAuth } from './safariWebAuth';
import { ControllerModalPresenter } from './controllerModalPresenter';
import { LoggableExtension } from './loggable';
import { WebAuth } from './webAuth';
import { DatabaseUser } from '../common/databaseUser';

export class Auth0Authentication extends Authentication {
	public readonly clientId: string;
	public readonly url: NSURL;
	public telemetry: Telemetry;
	public logger: Logger | undefined;

	constructor(clientId: string, url: NSURL, telemetry: Telemetry = new Telemetry()) {
		super();
		this.clientId = clientId;
		this.url = url;
		this.telemetry = telemetry;
	}

	public login(username: string, password: string, realm: string, audience: string | undefined, scope: string | undefined, parameters: { [key: string]: any } | undefined): Request<Credentials, AuthenticationError> {
		let resourceOwner = new NSURL({ string: '/oauth/token', relativeToURL: this.url });
		const payload: { [key: string]: any } = {
			username: username,
			password: password,
			grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
			client_id: this.clientId,
			realm: realm,
		};
		payload['audience'] = audience;
		payload['scope'] = scope;
		if (parameters != null) {
			for (const key in parameters) {
				payload[key] = parameters[key];
			}
		}
		return new Request(resourceOwner, 'POST', authenticationObject(Credentials), payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public loginWithOTP(otp: string, mfaToken: string): Request<Credentials, AuthenticationError> {
		const url = new NSURL({ string: '/oauth/token', relativeToURL: this.url });
		const payload: { [key: string]: any } = {
			otp: otp,
			mfa_token: mfaToken,
			grant_type: 'http://auth0.com/oauth/grant-type/mfa-otp',
			client_id: this.clientId,
		};
		return new Request(url, 'POST', authenticationObject(Credentials), payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public createUser(email: string, username: string | undefined = undefined, password: string, connection: string, userMetadata: { [key: string]: any } | undefined = undefined): Request<DatabaseUser, AuthenticationError> {
		const payload: { [key: string]: any } = {
			email: email,
			password: password,
			connection: connection,
			client_id: this.clientId,
		};
		payload['username'] = username;
		payload['user_metadata'] = userMetadata;

		const createUser = new NSURL({ string: '/dbconnections/signup', relativeToURL: this.url });
		return new Request(createUser, 'POST', authenticationObject(DatabaseUser), payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public resetPassword(email: string, connection: string): Request<void, AuthenticationError> {
		const payload: { [key: string]: any } = {
			email: email,
			connection: connection,
			client_id: this.clientId,
		};
		const resetPassword = new NSURL({ string: '/dbconnections/change_password', relativeToURL: this.url });
		return new Request(resetPassword, 'POST', noBody, payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public userInfo(accessToken: string): Request<UserInfo, AuthenticationError> {
		let userInfo = new NSURL({ string: '/userinfo', relativeToURL: this.url });
		return new Request(userInfo, 'GET', authenticationObject(UserInfo), {}, { Authorization: `Bearer ${accessToken}` }, this.logger, this.telemetry, AuthenticationError);
	}

	public tokenExchangeWithParameters(parameters: { [key: string]: any }): Request<Credentials, AuthenticationError> {
		const payload: { [key: string]: any } = {
			client_id: this.clientId,
		};
		for (const key in parameters) {
			payload[key] = parameters[key];
		}
		let token = new NSURL({ string: '/oauth/token', relativeToURL: this.url });
		return new Request(token, 'POST', authenticationObject(Credentials), payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public tokenExchangeWithCode(code: string, codeVerifier: string, redirectURI: string): Request<Credentials, AuthenticationError> {
		return this.tokenExchangeWithParameters({
			code: code,
			code_verifier: codeVerifier,
			redirect_uri: redirectURI,
			grant_type: 'authorization_code',
		});
	}

	public renew(refreshToken: string): Request<Credentials, AuthenticationError> {
		const payload: { [key: string]: any } = {
			refresh_token: refreshToken,
			grant_type: 'refresh_token',
			client_id: this.clientId,
		};
		let oauthToken = new NSURL({ string: '/oauth/token', relativeToURL: this.url });
		return new Request(oauthToken, 'POST', authenticationObject(Credentials), payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public revoke(refreshToken: string): Request<void, AuthenticationError> {
		let payload: { [key: string]: any } = {
			token: refreshToken,
			client_id: this.clientId,
		};
		let oauthToken = new NSURL({ string: '/oauth/revoke', relativeToURL: this.url });
		return new Request(oauthToken, 'POST', noBody, payload, {}, this.logger, this.telemetry, AuthenticationError);
	}

	public webAuth(connection: string): WebAuth {
		const safari = SafariWebAuth.init(this.clientId, this.url, new ControllerModalPresenter(), this.telemetry);
		LoggableExtension.logging(safari, this.logger != null);
		return safari.setConnection(connection);
	}
}
