<script>
export default {
	components: {},
	props: {
		text: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>
<template>
	<li
		class="flex flex-col items-center justify-center m-4 text-zinc-400 fill-zinc-400 hover:text-white hover:fill-white transition-colors"
	>
		<div
			class="icon w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center"
			:title="text"
		>
			<slot></slot>
		</div>
		<span class="font-bold text-base lg:text-xl">{{ text }}</span>
	</li>
</template>
