<script>
import { RouterLink } from 'vue-router';

export default {
	components: { RouterLink },
	props: {
		to: {
			type: String,
			default: '/',
			required: true,
		},
		width: {
			type: String,
			default: null,
			required: false,
		},
	},
};
</script>
<template>
	<RouterLink :to="to" :class="width === 'full' && 'w-full'">
		<button
			class="px-7 py-3 text-sm uppercase font-bold text-red-500 bg-transparent border-2 border-red-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
			:class="width === 'full' && 'w-full'"
		>
			<slot></slot>
		</button>
	</RouterLink>
</template>

<style>
.icon > svg {
	width: 100%;
	height: 100%;
}
</style>
