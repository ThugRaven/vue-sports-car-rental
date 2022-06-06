<script>
import { RouterLink } from 'vue-router';

export default {
	components: { RouterLink },
	props: {
		type: {
			type: Object,
			default: () => {},
			required: true,
		},
		to: {
			type: String,
			default: '/',
			required: true,
		},
	},
};
</script>
<template>
	<button
		class="px-7 py-3 text-sm uppercase font-bold text-red-500 bg-transparent border-2 border-red-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
	>
		<RouterLink :to="to">
			<slot></slot>
		</RouterLink>
	</button>
</template>

<style>
.icon > svg {
	width: 100%;
	height: 100%;
}
</style>
