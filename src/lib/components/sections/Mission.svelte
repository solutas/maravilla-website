<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="py-20 bg-slate-50 dark:bg-slate-800/50 px-6">
	<div class="max-w-5xl mx-auto">
		<h2 class="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">
			{$_('mission_title')}
		</h2>
		<div class="space-y-6 text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
			<p>{$_('mission_p1')}</p>
			<p>{$_('mission_p2')}</p>
			<p>{$_('mission_p3')}</p>
		</div>
	</div>
</section>
