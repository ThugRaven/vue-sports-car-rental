<script>
import {
	collection,
	getDocs,
	orderBy,
	query,
	where,
} from '@firebase/firestore';
import { RouterLink } from 'vue-router';
import CarImage from '../components/CarImage.vue';
import CarMainStatsItem from '../components/CarMainStatsItem.vue';
import CarSwiper from '../components/CarSwiper.vue';
import IconEngine from '../components/icons/IconEngine.vue';
import IconHP from '../components/icons/IconHP.vue';
import IconSpeed from '../components/icons/IconSpeed.vue';
import { db } from '../firebase';
export default {
	components: {
		CarMainStatsItem,
		IconEngine,
		IconHP,
		IconSpeed,
		CarSwiper,
		RouterLink,
		CarImage,
	},
	data() {
		return {
			index: 0,
			cars: [],
			isLoading: true,
		};
	},
	computed: {
		getCar() {
			return this.cars[this.index];
		},
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
				where('gallery', '>', 0),
				orderBy('gallery'),
			);

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
		previousCar() {
			if (this.index - 1 < 0) {
				this.index = this.cars.length - 1;
			} else {
				this.index--;
			}
			this.setIndex();
		},
		nextCar() {
			if (this.index + 1 > this.cars.length - 1) {
				this.index = 0;
			} else {
				this.index++;
			}
			this.setIndex();
		},
		setIndex() {
			let swipers = document.querySelectorAll('.swiper');
			let progress = document.querySelector('.swiper__progress');
			swipers.forEach((swiper) => {
				swiper.style.setProperty('--index', this.index);
			});
			progress.style.setProperty('--index', this.index);
			progress.style.setProperty('--length', this.cars.length - 1);
		},
	},
};
</script>

<template>
	<main
		v-if="cars.length > 0"
		class="col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 xl:col-end-9 row-start-3 lg:row-start-3 row-end-[12] flex flex-col justify-center items-center sm:items-start lg:pl-0 p-8 lg:p-4 text-white"
	>
		<Teleport to="body">
			<div
				class="absolute inset-0 bg-black -z-20 car__bg xl:after:hidden overflow-hidden"
			>
				<ul
					class="w-full h-full flex flex-row swiper transition-transform duration-[400ms] xl:opacity-40 xl:blur-[1.25px] xl:grayscale-[60%] pointer-events-none"
				>
					<li
						v-for="car in cars"
						:key="car.id_car"
						class="relative w-screen h-full flex-shrink-0"
					>
						<CarImage
							:car="car"
							res="highres"
							class="absolute inset-0 w-full h-full object-cover object-center"
						/>
					</li>
				</ul>
			</div>
		</Teleport>
		<div class="flex flex-col items-center sm:items-start">
			<span class="text-3xl lg:text-5xl ml-4 lg:leading-tight text-center"
				>Wynajmij emocje</span
			>
			<div class="flex flex-wrap gap-x-4 justify-center sm:justify-start z-[1]">
				<span
					class="text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] lg:leading-none font-bold"
					>{{ getCar.brand }}</span
				>
				<span
					class="text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] lg:leading-none text-center sm:text-left font-display stroked"
					>{{ getCar.model }}</span
				>
			</div>
		</div>
		<ul
			class="flex flex-wrap items-center justify-center my-2 sm:my-4 gap-8 sm:gap-16"
		>
			<CarMainStatsItem
				v-if="getCar.eng_info && getCar.eng_info.length < 5"
				parameter="Silnik"
				:value="getCar.eng_info"
				><IconEngine
			/></CarMainStatsItem>
			<CarMainStatsItem
				v-else
				parameter="Nm"
				:value="getCar.eng_torque.toString()"
				><IconEngine
			/></CarMainStatsItem>
			<CarMainStatsItem
				parameter="KM"
				title="Konie mechaniczne"
				:value="getCar.eng_power.toString()"
				><IconHP
			/></CarMainStatsItem>
			<CarMainStatsItem
				parameter="Prędkość"
				:value="getCar.top_speed.toString()"
				><IconSpeed
			/></CarMainStatsItem>
		</ul>
		<span class="text-zinc-400 font-medium text-center my-2 sm:my-6"
			>już od
			<span class="text-red-500 font-bold">{{ getCar.price_deposit }} zł</span>
			za dobę!</span
		>
		<div class="flex flex-col">
			<RouterLink :to="`/cars/${getCar.id_car}`">
				<button
					class="bg-zinc-800/75 hover:bg-zinc-700/75 py-4 px-12 rounded-full font-semibold tracking-wide transition-colors"
				>
					Zarezerwuj
				</button>
			</RouterLink>
			<CarSwiper type="mobile" @previous="previousCar" @next="nextCar" />
		</div>
	</main>
	<CarSwiper type="pc" :cars="cars" @previous="previousCar" @next="nextCar" />
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

.swiper {
	--index: 0;
	transform: translate3d(calc(-100% * var(--index)), 0, 0);
}

.car__bg::after {
	content: '';
	position: absolute;
	inset: 0;
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.95) 0%,
			rgba(0, 0, 0, 0) 100%
		),
		linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 40%);
}
</style>
