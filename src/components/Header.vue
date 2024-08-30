<script setup>
import CommonButton from './UI/CommonButton.vue';
</script>
<template>
	<header class="w-full bg-gradient-to-r from-sky-700 to-sky-950 py-3 px-2 shadow-xl mb-4 flex justify-between items-center">
		<h1 class="text-2xl font-bold text-white">Small Weather App</h1>
		<CommonButton> 
			<img src="/images/search.svg" alt="">
		</CommonButton>		
	</header>
</template>