import { DemoSharedBase } from '../utils';
import { initThemes, switchTheme } from '@nativescript/theme-switcher';
import { Dialogs } from '@nativescript/core';

export class DemoSharedThemeSwitcher extends DemoSharedBase {
	constructor() {
		super();

		// initThemes(
		// 	{
		// 		// @ts-ignore
		// 		default: () => import('theme-loader!./themes/default.scss'),
		// 		// @ts-ignore
		// 		red: () => import('theme-loader!./themes/red.scss'),
		// 		// @ts-ignore
		// 		green: () => import('theme-loader!./themes/green.scss'),
		// 	},
		// 	{
		// 		persistent: false,
		// 	}
		// );
	}

	async testIt() {
		const res = await Dialogs.action('Select theme', 'Cancel', ['default', 'red', 'green']);

		if (res) {
			switchTheme(res);
		}
	}
}
