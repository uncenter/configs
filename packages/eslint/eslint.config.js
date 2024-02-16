import { defineEslintConfig } from './index.js';

export default defineEslintConfig({
	preset: 'base',
	plugins: {
		import: false,
	},
});
