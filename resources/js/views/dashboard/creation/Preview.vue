<template>
	<div id="paper-preview-arrea" class="position-fixed p-2" >
		<div class="d-flex justify-content-center align-items-center">
			<div class="paper-container">
				<Paper :config="config" ref="PaperItem" :width="800"></Paper>
			</div>
			<!-- /.paper-container -->
		</div>

		<div
			class="config-container d-flex flex-row align-items-center justify-content-center position-fixed"
		>
			<md-menu md-size="auto" md-direction="bottom-end">
				<md-button class="md-just-icon md-primary mr-2" md-menu-trigger>
					<md-icon>menu</md-icon>
				</md-button>

				<md-menu-content>
					<md-menu-item @click="launchPrint()">
						Launch print <md-icon>print</md-icon>
					</md-menu-item>
					<md-menu-item @click="exportToWord()">
						Export to Word <md-icon>description</md-icon>
					</md-menu-item>
					<md-menu-item @click="exportToPDF()">
						Export to pdf <md-icon>picture_as_pdf</md-icon>
					</md-menu-item>
				</md-menu-content>
			</md-menu>

			<md-button class="md-just-icon md-danger" @click="$router.back()">
				<md-icon>clear</md-icon>
			</md-button>
		</div>
		<!-- /.config-container -->
	</div>
	<!-- /#paper-preview-arrea -->
</template>

<script>
import { Paper } from "../../../components";

export default {
	components: {
		Paper,
	},
	data() {
		return {};
	},
	computed: {
		config() {
			return this.$store.getters["document/getSelectedDoc"].config;
		},
	},
	methods: {
		launchPrint() {
			this.$refs.PaperItem.launchPrint();
		},
		exportToWord() {
			this.$refs.PaperItem.exportToWord();
		},
		exportToPDF() {
			this.$refs.PaperItem.exportToPDF();
		},
	},
};
</script>

<style lang="scss">
#paper-preview-arrea {
	background-color: rgba($color: #000000, $alpha: 0.7);
	z-index: 6;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	overflow: auto;

	.paper-container {
	}

	.config-container {
		z-index: 7;
		top: 50px;
		right: 50px;
	}
}
</style>
