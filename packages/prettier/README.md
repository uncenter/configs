# `@uncenter/prettier-config`

```
npm install -D prettier @uncenter/prettier-config
yarn add -D prettier @uncenter/prettier-config
pnpm add -D prettier @uncenter/prettier-config
bun add -D prettier @uncenter/prettier-config
```

**prettier.config.js**:

```js
import uncenter from '@uncenter/prettier-config';

/** @type {import("prettier").Config} */
export default {
	...uncenter,
};
```
