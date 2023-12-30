# configs

Highly customized configurations for my JavaScript/TypeScript projects.

## `@uncenter/eslint-config`

```
npm install -D @uncenter/eslint-config
yarn add -D @uncenter/eslint-config
pnpm add -D @uncenter/eslint-config
bun add -D @uncenter/eslint-config
```

**eslint.config.js**:

```js
import uncenter from "@uncenter/eslint-config";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	...uncenter,
	{
		rules: {
			// ...
		},
	},
];
```

## `@uncenter/prettier-config`

```
npm install -D @uncenter/prettier-config
yarn add -D @uncenter/prettier-config
pnpm add -D @uncenter/prettier-config
bun add -D @uncenter/prettier-config
```

**prettier.config.js**:

```js
import uncenter from "@uncenter/prettier-config";

/** @type {import("prettier").Config} */
export default {
	...uncenter,
};
```
