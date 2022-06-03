<script>
import { RouterLink } from 'vue-router';

export default {
	components: {
		RouterLink,
	},
	props: {
		to: {
			type: String,
			default: '/',
			required: true,
		},
	},
};
</script>

<template>
	<li class="first:-ml-8 group">
		<RouterLink :to="to" class="p-8">
			<span
				class="text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
			>
				<slot></slot>
			</span>
		</RouterLink>
	</li>
</template>

<style></style>
