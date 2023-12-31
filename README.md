# configs

Highly customized configurations for my JavaScript/TypeScript projects.

> [!CAUTION]
> This project is still not functional! On hold until [typescript-eslint moves to the new flat config system](https://github.com/typescript-eslint/typescript-eslint/issues/7694) as I think that is the major blocker at the moment. You can look at the rules and techniques I have used though, if you are curious.

## `@uncenter/eslint-config`

```
npm install -D eslint @uncenter/eslint-config
yarn add -D eslint eslint @uncenter/eslint-config
pnpm add -D eslint @uncenter/eslint-config
bun add -D eslint @uncenter/eslint-config
```

**eslint.config.js**:

```js
import uncenter from "@uncenter/eslint-config";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	// Add one of the core configurations: 'base', 'typescript', or 'solidjs'.
	...uncenter.configs["core/base"],
	// Add an addon if it applies: 'vitest'.
	...uncenter.configs["addons/vitest"],
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

## `@uncenter/prettier-config`

```
npm install -D prettier @uncenter/prettier-config
yarn add -D prettier @uncenter/prettier-config
pnpm add -D prettier @uncenter/prettier-config
bun add -D prettier @uncenter/prettier-config
```

**prettier.config.js**:

```js
import uncenter from "@uncenter/prettier-config";

/** @type {import("prettier").Config} */
export default {
	...uncenter,
};
```

## License

[MIT](LICENSE)
