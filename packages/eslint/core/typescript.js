/* Configs */
import base from './base.js';

import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	base,
	{
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
];
