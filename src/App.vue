<script setup lang="ts">
	import Header from './components/Header.vue'
	import Tabs from './components/Tabs.vue'
	import HourlyWeatherDisplay from './components/HourlyWeatherDisplay.vue'
</script>

<template>
	<div class="container mx-auto">
		<Header/>
		<main class="px-2">
			<Tabs/>
			<HourlyWeatherDisplay city="Rio de Janeiro" />
		</main>
	</div>
</template>

