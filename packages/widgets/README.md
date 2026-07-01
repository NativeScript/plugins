# @nativescript/widgets

Build and drive **home‑screen widgets** from your NativeScript app.

On **Android** this plugin lets you construct [`RemoteViews`](https://developer.android.com/reference/android/widget/RemoteViews) trees to respond to the App Widget lifecycle (enable / update / delete / disable), and push updates to placed widgets — including periodic background refreshes powered by `WorkManager`.

> **Platform support:** Android only, today. iOS home‑screen widgets and Live Activities are generated as native SwiftUI extensions by the NativeScript CLI (`ns widget ios`) and do **not** use this package's JS API — see [iOS](#ios) below. Importing `@nativescript/widgets` on iOS resolves to an empty module.

```bash
npm install @nativescript/widgets
```

Requires a CLI with widget scaffolding support (`ns widget android`).

---

## Table of contents

- [How it works](#how-it-works)
- [Quick start](#quick-start)
  - [1. Scaffold the widget](#1-scaffold-the-widget)
  - [2. Provide an initial layout](#2-provide-an-initial-layout)
  - [3. Register a listener in your app](#3-register-a-listener-in-your-app)
- [The widget lifecycle](#the-widget-lifecycle)
- [Building RemoteViews](#building-remoteviews)
  - [View classes](#view-classes)
  - [Text](#text)
  - [Images](#images)
  - [Remote images (from a URL)](#remote-images-from-a-url)
  - [Containers](#containers)
  - [Click handling](#click-handling)
  - [Sizing & visibility](#sizing--visibility)
- [Pushing updates to the widget](#pushing-updates-to-the-widget)
- [Periodic updates & the update interval](#periodic-updates--the-update-interval)
- [API reference](#api-reference)
- [iOS](#ios)
- [License](#license)

---

## How it works

An Android App Widget is driven by an `AppWidgetProvider` (a `BroadcastReceiver`) declared in the manifest. This plugin ships a base provider, `org.nativescript.widgets.AppWidgetProvider`, that forwards every system callback into your JavaScript through a listener you register with `registerWidgetListener()`.

The flow for a single widget provider looks like this:

```
Android system / WorkManager
          │
          ▼
org.nativescript.widgets.AppWidgetProvider  (the receiver in your manifest)
          │  forwards callbacks
          ▼
AppWidgetManager  (native singleton, keyed by provider class name)
          │  notifies the registered listener
          ▼
registerWidgetListener(provider, { onUpdate, onUpdateAsync, ... })   ← your JS
          │  you build a RemoteViews tree
          ▼
widgetManager.updateAppWidget(id, remoteViews)   ← pushes pixels to the widget
```

Two things are worth internalizing up front:

- **Widgets render in a *different* process** (the launcher's). You never hand it live views — you hand it a `RemoteViews` description, and the launcher inflates it. That is why the API is a command/description builder rather than the normal NativeScript view layer.
- **The plugin uses `WorkManager`, not `android:updatePeriodMillis`, for periodic refresh.** The generated `appwidget-provider` XML sets `updatePeriodMillis="0"` and the base provider schedules a periodic worker instead. This means periodic work survives across reboots and app updates, but is still subject to WorkManager's **15‑minute minimum** interval.

---

## Quick start

### 1. Scaffold the widget

Run the CLI generator and answer the prompts:

```bash
ns widget android
```

You'll be asked for a name, description, update interval, resize mode, min width/height, initial layout, package name and provider class name. With the defaults, this generates the following into `App_Resources/Android`:

| File | Purpose |
| --- | --- |
| `src/main/java/<pkg>/<Name>WidgetProvider.kt` | Your provider — a subclass of `org.nativescript.widgets.AppWidgetProvider`. |
| `src/main/res/xml/ns_<name>_widget_info.xml` | The `appwidget-provider` metadata (sizing, resize mode, initial layout). |
| `src/main/res/values/ns_widgets_strings_info.xml` | The widget description string. |
| `AndroidManifest.xml` | A `<receiver>` for your provider, wrapped in `<!-- BEGIN/END NativeScript Widget: <name> -->` markers, with `APPWIDGET_UPDATE` and `BOOT_COMPLETED` intent filters. |

The generated provider is tiny — its only job is to exist in the manifest and (optionally) set the refresh interval:

```kotlin
package com.example.myapp
import org.nativescript.widgets.AppWidgetProvider

class SampleWidgetProvider : AppWidgetProvider() {
    override val interval = 900000L // 15 minutes, in milliseconds
}
```

The generated `appwidget-provider` XML also carries a marker meta‑data entry so tooling can recognize plugin‑managed widgets:

```xml
<meta-data
    android:name="org.nativescript.widgets.MANAGED_WIDGET"
    android:value="true"/>
```

### 2. The initial layout

Android requires the `appwidget-provider` to reference an **initial layout** — the placeholder shown after the widget is dropped on the home screen but *before* your first update runs. The generator defaults `android:initialLayout` to `@layout/ns_remote_views_linear_layout`, an empty vertical `LinearLayout` that ships with this plugin, so the default widget builds and renders out of the box.

To customize the placeholder, either point `android:initialLayout` at another layout this plugin ships (e.g. `@layout/ns_remote_views_frame_layout`) or add your own layout under `App_Resources/Android/src/main/res/layout/` and reference it.

> All layouts shipped by the plugin use `@id/ns_remote_view_root` as their root view id. When you build a `RemoteViews` node, the plugin applies its commands to that root id, so any placeholder you supply should follow the same convention if you want the very first frame to be styleable.

### 3. Register a listener in your app

Register the listener **at app bootstrap** (e.g. the top of `app.ts` / `main.ts`). Android may spin up your process solely to deliver a widget broadcast, so the listener must be wired up as the runtime starts — not lazily from a page that may never open.

The `provider` string is the **fully qualified class name** of the provider you generated.

```ts
import { registerWidgetListener, LinearLayout, TextView } from '@nativescript/widgets';
import { Color } from '@nativescript/core';

const PROVIDER = 'com.example.myapp.SampleWidgetProvider';

registerWidgetListener(PROVIDER, {
  onUpdate({ appWidgetIds, widgetManager }) {
    const root = new LinearLayout();

    const title = new TextView();
    title.native.setText('Hello from NativeScript');
    title.native.setTextColor(new Color('#ffffff').android);
    root.addView(title);

    const rv = root.toAndroidRemoteViews(); // -> AndroidRemoteViews
    appWidgetIds.forEach((id) => {
      widgetManager.native.updateAppWidget(id, rv.native);
    });
  },
});
```

Add the widget to your home screen (long‑press the launcher → Widgets) and it will render on the first `onUpdate`.

---

## The widget lifecycle

`registerWidgetListener(provider, listener)` accepts any subset of these callbacks:

| Callback | When it fires | Thread | Typical use |
| --- | --- | --- | --- |
| `onEnabled(provider)` | First instance of the widget is added. | Main | One‑time setup. The base provider also schedules the periodic worker here. |
| `onUpdate({ provider, appWidgetIds, manager, widgetManager })` | System requests an update (widget added, host asks to refresh). | Main | Fast, **local** rendering for an immediate first paint. Do **not** do network/disk work here. |
| `onUpdateAsync({ provider, appWidgetIds, manager, widgetManager })` | Fired right after each `onUpdate`, and on **every periodic tick**. | Background (`WorkManager`) | Network calls, image loading, database reads — anything slow. |
| `onDeleted({ provider, appWidgetIds })` | One or more widget instances are removed. | Main | Clean up per‑instance state. |
| `onDisabled(provider)` | The last instance is removed. | Main | Tear down. The base provider cancels the periodic worker here. |

Notes on behavior:

- On a system update the base provider calls `onUpdate` synchronously **and** enqueues a one‑time background worker that fires `onUpdateAsync`. So for most widgets you can paint a cheap placeholder in `onUpdate` and fill in the real (possibly remote) content in `onUpdateAsync`.
- Periodic ticks only fire `onUpdateAsync` (never `onUpdate`).
- If a periodic tick runs and there are **no** widget instances left, the worker cancels itself.
- `onUpdateAsync` is only invoked if you actually provide it — omit it if you don't need background work.

The event payload:

- `appWidgetIds: number[]` — the widget instance ids you should update.
- `widgetManager` — wraps the native `android.appwidget.AppWidgetManager`. Call `widgetManager.native.updateAppWidget(id, remoteViews)` to push a frame.
- `manager` — wraps the plugin's per‑provider `RemoteViewsManager` (the node/tree store). You usually don't need it if you build a fresh tree each update.
- `provider` — the provider class name.

Call `unregisterWidgetListener(provider)` to remove a listener.

---

## Building RemoteViews

The JS classes are **thin wrappers** over `org.nativescript.widgets.RemoteViews.*`. Container helpers (`addView` / `removeView`) and `toAndroidRemoteViews()` are exposed directly on the wrapper; everything else (text, images, sizing, click intents) is called through the wrapped native node via `.native`.

```ts
const tv = new TextView();
tv.native.setText('Total: 42');          // fluent native API
tv.native.setTextColor(0xffffffff);       // ARGB int
```

> **TypeScript note:** the wrapper's `.native` getter is typed as the base `org.nativescript.widgets.RemoteViews`, which does not surface the leaf setters (`setText`, `setImageUrl`, …). At runtime the instance is the correct subclass, so the calls work — add a cast (`(tv.native as any).setText(...)`) if the compiler complains, or reach for the fully‑typed `org.nativescript.widgets.RemoteViews.*` classes directly.

Every node takes an optional stable `id` string in its constructor (`new TextView('total')`). Omit it and one is generated.

### View classes

| JS class | Kotlin layout | Notes |
| --- | --- | --- |
| `TextView` | `TextView` | `setText`, `setTextColor` |
| `Button` | `Button` | `setText`, `setTextColor` |
| `TextClock` | `TextClock` | `setText`, `setTextColor` |
| `Chronometer` | `Chronometer` | |
| `ImageView` | `ImageView` | `setImageResource` / `setImageURI` / `setImageBitmap` / `setImageUrl` |
| `ImageButton` | `ImageButton` | same image setters as `ImageView` |
| `ProgressBar` | `ProgressBar` | |
| `LinearLayout` | `LinearLayout` | container (`addView` / `removeView`) |
| `RelativeLayout` | `RelativeLayout` | container |
| `FrameLayout` | `FrameLayout` | container |
| `GridLayout` | `GridLayout` | container |
| `GridView` | `GridView` | container |
| `StackView` | `StackView` | container |
| `ListView` | `ListView` | collection view |
| `AdapterViewFlipper` | `AdapterViewFlipper` | |

All of them extend the base `RemoteViews` wrapper, which exposes `.native` and `.toAndroidRemoteViews(packageName?)`.

### Text

```ts
const label = new TextView('label');
label.native.setText('Weather');
label.native.setTextColor(new Color('#222222').android);
```

### Images

```ts
import { ImageSource } from '@nativescript/core';

const icon = new ImageView('icon');
icon.native.setImageResource(android.R.drawable.ic_dialog_info); // drawable resource id
// or a bitmap you already have:
// icon.native.setImageBitmap(ImageSource.fromFileSync(path).android);
```

### Remote images (from a URL)

`setImageUrl` records the URL but does **not** fetch it — fetching happens when you call `resolveRemoteResources()`, which performs a **blocking** network read. Only do this from `onUpdateAsync` (the background worker), never from `onUpdate`.

```ts
import { registerWidgetListener, LinearLayout, ImageView } from '@nativescript/widgets';

registerWidgetListener(PROVIDER, {
  onUpdateAsync({ appWidgetIds, widgetManager }) {
    const root = new LinearLayout();
    const img = new ImageView();
    img.native.setImageUrl('https://example.com/chart.png');
    root.addView(img);

    root.native.resolveRemoteResources(); // fetch remote images (blocking, safe on worker thread)

    const rv = root.toAndroidRemoteViews();
    appWidgetIds.forEach((id) => widgetManager.native.updateAppWidget(id, rv.native));
  },
});
```

`resolveRemoteResources()` walks the whole tree attached to the node's manager and swaps each unresolved `setImageUrl` for the fetched bitmap (dropping any that fail to load).

### Containers

Container nodes build a tree with `addView` / `removeView`. Children are linked through a shared manager, and `toAndroidRemoteViews()` on the root recursively builds the whole tree.

```ts
const root = new LinearLayout('root');

const title = new TextView('title');
title.native.setText('Today');

const value = new TextView('value');
value.native.setText('72°');

root.addView(title);
root.addView(value);

const rv = root.toAndroidRemoteViews();
```

### Click handling

Attach a `PendingIntent` to any node to make it tappable — e.g. to open your app:

```ts
import { Utils } from '@nativescript/core';

const ctx = Utils.android.getApplicationContext();
const launch = ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());

const flags =
  android.app.PendingIntent.FLAG_UPDATE_CURRENT |
  android.app.PendingIntent.FLAG_IMMUTABLE;

const pi = android.app.PendingIntent.getActivity(ctx, 0, launch, flags);

const button = new Button('open');
button.native.setText('Open app');
button.native.setOnClickPendingIntent(pi);
```

### Sizing & visibility

```ts
// Visibility uses android.view.View constants: VISIBLE(0) / INVISIBLE(4) / GONE(8)
node.native.setVisibility(android.view.View.GONE);

// setBackgroundColor takes an ARGB int
node.native.setBackgroundColor(new Color('#1e88e5').android);

// Explicit layout sizing (Android 12 / API 31+ only — no-op on older devices)
const DIP = android.util.TypedValue.COMPLEX_UNIT_DIP;
node.native.setSize(120, DIP, 60, DIP);
// or individually:
node.native.setWidth(120, DIP);
node.native.setHeight(60, DIP);
```

Lower‑level passthroughs (`setInt`, `setBoolean`, `setString`, `setFloat`, `setLong`, `setShort`, `setByte`) map straight onto the corresponding `RemoteViews.set*` methods, letting you call any remotable setter by method name:

```ts
node.native.setBoolean('setEnabled', true);
node.native.setInt('setMaxLines', 2);
```

---

## Pushing updates to the widget

Regardless of how you build the tree, the last step is always the same: build the native `RemoteViews` and hand it to the widget manager for each instance id.

```ts
const rv = root.toAndroidRemoteViews();      // AndroidRemoteViews (wraps android.widget.RemoteViews)
appWidgetIds.forEach((id) => {
  widgetManager.native.updateAppWidget(id, rv.native);
});
```

`toAndroidRemoteViews(packageName?)` defaults to your app's package name; pass one explicitly only if you're targeting a different package's resources.

---

## Periodic updates & the update interval

- The interval is defined on your provider via `override val interval = <ms>` (defaults to `900000` = 15 minutes).
- `WorkManager` enforces a **15‑minute minimum** for periodic work. Values below that are clamped by the platform — you cannot refresh a widget faster than every 15 minutes via the periodic path.
- The periodic worker is (re)scheduled in `onEnabled` and cancelled in `onDisabled`. It also self‑cancels if no widget instances remain.
- Because scheduling uses `WorkManager` (and the manifest receiver listens for `BOOT_COMPLETED`), periodic updates resume after a reboot or an app update.
- For updates that need to happen *now* (e.g. in response to app activity), request a system update yourself and let it flow through `onUpdate` / `onUpdateAsync`:

```ts
import { Utils } from '@nativescript/core';

const ctx = Utils.android.getApplicationContext();
const mgr = android.appwidget.AppWidgetManager.getInstance(ctx);
const component = new android.content.ComponentName(ctx, 'com.example.myapp.SampleWidgetProvider');
const ids = mgr.getAppWidgetIds(component);

const intent = new android.content.Intent(android.appwidget.AppWidgetManager.ACTION_APPWIDGET_UPDATE);
intent.setComponent(component);
intent.putExtra(android.appwidget.AppWidgetManager.EXTRA_APPWIDGET_IDS, ids);
ctx.sendBroadcast(intent);
```

---

## API reference

### Functions

```ts
function registerWidgetListener(provider: string, listener: IWidgetListener): void;
function unregisterWidgetListener(provider: string): void;
```

```ts
interface IWidgetListener {
  onEnabled?(provider: string): void;
  onUpdate?(e: { provider: string; appWidgetIds: number[]; manager: WidgetManager; widgetManager: AndroidWidgetManager }): void;
  onUpdateAsync?(e: { provider: string; appWidgetIds: number[]; manager: WidgetManager; widgetManager: AndroidWidgetManager }): void;
  onDeleted?(e: { provider: string; appWidgetIds: number[] }): void;
  onDisabled?(provider: string): void;
}
```

### Classes

- `RemoteViews` — base wrapper. `get native`, `toAndroidRemoteViews(packageName?): AndroidRemoteViews`.
- `AndroidRemoteViews` — wraps `android.widget.RemoteViews`; `get native`.
- View nodes: `TextView`, `Button`, `TextClock`, `Chronometer`, `ImageView`, `ImageButton`, `ProgressBar`, `ListView`, `AdapterViewFlipper`.
- Containers (add `addView(v)` / `removeView(v)`): `LinearLayout`, `RelativeLayout`, `FrameLayout`, `GridLayout`, `GridView`, `StackView`.
- `WidgetManager` — wraps the per‑provider native manager; `get native`.
- `AndroidWidgetManager` — wraps `android.appwidget.AppWidgetManager`; `get native`.

For the complete surface of the underlying native `RemoteViews` API (all `set*` commands, `Command` types, `RemoteViewsManager`), see [`typings/org.nativescript.widgets.d.ts`](./typings/org.nativescript.widgets.d.ts).

---

## iOS

There is no JS API for iOS widgets in this package (the iOS entry point is empty). iOS home‑screen widgets and Live Activities are generated by the CLI as native SwiftUI extensions:

```bash
ns widget ios   # macOS only
```

This scaffolds a WidgetKit extension (and, for Live Activities, a shared Swift model package) under `App_Resources/iOS/extensions` plus an `AppleWidgetUtils` Swift helper you call from JS to start/update activities, reload timelines, and read/write shared App Group data. Those files are self‑contained and documented inline where they're generated.

---

## License

Apache License Version 2.0
</content>
</invoke>
