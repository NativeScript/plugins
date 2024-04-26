module.exports = {
	message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
	pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
			script: 'nx',
			description: 'Execute any command with the @nrwl/cli',
		},
		format: {
			script: 'nx format:write',
			description: 'Format source code of the entire workspace (auto-run on precommit hook)',
		},
		'🔧': {
			script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
			description: '_____________  Apps to demo plugins with  _____________',
		},
		// demos
		apps: {
			'...Vanilla...': {
				script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
				description: ` 🔻 Vanilla`,
			},
			demo: {
				clean: {
					script: 'nx run demo:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo:android',
					description: '⚆  Run Android  🤖',
				},
			},
			'...Angular...': {
				script: `npx cowsay "Test all the Angles!"`,
				description: ` 🔻 Angular`,
			},
			'demo-angular': {
				clean: {
					script: 'nx run demo-angular:clean',
					description: '⚆  Clean  🧹',
				},
				ios: {
					script: 'nx run demo-angular:ios',
					description: '⚆  Run iOS  ',
				},
				android: {
					script: 'nx run demo-angular:android',
					description: '⚆  Run Android  🤖',
				},
			},
		},
		'⚙️': {
			script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/appavailability
			appavailability: {
				build: {
					script: 'nx run appavailability:build.all',
					description: '@nativescript/appavailability: Build',
				},
			},
			// @nativescript/camera
			camera: {
				build: {
					script: 'nx run camera:build.all',
					description: '@nativescript/camera: Build',
				},
			},
			// @nativescript/datetimepicker
			datetimepicker: {
				build: {
					script: 'nx run datetimepicker:build.all',
					description: '@nativescript/datetimepicker: Build',
				},
			},
			// @nativescript/directions
			directions: {
				build: {
					script: 'nx run directions:build.all',
					description: '@nativescript/directions: Build',
				},
			},
			// @nativescript/email
			email: {
				build: {
					script: 'nx run email:build.all',
					description: '@nativescript/email: Build',
				},
			},
			// @nativescript/fingerprint-auth
			'fingerprint-auth': {
				build: {
					script: 'nx run fingerprint-auth:build.all',
					description: '@nativescript/fingerprint-auth: Build',
				},
			},
			// @nativescript/geolocation
			geolocation: {
				build: {
					script: 'nx run geolocation:build.all',
					description: '@nativescript/geolocation: Build',
				},
			},
			// @nativescript/imagepicker
			imagepicker: {
				build: {
					script: 'nx run imagepicker:build.all',
					description: '@nativescript/imagepicker: Build',
				},
			},
			// @nativescript/iqkeyboardmanager
			iqkeyboardmanager: {
				build: {
					script: 'nx run iqkeyboardmanager:build.all',
					description: '@nativescript/iqkeyboardmanager: Build',
				},
			},
			// @nativescript/local-notifications
			'local-notifications': {
				build: {
					script: 'nx run local-notifications:build.all',
					description: '@nativescript/local-notifications: Build',
				},
			},
			// @nativescript/shared-notification-delegate
			'shared-notification-delegate': {
				build: {
					script: 'nx run shared-notification-delegate:build.all',
					description: '@nativescript/shared-notification-delegate: Build',
				},
			},
			// @nativescript/zip
			zip: {
				build: {
					script: 'nx run zip:build.all',
					description: '@nativescript/zip: Build',
				},
			},
			// @nativescript/brightness
			brightness: {
				build: {
					script: 'nx run brightness:build.all',
					description: '@nativescript/brightness: Build',
				},
			},
			// @nativescript/background-http
			'background-http': {
				build: {
					script: 'nx run background-http:build.all',
					description: '@nativescript/background-http: Build',
				},
			},
			// @nativescript/social-share
			'social-share': {
				build: {
					script: 'nx run social-share:build.all',
					description: '@nativescript/social-share: Build',
				},
			},
			// @nativescript/auto-fit-text
			'auto-fit-text': {
				build: {
					script: 'nx run auto-fit-text:build.all',
					description: '@nativescript/auto-fit-text: Build',
				},
			},
			// @nativescript/animated-circle
			'animated-circle': {
				build: {
					script: 'nx run animated-circle:build.all',
					description: '@nativescript/animated-circle: Build',
				},
			},
			// @nativescript/localize
			localize: {
				build: {
					script: 'nx run localize:build.all',
					description: '@nativescript/localize: Build',
				},
			},
			// @nativescript/detox
			detox: {
				build: {
					script: 'nx run detox:build.all',
					description: '@nativescript/detox: Build',
				},
			},
			// @nativescript/picker
			picker: {
				build: {
					script: 'nx run picker:build.all',
					description: '@nativescript/picker: Build',
				},
			},
			// @nativescript/debug-ios
			'debug-ios': {
				build: {
					script: 'nx run debug-ios:build.all',
					description: '@nativescript/debug-ios: Build',
				},
			},
			// @nativescript/debug-android
			'debug-android': {
				build: {
					script: 'nx run debug-android:build.all',
					description: '@nativescript/debug-android: Build',
				},
			},
			// @nativescript/ios-security
			'ios-security': {
				build: {
					script: 'nx run ios-security:build.all',
					description: '@nativescript/ios-security: Build',
				},
			},
			// @nativescript/facebook
			facebook: {
				build: {
					script: 'nx run facebook:build.all',
					description: '@nativescript/facebook: Build',
				},
			},
			// @nativescript/google-signin
			'google-signin': {
				build: {
					script: 'nx run google-signin:build.all',
					description: '@nativescript/google-signin: Build',
				},
			},
			// @nativescript/twitter
			twitter: {
				build: {
					script: 'nx run twitter:build.all',
					description: '@nativescript/twitter: Build',
				},
			},
			// @nativescript/theme-switcher
			'theme-switcher': {
				build: {
					script: 'nx run theme-switcher:build.all',
					description: '@nativescript/theme-switcher: Build',
				},
			},
			// @nativescript/biometrics
			biometrics: {
				build: {
					script: 'nx run biometrics:build.all',
					description: '@nativescript/biometrics: Build',
				},
			},
			// @nativescript/apple-sign-in
			'apple-sign-in': {
				build: {
					script: 'nx run apple-sign-in:build.all',
					description: '@nativescript/apple-sign-in: Build',
				},
			},
			// @nativescript/google-maps
			'google-maps': {
				build: {
					script: 'nx run google-maps:build.all',
					description: '@nativescript/google-maps: Build',
				},
			},
			// @nativescript/contacts
			contacts: {
				build: {
					script: 'nx run contacts:build.all',
					description: '@nativescript/contacts: Build',
				},
			},
			// @nativescript/haptics
			haptics: {
				build: {
					script: 'nx run haptics:build.all',
					description: '@nativescript/haptics: Build',
				},
			},
			// @nativescript/pdf
			pdf: {
				build: {
					script: 'nx run pdf:build.all',
					description: '@nativescript/pdf: Build',
				},
			},
			// @nativescript/secure-storage
			'secure-storage': {
				build: {
					script: 'nx run secure-storage:build.all',
					description: '@nativescript/secure-storage: Build',
				},
			},
			// @nativescript/keyboard-toolbar
			'keyboard-toolbar': {
				build: {
					script: 'nx run keyboard-toolbar:build.all',
					description: '@nativescript/keyboard-toolbar: Build',
				},
			},
			'build-all': {
				script: 'nx run-many --target=build.all --all',
				description: 'Build all packages',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			appavailability: {
				script: 'nx run appavailability:focus',
				description: 'Focus on @nativescript/appavailability',
			},
			camera: {
				script: 'nx run camera:focus',
				description: 'Focus on @nativescript/camera',
			},
			datetimepicker: {
				script: 'nx run datetimepicker:focus',
				description: 'Focus on @nativescript/datetimepicker',
			},
			directions: {
				script: 'nx run directions:focus',
				description: 'Focus on @nativescript/directions',
			},
			email: {
				script: 'nx run email:focus',
				description: 'Focus on @nativescript/email',
			},
			'fingerprint-auth': {
				script: 'nx run fingerprint-auth:focus',
				description: 'Focus on @nativescript/fingerprint-auth',
			},
			geolocation: {
				script: 'nx run geolocation:focus',
				description: 'Focus on @nativescript/geolocation',
			},
			imagepicker: {
				script: 'nx run imagepicker:focus',
				description: 'Focus on @nativescript/imagepicker',
			},
			iqkeyboardmanager: {
				script: 'nx run iqkeyboardmanager:focus',
				description: 'Focus on @nativescript/iqkeyboardmanager',
			},
			'local-notifications': {
				script: 'nx run local-notifications:focus',
				description: 'Focus on @nativescript/local-notifications',
			},
			'shared-notification-delegate': {
				script: 'nx run shared-notification-delegate:focus',
				description: 'Focus on @nativescript/shared-notification-delegate',
			},
			zip: {
				script: 'nx run zip:focus',
				description: 'Focus on @nativescript/zip',
			},
			brightness: {
				script: 'nx run brightness:focus',
				description: 'Focus on @nativescript/brightness',
			},
			'background-http': {
				script: 'nx run background-http:focus',
				description: 'Focus on @nativescript/background-http',
			},
			'social-share': {
				script: 'nx run social-share:focus',
				description: 'Focus on @nativescript/social-share',
			},
			'auto-fit-text': {
				script: 'nx run auto-fit-text:focus',
				description: 'Focus on @nativescript/auto-fit-text',
			},
			'animated-circle': {
				script: 'nx run animated-circle:focus',
				description: 'Focus on @nativescript/animated-circle',
			},
			localize: {
				script: 'nx run localize:focus',
				description: 'Focus on @nativescript/localize',
			},
			detox: {
				script: 'nx run detox:focus',
				description: 'Focus on @nativescript/detox',
			},
			picker: {
				script: 'nx run picker:focus',
				description: 'Focus on @nativescript/picker',
			},
			'debug-ios': {
				script: 'nx run debug-ios:focus',
				description: 'Focus on @nativescript/debug-ios',
			},
			'debug-android': {
				script: 'nx run debug-android:focus',
				description: 'Focus on @nativescript/debug-android',
			},
			'ios-security': {
				script: 'nx run ios-security:focus',
				description: 'Focus on @nativescript/ios-security',
			},
			facebook: {
				script: 'nx run facebook:focus',
				description: 'Focus on @nativescript/facebook',
			},
			'google-signin': {
				script: 'nx run google-signin:focus',
				description: 'Focus on @nativescript/google-signin',
			},
			twitter: {
				script: 'nx run twitter:focus',
				description: 'Focus on @nativescript/twitter',
			},
			'theme-switcher': {
				script: 'nx run theme-switcher:focus',
				description: 'Focus on @nativescript/theme-switcher',
			},
			biometrics: {
				script: 'nx run biometrics:focus',
				description: 'Focus on @nativescript/biometrics',
			},
			'apple-sign-in': {
				script: 'nx run apple-sign-in:focus',
				description: 'Focus on @nativescript/apple-sign-in',
			},
			'google-maps': {
				script: 'nx run google-maps:focus',
				description: 'Focus on @nativescript/google-maps',
			},
			contacts: {
				script: 'nx run contacts:focus',
				description: 'Focus on @nativescript/contacts',
			},
			haptics: {
				script: 'nx run haptics:focus',
				description: 'Focus on @nativescript/haptics',
			},
			pdf: {
				script: 'nx run pdf:focus',
				description: 'Focus on @nativescript/pdf',
			},
			'secure-storage': {
				script: 'nx run secure-storage:focus',
				description: 'Focus on @nativescript/secure-storage',
			},
			'keyboard-toolbar': {
				script: 'nx run keyboard-toolbar:focus',
				description: 'Focus on @nativescript/keyboard-toolbar',
			},
			reset: {
				script: 'nx g @nativescript/plugin-tools:focus-packages',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
