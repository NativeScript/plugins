export function available(uri: string) {
	return new Promise(function (resolve) {
		resolve(isAvailable(uri));
	});
}

export function availableSync(uri: string) {
	return isAvailable(uri);
}

const isAvailable = function (uri: string) {
	try {
		return UIApplication.sharedApplication.canOpenURL(NSURL.URLWithString(uri));
	} catch (ex) {
		console.log('appavailability:', ex);
		return false;
	}
};
