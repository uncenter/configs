/* Parsers */
import jsoncParser from 'jsonc-eslint-parser';

/* Plugins */
import jsonc from 'eslint-plugin-jsonc';
import unicorn from 'eslint-plugin-unicorn';
import i from 'eslint-plugin-i';
import js from '@eslint/js';

/* Configs */
import prettier from 'eslint-config-prettier';

/* Globals */
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	js.configs['recommended'],
	{
		rules: {
			'capitalized-comments': ['error'],
		},
	},
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
	prettier,
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
	{
		// Sort package.json keys.
		files: ['package.json'],
		plugins: {
			jsonc: jsonc,
		},
		languageOptions: {
			parser: jsoncParser,
		},
		rules: {
			'jsonc/sort-keys': [
				'error',
				{
					order: [
						'name',
						'version',
						'description',
						'author',
						'repository',
						'license',
						'keywords',
						'type',
						'files',
						'main',
						'module',
						'types',
						'exports',
						'bin',
						'scripts',
						'peerDependencies',
						'peerDependenciesMeta',
						'dependencies',
						'devDependencies',
						'packageManager',
					],
					pathPattern: '^$',
				},
				{
					order: { type: 'asc' },
					pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				},
			],
		},
	},
	{
		languageOptions: {
			globals: {
				...globals.node,
			},
		},
	},
];
