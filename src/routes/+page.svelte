<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Mission from '$lib/components/sections/Mission.svelte';
	import CoreValues from '$lib/components/sections/CoreValues.svelte';
	import Europe from '$lib/components/sections/Europe.svelte';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('site_title')}</title>
	<meta name="description" content={$_('site_description')} />
</svelte:head>

<Header />

<main>
	<Hero />
	<Mission />
	<CoreValues />
	<Europe />
</main>

<Footer />
