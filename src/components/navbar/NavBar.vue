<script>
import { store } from '../../store.js';
import IconEMail from '../icons/IconEMail.vue';
import IconMenu from '../icons/IconMenu.vue';
import IconPhone from '../icons/IconPhone.vue';
import NavItem from './NavItem.vue';
import { RouterLink } from 'vue-router';

export default {
	components: {
		NavItem,
		IconEMail,
		IconPhone,
		IconMenu,
		RouterLink,
	},
	data() {
		return {
			store,
		};
	},
};
</script>

<template>
	<header
		class="col-start-3 col-end-13 row-span-1 flex items-center justify-end md:justify-between ml-0"
	>
		<nav class="hidden md:block">
			<ul class="flex flex-row">
				<NavItem to="/">Strona główna</NavItem>
				<NavItem to="/cars">Samochody</NavItem>
				<NavItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard"
					>Dashboard</NavItem
				>
			</ul>
		</nav>
		<div
			class="hidden lg:flex flex-row items-center gap-2 xl:gap-4 fill-white text-zinc-400 font-semibold"
			:class="{ 'lg:hidden': $route.fullPath !== '/' }"
		>
			<span class="flex items-center gap-2"
				><IconEMail class="w-6 h-6" />car@rent.pl</span
			>
			<span class="h-10 w-px bg-zinc-400 mx-1"></span>
			<span class="flex items-center gap-2 mr-8"
				><IconPhone class="w-6 h-6" />123 456 789</span
			>

			<RouterLink to="/cars">
				<button
					class="btn hidden xl:block mr-8 py-4 px-10 bg-red-500 hover:bg-red-600 shadow-red-500 rounded-full text-white font-semibold tracking-wide transition hover:scale-105"
				>
					Wynajmij teraz
				</button>
			</RouterLink>
		</div>
		<IconMenu class="block md:hidden shrink-0 w-12 h-12 mx-8 fill-white" />
	</header>
</template>

<style scoped>
.btn {
	box-shadow: 0px 10px 60px 5px rgb(239, 68, 68, 0.3);
}
</style>
