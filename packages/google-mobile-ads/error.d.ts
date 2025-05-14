export class MobileAdsError extends Error {
	readonly native;

	static fromNative(native: any, message?: string) {
		return new MobileAdsError(message);
	}
}
