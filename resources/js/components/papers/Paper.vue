<template>
	<div
		id="paper-item"
		class="bg-white position-relative text-dark"
		:style="{height: size.height, width : size.width }"
	>
		<h5 class="text-center w-100" v-html="getConfig.body.title"></h5>
		<div class="text-justify w-100" v-html="getConfig.body.content"></div>
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
		size: {
			type: Object,
			default: () => {
				return {
					height: "410px",
					width: "320px",
				};
			},
		},
	},
	computed: {
		getConfig() {
			const doc = this.$store.getters["document/getDocSelected"];
			if (this.config) {
				return this.config;
			} else if (doc) {
				return doc.config;
			} else {
				return {
					body: {
						title: "default Title",
						content: "Body here",
					},
				};
			}
		},
	},
};
</script>

<style lang="scss">
#paper-item {
}
</style>
