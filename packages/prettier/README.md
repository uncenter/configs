# `@uncenter/prettier-config`

```
npm install -D prettier @uncenter/prettier-config
yarn add -D prettier @uncenter/prettier-config
pnpm add -D prettier @uncenter/prettier-config
bun add -D prettier @uncenter/prettier-config
```

**prettier.config.js**:

```js
import { definePrettierConfig } from '@uncenter/prettier-config';

export default definePrettierConfig({
	// Add/change Prettier configuration options...
	options: {},
	// Ignore paths/globs without needing a .prettierignore file!
	ignores: [],
	// Set different options for specific file paths/globs.
	overrides: [],
});
```
