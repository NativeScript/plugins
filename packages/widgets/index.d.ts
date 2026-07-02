export declare class AndroidRemoteViews {
	private _remoteViews;
	constructor(remoteViews: android.widget.RemoteViews);
	get native(): android.widget.RemoteViews;
}

export declare class RemoteViews {
	protected _remoteViews: org.nativescript.widgets.RemoteViews;
	constructor(remoteViews: org.nativescript.widgets.RemoteViews);
	get native(): org.nativescript.widgets.RemoteViews;
	setOnClickPendingIntent(intent: android.app.PendingIntent): this;
	setBackgroundColor(value: number): this;
	setBoolean(method: string, value: boolean): this;
	setByte(method: string, value: number): this;
	setShort(method: string, value: number): this;
	setInt(method: string, value: number): this;
	setLong(method: string, value: number): this;
	setFloat(method: string, value: number): this;
	setString(method: string, value: string): this;
	setSize(width: number, widthUnit: number, height: number, heightUnit: number): this;
	setWidth(value: number, unit: number): this;
	setHeight(value: number, unit: number): this;
	setVisibility(visibility: number): this;
	findViewById(id: string): RemoteViews | null;
	resolveRemoteResources(): this;
	toAndroidRemoteViews(packageName?: string): AndroidRemoteViews;
}

export declare class AdapterViewFlipper extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.AdapterViewFlipper;
}

export declare class Button extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.Button;
	setText(value: string): this;
	setTextColor(value: number): this;
}

export declare class Chronometer extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.Chronometer;
}

export declare class FrameLayout extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.FrameLayout;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class GridLayout extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.GridLayout;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class GridView extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.GridView;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class ImageButton extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.ImageButton;
	setImageUrl(url: string): this;
	setImageResource(value: number): this;
	setImageURI(value: android.net.Uri): this;
	setImageBitmap(value: android.graphics.Bitmap): this;
}

export declare class ImageView extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.ImageView;
	setImageUrl(url: string): this;
	setImageResource(value: number): this;
	setImageURI(value: android.net.Uri): this;
	setImageBitmap(value: android.graphics.Bitmap): this;
}

export declare class LinearLayout extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.LinearLayout;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class ListView extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.ListView;
}

export declare class ProgressBar extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.ProgressBar;
}

export declare class RelativeLayout extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.RelativeLayout;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class StackView extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.StackView;
	addView(view: RemoteViews): void;
	removeView(view: RemoteViews): void;
}

export declare class TextView extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.TextView;
	setText(value: string): this;
	setTextColor(value: number): this;
}

export declare class TextClock extends RemoteViews {
	constructor(id?: string);
	get native(): org.nativescript.widgets.RemoteViews.TextClock;
	setText(value: string): this;
	setTextColor(value: number): this;
}

interface IWidgetListener {
	onEnabled?: (provider: string) => void;
	onUpdate?: (event: { provider: string; appWidgetIds: number[]; manager: { native: org.nativescript.widgets.AppWidgetManager }; widgetManager: { native: android.appwidget.AppWidgetManager } }) => void;
	onUpdateAsync?: (event: { provider: string; appWidgetIds: number[]; manager: { native: org.nativescript.widgets.AppWidgetManager }; widgetManager: { native: android.appwidget.AppWidgetManager } }) => void;
	onDeleted?: (event: { provider: string; appWidgetIds: number[] }) => void;
	onDisabled?: (provider: string) => void;
}

export declare function registerWidgetListener(provider: string, listener: IWidgetListener): void;
export declare function unregisterWidgetListener(provider: string): void;
