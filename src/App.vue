<script setup>
import { RouterView } from 'vue-router';
import SideBar from './components/sidebar/SideBar.vue';
import NavBar from './components/navbar/NavBar.vue';
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
