<script>
import CarStatItem from '../components/CarStatItem.vue';
import IconEngine from '../components/icons/IconEngine.vue';
import IconTimer from '../components/icons/IconTimer.vue';
import IconDrive from '../components/icons/IconDrive.vue';
import IconSpeed from '../components/icons/IconSpeed.vue';
import IconTransmission from '../components/icons/IconTransmission.vue';
import IconFuel from '../components/icons/IconFuel.vue';
import IconFuelCapacity from '../components/icons/IconFuelCapacity.vue';
import IconDoor from '../components/icons/IconDoor.vue';
import IconSeat from '../components/icons/IconSeat.vue';
import IconWeight from '../components/icons/IconWeight.vue';
import ButtonPrimary from '../components/ButtonPrimary.vue';
import ButtonSecondary from '../components/ButtonSecondary.vue';
export default {
	components: {
		CarStatItem,
		IconEngine,
		IconTimer,
		IconDrive,
		IconSpeed,
		IconTransmission,
		IconFuel,
		IconFuelCapacity,
		IconDoor,
		IconSeat,
		IconWeight,
		ButtonPrimary,
		ButtonSecondary,
	},
};
</script>

<template>
	<main
		class="col-start-2 lg:col-start-3 col-end-13 row-start-2 row-end-[13] flex flex-col overflow-y-auto lg:pl-0 p-4 text-white bg-zinc-700"
	>
		<div
			class="flex flex-col items-center justify-center p-12 gap-6 relative z-0"
		>
			<span class="text-9xl lg:text-[10.5rem] font-bold">Audi</span>
			<span class="text-9xl lg:text-[10.5rem] font-display stroked">R8</span>
			<img
				src="../assets/r8_thumb.jpg"
				alt=""
				class="absolute inset-0 w-full h-full object-cover object-center opacity-40 blur-[1.25px] grayscale-[60%] -z-[1]"
			/>
		</div>
		<div>
			<ul class="grid grid-cols-3 md:grid-cols-5 gap-4 my-4">
				<CarStatItem parameter="Silnik" value="5.2 V10 | 602KM | 560Nm"
					><IconEngine
				/></CarStatItem>
				<CarStatItem parameter="0-100 km/h" value="3.2s"
					><IconTimer
				/></CarStatItem>
				<CarStatItem parameter="Prędkość" value="330 km/h"
					><IconSpeed
				/></CarStatItem>
				<CarStatItem parameter="Skrzynia" value="Automatyczna"
					><IconTransmission
				/></CarStatItem>
				<CarStatItem
					parameter="Napęd"
					value="AWD"
					value-title="Na wszystkie koła"
					><IconDrive
				/></CarStatItem>
				<CarStatItem parameter="Paliwo" value="Benzyna"
					><IconFuel
				/></CarStatItem>
				<CarStatItem parameter="Pojemność paliwa" value="73l"
					><IconFuelCapacity
				/></CarStatItem>
				<CarStatItem parameter="Drzwi" value="2"><IconDoor /></CarStatItem>
				<CarStatItem parameter="Miejsca" value="2"><IconSeat /></CarStatItem>
				<CarStatItem parameter="Waga" value="1630 kg"
					><IconWeight
				/></CarStatItem>
			</ul>
			<h2 class="text-2xl font-bold text-center mt-12">Cennik</h2>
			<div class="overflow-x-auto">
				<table
					class="table-layout mx-auto my-2 text-sm xl:text-lg w-full max-w-screen-lg"
				>
					<thead class="border-b border-b-red-500">
						<tr>
							<th></th>
							<th>Dzień</th>
							<th>Weekend</th>
							<th>Tydzień</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Cena z kaucją</th>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Cena bez kaucji</th>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Limit kilometrów</th>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Dodatkowy km</th>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<th>Kaucja</th>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>

			<h2 class="text-2xl font-bold text-center my-4">Rezerwacja</h2>
			<div
				class="flex flex-col gap-2 w-max mx-auto items-center justify-center"
			>
				<div
					class="flex flex-col sm:flex-row gap-2 justify-between items-center w-full"
				>
					<label for="rent_start" class="text-xl">Odbiór</label>
					<input
						id="rent_start"
						type="datetime-local"
						name="rent_start"
						class="bg-zinc-800 px-4 py-2 rounded-md"
					/>
				</div>
				<div
					class="flex flex-col sm:flex-row gap-2 justify-between items-center w-full"
				>
					<label for="rent_end" class="text-xl">Zwrot</label>
					<input
						id="rent_end"
						type="datetime-local"
						name="rent_end"
						class="bg-zinc-800 px-4 py-2 rounded-md"
					/>
				</div>
			</div>
			<div class="flex flex-col sm:flex-row gap-4 mt-6">
				<ButtonSecondary to="/cars" width="full">Wróć do listy</ButtonSecondary>
				<ButtonPrimary width="full">Wynajmij pojazd</ButtonPrimary>
			</div>
		</div>
	</main>
</template>

<style scoped>
@supports (-webkit-text-stroke: 4px white) {
	.stroked {
		color: transparent;
		-webkit-text-stroke: 2px white;
	}

	@media (min-width: 1024px) {
		.stroked {
			-webkit-text-stroke: 4px white;
		}
	}
}

td,
th {
	padding: 0.5rem;
}

tr th:first-child {
	border-right: 1px solid rgb(239, 68, 68);
	text-align: center;
}

tbody tr:nth-child(odd) {
	background-color: rgb(39 39 42 / 0.5);
}
</style>
