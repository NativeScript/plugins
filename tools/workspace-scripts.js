const npsUtils = require('nps-utils');

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
		},
		'⚙️': {
			script: `npx cowsay "@nativescript/* packages will keep your ⚙️ cranking"`,
			description: '_____________  @nativescript/*  _____________',
		},
		// packages
		// build output is always in dist/packages
		'@nativescript': {
			// @nativescript/camera
			camera: {
				build: {
					script: 'nx run camera:build',
					description: '@nativescript/camera: Build',
				},
			},
			// @nativescript/datetimepicker
			datetimepicker: {
				build: {
					script: 'nx run datetimepicker:build',
					description: '@nativescript/datetimepicker: Build',
				},
			},
			// @nativescript/directions
			directions: {
				build: {
					script: 'nx run directions:build',
					description: '@nativescript/directions: Build',
				},
			},
			// @nativescript/email
			email: {
				build: {
					script: 'nx run email:build',
					description: '@nativescript/email: Build',
				},
			},
			// @nativescript/fingerprint-auth
			'fingerprint-auth': {
				build: {
					script: 'nx run fingerprint-auth:build',
					description: '@nativescript/fingerprint-auth: Build',
				},
			},
			// @nativescript/geolocation
			geolocation: {
				build: {
					script: 'nx run geolocation:build',
					description: '@nativescript/geolocation: Build',
				},
			},
			// @nativescript/imagepicker
			imagepicker: {
				build: {
					script: 'nx run imagepicker:build',
					description: '@nativescript/imagepicker: Build',
				},
			},
			// @nativescript/iqkeyboardmanager
			iqkeyboardmanager: {
				build: {
					script: 'nx run iqkeyboardmanager:build',
					description: '@nativescript/iqkeyboardmanager: Build',
				},
			},
			// @nativescript/local-notifications
			'local-notifications': {
				build: {
					script: 'nx run local-notifications:build',
					description: '@nativescript/local-notifications: Build',
				},
			},
			// @nativescript/shared-notification-delegate
			'shared-notification-delegate': {
				build: {
					script: 'nx run shared-notification-delegate:build',
					description: '@nativescript/shared-notification-delegate: Build',
				},
			},
			// @nativescript/zip
			zip: {
				build: {
					script: 'nx run zip:build',
					description: '@nativescript/zip: Build',
				},
			},
			'build-all': {
				script: 'nx run all:build',
				description: 'Build all packages',
			},
		},
		'🧰': {
			script: `npx cowsay "Tools for the workspace 🧰"`,
			description: '_____________  Tools  _____________',
		},
		tools: {
			'add-package': {
				script: 'nx workspace-schematic add-package',
				description: 'Add a new @nativescript package to workspace',
			},
			'sync-packages-with-demos': {
				script: 'nx workspace-schematic sync-packages-with-demos',
				description: 'Helps ensure all packages have views to test across all demo apps',
			},
		},
		'⚡': {
			script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
			description: '_____________  Focus (VS Code supported)  _____________',
		},
		focus: {
			camera: {
				script: 'nx g @nstudio/focus:mode camera',
				description: 'Focus on @nativescript/camera',
			},
			datetimepicker: {
				script: 'nx g @nstudio/focus:mode datetimepicker',
				description: 'Focus on @nativescript/datetimepicker',
			},
			directions: {
				script: 'nx g @nstudio/focus:mode directions',
				description: 'Focus on @nativescript/directions',
			},
			email: {
				script: 'nx g @nstudio/focus:mode email',
				description: 'Focus on @nativescript/email',
			},
			'fingerprint-auth': {
				script: 'nx g @nstudio/focus:mode fingerprint-auth',
				description: 'Focus on @nativescript/fingerprint-auth',
			},
			geolocation: {
				script: 'nx g @nstudio/focus:mode geolocation',
				description: 'Focus on @nativescript/geolocation',
			},
			imagepicker: {
				script: 'nx g @nstudio/focus:mode imagepicker',
				description: 'Focus on @nativescript/imagepicker',
			},
			iqkeyboardmanager: {
				script: 'nx g @nstudio/focus:mode iqkeyboardmanager',
				description: 'Focus on @nativescript/iqkeyboardmanager',
			},
			'local-notifications': {
				script: 'nx g @nstudio/focus:mode local-notifications',
				description: 'Focus on @nativescript/local-notifications',
			},
			'shared-notification-delegate': {
				script: 'nx g @nstudio/focus:mode shared-notification-delegate',
				description: 'Focus on @nativescript/shared-notification-delegate',
			},
			zip: {
				script: 'nx g @nstudio/focus:mode zip',
				description: 'Focus on @nativescript/zip',
			},
			reset: {
				script: 'nx g @nstudio/focus:mode',
				description: 'Reset Focus',
			},
		},
		'.....................': {
			script: `npx cowsay "That's all for now folks ~"`,
			description: '.....................',
		},
	},
};
