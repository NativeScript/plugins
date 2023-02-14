import { DemoSharedBase } from '../utils';
import { SignIn, User } from '@nativescript/apple-sign-in';

export class DemoSharedAppleSignIn extends DemoSharedBase {
	login() {
		SignIn.signIn({
			// by default you don't get these details, but if you provide these scopes you will (and the user will get to choose which ones are allowed)
			scopes: ['EMAIL', 'FULL_NAME'],
		})
			.then((result: User) => {
				console.log('Signed in, user: ' + result);
				console.log('Signed in, familyName: ' + result.fullName.familyName);
			})
			.catch((err) => console.log('Error signing in: ' + err));
	}
}
