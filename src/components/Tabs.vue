<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['change-city']);

const cities = [{
	name: "Rio de Janeiro",
	lat: -22.9068,
	lon: -43.1729
},
{
	name: "Beijing",
	lat: 39.9042,
	lon: 116.4074
},
{
	name: "Los Angeles",
	lat: 34.0522,
	lon: -118.2437
}];

const selectedCity = ref(cities[0].name);

const changeCity = (city) => {
	selectedCity.value = city.name;
	emit('change-city', city);
};
</script>
<template>
	<div>
		<div class="flex justify-center sm:justify-start space-x-4 mb-2 border-b border-b-sky-800">
			<button v-for="city in cities" :key="city.name"
				:class="['py-2 px-4 rounded-t-lg focus:outline-none font-bold text-sm ', city.name === selectedCity ? 'bg-sky-800 text-white' : 'text-sky-800 border border-sky-800 border-b-0 hover:bg-sky-950 hover:text-white']"
				@click="changeCity(city)">
				{{ city.name }}
			</button>
			
		</div>

	</div>
</template>