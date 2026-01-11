<script lang="ts">
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import { browser } from '$app/environment';

	let isDark = $state(false);

	$effect(() => {
		if (browser) {
			const savedTheme = localStorage.getItem('theme');
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
			updateTheme();
		}
	});

	function updateTheme() {
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function toggleTheme() {
		isDark = !isDark;
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
		updateTheme();
	}
</script>

<button
	onclick={toggleTheme}
	class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
	aria-label="Toggle theme"
>
	{#if isDark}
		<Sun class="w-6 h-6" />
	{:else}
		<Moon class="w-6 h-6" />
	{/if}
</button>
