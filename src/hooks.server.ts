import { locale } from 'svelte-i18n';
import '$lib/i18n';

export const handle = async ({ event, resolve }) => {
	// Set default locale for SSR/prerendering
	// Client-side will detect and set the correct locale
	locale.set('en');
	return resolve(event);
};
