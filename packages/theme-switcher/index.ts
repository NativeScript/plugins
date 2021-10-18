import { addTaggedAdditionalCSS, removeTaggedAdditionalCSS, Application, ApplicationSettings } from '@nativescript/core';

export interface ThemeDefinition {
	[name: string]: () => string | any;
}

export interface ThemeSwitcherOptions {
	persistent?: boolean;
	persistenceKey?: string;
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class ThemeSwitcher {
	private themes: Map<string, Function>;
	private cssTag: string;
	private options: ThemeSwitcherOptions;

	constructor(themeKey: string) {
		this.themes = new Map();
		this.cssTag = `__theme_switcher_${themeKey}`;

		// default options
		this.options = {
			persistent: true,
			persistenceKey: this.cssTag,
		};
	}

	initThemes(themes: ThemeDefinition, options?: ThemeSwitcherOptions) {
		if (options) {
			// apply options to overriding the defaults
			Object.assign(this.options, options);
		}

		Object.entries(themes).map(([themeName, themeLoader]) => {
			this.themes.set(themeName, themeLoader);
		});

		// wait when loading the default theme
		// todo: figure out a cleaner way
		wait(100).then(() => {
			const defaultTheme = this.options.persistent ? ApplicationSettings.getString(this.options.persistenceKey, 'default') : 'default';
			this.switchTheme(defaultTheme);
		});
	}

	async switchTheme(themeName) {
		console.log('SWITCHING THEME TO ', themeName);
		if (!this.themes.has(themeName)) {
			if (themeName !== 'default') {
				// only warn for non-default theme
				console.warn(`Theme "${themeName} not found. Make sure it has been initialized with initTheme.`);
			}
			return;
		}

		const themeLoader = this.themes.get(themeName);
		const theme = await themeLoader().catch((err) => {
			console.warn(`Theme "${themeName} could not be loaded. Error:`, err);
		});

		if (!theme) {
			return;
		}

		if (this.options.persistent) {
			ApplicationSettings.setString(this.options.persistenceKey, themeName);
		}

		removeTaggedAdditionalCSS(this.cssTag);
		addTaggedAdditionalCSS(theme.default ?? theme, this.cssTag);
		Application.getRootView()?._onCssStateChange();
	}
}

// a default theme switcher instance for simple usage
const defaultThemeSwitcher = new ThemeSwitcher('default');

const initThemes: InstanceType<typeof ThemeSwitcher>['initThemes'] = defaultThemeSwitcher.initThemes.bind(defaultThemeSwitcher);
const switchTheme: InstanceType<typeof ThemeSwitcher>['switchTheme'] = defaultThemeSwitcher.switchTheme.bind(defaultThemeSwitcher);

export { initThemes, switchTheme };
