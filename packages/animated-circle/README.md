# Nativescript animated-circle

```bash
ns plugin add @nativescript/animated-circle
```

Creates an animated circle (animates the border of the circle) on iOS and Android.

## Usage

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

## Angular NativeScript

- Add the NativeScriptAnimatedCircleModule to your module imports where you will use the plugin.

```typescript
import { NativeScriptAnimatedCircleModule } from '@nativescript/animated-circle/angular';
imports: [NativeScriptAnimatedCircleModule];
```

```xml
			<AnimatedCircle backgroundColor="transparent" width="200" height="200" animated="true" animateFrom="0" rimColor="#fff000" barColor="#ff4081" rimWidth="25" progress="{{ circleProgress }}" text="" textSize="22" textColor="#336699"></AnimatedCircle>
```

## API

| Property          | Default | Description                                            |
| ----------------- | ------- | ------------------------------------------------------ |
| rimColor          | #FF5722 | The filled portion of the circle border's color.       |
| barColor          | #3D8FF4 | The remaining (unfilled) portion of the circle border. |
| rimWidth          | 5       | The border radius of the circle.                       |
| progress          | 0       | The current progress value.                            |
| startAngle        | 0       | The angle to start drawing from.                       |
| endAngle          | 100     | _iOS only_ the end angle to stop drawing at.           |
| animated          | false   | _Android only_ animation status.                       |
| animateFrom       | 0       | _Android only_ the progress value to animate from.     |
| animationDuration | 1000    | _Android only_ the duration to animate for.            |
| text              | ""      | The text inside of the circle.                         |
| textSize          | 0       | Text size, 0 will hide the text                        |
| textColor         | #ff0000 | Text color                                             |

## License

Apache License Version 2.0

```

```
