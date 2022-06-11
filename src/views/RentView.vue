<script>
import {
	addDoc,
	collection,
	doc,
	getDoc,
	serverTimestamp,
} from '@firebase/firestore';
import { RouterLink } from 'vue-router';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import ButtonSecondary from '../components/ButtonSecondary.vue';
import CarImage from '../components/CarImage.vue';
import RentSummaryItem from '../components/RentSummaryItem.vue';
import { db } from '../firebase';
import { store } from '../store';
export default {
	components: {
		ButtonPrimary,
		ButtonSecondary,
		CarImage,
		RentSummaryItem,
		RouterLink,
	},
	data() {
		return {
			car: null,
			rent_start: this.getCurrentDate(),
			rent_end: this.getTomorrowDate(),
			rent_diff: 0,
			deposit: true,
			payment_type: 'card',
			total_price: 0,
		};
	},
	computed: {
		getRentTime() {
			let diff = this.getDateDiff(this.rent_start, this.rent_end);
			switch (diff) {
				case 0:
					return '0 dni';
				case 1:
					return '1 dzień';
				default:
					return `${diff} dni`;
			}
		},
	},
	watch: {
		rent_start(newDate) {
			if (newDate > this.rent_end) {
				this.rent_end = newDate;
			}
			this.calcTotalPrice();
		},
		rent_end(newDate, oldDate) {
			if (newDate < this.rent_start) {
				this.rent_end = oldDate;
			}
			this.calcTotalPrice();
		},
		deposit() {
			this.calcTotalPrice();
		},
	},
	created() {
		this.getCar().then(() => {
			this.calcTotalPrice();
		});
	},
	methods: {
		async getCar() {
			const docRef = doc(db, 'cars', this.$route.params.id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				this.car = docSnap.data();
			} else {
				this.$router.push('/cars');
			}
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
		getDateDiff(startDate, endDate) {
			const MS_PER_DAY = 1000 * 60 * 60 * 24;

			let date1 = new Date(startDate);
			let date2 = new Date(endDate);

			const utc1 = Date.UTC(
				date1.getFullYear(),
				date1.getMonth(),
				date1.getDate(),
				date1.getHours(),
			);
			const utc2 = Date.UTC(
				date2.getFullYear(),
				date2.getMonth(),
				date2.getDate(),
				date2.getHours(),
			);

			let diff = utc2 - utc1;
			let days = Math.floor(diff / MS_PER_DAY);
			if (utc1 + days * MS_PER_DAY < utc2) {
				days++;
			}

			return days;
		},
		calcTotalPrice() {
			let diff = this.getDateDiff(this.rent_start, this.rent_end);
			this.rent_diff = diff;

			this.total_price = this.deposit
				? this.car.price_deposit * diff
				: this.car.price_no_deposit * diff;
		},
		async rentCar() {
			if (!store.user) return this.$router.push('/login');

			await addDoc(collection(db, 'rents'), {
				id_car: this.car.id_car,
				id_user: store.user.uid,
				rent_start: new Date(this.rent_start),
				rent_end: new Date(this.rent_end),
				status: 'active',
				distance: 0,
				deposit: this.deposit,
				total_price: this.total_price,
				payment_type: this.payment_type,
				created_at: serverTimestamp(),
			}).then(() => {
				this.$router.push('/account');
			});
		},
	},
};
</script>

<template>
	<main
		v-if="car"
		class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<div
			class="flex flex-col items-center justify-center p-12 gap-6 relative z-0 text-center"
		>
			<span class="text-6xl sm:text-9xl lg:text-[10.5rem] font-bold">{{
				car.brand
			}}</span>
			<span
				class="text-6xl sm:text-9xl lg:text-[10.5rem] font-display stroked"
				>{{ car.model }}</span
			>
			<CarImage
				:car="car"
				class="absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-[1.25px] grayscale-[60%] -z-[1] pointer-events-none"
			/>
		</div>
		<div class="flex flex-col items-center justify-center">
			<div class="flex flex-col py-4 border-b border-b-zinc-400">
				<h2 class="text-2xl font-bold text-center py-4">Okres wynajmu</h2>
				<div
					class="flex flex-col gap-2 w-max mx-auto items-center justify-center"
				>
					<div
						class="flex flex-col sm:flex-row gap-2 justify-between items-center w-full"
					>
						<label for="rent_start" class="text-xl">Odbiór</label>
						<input
							id="rent_start"
							v-model="rent_start"
							type="datetime-local"
							name="rent_start"
							class="bg-zinc-800 px-4 py-2 rounded-md"
						/>
					</div>
					<div
						class="flex flex-col sm:flex-row gap-2 justify-between items-center w-full"
					>
						<label for="rent_end" class="text-xl">Zwrot</label>
						<input
							id="rent_end"
							v-model="rent_end"
							type="datetime-local"
							name="rent_end"
							class="bg-zinc-800 px-4 py-2 rounded-md"
						/>
					</div>
				</div>
				<h2 class="text-2xl font-bold text-center my-4">Kaucja</h2>
				<div class="accent-red-500">
					<div class="flex flex-row items-center gap-2">
						<input id="deposit" v-model="deposit" type="radio" :value="true" />
						<label for="deposit" class="text-lg">Z kaucją</label>
					</div>
					<div class="flex flex-row items-center gap-2">
						<input
							id="no_deposit"
							v-model="deposit"
							type="radio"
							:value="false"
						/>
						<label for="no_deposit" class="text-lg">Bez kaucji</label>
					</div>
				</div>
				<h2 class="text-2xl font-bold text-center my-4">Płatność</h2>
				<div class="accent-red-500">
					<div class="flex flex-row items-center gap-2">
						<input
							id="payment_card"
							v-model="payment_type"
							type="radio"
							value="card"
						/>
						<label for="payment_card" class="text-lg">Karta</label>
					</div>
					<div class="flex flex-row items-center gap-2">
						<input
							id="payment_money"
							v-model="payment_type"
							type="radio"
							value="money"
						/>
						<label for="payment_money" class="text-lg">Gotówka</label>
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<h2 class="text-2xl font-bold text-center my-4">Podsumowanie</h2>
				<ul class="flex flex-col items-center justify-center gap-2">
					<RentSummaryItem
						text="Odbiór"
						:value="new Date(rent_start).toLocaleString()"
					/>
					<RentSummaryItem
						text="Zwrot"
						:value="new Date(rent_end).toLocaleString()"
					/>
					<RentSummaryItem text="Czas trwania" :value="getRentTime" />
					<RentSummaryItem
						text="Płatność"
						:value="payment_type === 'card' ? 'Karta' : 'Gotówka'"
					/>
					<RentSummaryItem
						text="Kaucja"
						:value="`${deposit ? `Tak - ${car.deposit}` : 'Nie'}`"
					/>
					<li class="flex flex-col">
						<span class="font-semibold text-md xl:text-lg text-left w-full"
							>Łączny koszt wynajmu</span
						>
						<span
							class="py-1 text-4xl font-bold text-center border-b-4 border-b-red-500"
							>{{ total_price }} zł</span
						>
					</li>
				</ul>
			</div>
			<div class="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-screen-sm">
				<RouterLink :to="`/cars/${car.id_car}`" class="w-full">
					<ButtonSecondary width="full">Wróć</ButtonSecondary>
				</RouterLink>
				<ButtonPrimary width="full" @click="rentCar">Zarezerwuj</ButtonPrimary>
			</div>
		</div>
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
	padding: 0.5rem;
}

tr th:first-child {
	border-right: 1px solid rgb(239, 68, 68);
	text-align: center;
}

tbody tr:nth-child(odd) {
	background-color: rgb(39 39 42 / 0.5);
}
</style>
