import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMmkvMetal } from '@demo/shared';
import { NSCMMKV as NSCMMKVMetal, initialize as initializeMetal } from '@nativescript/mmkv-metal';

import { NSCMMKV, initialize } from '@nativescript/mmkv';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

const key = 'k';
const iterations = 1000;

export class DemoModel extends DemoSharedMmkvMetal {
	mmkvm: NSCMMKVMetal;
	mmkv: NSCMMKVMetal;
	constructor() {
		super();
		initializeMetal();
		initialize();
		console.time('NSCMMKV');
		this.mmkv = new NSCMMKV();
		console.timeEnd('NSCMMKV');

		console.time('NSCMMKVMetal');
		this.mmkvm = new NSCMMKVMetal();
		console.timeEnd('NSCMMKVMetal');
		this.mmkvm.clearAll();
		this.mmkvm.clearMemoryCache();

		this.mmkv.clearAll();
		this.mmkv.clearMemoryCache();

		this.mmkvm.set(key, 'hello');
		this.bm(this.getFromMMKVM.bind(this));

		this.mmkv.set(key, 'hello');
		this.bm(this.getFromMMKV.bind(this));
		this.mmkvm.close();
	}

	getFromMMKV(): string | undefined {
		return this.mmkv.getString(key);
	}

	getFromMMKVM(): string | undefined {
		return this.mmkvm.getString(key);
	}

	bm(func) {
		try {
			console.log(`Starting Benchmark...`);
			const start = global.performance ? performance.now() : (__time() as any);
			for (let i = 0; i < iterations; i++) {
				func();
			}
			const end = global.performance ? performance.now() : (__time() as any);
			const diff = end - start;
			console.log(`Finished Benchmark ! Took ${diff.toFixed(4)}ms!`);
			return diff;
		} catch (e) {
			console.error(`Failed Benchmark !`, e);
			return 0;
		}
	}
}
