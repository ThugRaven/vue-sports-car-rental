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
				// console.log(doc.data());
				this.cars.push({ id, ...doc.data() });
			});
		},
	},
};
</script>

<template>
	<main
		class="col-start-2 xl:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto xl:pl-0 p-4 text-white bg-zinc-700"
	>
		<ul class="flex flex-col items-center z-0 gap-y-16">
			<CarItem v-for="car in cars" :key="car.id" :car="car" />
		</ul>
	</main>
</template>

<style scoped></style>
