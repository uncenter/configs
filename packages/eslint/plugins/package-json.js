import jsoncParser from 'jsonc-eslint-parser';
import jsonc from 'eslint-plugin-jsonc';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
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
];
