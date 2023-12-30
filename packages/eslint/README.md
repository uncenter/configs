# `@uncenter/eslint-config`

```
npm install -D eslint @uncenter/eslint-config
yarn add -D eslint eslint @uncenter/eslint-config
pnpm add -D eslint @uncenter/eslint-config
bun add -D eslint @uncenter/eslint-config
```

**eslint.config.js**:

```js
import uncenter from '@uncenter/eslint-config';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	// Add one of the core configurations: 'base', 'typescript', or 'solidjs'.
	...uncenter.configs['core/base'],
	// Add an addon if it applies: 'vitest'.
	...uncenter.configs['addons/vitest'],
	// Put ignore globs in the 'ignores' field below (flat config abandons .eslintignore files).
	{
		ignores: [],
	},
	// Customize rules below.
	{
		rules: {
			// ...
		},
	},
];
```
