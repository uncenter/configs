import globals from 'globals';

import baseConfig from './core/base.js';
import typescriptConfig from './core/typescript.js';
import solidjsConfig from './core/solidjs.js';

import packageJsonPlugin from './plugins/package-json.js';
import importPlugin from './plugins/import.js';
import unicornPlugin from './plugins/unicorn.js';
import vitestPlugin from './plugins/vitest.js';

/** @typedef {import('eslint').Linter.FlatConfig} EslintFlatConfig */

/**
 * @typedef {Object} Options
 * @property {'base'|'typescript'|'solidjs'} preset - The preset to use.
 * @property {Object} plugins - A map of plugin names and their enabled status.
 * @property {boolean} plugins.unicorn - Enable or disable the 'unicorn' plugin.
 * @property {boolean} plugins.package-json - Enable or disable the 'package-json' plugin.
 * @property {boolean} plugins.import - Enable or disable the 'import' plugin.
 * @property {boolean} plugins.vitest - Enable or disable the 'vitest' plugin.
 * @property {Object} globals - A map of globals to enable from https://github.com/sindresorhus/globals.
 * @property {boolean} globals.builtin
 * @property {boolean} globals.es5
 * @property {boolean} globals.es2015
 * @property {boolean} globals.es2017
 * @property {boolean} globals.es2020
 * @property {boolean} globals.es2021
 * @property {boolean} globals.browser
 * @property {boolean} globals.worker
 * @property {boolean} globals.node
 * @property {boolean} globals.nodeBuiltin
 * @property {boolean} globals.commonjs
 * @property {boolean} globals.amd
 * @property {boolean} globals.webextensions
 * @property {string[]} ignores - An array of file paths/globs to ignore.
 * @property {EslintFlatConfig['rules']} rules - Additional rules.
 */

/**
 * @type {Options}
 */
const defaultOptions = {
	preset: 'base',
	plugins: {
		'unicorn': true,
		'package-json': true,
		'import': true,
		'vitest': false,
	},
	globals: {},
	ignores: ['dist/'],
	rules: {},
};

/**
 * @param {Options} options - Configuration options.
 *
 * @returns {EslintFlatConfig[]}
 */
export function defineEslintConfig(opts) {
	const options = {
		preset: opts.preset || defaultOptions.preset,
		plugins: {
			...defaultOptions.plugins,
			...opts.plugins,
		},
		globals: opts.globals || {},
		ignores: [...defaultOptions.ignores, ...opts.ignores],
		rules: opts.rules || {},
	};

	const config = [
		...{
			base: baseConfig,
			typescript: typescriptConfig,
			solidjs: solidjsConfig,
		}[options.preset],
	];

	for (const [plugin, enabled] of Object.entries(options.plugins)) {
		if (enabled)
			config.push(
				...{
					'unicorn': unicornPlugin,
					'package-json': packageJsonPlugin,
					'import': importPlugin,
					'vitest': vitestPlugin,
				}[plugin],
			);
	}

	const languageOptions = {
		globals: {},
	};
	for (const [global, enabled] of Object.entries(options.globals)) {
		if (enabled)
			languageOptions.globals = {
				...languageOptions.globals,
				...globals[global],
			};
	}

	return [
		...config,
		{ languageOptions },
		{ ignores: [...defaultOptions.ignores] },
		{ rules: options.rules },
	];
}
