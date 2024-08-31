<script setup>
import CommonButton from './UI/CommonButton.vue';
defineProps({
	lastUpdated: {
		type: String,
		required: true
	}
});
</script>
<template>
	<footer class="w-full bg-gradient-to-r from-sky-700 to-sky-950 py-1 px-2 flex justify-end items-center">
		<p class="text-md text-right text-white mr-2">Last Updated {{lastUpdated}}</p>
		<CommonButton> 
			Refresh
		</CommonButton>
	</footer>
</template>