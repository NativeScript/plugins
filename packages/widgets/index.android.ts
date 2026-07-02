import { Utils } from '@nativescript/core';

class WidgetManager {
	//@ts-ignore
	private _manager: org.nativescript.widgets.AppWidgetManager;

	get native() {
		return this._manager;
	}

	static fromNative(manager: org.nativescript.widgets.AppWidgetManager) {
		const ret = new WidgetManager();
		ret._manager = manager;
		return ret;
	}
}

class AndroidWidgetManager {
	private _widgetManager: android.appwidget.AppWidgetManager;

	constructor(nativeManager: android.appwidget.AppWidgetManager) {
		this._widgetManager = nativeManager;
	}

	get native() {
		return this._widgetManager;
	}

	static fromNative(nativeManager: android.appwidget.AppWidgetManager) {
		return new AndroidWidgetManager(nativeManager);
	}
}

interface IWidgetListener {
	onEnabled?: (provider: string) => void;
	onUpdate?: (event: { provider: string; appWidgetIds: number[]; manager: WidgetManager; widgetManager: AndroidWidgetManager }) => void;
	onUpdateAsync?: (event: { provider: string; appWidgetIds: number[]; manager: WidgetManager; widgetManager: AndroidWidgetManager }) => void;
	onDeleted?: (event: { provider: string; appWidgetIds: number[] }) => void;
	onDisabled?: (provider: string) => void;
}

export class AndroidRemoteViews {
	private _remoteViews: android.widget.RemoteViews;

	constructor(remoteViews: android.widget.RemoteViews) {
		this._remoteViews = remoteViews;
	}

	get native() {
		return this._remoteViews;
	}
}

export class RemoteViews {
	protected _remoteViews: org.nativescript.widgets.RemoteViews;

	constructor(remoteViews: org.nativescript.widgets.RemoteViews) {
		this._remoteViews = remoteViews;
	}

	get native() {
		return this._remoteViews;
	}

	setOnClickPendingIntent(intent: android.app.PendingIntent) {
		this.native.setOnClickPendingIntent(intent);
		return this;
	}

	setBackgroundColor(value: number) {
		this.native.setBackgroundColor(value);
		return this;
	}

	setBoolean(method: string, value: boolean) {
		this.native.setBoolean(method, value);
		return this;
	}

	setByte(method: string, value: number) {
		this.native.setByte(method, value);
		return this;
	}

	setShort(method: string, value: number) {
		this.native.setShort(method, value);
		return this;
	}

	setInt(method: string, value: number) {
		this.native.setInt(method, value);
		return this;
	}

	setLong(method: string, value: number) {
		this.native.setLong(method, value);
		return this;
	}

	setFloat(method: string, value: number) {
		this.native.setFloat(method, value);
		return this;
	}

	setString(method: string, value: string) {
		this.native.setString(method, value);
		return this;
	}

	setSize(width: number, widthUnit: number, height: number, heightUnit: number) {
		this.native.setSize(width, widthUnit, height, heightUnit);
		return this;
	}

	setWidth(value: number, unit: number) {
		this.native.setWidth(value, unit);
		return this;
	}

	setHeight(value: number, unit: number) {
		this.native.setHeight(value, unit);
		return this;
	}

	setVisibility(visibility: number) {
		this.native.setVisibility(visibility);
		return this;
	}

	findViewById(id: string) {
		const view = this.native.findViewById(id);
		return view ? new RemoteViews(view) : null;
	}

	resolveRemoteResources() {
		this.native.resolveRemoteResources();
		return this;
	}

	toAndroidRemoteViews(packageName?: string): AndroidRemoteViews {
		return new AndroidRemoteViews(this._remoteViews.build(packageName ?? Utils.android.getApplicationContext().getPackageName()));
	}
}

export class AdapterViewFlipper extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.AdapterViewFlipper(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.AdapterViewFlipper;
	}
}

export class Button extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.Button(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.Button;
	}

	setText(value: string) {
		this.native.setText(value);
		return this;
	}

	setTextColor(value: number) {
		this.native.setTextColor(value);
		return this;
	}
}

export class Chronometer extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.Chronometer(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.Chronometer;
	}
}

export class FrameLayout extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.FrameLayout(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.FrameLayout;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class GridLayout extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.GridLayout(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.GridLayout;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class GridView extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.GridView(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.GridView;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class ImageButton extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.ImageButton(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.ImageButton;
	}

	setImageUrl(url: string) {
		this.native.setImageUrl(url);
		return this;
	}

	setImageResource(value: number) {
		this.native.setImageResource(value);
		return this;
	}

	setImageURI(value: android.net.Uri) {
		this.native.setImageURI(value);
		return this;
	}

	setImageBitmap(value: android.graphics.Bitmap) {
		this.native.setImageBitmap(value);
		return this;
	}
}

export class ImageView extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.ImageView(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.ImageView;
	}

	setImageUrl(url: string) {
		this.native.setImageUrl(url);
		return this;
	}

	setImageResource(value: number) {
		this.native.setImageResource(value);
		return this;
	}

	setImageURI(value: android.net.Uri) {
		this.native.setImageURI(value);
		return this;
	}

	setImageBitmap(value: android.graphics.Bitmap) {
		this.native.setImageBitmap(value);
		return this;
	}
}

export class LinearLayout extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.LinearLayout(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.LinearLayout;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class ListView extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.ListView(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.ListView;
	}
}

export class ProgressBar extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.ProgressBar(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.ProgressBar;
	}
}

export class RelativeLayout extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.RelativeLayout(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.RelativeLayout;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class StackView extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.StackView(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.StackView;
	}

	addView(view: RemoteViews) {
		this.native.addView(view.native);
	}

	removeView(view: RemoteViews) {
		this.native.removeView(view.native);
	}
}

export class TextView extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.TextView(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.TextView;
	}

	setText(value: string) {
		this.native.setText(value);
		return this;
	}

	setTextColor(value: number) {
		this.native.setTextColor(value);
		return this;
	}
}

export class TextClock extends RemoteViews {
	constructor(id?: string) {
		super(new org.nativescript.widgets.RemoteViews.TextClock(id ?? null));
	}

	get native() {
		return this._remoteViews as org.nativescript.widgets.RemoteViews.TextClock;
	}

	setText(value: string) {
		this.native.setText(value);
		return this;
	}

	setTextColor(value: number) {
		this.native.setTextColor(value);
		return this;
	}
}

export function registerWidgetListener(provider: string, listener: IWidgetListener) {
	const opts: {
		onEnabled: (provider: string) => void;
		onUpdateAsync?: (context: any, provider: string, appWidgetIds: any, manager: any, widgetManager: any) => void;
		onUpdate: (context: any, provider: string, appWidgetIds: any, manager: any, widgetManager: any) => void;
		onDeleted: (provider: string, appWidgetIds: any) => void;
		onDisabled: (provider: string) => void;
	} = {
		onEnabled(provider: string) {
			if (listener.onEnabled) {
				listener.onEnabled(provider);
			}
		},
		onUpdateAsync(context: any, provider: string, appWidgetIds: any, manager: any, widgetManager: any) {
			if (listener.onUpdateAsync) {
				listener.onUpdateAsync({ provider, appWidgetIds: Utils.dataDeserialize(appWidgetIds), manager: WidgetManager.fromNative(manager), widgetManager: AndroidWidgetManager.fromNative(widgetManager) });
			}
		},
		onUpdate(context: any, provider: string, appWidgetIds: any, manager: any, widgetManager: any) {
			if (listener.onUpdate) {
				listener.onUpdate({ provider, appWidgetIds: Utils.dataDeserialize(appWidgetIds), manager: WidgetManager.fromNative(manager), widgetManager: AndroidWidgetManager.fromNative(widgetManager) });
			}
		},
		onDeleted(provider: string, appWidgetIds: any) {
			if (listener.onDeleted) {
				listener.onDeleted({ provider, appWidgetIds: Utils.dataDeserialize(appWidgetIds) });
			}
		},
		onDisabled(provider: string) {
			if (listener.onDisabled) {
				listener.onDisabled(provider);
			}
		},
	};

	if (!listener.onUpdateAsync && opts.onUpdateAsync) {
		delete opts.onUpdateAsync;
	}

	org.nativescript.widgets.AppWidgetManager.INSTANCE.register(provider, new org.nativescript.widgets.AppWidgetManager.WidgetListener(opts));
}

export function unregisterWidgetListener(provider: string) {
	org.nativescript.widgets.AppWidgetManager.INSTANCE.unregister(provider);
}
