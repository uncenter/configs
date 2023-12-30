/* Configs */
import typescript from './core/typescript';
import solid from 'eslint-plugin-solid/configs/typescript';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	typescript,
	{
		files: ['**/*.{ts,tsx}'],
		...solid,
	},
];
