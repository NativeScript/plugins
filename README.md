- [@nativescript/animated-circle](packages/animated-circle/README.md)
- [@nativescript/appavailability](packages/appavailability/README.md)
- [@nativescript/apple-sign-in](packages/apple-sign-in/README.md)
- [@nativescript/auto-fit-text](packages/auto-fit-text/README.md)
- [@nativescript/background-http](packages/background-http/README.md)
- [@nativescript/biometrics](packages/biometrics/README.md)
- [@nativescript/brightness](packages/brightness/README.md)
- [@nativescript/camera](packages/camera/README.md)
- [@nativescript/contacts](packages/contacts/README.md)
- [@nativescript/datetimepicker](packages/datetimepicker/README.md)
- [@nativescript/debug-android](packages/debug-android/README.md)
- [@nativescript/debug-ios](packages/debug-ios/README.md)
- [@nativescript/detox](packages/detox/README.md)
- [@nativescript/directions](packages/directions/README.md)
- [@nativescript/email](packages/email/README.md)
- [@nativescript/facebook](packages/facebook/README.md)
- [@nativescript/fingerprint-auth](packages/fingerprint-auth/README.md)
- [@nativescript/geolocation](packages/geolocation/README.md)
- [@nativescript/google-maps](packages/google-maps/README.md)
- [@nativescript/google-maps-utils](packages/google-maps-utils/README.md)
- [@nativescript/google-mobile-ads](packages/google-mobile-ads/README.md)
- [@nativescript/google-signin](packages/google-signin/README.md)
- [@nativescript/haptics](packages/haptics/README.md)
- [@nativescript/imagepicker](packages/imagepicker/README.md)
- [@nativescript/ios-security](packages/ios-security/README.md)
- [@nativescript/iqkeyboardmanager](packages/iqkeyboardmanager/README.md)
- [@nativescript/keyboard-toolbar](packages/keyboard-toolbar/README.md)
- [@nativescript/local-notifications](packages/local-notifications/README.md)
- [@nativescript/localize](packages/localize/README.md)
- [@nativescript/pdf](packages/pdf/README.md)
- [@nativescript/picker](packages/picker/README.md)
- [@nativescript/secure-storage](packages/secure-storage/README.md)
- [@nativescript/shared-notification-delegate](packages/shared-notification-delegate/README.md)
- [@nativescript/social-share](packages/social-share/README.md)
- [@nativescript/theme-switcher](packages/theme-switcher/README.md)
- [@nativescript/twitter](packages/twitter/README.md)
- [@nativescript/zip](packages/zip/README.md)

# How to use?

This workspace manages the suite of plugins listed above. 

## Prerequisites

- Node 20+ is recommended

In general, when in doubt with what to do, just `npm start`.

```bash
npm run setup
npm start

// Ensure all plugins build properly first
> type "build-all" (and hit ENTER)
```

If you don't build all the plugins, you will at least need to build `localize` to run the demos because it contains `hooks` that need to be built first.

If building only `localize`, type: `npm start` > `localize` (this will narrow down menu to `@nativescript.localize.build`) and then hit 'enter'. You can now run the demo apps.

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```bash
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```bash
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```bash
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

## How to publish packages?

```bash
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
