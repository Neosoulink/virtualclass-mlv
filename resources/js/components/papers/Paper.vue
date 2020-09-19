<template>
	<div id="paper-item" class="bg-white position-relative text-dark">
		<div class="text-center w-100">{{ getConfig.title }} fdgfdgfdgdfd</div>
	</div>
</template>

<script>
export default {
	name: "Paper",
	props: {
		config: {
			type: Object,
			default: null,
		},
	},
	computed: {
		getConfig() {
			const doc = this.$store.getters["document/getNewDocConfig"];
			if (this.config) {
				return this.config;
			} else if (doc) {
				return doc.config;
			} else {
				return {
					title: "default Title",
				};
			}
		},
	},
};
</script>

<style lang="scss">
#paper-item {
	min-height: 410px;
	min-width: 320px;
}
</style>
