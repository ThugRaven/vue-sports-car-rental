<script>
import SideBarItem from './SideBarItem.vue';
import SideBarLogo from './SideBarLogo.vue';
import IconPerson from '../icons/IconPerson.vue';
import IconLogin from '../icons/IconLogin.vue';
import { store } from '../../store.js';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import IconLogout from '../icons/IconLogout.vue';
import IconDashboard from '../icons/IconDashboard.vue';
import IconCar from '../icons/IconCar.vue';
import IconCarRental from '../icons/IconCarRental.vue';
import IconSave from '../icons/IconSave.vue';

export default {
	components: {
		SideBarItem,
		SideBarLogo,
		IconPerson,
		IconLogin,
		IconLogout,
		IconDashboard,
		IconCar,
		IconCarRental,
		IconSave,
	},
	data() {
		return {
			store,
		};
	},
	methods: {
		signOutUser() {
			signOut(auth)
				.then(() => {})
				.catch(() => {});
		},
	},
};
</script>

<template>
	<aside class="col-span-1 row-span-full bg-zinc-800 hidden sm:block">
		<ul class="flex flex-col h-full">
			<SideBarLogo href="/" class="py-3" />
			<div class="mb-auto">
				<SideBarItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard"
					tooltip="Dashboard"
				>
					<IconDashboard />
				</SideBarItem>
				<SideBarItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard/cars"
					tooltip="Samochody"
				>
					<IconCar />
				</SideBarItem>
				<SideBarItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard/rents"
					tooltip="Wynajmy"
				>
					<IconCarRental />
				</SideBarItem>
				<SideBarItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard/users"
					tooltip="Użytkownicy"
				>
					<IconPerson />
				</SideBarItem>
				<SideBarItem
					v-if="store.user && store.user.role === 'admin'"
					to="/dashboard/mock"
					tooltip="Mock Data"
				>
					<IconSave />
				</SideBarItem>
			</div>
			<div class="mt-auto">
				<SideBarItem
					v-if="!store.user"
					to="/register"
					tooltip="Zarejestruj się"
				>
					<IconPerson />
				</SideBarItem>
				<SideBarItem v-else to="/account" tooltip="Moje konto">
					<IconPerson />
				</SideBarItem>
				<SideBarItem v-if="!store.user" to="/login" tooltip="Zaloguj się">
					<IconLogin />
				</SideBarItem>
				<SideBarItem v-else tooltip="Wyloguj się" @click="signOutUser">
					<IconLogout />
				</SideBarItem>
			</div>
		</ul>
	</aside>
</template>

<style></style>
