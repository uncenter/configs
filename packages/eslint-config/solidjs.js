/* Configs */
import configTypescript from './typescript';
import configSolid from 'eslint-plugin-solid/configs/typescript';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	configTypescript,
	{
		files: ['**/*.{ts,tsx}'],
		...configSolid,
	},
];
