<template>
	<div
		id="paper-preview-arrea"
		class="position-fixed d-flex justify-content-center align-items-stretch p-2"
	>
		<div class="paper-container flex-grow-1 d-flex justify-content-center">
			<Paper ref="PaperItem" :width="800"></Paper>
		</div>
		<!-- /.paper-container -->

		<div class="config-container px-4">
			<div class="header w-100 d-flex justify-content-end">
				<md-button
					class="md-icon-button md-simple"
					@click="$router.replace({ name: 'dashboard' })"
				>
					<md-icon>home</md-icon>
				</md-button>

				<md-button class="md-icon-button md-danger" @click="$router.back()">
					<md-icon>clear</md-icon>
				</md-button>
			</div>
			<!-- /.header -->

			<h2 class="md-display-1 mb-4 text-white">Config & Exportation</h2>
			<div class="md-layout flex-column">
				<span class="md-caption text-light"
					>Launch the defaut web printing:</span
				>
				<md-button class="md-raised md-primary mx-0 mb-3" @click="launchPrint()"
					>Launch print <md-icon>print</md-icon></md-button
				>

				<span class="md-caption text-light">Lorem ipsum dolor sit amet:</span>
				<md-button
				class="md-raised md-primary mx-0 mb-3"
				@click="exportToWord()"
					>Export to Word <i class="fas fa-file-word ml-2"></i
				></md-button>

				<span class="md-caption text-light">Lorem ipsum dolor sit amet:</span>
				<md-button
					class="md-raised md-primary mx-0 mb-3"
					@click="exportToPDF()"
					>Export to pdf <md-icon>picture_as_pdf</md-icon></md-button
				>
			</div>
			<div></div>
		</div>
		<!-- /.config-container -->
	</div>
	<!-- /#paper-preview-arrea -->
</template>

<script>
import { Paper } from "../../../components";

export default {
	data() {
		return {};
	},
	components: {
		Paper,
	},
	methods: {
		launchPrint() {
			this.$refs.PaperItem.launchPrint();
		},
		exportToWord() {
			this.$refs.PaperItem.exportToWord();
		},
		exportToPDF(){
			this.$refs.PaperItem.exportToPDF();
		}
	},
};
</script>

<style lang="scss">
#paper-preview-arrea {
	background-color: rgba($color: #000000, $alpha: 0.7);
	z-index: 500;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	> .paper-container {
		overflow: auto;
	}
}
</style>
