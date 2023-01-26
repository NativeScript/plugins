# @nativescript/animated-circle

A plugin that creates an animated circle (animates the border of the circle) on iOS and Android.

## Installation

```cli
npm install @nativescript/animated-circle
```

## Usage

### Core
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
  xmlns:ui="@nativescript/animated-circle">
    <ui:AnimatedCircle
        backgroundColor="transparent"
        width="200"
        height="200"
        animated="true"
        animateFrom="0"
        rimColor="#FF5722"
        barColor="#3D8FF4"
        fillColor="#eee"
        clockwise="true"
        rimWidth="5"
        progress="80"
        text="bam"
        textSize="28"
        textColor="red" />
</Page>
```
---
### Vue

First, register the plugin in the `app.ts` file. Then use it in a `.vue` file.
```ts
import { registerElement } from 'nativescript-vue';

registerElement("AnimatedCircle", ()=> require("@nativescript/animated-circle").AnimatedCircle)
```
```xml
<AnimatedCircle
        backgroundColor="transparent"
        width="200"
        height="200"
        animated="true"
        animateFrom="0"
        rimColor="#FF5722"
        barColor="#3D8FF4"
        fillColor="#eee"
        clockwise="true"
        rimWidth="5"
        progress="80"
        text="bam"
        textSize="28"
        textColor="red" />
```
---
### Angular

- Add the `NativeScriptAnimatedCircleModule` to your module imports where you will use the plugin.

```typescript
import { NativeScriptAnimatedCircleModule } from '@nativescript/animated-circle/angular';
imports: [NativeScriptAnimatedCircleModule];
```

```xml
<AnimatedCircle backgroundColor="transparent" width="200" height="200" animated="true" animateFrom="0" rimColor="#fff000" barColor="#ff4081" rimWidth="25" progress="{{ circleProgress }}" text="" textSize="22" textColor="#336699"></AnimatedCircle>
```
---
### Svelte
Register the plugin in the `app.ts` file and then use it in markup as follows:

```ts
import {registerNativeViewElement} from "svelte-native/dom"

registerNativeViewElement("animatedCircle", ()=> require("@nativescript/animated-circle").AnimatedCircle)
```

```xml
<animatedCircle 
    backgroundColor="transparent"
    width="200"
    height="200"
    animated="true"
    animateFrom="0"
    rimColor="#C4BF55"
    barColor="#000"
    clockwise="true"
    rimWidth="20"
    progress="50"
    text="80%"
    textSize="28"
    textColor="red"
    />
```

## API Reference


| Property          | Type | Default | Description                                            |
| ----------------- |------| ------- | ------------------------------------------------------ |
| `rimColor`          | [Color](https://blog.nativescript.org/guide/core/color)| `#FF5722` | The filled portion of the circle border's color.       |
| `barColor`          |[Color](https://blog.nativescript.org/guide/core/color)| `#3D8FF4` | The remaining (unfilled) portion of the circle border. |
| `rimWidth`          | `number` |`5`       | The border radius of the circle.                       |
| `progress`          | `number` |`0 `      | The current progress value.                            |
| `startAngle`        | `number` |`0`       | The angle to start drawing from.                       |
| `endAngle`          | `number` |`100`     | _iOS only_ the end angle to stop drawing at.           |
| `animated`          | `boolean` |`false`   | _Android only_ animation status.                       |
| `animateFrom`       | `number` |`0`       | _Android only_ the progress value to animate from.     |
| `animationDuration` | `number` |`1000`    | _Android only_ the duration to animate for.            |
| `text`              | `string` |`""`      | The text inside of the circle.                         |
| `textSize `         | `number` |`0`       | Text size, 0 will hide the text                        |
| `textColor`         | [Color](https://blog.nativescript.org/guide/core/color) |`#ff0000` | Text color                                             |

## License

Apache License Version 2.0