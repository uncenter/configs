import unicorn from 'eslint-plugin-unicorn';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	unicorn.configs['flat/recommended'],
	{
		rules: {
			'unicorn/no-useless-undefined': ['error', { checkArguments: false }],
			'unicorn/text-encoding-identifier-case': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/numeric-separators-style': 'off',
			'unicorn/prevent-abbreviations': 'off',
		},
	},
];
