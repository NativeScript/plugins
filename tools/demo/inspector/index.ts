import { DemoSharedBase } from '../utils';
import { Inspector } from '@nativescript/inspector';

export class DemoSharedInspector extends DemoSharedBase {
	private insp = new Inspector();
	testIt() {
		this.insp.testThat();
	}
}
