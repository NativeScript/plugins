import { DemoSharedBase } from '../utils';
import { IOSSecurity } from '@nativescript/ios-security';

export class DemoSharedIOSSecurity extends DemoSharedBase {

	testIt() {
		console.log("jailbroken: " + IOSSecurity.amIJailbroken());
		console.log("debugged: " + IOSSecurity.amIDebugged());
		console.log("proxied: " + IOSSecurity.amIProxied());
		console.log("reverse engineered: " + IOSSecurity.amIReverseEngineered());
		console.log("run in emulator: " + IOSSecurity.amIRunInEmulator());
	}
}
