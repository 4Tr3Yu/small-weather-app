<script setup>
import CommonButton from './UI/CommonButton.vue';

const emit = defineEmits(['refresh-city-data']);

defineProps({
	lastUpdated: {
		type: String,
		required: true
	}
});

const refreshCityData = () => {
	emit('refresh-city-data');
};

</script>
<template>
	<footer class="w-full bg-gradient-to-r from-sky-700 to-sky-950 py-1 px-2 flex justify-end items-center">
		<p class="text-md text-right text-white mr-2">Last Updated {{lastUpdated}}</p>
		<CommonButton @click="refreshCityData"> 
			Refresh
		</CommonButton>
	</footer>
</template>