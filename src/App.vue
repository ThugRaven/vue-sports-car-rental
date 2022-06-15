<script>
import { onAuthStateChanged } from '@firebase/auth';
import { doc, getDoc } from '@firebase/firestore';
import { RouterView } from 'vue-router';
import NavBar from './components/navbar/NavBar.vue';
import SideBar from './components/sidebar/SideBar.vue';
import { auth, db } from './firebase';
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
				this.getRole(user);
			} else {
				store.user = null;
			}
		});
	},
	methods: {
		async getRole(user) {
			if (!user) return;

			const docRef = doc(db, 'users', user.uid);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				store.user = Object.assign(store.user, docSnap.data());
			} else {
				store.user.role = null;
			}
		},
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
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, 1fr);
	width: 100%;
	height: 100%;
}

@media (min-width: 640px) {
	#app {
		grid-template-columns: repeat(2, 96px) repeat(10, 1fr);
	}
}
</style>
