# @nativescript/ios-security

🔒 [IOSSecuritySuite](https://github.com/securing/IOSSecuritySuite) for NativeScript.

> 🌏 iOS Security Suite is an advanced and easy-to-use platform security & anti-tampering library. If you are developing for iOS and you want to protect your app according to the OWASP [MASVS](https://github.com/OWASP/owasp-masvs) standard, chapter v8, then this library could save you a lot of time. 🚀
> What ISS detects:
> * Jailbreak (even the iOS 11+ with brand new indicators! 🔥)
> * Attached debugger 👨🏻‍🚀
> * If an app was run in an emulator 👽
> * Common reverse engineering tools running on the device 🔭

## Contents
1. [Installation](#installation)
2. [Prerequisites](#prerequisites)
    * [Specify the URLs to be queried](#specify-the-urls-to-be-queried)
3. [Use @nativescript/ios-security](#use-nativescriptios-security)
    * [Detect jailbreaking](#detect-jailbreaking)
    * [Detect debugger attachment](#detect-bebugger-attachment)
    * [Prevent Debugger Attachment](#prevent-debugger-attachment)
    * [Emulator detection](#emulator-detection)
    * [Detect the use of reverse engineering tools](#detect-the-use-of-reverse-engineering-tools)
    * [System proxy detection](#system-proxy-detection)
    * [Runtime Hooks Detection](#runtime-hooks-detection)
    * [App tampering detection](#app-tampering-detection)
4. [License](#license)

## Installation

```cli
npm install @nativescript/ios-security
```

## Prerequisites

### Specify the URLs to be queried

In the jailbreak detection module, there is a check that uses the [canOpenURL(_:)](https://developer.apple.com/documentation/uikit/uiapplication/1622952-canopenurl) method and it requires specifying the URLs that will be queried.

Specify those URLs in the `App_Resources/iOS/Info.plist` file as follows:

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

## Use @nativescript/ios-security

The following sections describe how to use `@nativescript/ios-security`.

### Detect jailbreaking 

For a simple check of whether the device is jailbroken, use the `amIJailbroken()` method.

```ts
const isJailBroken: boolean =  IOSSecurity.amIJailbroken()
if (isJailBroken) {
	console.log("This device is jailbroken");
} else {
	console.log("This device is not jailbroken");
}
```
---
### Detect bebugger attachment

To detect if a debugger is attached to the app, use the `amIDebugged()` method.

```ts
const amIDebugged: boolean = IOSSecurity.amIDebugged();
```
---
### Prevent debugger attachment

To prevent the debugger from being attached to the app, call the `denyDebugger()` method.

```ts
IOSSecurity.denyDebugger();
```
---
### Emulator detection
To detect if the app is being run on an emulator, call the `amIRunInEmulator()` method.

```ts
const runInEmulator: boolean = IOSSecurity.amIRunInEmulator();
```
---
### Detect the use of reverse engineering tools
To detect if a common reverse engineering tool is being used on the app, call the `amIReverseEngineered()` method.
```ts
const amIReverseEngineered: boolean = IOSSecurity.amIReverseEngineered();
```
---
### System proxy detection
To detect if the user is using a proxy, call the `amIProxied()` method.

```ts
const amIProxied: boolean = IOSSecurity.amIProxied();
```
---
### Runtime Hooks Detection

To detect if a hook is placed in the application's code, call the `amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod()` method.

```ts
let amIRuntimeHooked: boolean = IOSSecurity.amIRuntimeHookedWithDyldWhiteListDetectionClassSelectorIsClassMethod(dyldWhiteList: NSArray<string> | string[], detectionClass: typeof NSObject, selector: string, isClassMethod: boolean)
```

---
### App tampering detection
To detect if an app has been tampered with, call the `amITampered()` method.

```ts
let amITampered: NSArray<any> =  IOSSecurity.amITampered(checks: NSArray<any> | any[])
```

## License

Apache License Version 2.0
