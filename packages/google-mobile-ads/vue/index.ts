export default {
	install(Vue) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		Vue.registerElement('NativeAdView', () => require('../').NativeAdView);
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		Vue.registerElement('BannerAd', () => require('../').BannerAd);
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		Vue.registerElement('MediaView', () => require('../').MediaView);
	},
};
