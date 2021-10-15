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
ns plugin add @nativescript/detox
```

## Global Setup

The full setup requirements can be found [here](https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md) but the minimal setup steps are as follows:

### Install Detox command line tools (`detox-cli`)

```bash
npm install -g detox-cli
```

### Install [applesimutils](https://github.com/wix/AppleSimulatorUtils) (iOS)

```bash
brew tap wix/brew
brew install applesimutils
```

## Project Setup

### Install the Detox package to your NativeScript project

```bash
npm install detox --save-dev
```

### Install Jest

```bash
npm install jest jest-cli jest-circus --save-dev --no-package-lock
```

### Initialize Detox

```bash
detox init -r jest
```

If things go well, you should to have this set up:

- An `e2e/` folder in your project root
- An `e2e/config.json` file; [example](https://github.com/wix/Detox/blob/master/examples/demo-react-native-jest/e2e/config.json)
- An `e2e/environment.js` file; [example](https://github.com/wix/Detox/blob/master/examples/demo-react-native-jest/e2e/environment.js)
- An `e2e/firstTest.e2e.js` file with content similar to [this](https://github.com/wix/Detox/blob/master/examples/demo-react-native-jest/e2e/app-hello.e2e.js).

There should also be a file called `.detoxrc.json` in your project root.

### Configure Detox

Detox must be configued to know the location of the iOS and Android app binary as well as what emulator/simulator to use.

Open `.detoxrc.json` and make the following modifications under `configurations` for iOS and Android.

- `binaryPath`: Specify the location of the app binary (probably something like below).

  - iOS: `platforms/ios/build/Debug-iphonesimulator/[APP_NAME].app`
  - Android: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

- `build`: Specify the build command for iOS and Android.

  - iOS: `ns build ios`
  - Android: `ns build android --detox`

- `device`:
  - iOS: `"type": "iPhone 11"`
  - Android: `"avdName": "Pixel_3a_API_30_1"` (use `emulator -list-avds` to list Android emulators)

Here is a full example of a Detox configuration:

```json
{
	"testRunner": "jest",
	"runnerConfig": "e2e/config.json",
	"configurations": {
		"ios": {
			"binaryPath": "platforms/ios/build/Debug-iphonesimulator/[APP_NAME].app",
			"build": "ns build ios",
			"type": "ios.simulator",
			"device": {
				"type": "iPhone 11"
			}
		},
		"android": {
			"binaryPath": "platforms/android/app/build/outputs/apk/debug/app-debug.apk",
			"build": "ns build android --detox",
			"type": "android.emulator",
			"device": {
				"avdName": "Pixel_3a_API_30_1"
			}
		}
	}
}
```

> **Note:** A default NativeScript Android project uses 17 as the minimum SDK, but Detox requires >=18. Remove or modify the `minSdkVersion` in your `App_Resources/Android/app.gradle`.

## Usage

Read through [this tutorial](https://github.com/wix/Detox/blob/master/docs/Introduction.WritingFirstTest.md) written by Detox about writing your first test. Nearly all of the things specified towards React Native apps also apply to NativeScript apps.

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

Detox uses [matchers](https://github.com/wix/Detox/blob/master/docs/APIRef.Matchers.md) to find elements in your UI to interact with such as `by.label()` or `by.text()`.

You can use the `automationText` property to find your UI elements by a unique label in NativeScript.

Example `by.label()`:

```xml
<Button text="Tap Me!" automationText="testButton"></Button>
```

```javascript
await element(by.label('testButton')).tap();
```

### Actions

Once you find your UI element you can use an [action](https://github.com/wix/Detox/blob/master/docs/APIRef.ActionsOnElement.md) on it such as `tap()` to simulate user interaction.

You should now be able to write tests to simulate user behavior and test for expected results.

## Running Tests

### Building

Build your app for testing using the following command:

```bash
detox build -c ios|android
```

### Testing

Run your tests with the folling command:

```bash
detox test -c ios|android
```

**NOTE:** If using an Android emulator, Detox will disable animations when the tests are ran. Animations will remain disabled after they are finished. This can be very annoying when you are actively developing. You can re-enable animations by running this helper script from your project's directory `./node_modules/.bin/enable-animations`.

To make this even easier I would suggest adding these scripts to your `package.json`.

```json
{
	"scripts": {
		"e2e:android:build": "detox build -c android",
		"e2e:android:test": "detox test -c android && ./node_modules/.bin/enable-animations",
		"e2e:ios:build": "detox build -c ios",
		"e2e:ios:test": "detox test -c ios"
	}
}
```

Now to build and run tests you would run:

Android:

```bash
npm run e2e:android:build
npm run e2e:android:test
```

iOS:

```bash
npm run e2e:ios:build
npm run e2e:ios:test
```

## Troubleshooting

Detox requires a minimum SDK version of 18, so if you get the following error, change the `minSdkVersion` to 18 in `App_Resources/Android/app.gradle`.

```bash
Execution failed for task ':app:processDebugAndroidTestManifest'.
Manifest merger failed : uses-sdk:minSdkVersion 17 cannot be smaller than version 18 declared in library [com.wix:detox:17.6.1] /Users/user/.gradle/caches/transforms-2/files-2.1/91a3acd87d710d1913b266ac114d7001/jetified-detox-17.6.1/AndroidManifest.xml as the library might be using APIs not available in 17
        Suggestion: use a compatible library with a minSdk of at most 17,
                or increase this project's minSdk version to at least 18,
                or use tools:overrideLibrary="com.wix.detox" to force usage (may lead to runtime failures)

Command ./gradlew failed with exit code 1
```

## License

Apache License Version 2.0
