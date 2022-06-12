<script>
import { RouterLink } from 'vue-router';

export default {
	components: {
		RouterLink,
	},
	props: {
		to: {
			type: String,
			default: null,
			required: false,
		},
		tooltip: {
			type: String,
			default: '',
			required: false,
		},
	},
};
</script>

<template>
	<RouterLink v-if="to" v-slot="{ isActive }" :to="to">
		<li
			class="flex items-center justify-center relative py-4 hover:bg-zinc-700/50 group"
			:class="{ 'bg-zinc-700/50': isActive }"
		>
			<div
				class="icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center"
				:class="{
					'after:absolute after:top-0 after:left-0 after:w-1.5 after:h-full after:bg-white opacity-100':
						isActive,
				}"
			>
				<slot></slot>
			</div>
			<span
				v-if="tooltip"
				class="group-hover:opacity-100 group-hover:visible z-10 w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"
				>{{ tooltip }}</span
			>
		</li>
	</RouterLink>
	<li
		v-else
		class="flex items-center justify-center relative py-4 hover:bg-zinc-700 cursor-pointer group"
	>
		<div
			class="icon group-hover:opacity-100 text-white fill-white opacity-70 w-8 h-8 flex items-center justify-center"
		>
			<slot></slot>
		</div>
		<span
			v-if="tooltip"
			class="group-hover:opacity-100 group-hover:visible w-max absolute top-1/2 -translate-y-1/2 left-full ml-4 rounded-lg p-2 bg-white text-black font-semibold pointer-events-none opacity-0 invisible"
			>{{ tooltip }}</span
		>
	</li>
</template>
