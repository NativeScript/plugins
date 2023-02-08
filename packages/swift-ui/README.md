# @nativescript/swift-ui

Use SwiftUI with NativeScript.

## Contents
* [Installation](#installation)
* [Usage](#usage)
  1. [Create your SwiftUI view](#1-create-your-swiftui-view)
  2. [Create your SwiftUI view Provider](#2-create-your-swiftui-view-provider)
  3. [Register your SwiftUI with an identifier and use it in the markup](#3-register-your-swiftui-with-an-identifier-and-use-it-in-markup)
    * [Core](#core)
    * [Generate Types](#generate-types)
    * [SwiftUI with Angular](#swiftui-with-angular)
    * [SwiftUI with Vue](#swiftui-with-vue)
    * [SwiftUI with React](#swiftui-with-react)
    

## Installation

```cli
npm install @nativescript/swift-ui
```

> **Note**: you will need to target iOS 13 at a minimum.
For example, you can add this line to your `App_Resources/iOS/build.xcconfig`:

```
IPHONEOS_DEPLOYMENT_TARGET = 13.0
```

## Usage
![SwiftUI Source Files Example](/packages/swift-ui/swift-ui-source-files-example.png)
### 1. Create your SwiftUI view

This can be any SwiftUI view you'd like to create.

```swift
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

### 2. Create your SwiftUI view Provider 

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

### 3. Register your SwiftUI with an identifier and use it in markup

This can be done in the bootstrap file (often `app.ts` or `main.ts`) or even the view component that needs it.

#### Core 

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

registerSwiftUI("barChart", (view) =>
    new UIDataDriver(BarChartProvider.alloc().init(), view)
  );
```
Then insert it in any layout as follows:

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo" class="page" xmlns:sw="@nativescript/swift-ui">
  <StackLayout>
    <sw:SwiftUI swiftId="sampleView" height="150" />
  </StackLayout>
</Page>
```

#### Generate Types

1. To generate types for your SwiftUI code, run `ns typings ios`.

2. Locate the `objc!nsswiftsupport.d.ts` file in `typings/x86_64` and reference it in the `references.d.ts`.

#### SwiftUI with Angular

Register SwiftUI follows:

```ts
import { registerElement } from '@nativescript/angular'
import { SwiftUI } from '@nativescript/swift-ui'

registerElement('SwiftUI', () => SwiftUI)

registerSwiftUI("sampleView", (view) =>

    new UIDataDriver(SampleViewProvider.alloc().init(), view)
  );
  registerSwiftUI("barChart", (view) =>
    new UIDataDriver(BarChartProvider.alloc().init(), view)
  );
```

It can now be used within any Angular component, eg:

```html
<StackLayout class="p-20">
    <SwiftUI swiftId="sampleView" height="150"></SwiftUI>
</StackLayout>
```
#### SwiftUI with Vue

Register SwiftUI follows:

```ts
registerElement("SwiftUIView", ()=> require("@nativescript/swift-ui").SwiftUI)

registerSwiftUI("sampleView", (view) =>

    new UIDataDriver(SampleViewProvider.alloc().init(), view)
  );
  registerSwiftUI("barChart", (view) =>
    new UIDataDriver(BarChartProvider.alloc().init(), view)
  );
```
Then use it in markup as follows:

```xml
<StackLayout>

  <SwiftUIView swiftId="sampleView" height="200" />
  <SwiftUIView height="500" swiftId="barChart" margin="30" />

</StackLayout>
```
#### SwiftUI with React

Register SwiftUI follows:

```ts
registerSwiftUI("sampleView", (view) =>
    new UIDataDriver(SampleViewProvider.alloc().init(), view)
  );

  registerSwiftUI("barChart", (view) =>
    new UIDataDriver(BarChartProvider.alloc().init(), view)
  );

interface SwiftUIViewAttributes extends ViewAttributes{
swiftId: string
}

declare global {
    module JSX {
        interface IntrinsicElements {

            swiftUIView: NativeScriptProps<SwiftUIViewAttributes, SwiftUI>
        }
    }
}

registerElement("swiftUIView", ()=> require("@nativescript/swift-ui").SwiftUI)
```
Then use it in markup as follows:

```xml
<stackLayout>
            
  <swiftUIView swiftId="sampleView" height="200" />
  <swiftUIView height="500" swiftId="barChart" margin="30" />

</stackLayout>
```
## Credits

<img src="https://raw.githubusercontent.com/valor-software/.github/d947b8547a9d5a6021e4f6af7b1df816c1c5f268/profile/valor-logo%20for-light.png#gh-light-mode-only" alt="Valor Software" width="200" />

NativeScript is proudly supported by Valor Software as an official partner. We are proud to offer guidance, consulting, and development assistance in all things NativeScript.

[Contact Valor for assistance](https://valor-software.com/).

## License

MIT
