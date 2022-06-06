<script>
export default {
	components: {},
	props: {
		parameter: {
			type: String,
			default: '',
			required: true,
		},
		title: {
			type: String,
			default: '',
			required: false,
		},
		value: {
			type: String,
			default: '',
			required: true,
		},
	},
};
</script>
<template>
	<li class="flex flex-col">
		<div
			class="icon fill-zinc-400 w-10 h-10 flex items-center justify-center mb-2"
			:title="title ? title : parameter"
		>
			<slot></slot>
		</div>
		<span class="text-zinc-400 font-medium text-lg">{{ parameter }}</span>
		<span class="text-white font-bold text-5xl">{{ value }}</span>
	</li>
</template>

<style>
.icon > svg {
	width: 100%;
	height: 100%;
}
</style>
