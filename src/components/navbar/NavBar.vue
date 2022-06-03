<script>
import NavItem from './NavItem.vue';

export default {
	components: {
		NavItem,
	},
};
</script>

<template>
	<header
		class="col-start-3 col-end-13 row-span-1 flex items-center justify-between bg- m-2 ml-0"
	>
		<nav class="">
			<ul class="flex flex-row">
				<NavItem to="/">Strona główna</NavItem>
				<NavItem to="/cars">Samochody</NavItem>
				<NavItem to="/contact">Kontakt</NavItem>
			</ul>
		</nav>
	</header>
</template>

<style></style>
