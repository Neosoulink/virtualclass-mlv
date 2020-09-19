<template>
	<div id="paper-item" class="bg-white position-relative text-dark">
		<h5 class="text-center w-100">{{ getConfig.body.title }}</h5>
		<div class="text-justify w-100">{{ getConfig.body.content }}</div>
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
					body : {
						title: "default Title",
            content : "Body here"
					}
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
