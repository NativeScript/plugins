import { DemoSharedBase } from '../utils';
import { GoogleSignin } from '@nativescript/google-signin';

export class DemoSharedGoogleSignin extends DemoSharedBase {
	constructor() {
		super();
		GoogleSignin.configure();
	}

	async testIt() {
		const user = await GoogleSignin.signIn();
		console.log('displayName:', user.displayName);
		console.log('idToken:', user.idToken);
	}
}
