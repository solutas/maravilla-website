<script lang="ts">
	import Cloud from '@lucide/svelte/icons/cloud';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { _ } from 'svelte-i18n';
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileMenuOpen = $state(false);
</script>

<header class="sticky top-0 z-50 glass border-b border-slate-200 dark:border-slate-800">
	<div class="max-w-7xl mx-auto px-6 py-4">
		<div class="flex items-center justify-between">
			<a href="/" class="flex items-center gap-3">
				<img src="/maravilla-logo.png" alt="Maravilla Labs Logo" class="w-7 h-7" />
				<span class="text-2xl font-bold tracking-tight font-heading">Maravilla Labs</span>
			</a>

			<div class="flex items-center gap-4">
				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-6">
					<a
						href="https://www.maravilla.cloud"
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-2"
					>
						<Cloud class="w-5 h-5" />
						{$_('nav_cloud')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_blog')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_news')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_lab_work')}
					</a>
				</nav>

				<LanguageSwitcher />
				<ThemeToggle />

				<!-- Mobile Menu Button -->
				<button
					class="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<nav class="md:hidden pt-4 pb-2 border-t border-slate-200 dark:border-slate-700 mt-4">
				<div class="flex flex-col gap-4">
					<a
						href="https://www.maravilla.cloud"
						target="_blank"
						rel="noopener noreferrer"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-2"
					>
						<Cloud class="w-5 h-5" />
						{$_('nav_cloud')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_blog')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_news')}
					</a>
					<a
						href="#"
						class="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
					>
						{$_('nav_lab_work')}
					</a>
				</div>
			</nav>
		{/if}
	</div>
</header>
