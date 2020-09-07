declare var com: any;

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
		com.tns.NativeScriptApplication.getInstance().getPackageManager().getPackageInfo(uri, android.content.pm.PackageManager.GET_ACTIVITIES);
		return true;
	} catch (ex) {
		console.log('appavailability:', ex);
		return false;
	}
};
