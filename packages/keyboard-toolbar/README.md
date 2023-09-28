# @nativescript/keyboard-toolbar

```javascript
npm install @nativescript/keyboard-toolbar
```

Thank you to [Eddy Verbruggen](https://github.com/EddyVerbruggen/nativescript-keyboard-toolbar) for all the excellent work!

_iOS and Android running the included [demo](/demo) - much better framerate [on YouTube](https://www.youtube.com/watch?v=JJOOXrcopSA)!_

## What The Keyboard!?

Glad you asked 😅!

- ⌨️ Mobile keyboards are a compromise at best. Let's make them easier to work with by attaching a toolbar on top of it.
- 🥅 Design goal = declare any NativeScript layout and stick it on top of the soft keyboard.
- 🏒 Make the toolbar _stick_ to the keyboard, no matter its shape or form.
- 🙅‍♀️ No third party dependencies; use only stuff from `@nativescript/core` (which your app already has).
- ♾ Allow multiple toolbar designs on one page.

## General usage instructions

The plugin works by grabbing your declared toolbar layout and moving it off-screen.

Then, whenever the related `TextField` or `TextView` received focus,
the plugin animates the toolbar to the top of the keyboard and keeps it there until the field loses focus.

For this to behave properly you'll need to grab any layout you currently have and wrap it in a `GridLayout`
as show in the examples below. The `GridLayout` allows for stacking multiple child layout on top of each other
when their `row` and `col` properties are equal (or omitted).

So if your layout structure is currently this:

```xml
<ActionBar/>
<StackLayout/>
``` 

Change it to this:

```xml
<ActionBar/>
<GridLayout>
    <StackLayout/>
    <Toolbar/>
</GridLayout>
```
Not too bad, right? That will make the `Toolbar` stack on top of the `StackLayout` you already had.

> Note that the plugin could have done this for you, or take some other approach entirely, but many hours of tinkering has convinced me this is the best solution.

## Usage with Core
Mind the comments in the example below.

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:kt="@nativescript/keyboard-toolbar">

    <!-- This GridLayout wrapper is required; it wraps the visible layout and the Toolbar layout(s) -->
    <GridLayout>

        <StackLayout>
            <Label text="Some text"/>
            <!-- Add an 'id' property that we can reference below -->
            <TextField id="priceTextField" hint="Enter the price" keyboardType="number"/>
        </StackLayout>

        <!-- The 'forId' and 'height' properties are mandatory -->
        <kt:Toolbar forId="priceTextField" height="44">
            <GridLayout columns="*, *, *" class="toolbar">
                <Label col="0" text="👍" tap="{{ appendToTextView }}"/>
                <Label col="1" text="👎" tap="{{ appendToTextView }}"/>
                <Label col="2" text="😄" tap="{{ appendToTextView }}"/>
            </GridLayout>
        </kt:Toolbar>

    </GridLayout>
</Page>
```

## Usage with Angular
Register the plugin in a specific module, or globally in the app module: 

```typescript
import { registerElement } from "@nativescript/angular";
import { Toolbar } from 'nativescript-keyboard-toolbar';
registerElement("KeyboardToolbar", () => Toolbar);
```

In this example, we're adding a `TextField` to the `ActionBar`. Note that we still need to wrap the rest of the page in a `GridLayout`:

```html
<ActionBar>
  <TextField #textField1 id="tf1"></TextField>
</ActionBar>

<!-- Our Toolbar wrapper - no need for 'columns' / 'rows' properties because we want the children to stack -->
<GridLayout>

  <!-- Add whatever visible layout you need here -->
  <ListView [items]="items">
    <ng-template let-item="item">
      <Label [nsRouterLink]="['/item', item.id]" [text]="item.name" class="list-group-item"></Label>
    </ng-template>
  </ListView>

  <!-- Use 'KeyboardToolbar' because that's what we registered in our module (see above).
   The 'forId' and 'height' properties are mandatory -->
  <KeyboardToolbar forId="tf1" height="44">
    <GridLayout columns="*, *, *, auto" class="toolbar">
      <Label col="0" text="👍" (tap)="appendToTextField(textField1, '👍')"></Label>
      <Label col="1" text="👎" (tap)="appendToTextField(textField1, '👎')"></Label>
      <Label col="2" text="😄" (tap)="appendToTextField(textField1, '😄')"></Label>
      <Label col="3" text="Close️" (tap)="closeKeyboard(textField1)"></Label>
    </GridLayout>
  </KeyboardToolbar>
</GridLayout>
```

## Usage with Vue
Register the plugin in `app.js` (or depending on your app's setup: `app.ts`, or `main.js`, etc): 

```typescript
import Vue from "nativescript-vue";
Vue.registerElement('KeyboardToolbar', () => require('nativescript-keyboard-toolbar').Toolbar);
```

```vue
<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <!-- Our Toolbar wrapper - no need for 'columns' / 'rows' properties because we want the children to stack -->
    <GridLayout>

      <StackLayout>
        <TextView id="tv2" text="Say it with emoji!"/>
      </StackLayout>

      <!-- Use 'KeyboardToolbar' because that's what we registered in our module (see above).
         The 'forId' and 'height' properties are mandatory -->
      <KeyboardToolbar forId="tv2" height="44">
        <GridLayout columns="*, *, *" class="toolbar">
          <Label col="0" text="👍" @tap="appendToTextView2"/>
          <Label col="1" text="👎" @tap="appendToTextView2"/>
          <Label col="2" text="😄" @tap="appendToTextView2"/>
        </GridLayout>
      </KeyboardToolbar>

    </GridLayout>
  </Page>
</template>

<script>
  import { Frame } from "@nativescript/core";

  export default {
    methods: {
      appendToTextView2(args) {
        const textView = Frame.topmost().currentPage.getViewById("tv2");
        textView.text += args.object.text;
      }
    }
  }
</script>
```

## What about IQKeyboardManager?

If you have [IQKeyboardManager](https://github.com/NativeScript/plugins/tree/main/packages/iqkeyboardmanager#readme) installed for better keyboard behavior on iOS, then this plugin will detect it and add the height of your custom toolbar to the scroll offset IQKeyboardManager applies. You can see this in action in the [NativeScript Core demo app](/demo).

You may want to suppress IQKeyboardManager's own toolbar in this case (to avoid a double toolbar), [as shown here](https://github.com/EddyVerbruggen/nativescript-keyboard-toolbar/blob/f81cfb2e5c84fda16e8e735bf34b1030a8b5eeb6/demo/app/main-view-model.ts#L32-L33).

## Future work
- Orientation-change support.
- Dismiss keyboard on iOS when tapping outside the keyboard (configurable). Fot the time being you can add and configure IQKeyboardManager as mentioned above.
- Auto-scroll the view if the keyboard overlaps the text field (on iOS you can already do that with [IQKeyboardManager](https://github.com/NativeScript/plugins/tree/main/packages/iqkeyboardmanager#readme)).
- Modal support on Android (currently you can't use the toolbar in a modal because the toolbar is behind the modal)
  
## Credits

- All credit belongs to [Eddy Verbruggen](https://github.com/EddyVerbruggen/nativescript-keyboard-toolbar)
  
## License

Apache License Version 2.0
