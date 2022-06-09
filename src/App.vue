<script>
import { onAuthStateChanged } from '@firebase/auth';
import { RouterView } from 'vue-router';
import NavBar from './components/navbar/NavBar.vue';
import SideBar from './components/sidebar/SideBar.vue';
import { auth } from './firebase';
import { store } from './store';

export default {
	components: {
		RouterView,
		SideBar,
		NavBar,
	},
	beforeMount() {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				store.user = user;
			} else {
				store.user = null;
			}
		});
	},
};
</script>

<template>
	<NavBar />
	<SideBar />
	<RouterView />
</template>

<style>
#app {
	display: grid;
	grid-template-columns: repeat(2, 96px) repeat(10, 1fr);
	grid-template-rows: repeat(12, 1fr);
	width: 100%;
	height: 100%;
}
</style>
