<script>
import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	updateDoc,
} from '@firebase/firestore';
import { db } from '../firebase';
import { store } from '../store';
export default {
	components: {},
	data() {
		return {
			cars: [],
			isLoading: true,
		};
	},
	created() {
		if (!store.user) {
			return this.$router.push('/login');
		}
		this.searchCars();
	},
	methods: {
		async getCars() {
			this.cars = [];
			this.isLoading = true;

			let cars = [];
			let q = query(collection(db, 'cars'), orderBy('id_car'));

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
		async toggleRentable(id, rentable) {
			let updatedCar = this.cars.find((car) => car.id_car === id);
			updatedCar.rentable = !rentable;
			await updateDoc(doc(db, 'cars', id.toString()), {
				rentable: !rentable,
			}).catch(() => {
				updatedCar.rentable = rentable;
			});
		},
	},
};
</script>

<template>
	<div class="flex flex-col items-center justify-center w-full h-full">
		<h2 class="text-2xl font-bold text-center">
			Dashboard - Samochody - {{ cars.length }}
		</h2>
		<div class="w-full h-full">
			<div v-if="cars.length > 0" class="overflow-x-auto">
				<table
					class="table-layout mx-auto my-2 text-sm xl:text-base w-full text-center"
				>
					<thead class="border-b border-b-red-500">
						<tr>
							<th>ID Samochodu</th>
							<th>Marka</th>
							<th>Model</th>
							<th>Rejestracja</th>
							<th>Przebieg</th>
							<th>Wypożyczalny</th>
							<th>Wypożyczalność</th>
						</tr>
					</thead>
					<tbody class="leading-none">
						<tr v-for="car in cars" :key="car.id_car">
							<td>
								<RouterLink
									:to="`/cars/${car.id_car}`"
									class="hover:text-red-500 transition-colors"
									>{{ car.id_car }}</RouterLink
								>
							</td>
							<td>
								{{ car.brand }}
							</td>
							<td>
								{{ car.model }}
							</td>
							<td>{{ car.license_plate }}</td>
							<td>{{ `${car.mileage} km` }}</td>
							<td
								:class="{
									'bg-green-600/10 text-green-300': car.rentable,
									'bg-red-600/10 text-red-300': !car.rentable,
								}"
							>
								{{ car.rentable ? 'Tak' : 'Nie' }}
							</td>
							<td>
								<button
									class="hover:text-red-500 transition-colors"
									@click="toggleRentable(car.id_car, car.rentable)"
								>
									Zmień
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div
				v-else-if="isLoading"
				class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col justify-center items-center p-8 bg-zinc-700"
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
				Brak pojazdów
			</div>
		</div>
	</div>
</template>

<style scoped>
td,
th {
	padding: 1rem;
}

tbody tr:nth-child(odd) {
	background-color: rgb(39 39 42 / 0.5);
}
</style>
