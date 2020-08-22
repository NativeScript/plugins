# Local Notifications Plugin library for NativeScript iOS apps

This is the native iOS for the NativeScript Local Notifications plugin.
Not really useful for usage outside this plugin.

## Building the framework
- Run the target for simulator and device, make sure to not only build for the active architecture
- Right-click the file in the Products folder and open in Finder
- In a Terminal `cd` to that folder, move up to the `Products` folder
- Run `lipo -create -output "LocalNotificationsPlugin" "Debug-iphonesimulator/LocalNotificationsPlugin.framework/LocalNotificationsPlugin" "Debug-iphoneos/LocalNotificationsPlugin.framework/LocalNotificationsPlugin"`
- Use the resulting `LocalNotificationsPlugin` file instead of the one generated inside any of the target