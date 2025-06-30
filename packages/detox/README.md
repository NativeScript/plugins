# @nativescript/detox

Easily add [Detox](https://github.com/wix/Detox) end-to-end testing to your NativeScript apps!

| <img src="https://i.imgur.com/apdbINz.gif" /> | <img src="https://i.imgur.com/mWBBF26.gif" /> |
| --------------------------------------------- | --------------------------------------------- |
| iOS Demo                                      | Android Demo                                  |

---

## Table of Contents

1. [Installation](#installation)
2. [Global Setup](#global-setup)
3. [Project Setup](#project-setup)
4. [Usage](#usage)
5. [Running Tests](#running-tests)
6. [Troubleshooting](#troubleshooting)

## Installation

```cli
npm install @nativescript/detox
```

## Global Setup

The full setup requirements can be found [here](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) but the minimal setup steps are as follows:

### Install Detox command line tools (`detox-cli`)

```cli
npm install -g detox-cli
```

### Install [applesimutils](https://github.com/wix/AppleSimulatorUtils) (iOS)

```cli
brew tap wix/brew
brew install applesimutils
```

## Project Setup

### Install the Detox package to your NativeScript project

```cli
npm install detox --save-dev
```

### Install Jest

```cli
npm install jest jest-cli jest-circus --save-dev --no-package-lock
```

### Initialize Detox

```cli
detox init -r jest
```

If things go well, you should to have this set up:

- An `e2e/` folder in your project root
- An `e2e/jest.config.js` file
- An `e2e/starter.test.js` file; [example](https://github.com/wix/Detox/blob/master/examples/demo-react-native-jest/e2e/environment.js)

There should also be a Detox configuration file called `.detoxrc.js` in your project root.

### Configure Detox

Detox must be configured to know the location of the iOS and Android app binary as well as what emulator/simulator to use.

Open `.detoxrc.js` and make the following modifications under `apps` and `devices`.

- `binaryPath`: Specify the location of the app binary (probably something like below).

  - iOS: `platforms/ios/build/Debug-iphonesimulator/[APP_NAME].app`
  - Android: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

- `build`: Specify the build command for iOS and Android.

  - iOS: `ns build ios --env.e2e`
  - Android: `ns build android --detox --env.e2e`

- `devices`:
  - iOS: `"type": "iPhone 14 Pro Max"`
  - Android: `"avdName": "Pixel_4_API_30"` (use `emulator -list-avds` to list Android emulators)

Here is a full example of a Detox configuration:

```js
 /** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/YOUR_APP.app',
      build: 'xcodebuild -workspace platforms/ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/YOUR_APP.app',
      build: 'xcodebuild -workspace platforms/ios/YOUR_APP.xcworkspace -scheme YOUR_APP -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'platforms/android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd platforms/android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'platforms/android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd platforms/android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14 Pro Max'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a_API_30_x86'
      }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};

```

> **Note:** A default NativeScript Android project uses 17 as the minimum SDK, but Detox requires >=21. Remove or modify the `minSdkVersion` in your `App_Resources/Android/app.gradle`.


### Allow Local Networking

#### Android (Compulsory)

We have added a network security config file at `./res/xml/network_security_config.xml`, add it to the applications `AndroidManifest.xml` as below

```xml
<!-- ./res/xml/network_security_config.xml -->
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">10.0.2.2</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>
```

```xml
<!-- ./res/xml/network_security_config.xml -->
...existing code...

  <application
		...existing attributes...
    android:networkSecurityConfig="@xml/network_security_config">
...existing code...
```

If you have an existing network security config, incorporate the configuration specified above into it.

#### iOS (Optional)

Dependending on your setup iOS may not be able to communicate with Detox off the bat. In that case, you need to add the following to your `Info.plist` file to allow for local networking requests.

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsLocalNetworking</key>
    <true/>
</dict>
```

## Usage

Read through [this tutorial](https://github.com/wix/Detox/blob/master/docs/introduction/your-first-test.mdx) written by Detox about writing your first test. Nearly all of the things specified towards React Native apps also apply to NativeScript apps.

Get started by opening the default test scenario in `e2e/firstTest.e2e.js`.

```javascript
describe('Example', () => {
	beforeEach(async () => {
		await device.reloadReactNative();
	});

	it('should have welcome screen', async () => {
		await expect(element(by.text('Sergio'))).toBeVisible();
	});
});
```

This example creates a testing scenario called `Example` and has a single test inside of it called `should have welcome screen`.

### Matchers

Detox uses [matchers]https://github.com/wix/Detox/blob/master/docs/api/matchers.md) to find elements in your UI to interact with.

You can use [NativeScript's `testID` property](https://blog.nativescript.org/nativescript-8-2-announcement/#testid) to find your UI elements using Detox's `by.id()` matcher.

Example:

```xml
<Button text="Tap Me!" testID="testButton"></Button>
```

```javascript
await element(by.id('testButton')).tap();
```

### Actions

Once you find your UI element you can use an [action](https://github.com/wix/Detox/blob/master/docs/api/actions.md) on it such as `tap()` to simulate user interaction.

You should now be able to write tests to simulate user behavior and test for expected results.

## Running Tests

### Building

Build your app for testing using the following command with the value for the `-c` flag being any of the properties of `configuration` object' in `.detoxrc.js`:

```cli
detox build -c ios.sim.debug|android.emu.debug
```

### Testing

Run your tests with the folling command:

```cli
detox test -c ios.sim.debug|android.emu.debug
```

**NOTE:** If using an Android emulator, Detox will disable animations when the tests are ran. Animations will remain disabled after they are finished. This can be very annoying when you are actively developing. You can re-enable animations by running this helper script from your project's directory `./node_modules/.bin/enable-animations`.

To make this even easier I would suggest adding these scripts to your `package.json`.

```json
{
	"scripts":{
    "e2e:android:build": "android.att.debug",
    "e2e:android:build:debug": "ns clean; ns build android; detox build -c android.emu.debug",
		"e2e:android:debug:test": "detox test -c android.emu.debug && ./node_modules/.bin/enable-animations",
		"e2e:ios:build:debug": "detox build -c ios.sim.debug --env.e2e",
		"e2e:ios:test": "detox test -c ios.sim.debug"
  },
}
```

Now to build and run tests you would run:

Android:

```cli
npm run e2e:android:build:debug
npm run e2e:android:test:debug
```

iOS:

```cli
npm run e2e:ios:build:debug
npm run e2e:ios:test
```

## Troubleshooting

Detox requires a minimum SDK version of `21`, so if you get the following error, change the `minSdkVersion` to 21 in `App_Resources/Android/app.gradle`.

```bash
Execution failed for task ':app:processDebugAndroidTestManifest'.
Manifest merger failed : uses-sdk:minSdkVersion 17 cannot be smaller than version 18 declared in library [com.wix:detox:17.6.1] /Users/user/.gradle/caches/transforms-2/files-2.1/91a3acd87d710d1913b266ac114d7001/jetified-detox-17.6.1/`AndroidManifest.xml` as the library might be using APIs not available in 17
        Suggestion: use a compatible library with a minSdk of at most 17,
                or increase this project's minSdk version to at least 21,
                or use tools:overrideLibrary="com.wix.detox" to force usage (may lead to runtime failures)

Command ./gradlew failed with exit code 1
```

---

### Elements can not be found during test
In NativeScript <8.2, the `testID` property was not available. Instead, you were supposed to use the `automationText` property. 

**Add Resource ID (**Android Only**) **
In order to use the `automationText` property in NativeScript it must be enabled by adding a custom resource ID.
Create a file called `ids.xml` in `App_Resources/Android/src/main/res/values/` and add the following:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <item type="id" name="nativescript_accessibility_id"/>
</resources>
```

## License

Apache License Version 2.0
