/* Configs */
import typescript from './typescript.js';
import solid from 'eslint-plugin-solid/dist/configs/typescript.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	typescript,
	{
		files: ['**/*.{ts,tsx}'],
		...solid,
	},
];
