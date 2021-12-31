const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
	webpack.init(env);
	webpack.useConfig('typescript');

	webpack.chainWebpack((config) => {
		// shared demo code
		config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
	});

	// Example if you need to share images across demo apps:
	// webpack.Utils.addCopyRule({
	//   from: '../../tools/images',
	// 	 to: 'images',
	//   context: __dirname
	// });

  // TODO: Ask Igor about this - does not seem to work
  // Also ask Osei about android/src/main/assets? - not sure if that's right location
	// webpack.Utils.addCopyRule({
	//   from: '../../tools/assets/ionicWebPortalSample',
	// 	 to: webpack.Utils.platform.getPlatformName() === 'android' ? '' : '../Resources/ionicWebPortalSample',
	//   context: __dirname
	// });

	return webpack.resolveConfig();
};
