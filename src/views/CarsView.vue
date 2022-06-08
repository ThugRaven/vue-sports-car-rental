<script>
import CarItem from '../components/CarItem.vue';
export default {
	components: { CarItem },
};
</script>

<template>
	<main
		class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<ul class="flex flex-col items-center z-0">
			<CarItem car="{}" />
		</ul>
	</main>
</template>

<style scoped></style>
