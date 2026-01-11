<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<section class="py-20 bg-gradient-to-br from-blue-900 to-blue-600 text-white px-6">
	<div class="max-w-5xl mx-auto text-center">
		<h2 class="text-4xl md:text-5xl font-bold mb-8 font-heading">
			{$_('europe_title')}
		</h2>
		<div class="space-y-6 text-lg md:text-xl leading-relaxed opacity-95">
			<p>{$_('europe_p1')}</p>
			<p>{$_('europe_p2')}</p>
		</div>
		<div class="mt-12 text-lg opacity-90">
			<p class="font-semibold text-xl font-heading">Maravilla Labs</p>
			<p>{$_('europe_location')} 🇨🇭</p>
		</div>
	</div>
</section>
