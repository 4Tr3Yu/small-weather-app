<script setup lang="ts">
	import Header from './components/Header.vue'
	import Tabs from './components/Tabs.vue'
	import HourlyWeatherDisplay from './components/HourlyWeatherDisplay.vue'
	import DailyWeatherDisplay from './components/DailyWeatherDisplay.vue'
	import LastUpdated from './components/LastUpdated.vue';
</script>

<template>
	<div class="container mx-auto relative min-h-dvh ">
		<Header/>
		<main class="px-2">
			<Tabs/>
			<HourlyWeatherDisplay city="Rio de Janeiro" />
			<DailyWeatherDisplay city="Rio de Janeiro" />
		</main>
		<LastUpdated/>
	</div>
</template>

