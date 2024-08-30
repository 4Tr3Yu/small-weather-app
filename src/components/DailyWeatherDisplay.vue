<script setup>
	const props = defineProps({
		city: {
			type: String,
			required: true
		}
	});
</script>
<template>
	<div class="bg-white p-6 rounded-lg shadow-md mb-4">
		<h2 class="text-xl font-semibold mb-4">Daily Weather in {{ city }}</h2>
		<p>Add data</p>
	</div>
</template>