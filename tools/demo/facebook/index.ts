import { DemoSharedBase } from '../utils';
import { LoginManager } from '@nativescript/facebook';

export class DemoSharedFacebook extends DemoSharedBase {
	login() {
		LoginManager.init();
		LoginManager.logInWithPermissions(['public_profile'])
			.then((profile) => {
				console.log('profile', profile);
			})
			.catch((e) => {
				console.log('Facebook login error:', e);
			});
	}
}
