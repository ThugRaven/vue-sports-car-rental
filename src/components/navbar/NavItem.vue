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
	},
};
</script>

<template>
	<li class="group">
		<RouterLink v-if="to" v-slot="{ isActive }" :to="to">
			<span
				class="text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
				:class="{ 'after:scale-x-100': isActive }"
			>
				<slot></slot>
			</span>
		</RouterLink>
		<span
			v-else
			class="text-white text-lg relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2.5px] after:bg-red-500 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
		>
			<slot></slot>
		</span>
	</li>
</template>

<style></style>
