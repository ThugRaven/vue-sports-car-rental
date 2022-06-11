<script>
export default {
	components: {},
	props: {
		width: {
			type: String,
			default: null,
			required: false,
		},
	},
};
</script>
<template>
	<button
		class="px-7 py-3 text-sm uppercase font-bold text-red-500 bg-transparent border-2 border-red-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
		:class="width === 'full' && 'w-full'"
	>
		<slot></slot>
	</button>
</template>
