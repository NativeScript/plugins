import { addTaggedAdditionalCSS, removeTaggedAdditionalCSS, Application, ApplicationSettings } from '@nativescript/core';

export interface ThemeDefinition {
	[name: string]: () => any;
}

export interface ThemeSwitcherOptions {
	persistent?: boolean;
	persistenceKey?: string;
	autoLoadThemeOnLaunch?: boolean;
}

export class ThemeSwitcher {
	private themes: Map<string, Function>;
	private cssTag: string;
	private options: ThemeSwitcherOptions;

	/**
	 * Constructs a new ThemeSwitcher instance with an unique themeKey used to distinguish between different instances.
	 *
	 * @param themeKey unique string key for this ThemeSwitcher instance
	 */
	constructor(themeKey: string) {
		this.themes = new Map();
		this.cssTag = `__theme_switcher_${themeKey}`;

		// default options
		this.options = {
			persistent: true,
			persistenceKey: this.cssTag,
			autoLoadThemeOnLaunch: true,
		};
	}

	/**
	 * Initiializes the ThemeSwitcher themes and options.
	 *
	 * @param themes An object containing theme names as keys and a loader function as values.
	 * @param options Optional options to configure the theme switcher.
	 */
	initThemes(themes: ThemeDefinition, options?: ThemeSwitcherOptions) {
		if (options) {
			// apply options to overriding the defaults
			Object.assign(this.options, options);
		}

		Object.entries(themes).map(([themeName, themeLoader]) => {
			this.themes.set(themeName, themeLoader);
		});

		if (this.options.autoLoadThemeOnLaunch) {
			Application.on(Application.launchEvent, () => {
				this.loadDefaultTheme();
			});
		}
	}

	/**
	 * Loads the last selected theme if persistence is enabled, otherwise loads "default" if it exists.
	 */
	loadDefaultTheme() {
		const defaultTheme = this.options.persistent ? ApplicationSettings.getString(this.options.persistenceKey, 'default') : 'default';
		this.switchTheme(defaultTheme);
	}

	/**
	 * Switches the current theme unloading the previously selected theme.
	 *
	 * @param themeName The name of the theme to switch to
	 */
	async switchTheme(themeName: string) {
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

		const rootView = Application.getRootView();
		rootView?._onCssStateChange();
		rootView?._getRootModalViews()?.forEach((view) => {
			view?._onCssStateChange();
		});
	}
}

// a default theme switcher instance for simple usage
const defaultThemeSwitcher = new ThemeSwitcher('default');

const initThemes: InstanceType<typeof ThemeSwitcher>['initThemes'] = defaultThemeSwitcher.initThemes.bind(defaultThemeSwitcher);
const switchTheme: InstanceType<typeof ThemeSwitcher>['switchTheme'] = defaultThemeSwitcher.switchTheme.bind(defaultThemeSwitcher);
const loadDefaultTheme: InstanceType<typeof ThemeSwitcher>['loadDefaultTheme'] = defaultThemeSwitcher.loadDefaultTheme.bind(defaultThemeSwitcher);

export { initThemes, switchTheme, loadDefaultTheme };
