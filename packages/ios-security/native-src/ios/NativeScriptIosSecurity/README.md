# Local Notifications Plugin library for NativeScript iOS apps

This is the native iOS for the NativeScriptIosSecurity plugin.
Not really useful for usage outside this plugin.

## Building the framework
- Run the target for simulator and device, make sure to not only build for the active architecture
- Right-click the file in the Products folder and open in Finder
- In a Terminal `cd` to that folder, move up to the `Products` folder
- Run `lipo -create -output "NativeScriptIosSecurity" "Debug-iphonesimulator/NativeScriptIosSecurity.framework/NativeScriptIosSecurity" "Debug-iphoneos/NativeScriptIosSecurity.framework/NativeScriptIosSecurity"`
- Use the resulting `NativeScriptIosSecurity` file instead of the one generated inside any of the target

## Generating the xcframework
- Navigate to project root folder
 `cd NativeScriptIosSecurity`
- Build archive for simulator:
```
xcodebuild archive \
 -scheme NativeScriptIosSecurity \
 -archivePath ./NativeScriptIosSecurity-iphonesimulator.xcarchive \
 -sdk iphonesimulator \
 SKIP_INSTALL=NO

```

- Build archive for device:
```
 xcodebuild archive \
 -scheme NativeScriptIosSecurity \
 -archivePath ./NativeScriptIosSecurity-iphoneos.xcarchive \
 -sdk iphoneos \
 SKIP_INSTALL=NO
```

- Combine them in one xcframework:
```
xcodebuild -create-xcframework \
 -framework ./NativeScriptIosSecurity-iphonesimulator.xcarchive/Products/Library/Frameworks/NativeScriptIosSecurity.framework \
 -framework ./NativeScriptIosSecurity-iphoneos.xcarchive/Products/Library/Frameworks/NativeScriptIosSecurity.framework \
 -output ~/Desktop/NativeScriptIosSecurity.xcframework
```