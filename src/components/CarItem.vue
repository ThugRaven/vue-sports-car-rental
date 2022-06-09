<script>
import { RouterLink } from 'vue-router';
import ButtonSecondary from './ButtonSecondary.vue';
import CarStatItem from './CarStatItem.vue';
import IconDrive from './icons/IconDrive.vue';
import IconEngine from './icons/IconEngine.vue';
import IconSpeed from './icons/IconSpeed.vue';
import IconTimer from './icons/IconTimer.vue';
import IconTransmission from './icons/IconTransmission.vue';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase.js';
import CarImage from './CarImage.vue';
export default {
	components: {
		CarStatItem,
		IconEngine,
		IconTimer,
		IconSpeed,
		IconTransmission,
		IconDrive,
		RouterLink,
		ButtonSecondary,
		CarImage,
	},
	props: {
		car: {
			type: Object,
			default: () => {},
			required: true,
		},
	},
	methods: {
		async getCarImageUrl(model) {
			console.log(model);
			model = model.replace(/\s+/g, '-').toLowerCase();
			console.log(model);
			let modelPath = `${model}_thumb.jpg`;
			const imageRef = ref(storage, `images/${modelPath}`);
			console.log(imageRef);
			let path = 'kekw';
			getDownloadURL(imageRef).then((url) => {
				console.log(url);
				path = url;
			});
			return path;
		},
	},
};
</script>
<template>
	<li
		class="flex flex-col lg:flex-row bg-zinc-800 max-w-screen-sm lg:max-w-screen-2xl w-full item relative before:absolute before:inset-0 before:w-full before:h-full before:transition-transform before:-z-[1] before:hover:-translate-x-2 before:hover:translate-y-2 before:bg-red-500"
	>
		<CarImage
			:car="car"
			class="lg:w-80 h-80 xl:w-96 xl:h-96 lg:aspect-square object-cover"
		/>
		<div class="flex flex-col justify-evenly p-4 pl-8 w-full gap-4">
			<RouterLink :to="`/cars/${car.id}`" class="text-center lg:text-left">
				<span
					class="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-widest hover:text-red-500 transition-colors"
					>{{ car.brand }} {{ car.model }}</span
				>
			</RouterLink>
			<ul class="grid grid-cols-2 gap-8 md:grid-cols-5">
				<CarStatItem
					parameter="Silnik"
					:value="`${
						car.eng_displacement ? `${car.eng_displacement.toFixed(1)} ` : ''
					}${car.eng_info ? `${car.eng_info} ` : ''}| ${car.eng_power}KM | ${
						car.eng_torque
					}Nm`"
					><IconEngine
				/></CarStatItem>
				<CarStatItem parameter="0-100 km/h" :value="`${car.time_100}s`"
					><IconTimer
				/></CarStatItem>
				<CarStatItem parameter="Prędkość" :value="`${car.top_speed} km/h`"
					><IconSpeed
				/></CarStatItem>
				<CarStatItem
					parameter="Skrzynia"
					:value="`${
						car.transmission_type === 'Manual' ? 'Manualna' : 'Automatyczna'
					}`"
					><IconTransmission
				/></CarStatItem>
				<CarStatItem
					parameter="Napęd"
					:value="car.drive"
					:value-title="`${
						car.drive === 'AWD'
							? 'Na wszystkie koła'
							: car.drive === 'FWD'
							? 'Na przednie koła'
							: 'Na tylne koła'
					}`"
					><IconDrive
				/></CarStatItem>
			</ul>
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<ButtonSecondary :to="`/cars/${car.id}`">Zarezerwuj</ButtonSecondary>
				<span class="text-zinc-400 font-medium"
					>już od
					<span class="text-red-500 font-bold">{{ car.price_deposit }} zł</span>
					za dobę!</span
				>
			</div>
		</div>
	</li>
</template>

<style scoped>
.item {
	box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
}
</style>
