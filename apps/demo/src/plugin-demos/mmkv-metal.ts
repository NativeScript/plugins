import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMmkvMetal } from '@demo/shared';
import { NSCMMKV } from '@nativescript/mmkv-metal';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

const key = 'k';
const iterations = 1000;

export class DemoModel extends DemoSharedMmkvMetal {
	mmkv: NSCMMKV;
	constructor() {
		super();
		NSCMMKV.initialize();
		this.mmkv = new NSCMMKV();
		//this.mmkv.clearAll();
		//this.mmkv.clearMemoryCache();
		// this.mmkv.set('', '');
		// this.mmkv.set('age', 30);
		// this.mmkv.set('metal', false);

		// if (global.isAndroid) {
		// 	const js = new java.lang.String('Fortune');
		// 	const buf = java.nio.ByteBuffer.wrap(js.getBytes());
		// 	this.mmkv.set('last', (ArrayBuffer as any).from(buf as any));
		// } else {
		// 	const data = NSString.stringWithString('Fortune').dataUsingEncoding(NSUTF8StringEncoding);
		// 	this.mmkv.set('last', interop.bufferFromData(data));
		// }

		console.log(this.mmkv.getString('first'));
		// console.log(this.mmkv.getNumber('age'));
		// console.log(this.mmkv.getBoolean('metal'));
		// console.log(this.mmkv.getString('last'));
		// console.time('test');
		//this.mmkv.set(key, 'hello');
		//this.bm(this.getFromMMKV.bind(this));
		//this.mmkv.close();
	}

	getFromMMKV(): string | undefined {
		return this.mmkv.getString(key);
	}

	bm(func) {
		try {
			console.log(`Starting Benchmark...`);
			const start = performance.now() as any;
			for (let i = 0; i < iterations; i++) {
				func();
			}
			const end = performance.now() as any;
			const diff = end - start;
			console.log(`Finished Benchmark ! Took ${diff.toFixed(4)}ms!`);
			return diff;
		} catch (e) {
			console.error(`Failed Benchmark !`, e);
			return 0;
		}
	}
}
