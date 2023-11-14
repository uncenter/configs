/* Parsers */
import * as typescriptParser from "@typescript-eslint/parser";

/* Plugins */
import pluginTypescript from "@typescript-eslint/eslint-plugin";

/* Configs */
import configBase from "./base";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	configBase,
	pluginTypescript.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				project: "tsconfig.json",
			},
		},
		plugins: {
			typescriptEslint: pluginTypescript,
		},
		rules: {
			"@typescript-eslint/consistent-type-imports": "error",
		},
	},
];
