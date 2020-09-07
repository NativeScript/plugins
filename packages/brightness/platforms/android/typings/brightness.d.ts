declare module org {
	export module nativescript {
		export module brightness {
			export class Brightness {
				public static class: java.lang.Class<org.nativescript.brightness.Brightness>;
				public static MAX_BRIGHTNESS: number;
				public static MIN_BRIGHTNESS: number;
				public static getScreenBrightness(param0: globalAndroid.content.Context): number;
				public static setScreenBrightness(param0: globalAndroid.content.Context, param1: number): void;
				public constructor();
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module brightness {
			export class BuildConfig {
				public static class: java.lang.Class<org.nativescript.brightness.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

//Generics information:

