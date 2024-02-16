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
import { defineEslintConfig } from "@uncenter/eslint-config";

export default defineEslintConfig({
  // Select a preset (base, typescript, or solidjs).
  preset: "base",
  plugins: {
    // Enable/disable various plugins (unicorn, package-json, import, vitest)...
    vitest: true,
  },
  // Include globals such as `node`, `browser`, etc.
  globals: {},
  // Add additional paths/globs for ESLint to ignore.
  ignores: [],
  // Tweak rules as you see fit!
  rules: {},
});
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
import { definePrettierConfig } from "@uncenter/prettier-config";

export default definePrettierConfig({
  // Add/change Prettier configuration options...
  options: {},
  // Ignore paths/globs without needing a .prettierignore file!
  ignores: [],
  // Set different options for specific file paths/globs.
  overrides: [],
});
```

## License

[MIT](LICENSE)
