<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Header from './components/Header.vue'
import Tabs from './components/Tabs.vue'
import HourlyWeatherDisplay from './components/HourlyWeatherDisplay.vue'
import DailyWeatherDisplay from './components/DailyWeatherDisplay.vue'
import LastUpdated from './components/LastUpdated.vue'
import Loader from './components/UI/Loader.vue'

const state = reactive({
	cityData: null,
	selectedCity: {
		name: 'Rio de Janeiro',
		lat: -22.9028,
		lon: -43.2075,
	},
	isLoading: true,
	error: null,
	lastUpdated: ''
})


onMounted(async () => {
	const  apiUrl = ref(`${import.meta.env.VITE_BASE_URL}?lat=${state.selectedCity.lat}&lon=${state.selectedCity.lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`)
	try {
		console.log('API url',apiUrl.value)
		const response  = await fetch(apiUrl.value)
		state.cityData = await response.json()
		state.lastUpdated = new Date().toLocaleString();
	} catch (error) {
		console.error(error)
	} finally {
		state.isLoading = false
	}

})


</script>

<template>
	<div class="container mx-auto flex flex-col relative min-h-dvh ">
		<Loader v-show="state.isLoading"/>
		<Header/>
		<main class="px-2 mb-auto">
			<div v-if="state.error" class="error">

			</div>
			<div v-else class="content">
				<Tabs />
				<HourlyWeatherDisplay v-if="state.cityData" :cityData="state.cityData"/>
				<DailyWeatherDisplay v-if="state.cityData" :cityData="state.cityData"/>
			</div>
		</main>
		<LastUpdated/>
	</div>
</template>

