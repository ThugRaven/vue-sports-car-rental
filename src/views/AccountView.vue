<script>
import {
	collection,
	getDocs,
	orderBy,
	query,
	where,
} from '@firebase/firestore';
import { RouterLink } from 'vue-router';
import IconUserAvatar from '../components/icons/IconUserAvatar.vue';
import { db } from '../firebase';
import { store } from '../store';

export default {
	components: { IconUserAvatar, RouterLink },
	data() {
		return {
			rents: [],
			isLoading: true,
			rent_start: this.getCurrentDate(),
			rent_end: this.getTomorrowDate(),
			store,
		};
	},
	watch: {
		'store.user'() {
			if (!store.user) {
				return this.$router.push('/login');
			}
		},
	},
	created() {
		if (!store.user) {
			return this.$router.push('/login');
		}
		this.getUserRents();
	},
	methods: {
		async getUserRents() {
			const q = query(
				collection(db, 'rents'),
				where('id_user', '==', store.user.uid),
				orderBy('created_at', 'desc'),
			);

			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				let id = doc.id;
				this.rents.push({ id, ...doc.data() });
			});
			this.isLoading = false;
		},
		getCurrentDate() {
			let now = new Date();
			now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
			return now.toISOString().slice(0, 16);
		},
		getTomorrowDate() {
			let now = new Date();
			now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
			now.setDate(now.getDate() + 1);
			return now.toISOString().slice(0, 16);
		},
	},
};
</script>

<template>
	<main
		v-if="store.user"
		class="col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center justify-center overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<IconUserAvatar class="w-32 h-32 fill-white" />
		<h2 class="text-base sm:text-2xl font-bold text-center">
			{{ store.user.email }}
		</h2>
		<h2 class="mt-4 text-xl sm:text-3xl font-bold text-center">
			Moje wynajmy - {{ rents.length }}
		</h2>
		<div class="w-full">
			<div v-if="rents.length > 0" class="overflow-x-auto">
				<table
					class="table-layout mx-auto my-2 text-sm xl:text-base w-full text-center"
				>
					<thead class="border-b border-b-red-500">
						<tr>
							<th>Pojazd</th>
							<th>Początek wynajmu</th>
							<th>Koniec wynajmu</th>
							<th>Status</th>
							<th>Przejechany dystans</th>
							<th>Kaucja</th>
							<th>Koszt</th>
							<th>Płatność</th>
						</tr>
					</thead>
					<tbody class="leading-none">
						<tr v-for="rent in rents" :key="rent.id">
							<td>
								<RouterLink
									:to="`/cars/${rent.id_car}`"
									class="hover:text-red-500 transition-colors"
									>{{ rent.id_car }}</RouterLink
								>
							</td>
							<td>
								{{ new Date(rent.rent_start.seconds * 1000).toLocaleString() }}
							</td>
							<td>
								{{ new Date(rent.rent_end.seconds * 1000).toLocaleString() }}
							</td>
							<td
								:class="{
									'bg-green-600/10 text-green-300': rent.status === 'active',
									'bg-red-600/10 text-red-300': rent.status === 'completed',
								}"
							>
								{{ rent.status === 'active' ? 'Aktywny' : 'Zakończony' }}
							</td>
							<td>{{ `${rent.distance} km` }}</td>
							<td>{{ rent.deposit ? 'Tak' : 'Nie' }}</td>
							<td>{{ `${rent.total_price}&nbsp;zł` }}</td>
							<td>{{ rent.payment_type === 'card' ? 'Karta' : 'Gotówka' }}</td>
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
			<div v-else-if="rents.length === 0" class="my-4 text-xl text-center">
				Brak wypożyczonych pojazdów
			</div>
		</div>
	</main>
</template>

<style scoped>
@supports (-webkit-text-stroke: 4px white) {
	.stroked {
		color: transparent;
		-webkit-text-stroke: 2px white;
	}

	@media (min-width: 1024px) {
		.stroked {
			-webkit-text-stroke: 4px white;
		}
	}
}

td,
th {
	padding: 1rem;
}

tbody tr:nth-child(odd) {
	background-color: rgb(39 39 42 / 0.5);
}
</style>
