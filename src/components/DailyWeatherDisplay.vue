<script setup>
import { reactive } from 'vue';
import { data } from  "../assets/dummy.js";
const {city, list} = data;

const forecastsGroupedByDate = list.reduce((nextDaysGrouped, forecast) => {
  const date = forecast.dt_txt.split(' ')[0];
  const currentDay = list[0].dt_txt.split(' ')[0].split('-')[2]
  const forecastDay = date.split('-')[2];
  if (forecastDay !== currentDay) {
	if (!nextDaysGrouped[date] ) {
	  nextDaysGrouped[date] = [];
	}
	nextDaysGrouped[date].push(forecast);
  }
  return nextDaysGrouped;
}, {});

const findMinMaxTemps = (forecasts) => {
  const temps = forecasts.map(forecast => forecast.main.temp);
  return {
	min: Math.min(...temps).toString().split('.')[0],
	max: Math.max(...temps).toString().split('.')[0]
  };
};

const isNoon = (timestamp) => timestamp === "12";

const nextDaysForecasts = Object.entries(forecastsGroupedByDate).reduce((nextDays, [day, forecasts]) => {
	const noonForecast = forecasts.filter(forecast => isNoon(forecast.dt_txt.split(' ')[1].split(':')[0]))[0];
	console.log(forecasts);
	console.log('noonForecast', noonForecast);	
	nextDays.push({
		day,
		formatedDay: new Date(day).toDateString().split(' ').slice(0, 3).join(' '),
		...findMinMaxTemps(forecasts),
		icon: noonForecast.weather[0].icon,
		description: noonForecast.weather[0].description,
	})
	return nextDays;
}, []);

console.log(nextDaysForecasts);


</script>
<template>
	<div class="bg-white p-6 rounded-lg shadow-md mb-4">
		<h2 class="text-xl font-bold mb-4  pb-4 border-b border-b-sky-800 bg-gradient-to-r from-sky-600 to-sky-950 text-transparent bg-clip-text">Next 5 days </h2>

		<div class="flex flex-col justify-between">
			<div 
				v-for="(forecast, index) in nextDaysForecasts" 
				:key="forecast.day" 
				:class="['flex justify-between items-center px-3', { 'border-b border-sky-200': index !== nextDaysForecasts.length - 1 }]">
					<img :src="'http://openweathermap.org/img/wn/' + forecast.icon + '.png'" :alt="forecast.description">
					<div class="date text-center">
						<p class="text-md text-sky-800 font-bold">{{ forecast.formatedDay }}</p>
						<p class="text-sm text-sky-300">Mostly {{ forecast.description }}</p>

					</div>
					<div class="flex">

						<p class="font-semibold text-sky-800 text-sm mr-2">{{ forecast.min }}°C</p>
						<p class="font-semibold text-sky-800 text-sm">{{ forecast.max }}°C</p>
					</div>
			</div>
		</div>
	</div>
</template>