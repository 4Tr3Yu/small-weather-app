<script setup>
import { reactive, watch } from "vue";
const props = defineProps({
	cityData: {
		type: Object,
		required: true,
	},
});

const state = reactive({
	nextHoursForecast: [],
	city: {},
});

watch(() => props.cityData, (newCityData) => {
		state.nextHoursForecast = newCityData.list.slice(0, 4);
		state.city = newCityData.city;
	}, { immediate: true }
);


</script>
<template>
	<div class="bg-white p-6 rounded-lg shadow-md mb-4">
		<h2 class="text-xl font-bold mb-4  pb-4 border-b border-b-sky-800 bg-gradient-to-r from-sky-600 to-sky-950 text-transparent bg-clip-text"> Next hours</h2>
		<div class="flex justify-around text-center">
			<div 
				v-for="(forecast, index) in state.nextHoursForecast" 
				:key="forecast.dt" 
				:class="['flex flex-col items-center w-full justify-center px-3', { 'border-r border-sky-200': index !== state.nextHoursForecast.length - 1 }]">
					<p class="font-bold text-sky-800">{{ forecast.main.temp.toString().split('.')[0] }}°C</p>
					<p class="text-sky-400 text-md">{{ forecast.main.humidity }}%</p>
					<img :src="'http://openweathermap.org/img/wn/' + forecast.weather[0].icon + '.png'" :alt="forecast.weather[0].description">
					<p class="text-md text-sky-400">{{ new Date(forecast.dt * 1000).getHours() }}:00</p>
			</div>
		</div>
	</div>
</template>