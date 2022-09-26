import { Credentials } from '../common/credentials';
import { ResponseType } from './responseType';
import { Result } from './result';
import { a0_fragmentValues, a0_queryValues } from './utils';
import { WebAuthError } from './webAuthError';
import { AuthenticationError } from './authenticationError';
import { Authentication } from './authentication';

export interface OAuth2Grant {
	defaults: { [key: string]: string };
	credentials(values: { [key: string]: string }, callback: (success: Result<Credentials>) => void);
	values(components: NSURLComponents): { [key: string]: string };
}

export class ImplicitGrant implements OAuth2Grant {
	readonly defaults: { [key: string]: string };
	readonly responseType: ResponseType[];

	constructor(responseType: ResponseType[] = [ResponseType.token], nonce: string | undefined = undefined) {
		this.responseType = responseType;
		if (nonce != null) {
			this.defaults = { nonce: nonce };
		} else {
			this.defaults = {};
		}
	}

	public credentials(values: { [key: string]: string }, callback: (success: Result<Credentials>) => void) {
		const valid = validate(this.responseType, values['id_token'], this.defaults['nonce']);
		if (!valid) {
			return callback({
				failure: WebAuthError.invalidIdTokenNonce,
			});
		}

		if (this.responseType.indexOf(ResponseType.token) > -1 && values['access_token'] == null) {
			return callback({
				failure: WebAuthError.missingAccessToken,
			});
		}

		callback({
			success: Credentials.initWithJson(values),
		});
	}

	public values(components: NSURLComponents): { [key: string]: string } {
		return a0_fragmentValues(components);
	}
}

export class PKCE implements OAuth2Grant {
	readonly authentication: Authentication;
	readonly redirectURL: NSURL;
	readonly defaults: { [key: string]: string };
	readonly verifier: string;
	readonly responseType: ResponseType[];

	public static init(authentication: Authentication, redirectURL: NSURL, reponseType: ResponseType[] = [ResponseType.code], nonce: string | undefined = undefined, generator: A0SHA256ChallengeGenerator = A0SHA256ChallengeGenerator.alloc().init()): PKCE {
		return new PKCE(authentication, redirectURL, generator.verifier, generator.challenge, generator.method, reponseType, nonce);
	}

	constructor(authentication: Authentication, redirectURL: NSURL, verifier: string, challenge: string, method: string, responseType: ResponseType[], nonce: string | undefined = undefined) {
		this.authentication = authentication;
		this.redirectURL = redirectURL;
		this.verifier = verifier;
		this.responseType = responseType;

		const newDefaults: { [key: string]: string } = {
			code_challenge: challenge,
			code_challenge_method: method,
		};

		if (nonce != null) {
			newDefaults['nonce'] = nonce;
		}

		this.defaults = newDefaults;
	}

	public credentials(values: { [key: string]: string }, callback: (result: Result<Credentials>) => void) {
		const code = values['code'];
		if (code == null) {
			let _string = 'No code found in parameters (values)';
			return callback({
				failure: new AuthenticationError(_string),
			});
		}
		const valid = validate(this.responseType, values['id_token'], this.defaults['nonce']);
		if (valid === false) {
			return callback({
				failure: WebAuthError.invalidIdTokenNonce,
			});
		}
		const clientId = this.authentication.clientId;
		this.authentication.tokenExchangeWithCode(code, this.verifier, this.redirectURL.absoluteString).start((result) => {
			// Special case for PKCE when the correct method for token endpoint authentication is not set (it should be None)
			if (result.failure != null && result.failure.message === 'Unauthorized') {
				let error = WebAuthError.pkceNotAllowed(`Please go to 'https://manage.auth0.com/#/applications/${clientId}/settings' and make sure 'Client Type' is 'Native' to enable PKCE.`);
				callback({
					failure: error,
				});
			} else {
				callback(result);
			}
		});
	}

	public values(components: NSURLComponents): { [key: string]: string } {
		let items = a0_fragmentValues(components);
		const values = a0_queryValues(components);
		for (const key in values) {
			items[key] = values[key];
		}
		return items;
	}
}

function validate(responseType: ResponseType[], token: string | undefined, nonce: string | undefined): boolean {
	const index = responseType.indexOf(ResponseType.idToken);
	if (index === -1) {
		return true;
	}
	if (nonce == null || token == null) {
		return false;
	}
	const claims = decode(token);
	const actualNonce = claims != null ? claims['nonce'] : undefined;
	return actualNonce === nonce;
}

function decode(jwt: string): { [key: string]: any } | undefined {
	const parts = jwt.split('.');
	if (parts.length !== 3) {
		return undefined;
	}
	let base64 = parts[1].replace('-', '+').replace('_', '/');

	const length = NSString.stringWithString(base64).lengthOfBytesUsingEncoding(NSUTF8StringEncoding);
	const requiredLength = 4 * Math.ceil(length / 4.0);
	const paddingLength = requiredLength - length;
	if (paddingLength > 0) {
		const padding = NSString.string().stringByPaddingToLengthWithStringStartingAtIndex(paddingLength, '=', 0);
		base64 += padding;
	}

	const bodyData = new NSData({ base64EncodedString: base64, options: NSDataBase64DecodingOptions.IgnoreUnknownCharacters });
	if (bodyData == null) {
		return undefined;
	}

	const jsonString = String(NSString.alloc().initWithDataEncoding(bodyData, NSUTF8StringEncoding));
	return JSON.parse(jsonString);
}
