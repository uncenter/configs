# configs

Highly customized configurations for my JavaScript/TypeScript projects.

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
