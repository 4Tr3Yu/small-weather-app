<script setup lang="ts">
import { reactive, onMounted } from 'vue'
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

const fetchWeatherData = async () => {
	const  apiUrl = `${import.meta.env.VITE_BASE_URL}?lat=${state.selectedCity.lat}&lon=${state.selectedCity.lon}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
	try {
		const response  = await fetch(apiUrl)

		if (!response.ok) {
			throw new Error('Failed to fetch weather data');
		}

		state.cityData = await response.json()
		console.log('cityData', state.cityData)
		state.lastUpdated = new Date().toLocaleString();
	} catch (error) {
		console.error(error)
	} finally {
		state.isLoading = false
	}
}

onMounted(fetchWeatherData)

const onChangeCity = async (city:{name:string, lat:number, lon:number}) => {
	console.log('newCity',city)
	state.selectedCity = city;
	state.isLoading = true;
	fetchWeatherData();
}

</script>

<template>
	<div class="container mx-auto flex flex-col relative min-h-dvh ">
		<Loader v-show="state.isLoading"/>
		<Header/>
		<main class="px-2 mb-auto">
			<div v-if="state.error" class="error">
				<p>{{ state.error }}</p>
			</div>
			<div v-else class="content">
				<Tabs @change-city="onChangeCity"/>
				<div class="grid sm:grid-cols-2 gap-4">
					<HourlyWeatherDisplay v-if="state.cityData" :cityData="state.cityData" :key="state.selectedCity.name"/>
					<DailyWeatherDisplay v-if="state.cityData" :cityData="state.cityData" :key="state.selectedCity.name"/>

				</div>
			</div>
		</main>
		<LastUpdated @refresh-city-data="onChangeCity(state.selectedCity)" :lastUpdated="state.lastUpdated"/>
	</div>
</template>

