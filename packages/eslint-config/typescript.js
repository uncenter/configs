/* Parsers */
import * as typescriptParser from '@typescript-eslint/parser';

/* Plugins */
import typescript from '@typescript-eslint/eslint-plugin';

/* Configs */
import base from './base';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	base,
	typescript.configs['recommended'],
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: 'tsconfig.json',
			},
		},
		plugins: {
			typescriptEslint: typescript,
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
];
