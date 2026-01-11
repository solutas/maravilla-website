<script lang="ts">
	import Rocket from '@lucide/svelte/icons/rocket';
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';
	import { _ } from 'svelte-i18n';
</script>

<section class="py-20 px-6">
	<div class="max-w-7xl mx-auto">
		<h2 class="text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
			{$_('values_title')}
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
			<div class="space-y-4">
				<div class="flex items-center gap-3 mb-2">
					<Rocket class="w-6 h-6 text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold font-heading">{$_('values_extra_mile_title')}</h3>
				</div>
				<p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
					{$_('values_extra_mile_desc')}
				</p>
			</div>

			<div class="space-y-4">
				<div class="flex items-center gap-3 mb-2">
					<Sparkles class="w-6 h-6 text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold font-heading">{$_('values_quality_title')}</h3>
				</div>
				<p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
					{$_('values_quality_desc')}
				</p>
			</div>

			<div class="space-y-4">
				<div class="flex items-center gap-3 mb-2">
					<ShieldCheck class="w-6 h-6 text-blue-600 dark:text-blue-400" />
					<h3 class="text-2xl font-semibold font-heading">{$_('values_lasting_title')}</h3>
				</div>
				<p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
					{$_('values_lasting_desc')}
				</p>
			</div>
		</div>
	</div>
</section>
