<script>
import CarStatsItem from '../components/CarStatsItem.vue';
import IconEngine from '../components/icons/IconEngine.vue';
import IconHP from '../components/icons/IconHP.vue';
import IconSpeed from '../components/icons/IconSpeed.vue';
import CarSwiper from '../components/CarSwiper.vue';
export default {
	components: { CarStatsItem, IconEngine, IconHP, IconSpeed, CarSwiper },
};
</script>

<template>
	<main
		class="col-start-3 col-end-13 row-start-3 lg:row-start-5 row-end-[13] flex flex-col justify-start items-start pl-0 p-4 text-white"
	>
		<Teleport to="body">
			<div
				class="absolute inset-0 -z-20 bg-cover bg-no-repeat bg-center bg-fixed bg-gradient-to-b from-black xl:opacity-40 xl:blur-[1.25px] xl:grayscale-[60%] car__bg xl:after:hidden"
			></div>
		</Teleport>
		<div>
			<span class="text-5xl ml-4 leading-tight">Wynajmij emocje</span>
			<div class="flex flex-row flex-wrap gap-4 leading-none">
				<span class="text-[10.5rem] font-bold">Audi</span>
				<span class="text-[10.5rem] font-display stroked">R8</span>
			</div>
		</div>
		<ul class="flex gap-16">
			<CarStatsItem parameter="Silnik" value="V10"><IconEngine /></CarStatsItem>
			<CarStatsItem parameter="KM" title="Konie mechaniczne" value="602"
				><IconHP
			/></CarStatsItem>
			<CarStatsItem parameter="Prędkość" value="330"
				><IconSpeed
			/></CarStatsItem>
		</ul>
		<span class="text-zinc-400 font-medium my-6"
			>już od <span class="text-red-500 font-bold">1800 zł</span> za dobę!</span
		>
		<button
			class="bg-zinc-800/75 hover:bg-zinc-900/75 py-4 px-12 rounded-full font-semibold tracking-wide transition-colors"
		>
			Zarezerwuj
		</button>
	</main>
	<CarSwiper />
</template>

<style scoped>
@supports (-webkit-text-stroke: 4px white) {
	.stroked {
		color: transparent;
		-webkit-text-stroke: 4px white;
	}
}

.car__bg {
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
