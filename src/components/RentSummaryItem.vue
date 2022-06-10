<script>
export default {
	components: {},
	props: {
		text: {
			type: String,
			default: '',
			required: true,
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
	<li class="flex flex-col items-center justify-center text-white w-full">
		<span class="font-semibold text-md xl:text-lg text-left w-full">{{
			text
		}}</span>
		<span class="text-md xl:text-lg text-center">{{ value }}</span>
	</li>
</template>
