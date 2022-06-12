<script>
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../firebase.js';
export default {
	components: {},
	props: {
		car: {
			type: Object,
			default: () => {},
			required: true,
		},
		res: {
			type: String,
			default: 'thumb',
			required: false,
		},
	},
	data() {
		return {
			url: null,
		};
	},
	created() {
		this.getCarImageUrl(this.car.model);
	},
	methods: {
		async getCarImageUrl(model) {
			model = model.replace(/\s+/g, '-').toLowerCase();
			let modelPath = `${model}_${this.res}.jpg`;
			const imageRef = ref(storage, `images/${modelPath}`);
			getDownloadURL(imageRef)
				.then((url) => {
					this.url = url;
				})
				.catch(() => {
					this.url = null;
				});
		},
	},
};
</script>
<template>
	<div v-if="!url" class="bg-zinc-600 animate-pulse"></div>
	<img v-else :src="url" :alt="`${car.brand} ${car.model}`" />
</template>
