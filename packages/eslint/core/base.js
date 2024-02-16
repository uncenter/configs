import js from '@eslint/js';

import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs['recommended'],
	{
		rules: {
			'capitalized-comments': ['error'],
		},
	},
	prettier,
];
