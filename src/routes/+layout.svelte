<script lang="ts">
	import '../app.css';
	import '$lib/i18n';
	import { locale } from 'svelte-i18n';
	import { browser } from '$app/environment';

	let { children } = $props();

	// Save locale to localStorage when it changes
	$effect(() => {
		if (browser && $locale) {
			localStorage.setItem('locale', $locale);
			document.documentElement.lang = $locale;
		}
	});
</script>

{@render children()}
