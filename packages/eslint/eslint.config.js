import uncenter from './index.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...uncenter.configs['core/base'],
	{
		rules: {
			'import/order': 'off',
		},
	},
];
