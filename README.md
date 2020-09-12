# @nativescript/\* plugins

```
npm run setup
npm start
```

- @nativescript/animated-circle
- @nativescript/appavailability
- @nativescript/auto-fit-text
- @nativescript/background-http
- @nativescript/brightness
- @nativescript/camera
- @nativescript/datetimepicker
- @nativescript/directions
- @nativescript/email
- @nativescript/fingerprint-auth
- @nativescript/geolocation
- @nativescript/imagepicker
- @nativescript/iqkeyboardmanager
- @nativescript/local-notifications
- @nativescript/shared-notification-delegate
- @nativescript/social-share
- @nativescript/zip

# How to use?

This workspace manages the suite of plugins listed above. In general, when in doubt just `npm start` 😊

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a package harness with necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

Choose the focus commands for the package you wish to focus on and all demo app's will be updated and for supported IDE's (currently VS Code), source will also become isolated in the workspace.
