<script>
import IconArrowLeft from './icons/IconArrowLeft.vue';
import IconArrowRight from './icons/IconArrowRight.vue';
import CarImage from './CarImage.vue';
export default {
	components: { IconArrowRight, IconArrowLeft, CarImage },
	props: {
		type: {
			type: String,
			default: 'pc',
			required: true,
		},
		cars: {
			type: Object,
			default: () => {},
			required: false,
		},
	},
	emits: ['previous', 'next'],
};
</script>
<template>
	<div
		v-if="type === 'pc'"
		class="hidden xl:flex flex-col w-full h-full col-start-7 col-end-11 row-start-3 row-end-[12]"
	>
		<div
			class="swiper__shadow swiper__progress relative w-full h-full after:absolute after:left-0 after:right-0 after:bottom-0 after:w-full after:h-1 after:bg-red-500 after:scale-0 after:origin-left after:transition-transform after:duration-[400ms]"
		>
			<div class="relative w-full h-full clip -z-10">
				<div class="fixed inset-0 overflow-hidden">
					<ul
						class="w-full h-full flex flex-row swiper transition-transform duration-[400ms]"
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
			</div>
		</div>
		<div class="flex justify-between mt-4">
			<button
				class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
				@click="$emit('previous')"
			>
				<IconArrowLeft class="w-12 h-12 m-2" />
			</button>
			<button
				class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
				@click="$emit('next')"
			>
				<IconArrowRight class="w-12 h-12 m-2" />
			</button>
		</div>
	</div>
	<div
		v-else-if="type === 'mobile'"
		class="flex xl:hidden my-4 justify-between"
	>
		<button
			class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
			@click="$emit('previous')"
		>
			<IconArrowLeft class="w-12 h-12 m-2" />
		</button>
		<button
			class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
			@click="$emit('next')"
		>
			<IconArrowRight class="w-12 h-12 m-2" />
		</button>
	</div>
</template>

<style scoped>
.clip {
	clip-path: inset(0);
}

.swiper {
	--index: 0;
	transform: translate3d(calc(-100% * var(--index)), 0, 0);
}
.swiper__shadow {
	box-shadow: #000000 0px 0px 70px -12px;
}

.swiper__progress {
	--index: 0;
	--length: 1;
}

.swiper__progress::after {
	box-shadow: hsla(0, 84%, 60%, 0.2) 0em 0em 2em 1em;
	transform: scaleX(calc(calc(100% / var(--length)) * var(--index)));
}
</style>
