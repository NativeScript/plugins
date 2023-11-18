const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
	webpack.init(env);
	webpack.useConfig('typescript');

	webpack.chainWebpack((config) => {
		// shared demo code
		config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
		// when focusing on local-notifications you can uncomment this to help TS resolution of demo
		// config.resolve.alias.set('@nativescript/shared-notification-delegate', resolve(__dirname, '..', '..', 'packages', 'shared-notification-delegate'));
	});

	// Example if you need to share images across demo apps:
	// webpack.Utils.addCopyRule({
	//   from: '../../tools/images',
	// 	 to: 'images',
	//   context: __dirname
	// });

	// Example if you need to share images across demo apps:
	webpack.Utils.addCopyRule({
		from: '../../../tools/images',
		to: 'images',
		context: webpack.Utils.project.getProjectFilePath('node_modules'),
	});

	webpack.Utils.addCopyRule({
		from: '../../../tools/assets/logos',
		to: 'logos',
		context: webpack.Utils.project.getProjectFilePath('node_modules'),
	});

	return webpack.resolveConfig();
};
