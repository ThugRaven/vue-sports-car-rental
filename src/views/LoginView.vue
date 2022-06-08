<script>
import { RouterLink } from 'vue-router';
import ButtonPrimary from '../components/ButtonPrimary.vue';
export default {
	components: { RouterLink, ButtonPrimary },
};
</script>

<template>
	<main
		class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col items-center justify-center overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<div class="flex flex-col w-full max-w-md">
			<h1 class="my-6 text-4xl font-semibold text-center md:text-left">
				Zaloguj się
			</h1>
			<label for="login">Login</label>
			<input
				id="login"
				type="text"
				name="login"
				class="mt-1 mb-2 px-4 py-2 rounded-md bg-zinc-800 outline-none border border-zinc-600 focus:border-red-500 focus:ring focus:ring-red-500/50 text-lg"
			/>
			<label for="password">Hasło</label>
			<input
				id="password"
				type="password"
				name="password"
				class="mt-1 mb-2 px-4 py-2 rounded-md bg-zinc-800 outline-none border border-zinc-600 focus:border-red-500 focus:ring focus:ring-red-500/50 text-lg"
			/>
			<ButtonPrimary to="/" class="my-2" width="full">Zaloguj</ButtonPrimary>
			<p>
				Nie masz jeszcze konta?
				<RouterLink to="/register" class="text-red-500 font-bold"
					>Dołącz do nas!</RouterLink
				>
			</p>
		</div>
	</main>
</template>

<style scoped></style>
