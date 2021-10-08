# Local Notifications Plugin library for NativeScript iOS apps

This is the native iOS for the NativeScriptIOSSecurity plugin.
Not really useful for usage outside this plugin.

## Building the framework
- Run the target for simulator and device, make sure to not only build for the active architecture
- Right-click the file in the Products folder and open in Finder
- In a Terminal `cd` to that folder, move up to the `Products` folder
- Run `lipo -create -output "NativeScriptIOSSecurity" "Debug-iphonesimulator/NativeScriptIOSSecurity.framework/NativeScriptIOSSecurity" "Debug-iphoneos/NativeScriptIOSSecurity.framework/NativeScriptIOSSecurity"`
- Use the resulting `NativeScriptIOSSecurity` file instead of the one generated inside any of the target

## Generating the xcframework
- Navigate to project root folder
 `cd NativeScriptIOSSecurity`
- Build archive for simulator:
```
xcodebuild archive \
 -scheme NativeScriptIOSSecurity \
 -archivePath ./NativeScriptIOSSecurity-iphonesimulator.xcarchive \
 -sdk iphonesimulator \
 SKIP_INSTALL=NO

```

- Build archive for device:
```
 xcodebuild archive \
 -scheme NativeScriptIOSSecurity \
 -archivePath ./NativeScriptIOSSecurity-iphoneos.xcarchive \
 -sdk iphoneos \
 SKIP_INSTALL=NO
```

- Combine them in one xcframework:
```
xcodebuild -create-xcframework \
 -framework ./NativeScriptIOSSecurity-iphonesimulator.xcarchive/Products/Library/Frameworks/NativeScriptIOSSecurity.framework \
 -framework ./NativeScriptIOSSecurity-iphoneos.xcarchive/Products/Library/Frameworks/NativeScriptIOSSecurity.framework \
 -output ~/Desktop/NativeScriptIOSSecurity.xcframework
```