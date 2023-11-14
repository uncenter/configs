/* Parsers */
import jsoncParser from "jsonc-eslint-parser";

/* Plugins */
import pluginJsonc from "eslint-plugin-jsonc";
import pluginUnicorn from "eslint-plugin-unicorn";
import pluginImport from "eslint-plugin-import";

/* Configs */
import configJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	configJs.configs.recommended,
	pluginUnicorn.configs.recommended,
	configPrettier,
	{
		plugins: {
			unicorn: pluginUnicorn,
			import: pluginImport,
		},
		rules: {
			"capitalized-comments": ["error"],

			/* Import Sorting */
			"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
			"import/no-duplicates": "error",
			"import/first": "error",
			"import/order": [
				"error",
				{
					"newlines-between": "always",
					groups: [
						"type",
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
					],
					alphabetize: { order: "asc", caseInsensitive: true },
				},
			],
			"import/newline-after-import": ["error", { count: 1 }],

			"unicorn/no-useless-undefined": ["error", { checkArguments: false }],
			"unicorn/text-encoding-identifier-case": "off", // "UTF-8" > "UTF8"
			"unicorn/filename-case": "off",
			"unicorn/numeric-separators-style": "off",
		},
	},
	{
		// Sort package.json keys.
		files: ["package.json"],
		plugins: {
			jsonc: pluginJsonc,
		},
		languageOptions: {
			parser: jsoncParser,
		},
		rules: {
			"jsonc/sort-keys": [
				"error",
				{
					order: [
						"name",
						"version",
						"description",
						"author",
						"repository",
						"license",
						"keywords",
						"type",
						"files",
						"main",
						"module",
						"types",
						"exports",
						"bin",
						"scripts",
						"peerDependencies",
						"peerDependenciesMeta",
						"dependencies",
						"devDependencies",
						"packageManager",
						"prettier",
					],
					pathPattern: "^$",
				},
				{
					order: { type: "asc" },
					pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
				},
			],
		},
	},
];
