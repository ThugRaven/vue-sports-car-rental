<script>
import SideBarItem from './SideBarItem.vue';
import SideBarLogo from './SideBarLogo.vue';
import IconPerson from '../icons/IconPerson.vue';
import IconLogin from '../icons/IconLogin.vue';

export default {
	components: {
		SideBarItem,
		SideBarLogo,
		IconPerson,
		IconLogin,
	},
};
</script>

<template>
	<aside class="col-span-1 row-span-full bg-zinc-800">
		<ul class="flex flex-col h-full">
			<SideBarLogo to="/" class="py-6" />
			<div class="mt-auto">
				<SideBarItem to="/register" tooltip="Zarejestruj się">
					<IconPerson />
				</SideBarItem>
				<SideBarItem to="/login" tooltip="Zaloguj się">
					<IconLogin />
				</SideBarItem>
			</div>
		</ul>
	</aside>
</template>

<style></style>
