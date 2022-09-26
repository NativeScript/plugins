import Base64 = android.util.Base64;
import Log = android.util.Log;

import UnsupportedEncodingException = java.io.UnsupportedEncodingException;
import MessageDigest = java.security.MessageDigest;
import NoSuchAlgorithmException = java.security.NoSuchAlgorithmException;
import SecureRandom = java.security.SecureRandom;

export class AlgorithmHelper {
	private static readonly TAG: string = 'AlgorithmHelper';

	private static readonly US_ASCII: string = 'US-ASCII';
	private static readonly SHA_256: string = 'SHA-256';

	private getBase64String(source: androidNative.Array<number>): string {
		return Base64.encodeToString(source, Base64.URL_SAFE | Base64.NO_WRAP | Base64.NO_PADDING);
	}

	public getASCIIBytes(value: string): androidNative.Array<number> {
		let input: androidNative.Array<number>;
		try {
			const javaString = new java.lang.String(value);
			input = javaString.getBytes(AlgorithmHelper.US_ASCII);
		} catch (e) {
			if (e instanceof UnsupportedEncodingException) {
				Log.e(AlgorithmHelper.TAG, 'Could not convert string to an ASCII byte array', e);
				throw new java.lang.IllegalStateException('Could not convert string to an ASCII byte array', e);
			} else {
				throw e;
			}
		}
		return input;
	}

	public getSHA256(input: androidNative.Array<number>): androidNative.Array<number> {
		let signature: androidNative.Array<number>;
		try {
			const md = MessageDigest.getInstance(AlgorithmHelper.SHA_256);
			md.update(input, 0, input.length);
			signature = md.digest();
		} catch (e) {
			if (e instanceof NoSuchAlgorithmException) {
				Log.e(AlgorithmHelper.TAG, 'Failed to get SHA-256 signature', e);
				throw new java.lang.IllegalStateException('Failed to get SHA-256 signature', e);
			} else {
				throw e;
			}
		}
		return signature;
	}

	public generateCodeVerifier(): string {
		const sr = new SecureRandom();
		const code = Array.create('byte', 32);
		sr.nextBytes(code);
		return Base64.encodeToString(code, Base64.URL_SAFE | Base64.NO_WRAP | Base64.NO_PADDING);
	}

	public generateCodeChallenge(codeVerifier: string): string {
		const input = this.getASCIIBytes(codeVerifier);
		const signature = this.getSHA256(input);
		return this.getBase64String(signature);
	}
}
