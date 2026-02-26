# @nativescript/input-accessory

Keyboard input accessory — docked input bar, interactive dismiss, and auto-scroll on both iOS and Android. Commonly used with chat interfaces, search focused views, or anywhere you want a keyboard-attached input experience.

## Features

- **iOS**: Moves your input bar into a [inputAccessoryView](https://developer.apple.com/documentation/uikit/uiresponder/inputaccessoryview) docked to the keyboard with system blur effect, interactive dismiss via scroll gesture, and smooth keyboard transitions (like iMessage)
- **Android**: Uses [WindowInsetsAnimationCompat](https://developer.android.com/reference/androidx/core/view/WindowInsetsAnimationCompat) for smooth keyboard transitions with `translationY` animation, interactive swipe-to-dismiss, and scroll padding management (API 30+)
- **Auto-growing input**: Automatically resizes the accessory as the [TextView](https://docs.nativescript.org/ui/text-view) content grows (up to a configurable max height)
- **Auto-scroll**: Scrolls to bottom when the keyboard appears; maintains scroll position when it hides
- **Any layout**: Use any NativeScript view markup for your input bar — the plugin handles the keyboard docking

## Installation

```bash
npm install @nativescript/input-accessory
```

## Usage

- one `ScrollView` for content
- one input container at the bottom
- one `TextView`
- call `setup(...)` after views are loaded
- call `updateAccessoryHeight()` on `textChange`
- call `cleanup()` on teardown

### Core (XML + TypeScript)

```xml
<Page navigatingTo="navigatingTo" class="page" xmlns="http://schemas.nativescript.org/tns.xsd">
  <GridLayout rows="*, auto">
    <ScrollView id="scrollView" row="0">
      <StackLayout tap="{{ dismissKeyboard }}">
        <Label text="Messages..." />
      </StackLayout>
    </ScrollView>

    <GridLayout id="inputContainer" row="1" columns="*, auto" class="p-8">
      <TextView
        id="messageInput"
        col="0"
        hint="Type..."
        text="{{ inputText }}"
        loaded="{{ onTextViewLoaded }}"
        textChange="{{ onTextChange }}"
      />
      <Button col="1" text="Send" tap="{{ send }}" />
    </GridLayout>
  </GridLayout>
</Page>
```

```ts
import { EventData, Observable, Page, ScrollView, TextView, View } from '@nativescript/core';
import { InputAccessoryManager } from '@nativescript/input-accessory';

export function navigatingTo(args: EventData) {
  const page = args.object as Page;
  page.bindingContext = new DemoModel(page);
}

class DemoModel extends Observable {
  private manager: InputAccessoryManager | null = null;
  private textView: TextView | null = null;

  constructor(private page: Page) {
    super();
    this.set('inputText', '');
    this.page.on(Page.navigatingFromEvent, () => this.manager?.cleanup());
  }

  onTextViewLoaded(args: EventData) {
    this.textView = args.object as TextView;
    const scrollView = this.page.getViewById<ScrollView>('scrollView');
    const inputContainer = this.page.getViewById<View>('inputContainer');
    if (!scrollView || !inputContainer || !this.textView || this.manager) return;

    this.manager = new InputAccessoryManager();
    this.manager.setup({ page: this.page, scrollView, inputContainer, textView: this.textView });
  }

  onTextChange() {
    this.manager?.updateAccessoryHeight();
  }

  dismissKeyboard() {
    this.manager?.dismissKeyboard();
  }

  send() {
    this.set('inputText', '');
    this.manager?.updateAccessoryHeight();
  }
}
```

### Angular

```html
<GridLayout rows="*, auto">
  <ScrollView #scrollView row="0"><StackLayout (tap)="dismissKeyboard()"><Label text="Messages..." /></StackLayout></ScrollView>
  <GridLayout #inputContainer row="1" columns="*, auto">
    <TextView #messageInput col="0" hint="Type..." (loaded)="onTextViewLoaded($event)" (textChange)="onTextChange()"></TextView>
    <Button col="1" text="Send"></Button>
  </GridLayout>
</GridLayout>
```

```ts
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { EventData, Page, ScrollView, TextView, View } from '@nativescript/core';
import { InputAccessoryManager } from '@nativescript/input-accessory';

@Component({ selector: 'chat', templateUrl: './chat.component.html' })
export class ChatComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollView', { read: ElementRef }) scrollView!: ElementRef<ScrollView>;
  @ViewChild('inputContainer', { read: ElementRef }) inputContainer!: ElementRef<View>;
  private page = inject(Page);
  private manager: InputAccessoryManager | null = null;
  private textView: TextView | null = null;

  ngAfterViewInit() {
    setTimeout(() => this.setup(), 0);
  }

  onTextViewLoaded(args: EventData) {
    this.textView = args.object as TextView;
    this.setup();
  }

  onTextChange() {
    this.manager?.updateAccessoryHeight();
  }

  dismissKeyboard() {
    this.manager?.dismissKeyboard();
  }

  ngOnDestroy() {
    this.manager?.cleanup();
  }

  private setup() {
    if (this.manager || !this.textView || !this.scrollView?.nativeElement || !this.inputContainer?.nativeElement) return;
    this.manager = new InputAccessoryManager();
    this.manager.setup({
      page: this.page,
      scrollView: this.scrollView.nativeElement,
      inputContainer: this.inputContainer.nativeElement,
      textView: this.textView,
    });
  }
}
```

### Solid

```tsx
import { onCleanup, onMount } from 'solid-js';
import { Page, ScrollView, TextView, View } from '@nativescript/core';
import { InputAccessoryManager } from '@nativescript/input-accessory';

export function Home() {
  let pageRef: Page;
  let scrollRef: ScrollView;
  let inputRef: View;
  let textRef: TextView;
  const manager = new InputAccessoryManager();

  onMount(() => {
    manager.setup({ page: pageRef, scrollView: scrollRef, inputContainer: inputRef, textView: textRef });
  });

  onCleanup(() => manager.cleanup());

  return (
    <page ref={pageRef!}>
      <gridLayout rows="*, auto">
        <scrollView ref={scrollRef!} row={0}><stackLayout><label text="Messages..." /></stackLayout></scrollView>
        <gridLayout ref={inputRef!} row={1} columns="*, auto">
          <textView ref={textRef!} col={0} hint="Type..." onTextChange={() => manager.updateAccessoryHeight()} />
          <button col={1} text="Send" />
        </gridLayout>
      </gridLayout>
    </page>
  );
}
```

### Svelte

```svelte
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import type { Page, ScrollView, TextView, View } from '@nativescript/core';
  import { InputAccessoryManager } from '@nativescript/input-accessory';

  let pageRef: Page;
  let scrollRef: ScrollView;
  let inputRef: View;
  let textRef: TextView;
  const manager = new InputAccessoryManager();

  onMount(() => {
    manager.setup({ page: pageRef, scrollView: scrollRef, inputContainer: inputRef, textView: textRef });
  });

  onDestroy(() => manager.cleanup());
</script>

<Page bind:this={pageRef}>
  <GridLayout rows="*, auto">
    <ScrollView bind:this={scrollRef} row="0"><StackLayout><Label text="Messages..." /></StackLayout></ScrollView>
    <GridLayout bind:this={inputRef} row="1" columns="*, auto">
      <TextView bind:this={textRef} col="0" hint="Type..." on:textChange={() => manager.updateAccessoryHeight()} />
      <Button col="1" text="Send" />
    </GridLayout>
  </GridLayout>
</Page>
```

### Vue

```vue
<template>
  <Page @loaded="onPageLoaded" @unloaded="onPageUnloaded">
    <GridLayout rows="*, auto">
      <ScrollView ref="scrollView" row="0"><StackLayout @tap="dismissKeyboard"><Label text="Messages..." /></StackLayout></ScrollView>
      <GridLayout ref="inputContainer" row="1" columns="*, auto">
        <TextView ref="messageInput" col="0" hint="Type..." @textChange="onTextChange" />
        <Button col="1" text="Send" />
      </GridLayout>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
import { InputAccessoryManager } from '@nativescript/input-accessory';

export default {
  data() {
    return {
      manager: new InputAccessoryManager(),
    };
  },
  methods: {
    onPageLoaded(args) {
      this.manager.setup({
        page: args.object,
        scrollView: this.$refs.scrollView.nativeView,
        inputContainer: this.$refs.inputContainer.nativeView,
        textView: this.$refs.messageInput.nativeView,
      });
    },
    onTextChange() {
      this.manager.updateAccessoryHeight();
    },
    dismissKeyboard() {
      this.manager.dismissKeyboard();
    },
    onPageUnloaded() {
      this.manager.cleanup();
    },
  },
};
</script>
```

## API

### `InputAccessoryConfig`

| Property | Type | Required | Default | Description |
|---|---|---|---|---|
| `page` | `Page` | Yes | — | NativeScript Page instance (iOS: viewController access, Android: Activity access) |
| `scrollView` | `ScrollView` | Yes | — | The ScrollView containing your messages |
| `inputContainer` | `View` | Yes | — | The View (any layout) that serves as the input bar |
| `textView` | `TextView` | Yes | — | The TextView for text input (used for auto-height) |
| `baseHeight` | `number` | No | `48` | Minimum height of the input bar (DIPs) |
| `maxHeight` | `number` | No | `200` | Maximum height the input bar can grow to (DIPs) |
| `containerPadding` | `number` | No | `16` | Padding added to text height when calculating container height (DIPs) |

### `InputAccessoryManager`

| Method | Description |
|---|---|
| `setup(config)` | Initialize keyboard accessory behavior. Call after all views are loaded. |
| `updateAccessoryHeight()` | Recalculate height based on current text content. Call on every text change. |
| `dismissKeyboard()` | Dismiss the keyboard programmatically. |
| `relayoutScrollViewContent()` | Remeasure ScrollView content after external changes (e.g., new messages added). |
| `cleanup()` | Remove all listeners and restore original state. Call in `ngOnDestroy`. |

## How it works

### iOS

The plugin creates an invisible `KeyboardTrackingView` that acts as a first responder with a `inputAccessoryView`. Your input bar view is moved into this accessory container, which docks to the keyboard with the system blur effect (`.keyboard` style [UIInputView](https://developer.apple.com/documentation/uikit/uiinputview)). On iOS 26+, [UIScrollEdgeElementContainerInteraction](https://developer.apple.com/documentation/uikit/uiscrolledgeelementcontainerinteraction) provides glass-morphism blending between the ScrollView and the accessory.

Interactive dismiss is handled via a `CADisplayLink` that tracks the accessory position during scroll gestures, updating the ScrollView's `contentInset` every frame.

### Android

The plugin uses a Kotlin helper that hooks into `WindowInsetsAnimationCompat` for per-frame keyboard tracking. It uses a "deferred transition" pattern — NativeScript handles the actual layout changes, and the helper smooths the transition with `translationY` animation. Interactive swipe-to-dismiss is implemented via `controlWindowInsetsAnimation()` which gives direct control over the keyboard position, tracking the user's finger.

Requires API 30+. On older APIs, the plugin is a no-op and default keyboard behavior is used.

## License

Apache-2.0
