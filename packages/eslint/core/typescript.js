/* Configs */
import base from './base.js';

import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	base,
	compat.config({
		extends: ['plugin:@typescript-eslint/recommended'],
		plugins: ['@typescript-eslint'],
		parser: '@typescript-eslint/parser',
		parserOptions: {
			project: 'tsconfig.json',
		},
		rules: {
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	}),
];
