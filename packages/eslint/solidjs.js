/* Configs */
import typescript from './typescript';
import solid from 'eslint-plugin-solid/configs/typescript';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	typescript,
	{
		files: ['**/*.{ts,tsx}'],
		...solid,
	},
];
