/* Plugins */
import vitest from 'eslint-plugin-vitest';

/* Configs */
import base from './base';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	base,
	vitest.configs['recommended'],
	{
		files: ['test/**'],
		plugins: {
			vitest: vitest,
		},
		rules: {
			'vitest/consistent-test-it': ['error', { fn: 'test' }],
			'vitest/no-standalone-expect': 'error',
			'vitest/no-test-return-statement': 'error',
			'vitest/prefer-lowercase-title': 'error',
		},
	},
];
