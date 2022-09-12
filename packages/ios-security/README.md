# @nativescript/ios-security

🔒 [IOSSecuritySuite](https://github.com/securing/IOSSecuritySuite) for NativeScript.

> 🌏 iOS Security Suite is an advanced and easy-to-use platform security & anti-tampering library. If you are developing for iOS and you want to protect your app according to the OWASP [MASVS](https://github.com/OWASP/owasp-masvs) standard, chapter v8, then this library could save you a lot of time. 🚀
> What ISS detects:
> * Jailbreak (even the iOS 11+ with brand new indicators! 🔥)
> * Attached debugger 👨🏻‍🚀
> * If an app was run in an emulator 👽
> * Common reverse engineering tools running on the device 🔭

```javascript
npm install @nativescript/ios-security
```

## Usage

*TypeScript*
``` 
import { IOSSecurity } from "@nativescript/ios-security";
```

*Javascript*
``` 
var IOSSecurity = require("@nativescript/ios-security").IOSSecurity;
```

### Update Info.plist

After adding ios-security to your project, you will also need to update your Info.plist. There is a check in jailbreak detection module that uses ```canOpenURL(_:)``` method and [requires](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl) specifying URLs that will be queried.

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

* **The simplest method** returns true/false if you just want to know if the device is jailbroken or jailed

*Javascript*
```
if (IOSSecurity.amIJailbroken()) {
	console.log("This device is jailbroken");
} else {
	console.log("This device is not jailbroken");
}
```

### Debugger detector module
```
const amIDebugged = IOSSecurity.amIDebugged();
```

### Deny debugger at all
```
IOSSecurity.denyDebugger();
```

### Emulator detector module
```
const runInEmulator = IOSSecurity.amIRunInEmulator();
```

### Reverse engineering tools detector module
```
const amIReverseEngineered = IOSSecurity.amIReverseEngineered();
```

### System proxy detector module
```
const amIProxied = IOSSecurity.amIProxied();
```

## License

Apache License Version 2.0
