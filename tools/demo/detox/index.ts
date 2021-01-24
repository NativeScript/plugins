import { DemoSharedBase } from '../utils';
import {} from '@nativescript/detox';

export class DemoSharedDetox extends DemoSharedBase {
	testIt() {
		console.log('test detox!');
	}
}
