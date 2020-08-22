const npsUtils = require('nps-utils');

module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
	scripts: {
		default: 'nps-i',
		nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli'
    },
		format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)'
    }
	},
};
