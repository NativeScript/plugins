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
			// @nativescript/email
			email: {
				build: {
					script: 'nx run email:build',
					description: '@nativescript/email: Build',
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
			email: {
				script: 'nx g @nstudio/focus:mode email',
				description: 'Focus on @nativescript/email',
			},
			'local-notifications': {
				script: 'nx g @nstudio/focus:mode local-notifications',
				description: 'Focus on @nativescript/local-notifications',
			},
			'shared-notification-delegate': {
				script: 'nx g @nstudio/focus:mode shared-notification-delegate',
				description: 'Focus on @nativescript/shared-notification-delegate',
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
