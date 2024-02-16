const defaultOptions = {
	options: {
		useTabs: true,
		printWidth: 80,
		trailingComma: 'all',
		semi: true,
		singleQuote: true,
		quoteProps: 'consistent',
	},
	ignores: ['pnpm-lock.yaml'],
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
	],
};

export function definePrettierConfig(opts = {}) {
	const options = {
		options: { ...defaultOptions.options, ...opts.options },
		ignores: [...defaultOptions.ignores, ...(opts.ignores || [])],
		overrides: [...defaultOptions.overrides, ...(opts.overrides || [])],
	};

	options.overrides.push({
		files: options.ignores,
		options: {
			// Requires a "pragma" comment at the top of file to enable formatting.
			requirePragma: true,
		},
	});

	return {
		...options.options,
		overrides: options.overrides,
	};
}
