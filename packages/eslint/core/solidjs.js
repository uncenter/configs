/* Configs */
import typescript from './typescript.js';

import solid from 'eslint-plugin-solid/configs/typescript.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	typescript,
	{
		files: ['**/*.{ts,tsx}'],
		...solid,
	},
];
