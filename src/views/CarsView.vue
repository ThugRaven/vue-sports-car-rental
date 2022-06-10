<script>
import {
	collection,
	getDocs,
	orderBy,
	query,
	where,
} from '@firebase/firestore';
import CarItem from '../components/CarItem.vue';
import { db } from '../firebase';
export default {
	components: { CarItem },
	data() {
		return {
			cars: [],
		};
	},
	created() {
		this.getCars();
	},
	methods: {
		async getCars() {
			const q = query(
				collection(db, 'cars'),
				where('rentable', '==', true),
				orderBy('brand'),
			);

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				let id = doc.id;
				this.cars.push({ id, ...doc.data() });
			});
		},
	},
};
</script>

<template>
	<main
		v-if="cars.length > 0"
		class="col-start-2 xl:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto xl:pl-0 p-4 text-white bg-zinc-700"
	>
		<ul class="flex flex-col items-center z-0 gap-y-16">
			<CarItem v-for="car in cars" :key="car.id" :car="car" />
		</ul>
	</main>
	<div
		v-else
		class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center bg-zinc-700"
	>
		<svg
			class="animate-spin h-24 w-24 text-white"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				class="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				stroke-width="4"
			></circle>
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	</div>
</template>

<style scoped></style>
