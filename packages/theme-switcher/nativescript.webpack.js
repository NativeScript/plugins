const { resolve } = require('path');

/**
 * @param {typeof import("@nativescript/webpack")} webpack
 */
module.exports = (webpack) => {
	webpack.chainWebpack((config) => {
		// prettier-ignore
		config.resolveLoader.alias
            .set('theme-loader', resolve(__dirname, 'theme-loader'))
	});
};
