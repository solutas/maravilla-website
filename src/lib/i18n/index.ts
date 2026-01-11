import { browser } from '$app/environment';
import { init, register, locale, waitLocale } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('../../messages/en.json'));
register('de', () => import('../../messages/de.json'));
register('fr', () => import('../../messages/fr.json'));
register('it', () => import('../../messages/it.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: getInitialLocale()
});

function getInitialLocale(): string {
	if (browser) {
		// Check localStorage for saved preference
		const savedLocale = localStorage.getItem('locale');
		if (savedLocale && ['en', 'de', 'fr', 'it'].includes(savedLocale)) {
			return savedLocale;
		}

		// Check browser language
		const browserLang = navigator.language.split('-')[0];
		if (['en', 'de', 'fr', 'it'].includes(browserLang)) {
			return browserLang;
		}
	}

	return defaultLocale;
}

export { locale, waitLocale };
