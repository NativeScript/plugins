# @nativescript/swift-ui

Use SwiftUI with NativeScript.

```javascript
npm install @nativescript/swift-ui
```

**Note**: you will need to target iOS 13 at a minimum.
For example, you can add this line to your `App_Resources/iOS/build.xcconfig`:

```
IPHONEOS_DEPLOYMENT_TARGET = 13.0
```

## Usage Overview

1. Create your SwiftUI
2. Create your SwiftUI Provider
3. Insert into any layout where you'd like to use SwiftUI
4. Register your SwiftUI with an identifier

### Usage Details

1. Create your SwiftUI

This can be any SwiftUI you'd like to create.

```
import SwiftUI

struct SampleView: View {

  var body: some View {
    VStack {
      Text("Hello World")
        .padding()
    }
  }
}
```

2. Create your Swift Provider

This will prepare your SwiftUI for two-way data bindings to NativeScript and follows the plugins' `SwiftUIProvider` protocol to standardize all SwiftUI bindings.

```ts
import SwiftUI

@objc
class SampleViewProvider: UIViewController, SwiftUIProvider {

  // MARK: INIT

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  required public init() {
    super.init(nibName: nil, bundle: nil)
  }

  public override func viewDidLoad() {
    super.viewDidLoad()
    setupSwiftUIView(content: swiftUIView)
  }

  // MARK: PRIVATE

  private var swiftUIView = SampleView()

  /// Receive data from NativeScript
  func updateData(data: NSDictionary) {
      // can be empty
  }

  /// Allow sending of data to NativeScript
  var onEvent: ((NSDictionary) -> ())?
}
```

3. Insert into any layout where you'd like to use SwiftUI

This illustrates what is often called a "vanilla" flavored NativeScript app. However, you can use this plugin with any flavor (Angular, React, Svelte, Vue, etc.)

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo" class="page" xmlns:sw="@nativescript/swift-ui">
  <StackLayout>
    <sw:SwiftUI swiftId="sampleView" height="150" />
  </StackLayout>
</Page>
```

4. Register your SwiftUI with an identifier

This can be done in the bootstrap file (often `app.ts` or `main.ts`) or even the view component that needs it.

* `app.ts`

```typescript
import { 
  registerSwiftUI, 
  UIDataDriver
} from "@nativescript/swift-ui";

// A. You can generate types for your own Swift Provider with 'ns typings ios'
// B. Otherwise you can ignore by declaring the class name you know you provided
declare const SampleViewProvider: any;

registerSwiftUI("sampleView", (view) =>
  new UIDataDriver(SampleViewProvider.alloc().init(), view)
);
```

#### To use with Angular

```ts
import { registerElement } from '@nativescript/angular'
import { SwiftUI } from '@nativescript/swift-ui'

registerElement('SwiftUI', () => SwiftUI)
```

It can now be used within any Angular component, eg:

```
<StackLayout class="p-20">
    <SwiftUI swiftId="sampleView" height="150"></SwiftUI>
</StackLayout>
```


## Credits

<img src="https://raw.githubusercontent.com/valor-software/.github/d947b8547a9d5a6021e4f6af7b1df816c1c5f268/profile/valor-logo%20for-light.png#gh-light-mode-only" alt="Valor Software" width="200" />

NativeScript is proudly supported by Valor Software as official partners. We are proud to offer guidance, consulting, and development assistance in all things NativeScript.

[Contact Valor for assistance](https://valor-software.com/).

## License

MIT
