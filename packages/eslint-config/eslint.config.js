import uncenter from './base.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...uncenter,
	{
		rules: {
			'import/order': 'off',
		},
	},
];
