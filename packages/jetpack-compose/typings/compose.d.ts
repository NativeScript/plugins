declare module androidx {
	export module compose {
		export module ui {
			export module platform {
				export class ComposeView extends androidx.compose.ui.platform.AbstractComposeView {
					public static class: java.lang.Class<androidx.compose.ui.platform.ComposeView>;
					public static $stable: number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public getShouldCreateCompositionOnAttachedToWindow(): boolean;
					public getAccessibilityClassName(): string;
					public Content(param0: androidx.compose.runtime.Composer, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setContent(param0: any): void;
				}
			}
		}
	}
}
