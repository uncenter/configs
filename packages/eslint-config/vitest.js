/* Plugins */
import pluginVitest from 'eslint-plugin-vitest';

/* Configs */
import configBase from './base';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	configBase,
	pluginVitest.configs.recommended,
	{
		files: ['test/**'],
		plugins: {
			vitest: pluginVitest,
		},
		rules: {
			'vitest/consistent-test-it': ['error', { fn: 'test' }],
			'vitest/no-standalone-expect': 'error',
			'vitest/no-test-return-statement': 'error',
			'vitest/prefer-lowercase-title': 'error',
		},
	},
];
