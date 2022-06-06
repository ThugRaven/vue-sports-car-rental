<script>
import IconArrowRight from './icons/IconArrowRight.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
export default {
	components: { IconArrowRight, IconArrowLeft },
	props: {
		type: {
			type: String,
			default: 'pc',
			required: true,
		},
	},
};
</script>
<template>
	<!-- shadow-xl shadow-black -->
	<div
		v-if="type === 'pc'"
		class="hidden xl:flex flex-col w-full h-full col-start-7 col-end-11 row-start-3 row-end-[12]"
	>
		<div
			class="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed -z-10 car__bg"
		></div>
		<div class="flex justify-between mt-4">
			<button
				class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
			>
				<IconArrowLeft class="w-12 h-12 m-2" />
			</button>
			<button
				class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
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
		>
			<IconArrowLeft class="w-12 h-12 m-2" />
		</button>
		<button
			class="bg-zinc-800/75 hover:bg-zinc-700 fill-white rounded-full transition-colors"
		>
			<IconArrowRight class="w-12 h-12 m-2" />
		</button>
	</div>
</template>

<style scoped>
.car__bg {
	background-image: url('../assets/r8_highres.jpg');
	box-shadow: #000000 0px 0px 70px -12px;
}
</style>
