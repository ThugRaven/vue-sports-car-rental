<script></script>

<template>
	<main class="col-start-2 col-end-13 row-start-2 row-end-[13] p-4 text-white">
		<div>
			<span class="text-6xl">Wynajmij emocje</span>
			<div class="flex flex-row flex-wrap gap-4">
				<span class="text-[10rem] font-bold">Audi</span>
				<span class="text-[10rem] font-display stroked">R8</span>
			</div>
		</div>
	</main>
</template>

<style>
@supports (-webkit-text-stroke: 4px white) {
	.stroked {
		color: transparent;
		-webkit-text-stroke: 4px white;
	}
}
</style>
