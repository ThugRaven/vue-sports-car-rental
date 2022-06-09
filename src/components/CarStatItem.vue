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
			default: null,
			required: false,
		},
		value: {
			type: String,
			default: '',
			required: true,
		},
		valueTitle: {
			type: String,
			default: null,
			required: false,
		},
	},
};
</script>
<template>
	<li class="flex flex-col items-center justify-center w-full">
		<div
			class="icon fill-zinc-400 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center mb-2"
			:title="title ? title : parameter"
		>
			<slot></slot>
		</div>
		<span class="text-zinc-400 font-bold text-lg xl:text-xl text-center">{{
			parameter
		}}</span>
		<span
			class="text-white font-medium text-sm xl:text-base text-center line-clamp-3"
			:title="valueTitle"
			>{{ value }}</span
		>
	</li>
</template>

<style>
.icon > svg {
	width: 100%;
	height: 100%;
}
</style>
