- @nativescript/animated-circle
- @nativescript/appavailability
- @nativescript/apple-pay
- @nativescript/auto-fit-text
- @nativescript/background-http
- @nativescript/brightness
- @nativescript/camera
- @nativescript/datetimepicker
- @nativescript/debug-android
- @nativescript/debug-ios
- @nativescript/detox
- @nativescript/directions
- @nativescript/email
- @nativescript/fingerprint-auth
- @nativescript/geolocation
- @nativescript/google-pay
- @nativescript/imagepicker
- @nativescript/iqkeyboardmanager
- @nativescript/local-notifications
- @nativescript/localize
- @nativescript/picker
- @nativescript/shared-notification-delegate
- @nativescript/social-share
- @nativescript/zip

# How to use?

This workspace manages the suite of plugins listed above.

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
