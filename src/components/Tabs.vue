<script setup>
	import { ref } from 'vue';

	const cities = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
	const selectedCity = ref(cities[0]);

	const selectCity = (city) => {
		selectedCity.value = city;
	};
</script>
<template>
	<div>
		<div class="flex justify-center sm:justify-start space-x-4 mb-2 border-b border-b-sky-800">
			<button
				v-for="city in cities"
				:key="city"
				:class="['py-2 px-4 rounded-t-lg focus:outline-none font-bold text-sm' , city === selectedCity ? 'bg-sky-800 text-white' : 'text-sky-800 border border-sky-800 border-b-0']"
				@click="selectCity(city)"
			>
				{{ city }}
			</button>
		</div>
		
	</div>
</template>