<script>
import { RouterLink, RouterView } from 'vue-router';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import DashboardItem from '../components/DashboardItem.vue';
import IconCar from '../components/icons/IconCar.vue';
import IconCarRental from '../components/icons/IconCarRental.vue';
import IconDashboard from '../components/icons/IconDashboard.vue';
import IconPerson from '../components/icons/IconPerson.vue';
import IconSave from '../components/icons/IconSave.vue';
import { store } from '../store';
export default {
	components: {
		RouterLink,
		ButtonPrimary,
		DashboardItem,
		IconDashboard,
		IconCar,
		IconPerson,
		IconSave,
		IconCarRental,
		RouterView,
	},
	data() {
		return { store };
	},
	watch: {
		'store.user'() {
			if (!store.user) {
				return this.$router.push('/login');
			}
		},
	},
	created() {
		if (!store.user || (store.user && store.user.role !== 'admin')) {
			return this.$router.push('/login');
		}
	},
};
</script>

<template>
	<main
		class="col-start-1 sm:col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center justify-center overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<h2
			v-if="$route.fullPath === '/dashboard'"
			class="text-2xl font-bold text-center"
		>
			Dashboard
		</h2>
		<ul
			v-if="$route.fullPath === '/dashboard'"
			class="flex flex-wrap items-center justify-center"
		>
			<RouterLink to="/dashboard">
				<DashboardItem text="Dashboard"><IconDashboard /></DashboardItem>
			</RouterLink>
			<RouterLink to="/dashboard/cars">
				<DashboardItem text="Samochody"><IconCar /></DashboardItem>
			</RouterLink>
			<RouterLink to="/dashboard/rents">
				<DashboardItem text="Wynajmy"><IconCarRental /></DashboardItem>
			</RouterLink>
			<RouterLink to="/dashboard/users">
				<DashboardItem text="Użytkownicy"><IconPerson /></DashboardItem>
			</RouterLink>
			<RouterLink to="/dashboard/mock">
				<DashboardItem text="Mock Data"><IconSave /></DashboardItem>
			</RouterLink>
		</ul>
		<RouterView />
	</main>
</template>

<style scoped></style>
