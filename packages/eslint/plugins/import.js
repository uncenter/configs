import i from 'eslint-plugin-i';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		plugins: {
			import: i,
		},
		rules: {
			'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
			'import/no-duplicates': 'error',
			'import/first': 'error',
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					'groups': [
						'type',
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index'],
						'object',
					],
					'alphabetize': { order: 'asc', caseInsensitive: true },
				},
			],
			'import/newline-after-import': ['error', { count: 1 }],
		},
	},
];
