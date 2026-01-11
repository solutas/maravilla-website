<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="py-24 md:py-32 text-center px-6">
	<div class="max-w-7xl mx-auto">
		<h1 class="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight font-heading">
			{$_('hero_title_1')}<br />
			<span
				class="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-clip-text text-transparent animate-gradient"
			>
				{$_('hero_title_2')}
			</span>
		</h1>
		<p class="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
			{$_('hero_subtitle')}
		</p>
	</div>
</section>
