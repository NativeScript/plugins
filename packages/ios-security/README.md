# @nativescript/ios-security

```javascript
ns plugin add @nativescript/ios-security
```

## Usage

The best way to explore the usage of the plugin is to inspect both demo apps in the plugin repository. 
In `demo` folder you can find the usage of the plugin for TypeScript non-Angular application. Refer to `demo/app/main-page.ts`.
In `demo-angular` is the usage in an Angular app. Refer to `demo-angular/app/app.component.ts`.

In addition to the plugin usage, both apps are webpack configured.

In short here are the steps:

### Import the plugin

*TypeScript*
``` 
import * as IosSecurity from "@nativescript/ios-security";
```

*Javascript*
``` 
var IosSecurity = require("@nativescript/ios-security");
```

### Update Info.plist
After adding ios-security to your project, you will also need to update your main Info.plist. There is a check in jailbreak detection module that uses ```canOpenURL(_:)``` method and [requires](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl) specifying URLs that will be queried.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>cydia</string>
    <string>undecimus</string>
    <string>sileo</string>
    <string>zbra</string>
    <string>filza</string>
    <string>activator</string>
</array>
```

### Jailbreak detector module

* **The simplest method** returns True/False if you just want to know if the device is jailbroken or jailed

*Javascript*
```
if (IosSecurity.amIJailbroken()) {
	console.log("This device is jailbroken");
} else {
	console.log("This device is not jailbroken");
}
```

### Debugger detector module
```
let amIDebugged = IosSecurity.amIDebugged();
```

### Deny debugger at all
```
IosSecurity.denyDebugger();
```

### Emulator detector module
```
let runInEmulator = IosSecurity.amIRunInEmulator();
```

### Reverse engineering tools detector module
```
let amIReverseEngineered = IosSecurity.amIReverseEngineered();
```

### System proxy detector module
```
let amIProxied = IosSecurity.amIProxied();
```

## License

Apache License Version 2.0
