<script>
import SideBarItem from './SideBarItem.vue';
import SideBarLogo from './SideBarLogo.vue';
import IconPerson from '../icons/IconPerson.vue';
import IconLogin from '../icons/IconLogin.vue';
import { store } from '../../store.js';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import IconLogout from '../icons/IconLogout.vue';

export default {
	components: {
		SideBarItem,
		SideBarLogo,
		IconPerson,
		IconLogin,
		IconLogout,
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
	<aside class="col-span-1 row-span-full bg-zinc-800">
		<ul class="flex flex-col h-full">
			<SideBarLogo to="/" class="py-3" />
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
