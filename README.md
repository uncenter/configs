# configs

Highly customized configurations for my JavaScript/TypeScript projects.

## `@uncenter/eslint-config`

```
npm install @uncenter/eslint-config
yarn add @uncenter/eslint-config
pnpm add @uncenter/eslint-config
bun add @uncenter/eslint-config
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
npm install @uncenter/prettier-config
yarn add @uncenter/prettier-config
pnpm add @uncenter/prettier-config
bun add @uncenter/prettier-config
```

**prettier.config.js**:

```js
import prettierConfigUncenter from "@uncenter/prettier-config";

/** @type {import("prettier").Config} */
export default {
	...prettierConfigUncenter,
};
```
