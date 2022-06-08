<script>
import { RouterLink } from 'vue-router';
import ButtonSecondary from './ButtonSecondary.vue';
import CarStatItem from './CarStatItem.vue';
import IconDrive from './icons/IconDrive.vue';
import IconEngine from './icons/IconEngine.vue';
import IconSpeed from './icons/IconSpeed.vue';
import IconTimer from './icons/IconTimer.vue';
import IconTransmission from './icons/IconTransmission.vue';
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
	},
	props: {
		car: {
			type: Object,
			default: () => {},
			required: true,
		},
	},
};
</script>
<template>
	<li
		class="flex flex-col lg:flex-row bg-zinc-800 max-w-screen-sm lg:max-w-screen-2xl item relative before:absolute before:inset-0 before:w-full before:h-full before:transition-transform before:-z-[1] before:hover:-translate-x-2 before:hover:translate-y-2 before:bg-red-500"
	>
		<img
			src="../assets/r8_thumb.jpg"
			alt=""
			class="lg:w-80 h-80 xl:w-96 xl:h-96 lg:aspect-square object-cover"
		/>
		<div class="flex flex-col justify-evenly p-4 pl-8 w-full gap-4">
			<RouterLink to="/cars/1" class="text-center lg:text-left">
				<span
					class="text-4xl font-semibold tracking-widest hover:text-red-500 transition-colors"
					>Audi R8</span
				>
			</RouterLink>
			<ul class="grid grid-cols-2 gap-8 md:grid-cols-5">
				<CarStatItem parameter="Silnik" value="5.2 V10 | 602KM | 560Nm"
					><IconEngine
				/></CarStatItem>
				<CarStatItem parameter="0-100 km/h" value="3.2s"
					><IconTimer
				/></CarStatItem>
				<CarStatItem parameter="Prędkość" value="330 km/h"
					><IconSpeed
				/></CarStatItem>
				<CarStatItem parameter="Skrzynia" value="Automatyczna"
					><IconTransmission
				/></CarStatItem>
				<CarStatItem parameter="Napęd" value="AWD"><IconDrive /></CarStatItem>
			</ul>
			<div class="flex flex-col sm:flex-row items-center justify-between gap-4">
				<ButtonSecondary to="/cars/1">Zarezerwuj</ButtonSecondary>
				<span class="text-zinc-400 font-medium"
					>już od <span class="text-red-500 font-bold">1800 zł</span> za
					dobę!</span
				>
			</div>
		</div>
	</li>
</template>

<style>
.item {
	box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
}

.icon > svg {
	width: 100%;
	height: 100%;
}
</style>
