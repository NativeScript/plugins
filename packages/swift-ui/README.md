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

## Usage

1. Insert into any layout where you'd like to use SwiftUI
2. Create your Swift Provider
3. Create the SwiftUI
4. Register your SwiftUI with an identifier

### Vanilla

1. Insert into any layout where you'd like to use SwiftUI

```
<Page xmlns="http://schemas.nativescript.org/tns.xsd" navigatingTo="navigatingTo" class="page" xmlns:sw="@nativescript/swift-ui">
  <StackLayout class="p-20">
    <sw:SwiftUI swiftId="basicView" data="{{ nativeCount }}" swiftUIEvent="{{ onEvent }}" height="150"></sw:SwiftUI>
  </StackLayout>
</Page>
```

2. Create your Swift Provider

This follows the plugins `SwiftUIProvider` protocol to standardize all SwiftUI bindings.

```ts
import UIKit
import SwiftUI

@objc
class BasicViewProvider: UIViewController, SwiftUIProvider {
        
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
        registerObservers()
    }
    
    // MARK: PRIVATE

    private var swiftUIView = BasicView()
        
    private func registerObservers() {
        swiftUIView.props.incrementCount = {
            let count = self.swiftUIView.props.count + 1
            // update swiftUI view
            self.swiftUIView.props.count = count
            // notify nativescript
            self.onEvent?(["count": count])
        }
    }

    // MARK: API

    /// Receive data from NativeScript
    func updateData(data: NSDictionary) {
        if let count = data.value(forKey: "count") as? Int {
            // update swiftUI view
            swiftUIView.props.count = count
            // notify nativescript
            self.onEvent?(["count": count])
        }
    }
    
    /// Send data to NativeScript
    var onEvent: ((NSDictionary) -> ())?
}

```

## Credits

<img src="https://raw.githubusercontent.com/valor-software/.github/d947b8547a9d5a6021e4f6af7b1df816c1c5f268/profile/valor-logo%20for-light.png#gh-light-mode-only" alt="Valor Software" width="200" />

NativeScript is proudly supported by Valor Software as official partners. We are proud to offer guidance, consulting, and development assistance in all things NativeScript.

[Contact Valor for assistance](https://valor-software.com/).

## License

MIT
