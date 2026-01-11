import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: ''
		},
		appDir: 'app',
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s for links that don't exist yet (like /blog)
				if (message.includes('404')) {
					console.warn(`Warning: ${path} (from ${referrer}) returned 404`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
