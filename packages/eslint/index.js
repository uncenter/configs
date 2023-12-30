import base from './core/base.js';
import typescript from './core/typescript.js';
import solidjs from './core/solidjs.js';
import vitest from './addons/vitest.js';

export default {
	configs: {
		'core/base': base,
		'core/typescript': typescript,
		'core/solidjs': solidjs,
		'addons/vitest': vitest,
	},
};
