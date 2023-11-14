export default {
	useTabs: true,
	printWidth: 80,
	trailingComma: 'all',
	semi: true,
	singleQuote: true,
	quoteProps: 'consistent',
	overrides: [
		{
			// Use double quotes, tabs, and two spaces in YAML files (mostly .github/).
			files: '**/*.{yml,yaml}',
			options: {
				singleQuote: false,
				tabWidth: 2,
				useTabs: false,
			},
		},
		{
			// Disables formatting of pnpm-lock.yaml (https://github.com/fzf404/prettier-config/).
			files: 'pnpm-lock.yaml',
			options: {
				// Requires a "pragma" comment at the top of file to enable formatting.
				requirePragma: true,
			},
		},
	],
};
