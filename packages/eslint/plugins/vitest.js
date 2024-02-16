import vitest from 'eslint-plugin-vitest';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		files: ['test/**'],
		plugins: {
			vitest: vitest,
		},
		rules: {
			...vitest.configs.recommended.rules,
			'vitest/consistent-test-it': ['error', { fn: 'test' }],
			'vitest/no-standalone-expect': 'error',
			'vitest/no-test-return-statement': 'error',
			'vitest/prefer-lowercase-title': 'error',
		},
		languageOptions: {
			globals: {
				...vitest.environments.env.globals,
			},
		},
	},
];
