<script lang="ts">
	import Globe from '@lucide/svelte/icons/globe';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { locale, _ } from 'svelte-i18n';

	let isOpen = $state(false);

	type LocaleKey = 'en' | 'de' | 'fr' | 'it';

	const localeNames: Record<LocaleKey, string> = {
		en: 'English',
		de: 'Deutsch',
		fr: 'Français',
		it: 'Italiano'
	};

	const locales: LocaleKey[] = ['en', 'de', 'fr', 'it'];

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}

	function setLocale(newLocale: LocaleKey) {
		locale.set(newLocale);
		closeDropdown();
	}
</script>

<div class="relative">
	<button
		onclick={toggleDropdown}
		onblur={() => setTimeout(closeDropdown, 150)}
		class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm font-medium"
		aria-label={$_('language_label')}
		aria-expanded={isOpen}
	>
		<Globe class="w-5 h-5" />
		<span class="hidden sm:inline">{$locale ? localeNames[$locale as LocaleKey] : ''}</span>
		<ChevronDown class="w-4 h-4 transition-transform {isOpen ? 'rotate-180' : ''}" />
	</button>

	{#if isOpen}
		<div
			class="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50"
		>
			{#each locales as loc}
				<button
					onclick={() => setLocale(loc)}
					class="block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors {loc === $locale ? 'text-blue-600 dark:text-blue-400 font-medium' : 'text-slate-700 dark:text-slate-300'}"
				>
					{localeNames[loc]}
				</button>
			{/each}
		</div>
	{/if}
</div>
