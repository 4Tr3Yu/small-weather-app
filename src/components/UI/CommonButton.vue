<script setup>
const emit = defineEmits(['click']);

const onClick = () => {
  emit('click');
};

</script>

 
<template>
	<button @click="onClick" class="px-2 text-sm rounded-md bg-white text-sky-800 border font-bold border-sky-800 hover:text-white hover:bg-sky-800 hover:border-white">
		 <slot/>
	</button>
</template>
