declare module org {
	export module nativescript {
		export module widgets {
			export class AppWidgetManager {
				public static class: java.lang.Class<org.nativescript.widgets.AppWidgetManager>;
				public static INSTANCE: org.nativescript.widgets.AppWidgetManager;
				public notifyEnabled$widgets_release(provider: string): void;
				public notifyDeleted$widgets_release(provider: string, appWidgetIds: androidNative.Array<number>): void;
				public notifyOptionsChanged$widgets_release(context: globalAndroid.content.Context, provider: string, appWidgetId: number, newOptions: globalAndroid.os.Bundle, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
				public notifyUpdateAsync$widgets_release(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
				public getManager(provider: string): org.nativescript.widgets.RemoteViewsManager;
				public register(providerClass: string, listener: org.nativescript.widgets.AppWidgetManager.WidgetListener): void;
				public unregister(providerClass: string): void;
				public notifyUpdate$widgets_release(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
				public notifyDisabled$widgets_release(provider: string): void;
			}
			export module AppWidgetManager {
				export class WidgetListener {
					public static class: java.lang.Class<org.nativescript.widgets.AppWidgetManager.WidgetListener>;
					/**
					 * Constructs a new instance of the org.nativescript.widgets.AppWidgetManager$WidgetListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEnabled?(provider: string): void;
						onUpdate?(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
						onUpdateAsync?(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
						onDisabled?(provider: string): void;
						onDeleted?(provider: string, appWidgetIds: androidNative.Array<number>): void;
						onOptionsChanged?(context: globalAndroid.content.Context, provider: string, appWidgetId: number, newOptions: globalAndroid.os.Bundle, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
					});
					public constructor();
					public onEnabled(provider: string): void;
					public onUpdate(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
					public onDisabled(provider: string): void;
					public onDeleted(provider: string, appWidgetIds: androidNative.Array<number>): void;
					public onUpdateAsync(context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
					public onOptionsChanged(context: globalAndroid.content.Context, provider: string, appWidgetId: number, newOptions: globalAndroid.os.Bundle, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
				}
				export module WidgetListener {
					export class DefaultImpls {
						public static class: java.lang.Class<org.nativescript.widgets.AppWidgetManager.WidgetListener.DefaultImpls>;
						/** @deprecated */
						public static onOptionsChanged($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, context: globalAndroid.content.Context, provider: string, appWidgetId: number, newOptions: globalAndroid.os.Bundle, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
						/** @deprecated */
						public static onUpdateAsync($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
						/** @deprecated */
						public static onEnabled($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, provider: string): void;
						/** @deprecated */
						public static onDisabled($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, provider: string): void;
						/** @deprecated */
						public static onUpdate($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, context: globalAndroid.content.Context, provider: string, appWidgetIds: androidNative.Array<number>, manager: org.nativescript.widgets.RemoteViewsManager, widgetManager: globalAndroid.appwidget.AppWidgetManager): void;
						/** @deprecated */
						public static onDeleted($this: org.nativescript.widgets.AppWidgetManager.WidgetListener, provider: string, appWidgetIds: androidNative.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module widgets {
			export class AppWidgetProvider {
				public static class: java.lang.Class<org.nativescript.widgets.AppWidgetProvider>;
				public onDisabled(context: globalAndroid.content.Context): void;
				public onEnabled($this$iv: globalAndroid.content.Context): void;
				public onUpdate(request$iv: globalAndroid.content.Context, this_$iv: globalAndroid.appwidget.AppWidgetManager, context$iv: androidNative.Array<number>): void;
				public onDeleted(it: globalAndroid.content.Context, this_: androidNative.Array<number>): void;
				public onAppWidgetOptionsChanged(manager: globalAndroid.content.Context, it: globalAndroid.appwidget.AppWidgetManager, ctx: number, this_: globalAndroid.os.Bundle): void;
				public constructor();
			}
			export module AppWidgetProvider {
				export class WidgetWorker extends org.nativescript.widgets.AppWidgetWorker {
					public static class: java.lang.Class<org.nativescript.widgets.AppWidgetProvider.WidgetWorker>;
					public constructor(context: globalAndroid.content.Context, params: androidx.work.WorkerParameters);
					public doWork(): androidx.work.ListenableWorker.Result;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module widgets {
			export abstract class AppWidgetWorker {
				public static class: java.lang.Class<org.nativescript.widgets.AppWidgetWorker>;
				public static KEY_WIDGET_IDS: string = 'widget_ids';
				public static KEY_PROVIDER: string = 'provider';
				public getWidgetIds(): androidNative.Array<number>;
				public static enqueue(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>): void;
				public updateWidget(this_: number, widgetId: globalAndroid.widget.RemoteViews): void;
				public static enqueuePeriodic(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>, repeatIntervalMinutes: number): void;
				public updateWidgets(mgr: globalAndroid.widget.RemoteViews): void;
				public getProvider(): string;
				public static cancelPeriodic(context: globalAndroid.content.Context, provider: string): void;
				public static buildData(provider: string, widgetIds: androidNative.Array<number>): androidx.work.Data;
				public static enqueuePeriodic(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>): void;
				public static cancelPeriodic(context: globalAndroid.content.Context, provider: string, uniqueWorkName: string): void;
				public constructor(context: globalAndroid.content.Context, params: androidx.work.WorkerParameters);
				public static enqueuePeriodic(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>, repeatIntervalMinutes: number, uniqueWorkName: string): void;
				public static isScheduled(context: globalAndroid.content.Context, provider: string): boolean;
			}
			export module AppWidgetWorker {
				export class Companion {
					public static class: java.lang.Class<org.nativescript.widgets.AppWidgetWorker.Companion>;
					public enqueuePeriodic(this_: globalAndroid.content.Context, context: java.lang.Class<any>, workerClass: string, provider: androidNative.Array<number>, widgetIds: number, repeatIntervalMinutes: string): void;
					public buildData(provider: string, widgetIds: androidNative.Array<number>): androidx.work.Data;
					public isScheduled(it: globalAndroid.content.Context, element$iv: string): boolean;
					public enqueuePeriodic(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>, repeatIntervalMinutes: number): void;
					public cancelPeriodic(context: globalAndroid.content.Context, provider: string): void;
					public cancelPeriodic(context: globalAndroid.content.Context, provider: string, uniqueWorkName: string): void;
					public enqueue(now: globalAndroid.content.Context, last: java.lang.Class<any>, request: string, this_: androidNative.Array<number>): void;
					public enqueuePeriodic(context: globalAndroid.content.Context, workerClass: java.lang.Class<any>, provider: string, widgetIds: androidNative.Array<number>): void;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module widgets {
			export class RemoteViews {
				public static class: java.lang.Class<org.nativescript.widgets.RemoteViews>;
				public getId(): string;
				public setShort(method: string, value: number): org.nativescript.widgets.RemoteViews;
				public setBoolean(method: string, value: boolean): org.nativescript.widgets.RemoteViews;
				public setLong(method: string, value: number): org.nativescript.widgets.RemoteViews;
				public setInt(method: string, value: number): org.nativescript.widgets.RemoteViews;
				public setOnClickPendingIntent(intent: globalAndroid.app.PendingIntent): org.nativescript.widgets.RemoteViews;
				public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
				public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
				public setBackgroundColor(value: number): org.nativescript.widgets.RemoteViews;
				public setString(method: string, value: string): org.nativescript.widgets.RemoteViews;
				public setFloat(method: string, value: number): org.nativescript.widgets.RemoteViews;
				public setByte(method: string, value: number): org.nativescript.widgets.RemoteViews;
				public setSize(width: number, widthUnit: number, height: number, heightUnit: number): org.nativescript.widgets.RemoteViews;
				public findViewById(id: string): org.nativescript.widgets.RemoteViews;
				public build(packageName: string): globalAndroid.widget.RemoteViews;
				public getLayout(): org.nativescript.widgets.RemoteViews.Layout;
				public setHeight(value: number, unit: number): org.nativescript.widgets.RemoteViews;
				public resolveRemoteResources(): void;
				public toLayoutId(): number;
				public setVisibility(visibility: number): org.nativescript.widgets.RemoteViews;
				public setWidth(value: number, unit: number): org.nativescript.widgets.RemoteViews;
			}
			export module RemoteViews {
				export class AdapterViewFlipper extends org.nativescript.widgets.RemoteViews {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.AdapterViewFlipper>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
				}
				export class Button extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.TextLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Button>;
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public constructor();
					public setText(value: string): org.nativescript.widgets.RemoteViews.TextLike;
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
					public setTextColor(value: number): org.nativescript.widgets.RemoteViews.TextLike;
				}
				export class Chronometer extends org.nativescript.widgets.RemoteViews {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Chronometer>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
				}
				export abstract class Command {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command>;
					public applyToWithContext(rv: globalAndroid.widget.RemoteViews, targetId: number, context: globalAndroid.content.Context): void;
					public applyTo(param0: globalAndroid.widget.RemoteViews, param1: number): void;
				}
				export module Command {
					export class SetBackgroundColor extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetBackgroundColor>;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public constructor(value: number);
						public component1(): number;
						public copy(value: number): org.nativescript.widgets.RemoteViews.Command.SetBackgroundColor;
						public toString(): string;
						public getValue(): number;
					}
					export class SetBoolean extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetBoolean>;
						public equals(other: any): boolean;
						public copy(method: string, value: boolean): org.nativescript.widgets.RemoteViews.Command.SetBoolean;
						public component2(): boolean;
						public constructor(method: string, value: boolean);
						public getValue(): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public toString(): string;
					}
					export class SetByte extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetByte>;
						public component2(): number;
						public equals(other: any): boolean;
						public copy(method: string, value: number): org.nativescript.widgets.RemoteViews.Command.SetByte;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public constructor(method: string, value: number);
						public toString(): string;
						public getValue(): number;
					}
					export class SetFloat extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetFloat>;
						public component2(): number;
						public copy(method: string, value: number): org.nativescript.widgets.RemoteViews.Command.SetFloat;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public constructor(method: string, value: number);
						public toString(): string;
						public getValue(): number;
					}
					export class SetHeight extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetHeight>;
						public constructor(value: number, unit: number);
						public component2(): number;
						public equals(other: any): boolean;
						public copy(value: number, unit: number): org.nativescript.widgets.RemoteViews.Command.SetHeight;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public getUnit(): number;
						public hashCode(): number;
						public component1(): number;
						public toString(): string;
						public getValue(): number;
					}
					export class SetHeightDimen extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetHeightDimen>;
						public component3(): string;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public toString(): string;
						public constructor(value: number, resource: string, packageName: string);
						public getPackageName(): string;
						public component2(): string;
						public copy(value: number, resource: string, packageName: string): org.nativescript.widgets.RemoteViews.Command.SetHeightDimen;
						public applyToWithContext(this_: globalAndroid.widget.RemoteViews, rv: number, targetId: globalAndroid.content.Context): void;
						public component1(): number;
						public getResource(): string;
						public getValue(): number;
					}
					export class SetImageBitmap extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetImageBitmap>;
						public constructor(value: globalAndroid.graphics.Bitmap);
						public equals(other: any): boolean;
						public getValue(): globalAndroid.graphics.Bitmap;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public copy(value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.Command.SetImageBitmap;
						public hashCode(): number;
						public component1(): globalAndroid.graphics.Bitmap;
						public toString(): string;
					}
					export class SetImageResource extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetImageResource>;
						public equals(other: any): boolean;
						public constructor(resId: number);
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public getResId(): number;
						public component1(): number;
						public copy(resId: number): org.nativescript.widgets.RemoteViews.Command.SetImageResource;
						public toString(): string;
					}
					export class SetImageURI extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetImageURI>;
						public copy(value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.Command.SetImageURI;
						public equals(other: any): boolean;
						public constructor(value: globalAndroid.net.Uri);
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public getValue(): globalAndroid.net.Uri;
						public component1(): globalAndroid.net.Uri;
						public toString(): string;
					}
					export class SetImageUrl extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetImageUrl>;
						public equals(other: any): boolean;
						public copy(url: string): org.nativescript.widgets.RemoteViews.Command.SetImageUrl;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public resolve(): org.nativescript.widgets.RemoteViews.Command.SetImageBitmap;
						public component1(): string;
						public hashCode(): number;
						public constructor(url: string);
						public getUrl(): string;
						public toString(): string;
					}
					export class SetInt extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetInt>;
						public component2(): number;
						public copy(method: string, value: number): org.nativescript.widgets.RemoteViews.Command.SetInt;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public constructor(method: string, value: number);
						public toString(): string;
						public getValue(): number;
					}
					export class SetLong extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetLong>;
						public component2(): number;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public copy(method: string, value: number): org.nativescript.widgets.RemoteViews.Command.SetLong;
						public constructor(method: string, value: number);
						public toString(): string;
						public getValue(): number;
					}
					export class SetOnClickPendingIntent extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetOnClickPendingIntent>;
						public equals(other: any): boolean;
						public applyToWithContext(rv: globalAndroid.widget.RemoteViews, targetId: number, context: globalAndroid.content.Context): void;
						public constructor(intent: globalAndroid.app.PendingIntent);
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public getIntent(): globalAndroid.app.PendingIntent;
						public copy(intent: globalAndroid.app.PendingIntent): org.nativescript.widgets.RemoteViews.Command.SetOnClickPendingIntent;
						public toString(): string;
						public component1(): globalAndroid.app.PendingIntent;
					}
					export class SetShort extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetShort>;
						public component2(): number;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public copy(method: string, value: number): org.nativescript.widgets.RemoteViews.Command.SetShort;
						public hashCode(): number;
						public getMethod(): string;
						public constructor(method: string, value: number);
						public toString(): string;
						public getValue(): number;
					}
					export class SetSize extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetSize>;
						public getWidthUnit(): number;
						public equals(other: any): boolean;
						public getHeightUnit(): number;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public copy(width: number, widthUnit: number, height: number, heightUnit: number): org.nativescript.widgets.RemoteViews.Command.SetSize;
						public getHeight(): number;
						public component4(): number;
						public toString(): string;
						public component2(): number;
						public constructor(width: number, widthUnit: number, height: number, heightUnit: number);
						public getWidth(): number;
						public component1(): number;
						public component3(): number;
					}
					export class SetSizeDimen extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetSizeDimen>;
						public component3(): string;
						public equals(other: any): boolean;
						public component5(): string;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public copy(width: number, widthResource: string, widthPackageName: string, height: number, heightResource: string, heightPackageName: string): org.nativescript.widgets.RemoteViews.Command.SetSizeDimen;
						public getHeight(): number;
						public applyToWithContext(heightRes: globalAndroid.widget.RemoteViews, this_: number, rv: globalAndroid.content.Context): void;
						public getWidthResource(): string;
						public component4(): number;
						public toString(): string;
						public getHeightResource(): string;
						public constructor(width: number, widthResource: string, widthPackageName: string, height: number, heightResource: string, heightPackageName: string);
						public getWidth(): number;
						public component2(): string;
						public getWidthPackageName(): string;
						public component6(): string;
						public getHeightPackageName(): string;
						public component1(): number;
					}
					export class SetString extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetString>;
						public equals(other: any): boolean;
						public constructor(method: string, value: string);
						public component2(): string;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public getMethod(): string;
						public copy(method: string, value: string): org.nativescript.widgets.RemoteViews.Command.SetString;
						public getValue(): string;
						public toString(): string;
					}
					export class SetText extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetText>;
						public equals(other: any): boolean;
						public copy(value: string): org.nativescript.widgets.RemoteViews.Command.SetText;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public component1(): string;
						public hashCode(): number;
						public constructor(value: string);
						public getValue(): string;
						public toString(): string;
					}
					export class SetTextColor extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetTextColor>;
						public copy(value: number): org.nativescript.widgets.RemoteViews.Command.SetTextColor;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public constructor(value: number);
						public component1(): number;
						public toString(): string;
						public getValue(): number;
					}
					export class SetVisibility extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetVisibility>;
						public equals(other: any): boolean;
						public getVisibility(): number;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public constructor(visibility: number);
						public component1(): number;
						public copy(visibility: number): org.nativescript.widgets.RemoteViews.Command.SetVisibility;
						public toString(): string;
					}
					export class SetWidth extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetWidth>;
						public constructor(value: number, unit: number);
						public component2(): number;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public getUnit(): number;
						public copy(value: number, unit: number): org.nativescript.widgets.RemoteViews.Command.SetWidth;
						public hashCode(): number;
						public component1(): number;
						public toString(): string;
						public getValue(): number;
					}
					export class SetWidthDimen extends org.nativescript.widgets.RemoteViews.Command {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Command.SetWidthDimen>;
						public component3(): string;
						public equals(other: any): boolean;
						public applyTo(rv: globalAndroid.widget.RemoteViews, targetId: number): void;
						public hashCode(): number;
						public copy(value: number, resource: string, packageName: string): org.nativescript.widgets.RemoteViews.Command.SetWidthDimen;
						public toString(): string;
						public constructor(value: number, resource: string, packageName: string);
						public getPackageName(): string;
						public component2(): string;
						public applyToWithContext(this_: globalAndroid.widget.RemoteViews, rv: number, targetId: globalAndroid.content.Context): void;
						public component1(): number;
						public getResource(): string;
						public getValue(): number;
					}
				}
				export class Companion {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Companion>;
					public generateId(): string;
				}
				export class FrameLayout extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.FrameLayout>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class GridLayout extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.GridLayout>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class GridView extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.GridView>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class ImageButton extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ImageLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ImageButton>;
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public setImageUrl(url: string): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageResource(value: number): org.nativescript.widgets.RemoteViews.ImageLike;
					public constructor(id: string | null);
					public setImageURI(value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageBitmap(value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
				}
				export class ImageLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ImageLike>;
					/**
					 * Constructs a new instance of the org.nativescript.widgets.RemoteViews$ImageLike interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
						setImageResource(value: number): org.nativescript.widgets.RemoteViews.ImageLike;
						setImageURI(value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
						setImageBitmap(value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
						setImageUrl(url: string): org.nativescript.widgets.RemoteViews.ImageLike;
						access$setImageResource$jd($this: org.nativescript.widgets.RemoteViews.ImageLike, value: number): org.nativescript.widgets.RemoteViews.ImageLike;
						access$setImageURI$jd($this: org.nativescript.widgets.RemoteViews.ImageLike, value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
						access$setImageBitmap$jd($this: org.nativescript.widgets.RemoteViews.ImageLike, value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
						access$setImageUrl$jd($this: org.nativescript.widgets.RemoteViews.ImageLike, url: string): org.nativescript.widgets.RemoteViews.ImageLike;
					});
					public constructor();
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public setImageUrl(url: string): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageResource(value: number): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageURI(value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageBitmap(value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
				}
				export module ImageLike {
					export class DefaultImpls {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ImageLike.DefaultImpls>;
						/** @deprecated */
						public static setImageBitmap($this: org.nativescript.widgets.RemoteViews.ImageLike, value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
						/** @deprecated */
						public static setImageUrl($this: org.nativescript.widgets.RemoteViews.ImageLike, url: string): org.nativescript.widgets.RemoteViews.ImageLike;
						/** @deprecated */
						public static setImageResource($this: org.nativescript.widgets.RemoteViews.ImageLike, value: number): org.nativescript.widgets.RemoteViews.ImageLike;
						/** @deprecated */
						public static setImageURI($this: org.nativescript.widgets.RemoteViews.ImageLike, value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
					}
				}
				export class ImageView extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ImageLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ImageView>;
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public setImageUrl(url: string): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageResource(value: number): org.nativescript.widgets.RemoteViews.ImageLike;
					public constructor(id: string | null);
					public setImageURI(value: globalAndroid.net.Uri): org.nativescript.widgets.RemoteViews.ImageLike;
					public setImageBitmap(value: globalAndroid.graphics.Bitmap): org.nativescript.widgets.RemoteViews.ImageLike;
				}
				export class Layout {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.Layout>;
					public static AdapterViewFlipper: org.nativescript.widgets.RemoteViews.Layout;
					public static Button: org.nativescript.widgets.RemoteViews.Layout;
					public static Chronometer: org.nativescript.widgets.RemoteViews.Layout;
					public static FrameLayout: org.nativescript.widgets.RemoteViews.Layout;
					public static GridLayout: org.nativescript.widgets.RemoteViews.Layout;
					public static GridView: org.nativescript.widgets.RemoteViews.Layout;
					public static ImageButton: org.nativescript.widgets.RemoteViews.Layout;
					public static ImageView: org.nativescript.widgets.RemoteViews.Layout;
					public static LinearLayout: org.nativescript.widgets.RemoteViews.Layout;
					public static ListView: org.nativescript.widgets.RemoteViews.Layout;
					public static ProgressBar: org.nativescript.widgets.RemoteViews.Layout;
					public static RelativeLayout: org.nativescript.widgets.RemoteViews.Layout;
					public static StackView: org.nativescript.widgets.RemoteViews.Layout;
					public static TextView: org.nativescript.widgets.RemoteViews.Layout;
					public static ViewFlipper: org.nativescript.widgets.RemoteViews.Layout;
					public static TextClock: org.nativescript.widgets.RemoteViews.Layout;
					public static getEntries(): any;
					public static valueOf(value: string): org.nativescript.widgets.RemoteViews.Layout;
					public static values(): androidNative.Array<org.nativescript.widgets.RemoteViews.Layout>;
				}
				export class LinearLayout extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.LinearLayout>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class ListView extends org.nativescript.widgets.RemoteViews {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ListView>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
				}
				export class ProgressBar extends org.nativescript.widgets.RemoteViews {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ProgressBar>;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
				}
				export class RelativeLayout extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.RelativeLayout>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class StackView extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.StackView>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class TextClock extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.TextLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.TextClock>;
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public constructor();
					public setText(value: string): org.nativescript.widgets.RemoteViews.TextLike;
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
					public setTextColor(value: number): org.nativescript.widgets.RemoteViews.TextLike;
				}
				export class TextLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.TextLike>;
					/**
					 * Constructs a new instance of the org.nativescript.widgets.RemoteViews$TextLike interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>; setText(value: string): org.nativescript.widgets.RemoteViews.TextLike; setTextColor(value: number): org.nativescript.widgets.RemoteViews.TextLike; access$setText$jd($this: org.nativescript.widgets.RemoteViews.TextLike, value: string): org.nativescript.widgets.RemoteViews.TextLike; access$setTextColor$jd($this: org.nativescript.widgets.RemoteViews.TextLike, value: number): org.nativescript.widgets.RemoteViews.TextLike });
					public constructor();
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public setText(value: string): org.nativescript.widgets.RemoteViews.TextLike;
					public setTextColor(value: number): org.nativescript.widgets.RemoteViews.TextLike;
				}
				export module TextLike {
					export class DefaultImpls {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.TextLike.DefaultImpls>;
						/** @deprecated */
						public static setText($this: org.nativescript.widgets.RemoteViews.TextLike, value: string): org.nativescript.widgets.RemoteViews.TextLike;
						/** @deprecated */
						public static setTextColor($this: org.nativescript.widgets.RemoteViews.TextLike, value: number): org.nativescript.widgets.RemoteViews.TextLike;
					}
				}
				export class TextView extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.TextLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.TextView>;
					public getCommands(): java.util.Map<string, org.nativescript.widgets.RemoteViews.Command>;
					public constructor();
					public setText(value: string): org.nativescript.widgets.RemoteViews.TextLike;
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public constructor(id: string | null);
					public setTextColor(value: number): org.nativescript.widgets.RemoteViews.TextLike;
				}
				export class ViewFlipper extends org.nativescript.widgets.RemoteViews implements org.nativescript.widgets.RemoteViews.ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ViewFlipper>;
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public addView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor();
					public constructor(layout: org.nativescript.widgets.RemoteViews.Layout, id: string);
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public constructor(id: string | null);
				}
				export class ViewGroupLike {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ViewGroupLike>;
					/**
					 * Constructs a new instance of the org.nativescript.widgets.RemoteViews$ViewGroupLike interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
						removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
						access$addView$jd($this: org.nativescript.widgets.RemoteViews.ViewGroupLike, child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
						access$removeView$jd($this: org.nativescript.widgets.RemoteViews.ViewGroupLike, child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					});
					public constructor();
					public addView(this_: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					public removeView(it: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
				}
				export module ViewGroupLike {
					export class DefaultImpls {
						public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.ViewGroupLike.DefaultImpls>;
						/** @deprecated */
						public static addView($this: org.nativescript.widgets.RemoteViews.ViewGroupLike, child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
						/** @deprecated */
						public static removeView($this: org.nativescript.widgets.RemoteViews.ViewGroupLike, child: org.nativescript.widgets.RemoteViews): org.nativescript.widgets.RemoteViews.ViewGroupLike;
					}
				}
				export class WhenMappings {
					public static class: java.lang.Class<org.nativescript.widgets.RemoteViews.WhenMappings>;
				}
			}
		}
	}
}

declare module org {
	export module nativescript {
		export module widgets {
			export class RemoteViewsManager {
				public static class: java.lang.Class<org.nativescript.widgets.RemoteViewsManager>;
				public reparent(oldParentId: string, newParentId: string): void;
				public build(it: string): globalAndroid.widget.RemoteViews;
				public build(this_: string, rootId: string): globalAndroid.widget.RemoteViews;
				public findViewById(found: string, childId: string): org.nativescript.widgets.RemoteViews;
				public resolveRemoteResources(): void;
				public remove(parentId: string): void;
				public add(it: org.nativescript.widgets.RemoteViews, id: string): void;
				public getById(id: string): org.nativescript.widgets.RemoteViews;
				public getChildren(it: string): java.util.List<org.nativescript.widgets.RemoteViews>;
				public constructor();
				public getParent(it: string): org.nativescript.widgets.RemoteViews;
			}
		}
	}
}
