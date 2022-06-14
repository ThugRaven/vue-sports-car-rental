<script>
import {
	collection,
	endAt,
	getDocs,
	orderBy,
	query,
	startAt,
	where,
} from '@firebase/firestore';
import CarItem from '../components/CarItem.vue';
import { db } from '../firebase';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import ButtonSecondary from '../components/ButtonSecondary.vue';
export default {
	components: { CarItem, ButtonPrimary, ButtonSecondary },
	data() {
		return {
			cars: [],
			isLoading: true,
			model: '',
		};
	},
	created() {
		this.searchCars();
	},
	methods: {
		async getCars() {
			this.cars = [];
			this.isLoading = true;

			let cars = [];
			let q = query(
				collection(db, 'cars'),
				where('rentable', '==', true),
				orderBy('brand'),
			);
			if (this.model.length > 0) {
				q = query(
					collection(db, 'cars'),
					where('rentable', '==', true),
					orderBy('model'),
					startAt(this.model),
					endAt(this.model + '\uf8ff'),
				);
			}

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				let id = doc.id;
				cars.push({ id, ...doc.data() });
			});

			this.isLoading = false;
			return cars;
		},
		async searchCars() {
			this.getCars().then((response) => {
				this.cars = response;
			});
		},
		clear() {
			this.model = '';
			this.searchCars();
		},
	},
};
</script>

<template>
	<main
		class="col-start-1 sm:col-start-2 xl:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center overflow-y-auto xl:pl-0 p-4 text-white bg-zinc-700"
	>
		<h1 class="text-4xl lg:text-5xl font-bold text-center py-4">Samochody</h1>

		<div
			class="flex flex-col items-center max-w-screen-sm lg:max-w-screen-2xl w-full"
		>
			<div class="flex flex-col self-center lg:self-end mb-8 mx-0 lg:mx-6">
				<form @submit.prevent="searchCars">
					<div class="flex flex-col">
						<label for="model">Model</label>
						<input
							id="model"
							v-model="model"
							type="text"
							name="model"
							class="mt-1 mb-2 px-4 py-2 rounded-md bg-zinc-800 outline-none border border-zinc-600 focus:border-red-500 focus:ring focus:ring-red-500/50 text-lg"
						/>
					</div>
					<div class="flex flex-col sm:flex-row gap-2">
						<input
							type="submit"
							value="Szukaj"
							class="px-7 py-3 text-sm uppercase font-bold text-white bg-red-500 border-2 border-red-500 hover:bg-zinc-900 hover:border-zinc-900 transition-colors cursor-pointer"
						/>
						<input
							type="reset"
							value="Wyczyść"
							class="px-7 py-3 text-sm uppercase font-bold text-red-500 bg-transparent border-2 border-red-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors cursor-pointer"
							@click="clear"
						/>
					</div>
				</form>
			</div>
			<ul
				v-if="cars.length > 0"
				class="flex flex-col items-center gap-y-16 z-0 mx-0 lg:mx-6"
			>
				<CarItem v-for="car in cars" :key="car.id" :car="car" />
			</ul>
			<div
				v-else-if="isLoading"
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
			<div v-else-if="cars.length === 0" class="my-4 text-xl text-center">
				Brak wypożyczonych pojazdów
			</div>
		</div>
	</main>
</template>

<style scoped></style>
