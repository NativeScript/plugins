export function jsArrayToNSArray<T>(arr: T[]): NSArray<T> {
	return NSArray.arrayWithArray(<any>arr);
}

export function nsArrayToJSArray<T>(a: NSArray<T>): Array<T> {
	const arr = [];
	if (a !== undefined) {
		let count = a.count;
		for (let i = 0; i < count; i++) {
			arr.push(a.objectAtIndex(i));
		}
	}

	return arr;
}

export function a0_encodeBase64URLSafe(dataOrString: NSData | string): string {
	let data: NSData;
	if (dataOrString instanceof NSData) {
		data = dataOrString;
	} else {
		const text = new NSString({ string: dataOrString });
		data = text.dataUsingEncoding(NSUTF8StringEncoding);
	}
	return data.base64EncodedStringWithOptions(0).replace('+', '-').replace('/', '_').replace('=', '');
}

export function a0_url(domain: string): NSURL {
	let urlString: string;
	if (!domain.startsWith('https')) {
		urlString = `https://${domain}`;
	} else {
		urlString = domain;
	}
	return new NSURL({ string: urlString });
}

export function a0_fragmentValues(components: NSURLComponents): { [key: string]: string } {
	const dict: { [key: string]: string } = {};
	if (components.fragment) {
		const items = components.fragment.split('&');
		for (const item of items) {
			let parts = item.split('=');
			if (parts.length !== 2) {
				break;
			}
			dict[parts[0]] = parts[1];
		}
	}
	return dict;
}

export function a0_queryValues(components: NSURLComponents): { [key: string]: string } {
	const dict: { [key: string]: string } = {};
	const items = components.queryItems;
	if (items != null) {
		for (const item of nsArrayToJSArray(items)) {
			dict[item.name] = item.value;
		}
	}
	return dict;
}

export const invokeOnRunLoop = (function () {
	const runloop = CFRunLoopGetMain();
	return function (func) {
		CFRunLoopPerformBlock(runloop, kCFRunLoopDefaultMode, func);
		CFRunLoopWakeUp(runloop);
	};
})();
