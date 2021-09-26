import { DemoSharedBase } from '../utils';
import { IosSecurity } from '@nativescript/ios-security';

export class DemoSharedIosSecurity extends DemoSharedBase {

	testIt() {
		console.log("jailbroken: " + IosSecurity.amIJailbroken());
		console.log("debugged: " + IosSecurity.amIDebugged());
		console.log("proxied: " + IosSecurity.amIProxied());
		console.log("reverse engineered: " + IosSecurity.amIReverseEngineered());
		console.log("run in emulator: " + IosSecurity.amIRunInEmulator());
	}
}
