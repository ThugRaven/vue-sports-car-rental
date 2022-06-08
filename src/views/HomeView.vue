<script>
import CarMainStatsItem from '../components/CarMainStatsItem.vue';
import IconEngine from '../components/icons/IconEngine.vue';
import IconHP from '../components/icons/IconHP.vue';
import IconSpeed from '../components/icons/IconSpeed.vue';
import CarSwiper from '../components/CarSwiper.vue';
export default {
	components: { CarMainStatsItem, IconEngine, IconHP, IconSpeed, CarSwiper },
};
</script>

<template>
	<main
		class="col-start-2 lg:col-start-3 col-end-13 row-start-3 lg:row-start-5 row-end-[13] flex flex-col justify-start items-center sm:items-start lg:pl-0 p-8 lg:p-4 text-white"
	>
		<Teleport to="body">
			<div
				class="absolute inset-0 bg-black -z-20 before:absolute before:inset-0 before:bg-cover before:bg-no-repeat before:bg-center before:bg-fixed before:xl:opacity-40 before:xl:blur-[1.25px] before:xl:grayscale-[60%] car__bg xl:after:hidden"
			></div>
		</Teleport>
		<div class="flex flex-col items-center sm:items-start">
			<span class="text-3xl lg:text-5xl ml-4 lg:leading-tight text-center"
				>Wynajmij emocje</span
			>
			<div
				class="flex flex-row flex-wrap gap-4 justify-center sm:justify-start"
			>
				<span
					class="text-8xl sm:text-9xl lg:text-[10.5rem] lg:leading-none font-bold"
					>Audi</span
				>
				<span
					class="text-8xl sm:text-9xl lg:text-[10.5rem] lg:leading-none font-display stroked"
					>R8</span
				>
			</div>
		</div>
		<ul class="flex gap-16">
			<CarMainStatsItem parameter="Silnik" value="V10"
				><IconEngine
			/></CarMainStatsItem>
			<CarMainStatsItem parameter="KM" title="Konie mechaniczne" value="602"
				><IconHP
			/></CarMainStatsItem>
			<CarMainStatsItem parameter="Prędkość" value="330"
				><IconSpeed
			/></CarMainStatsItem>
		</ul>
		<span class="text-zinc-400 font-medium my-6"
			>już od <span class="text-red-500 font-bold">1800 zł</span> za dobę!</span
		>
		<div class="flex flex-col">
			<button
				class="bg-zinc-800/75 hover:bg-zinc-700/75 py-4 px-12 rounded-full font-semibold tracking-wide transition-colors"
			>
				Zarezerwuj
			</button>
			<CarSwiper type="mobile" />
		</div>
	</main>
	<CarSwiper type="pc" />
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

.car__bg::before {
	background-image: url('../assets/r8_highres.jpg');
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
