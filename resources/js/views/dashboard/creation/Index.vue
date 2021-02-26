<template>
	<div class="content" id="home-creation-section">
		<div class="content-side row">
			<div class="left-side col-7">
				<div class="d-flex flex-column bg-white">
					<div class="d-flex align-items-center justify-content-between">
						<md-subheader>which document do you want to create?</md-subheader>
						<md-button
							class="md-primary"
							:disabled="!selectedDoc"
							@click="nextBtn()"
							>Next</md-button
						>
					</div>

					<div class="list-group">
						<button
							v-for="(doc, index) in docList"
							:key="index"
							class="list-group-item list-group-item-action"
							:class="{ active: selectedDoc == doc }"
							@click="selectDoc(doc)"
						>
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">{{ doc.name }}</h5>
							</div>
							<p class="mb-1">{{ doc.description }}</p>
							<small>Donec id elit non mi porta.</small>
						</button>
					</div>
					<!-- /.list-group -->
				</div>
				<!-- /.d-flex -->
			</div>
			<!-- /.right-side -->

			<div
				class="right-side col-5 d-flex align-items-start justify-content-center"
			>
				<Paper :config="selectedDoc ? selectedDoc.config : undefined"></Paper>
			</div>
			<!-- /.left-side -->
		</div>
		<!-- /.content-side -->
	</div>
	<!-- /#home-creation-section -->
</template>
<script>
import { Paper } from "../../../components";

export default {
	name: "DashboardCreation",
	components: {
		Paper,
	},
	data() {
		return {
			docList : [],
			selectedDoc: undefined,
			error: null,
		};
	},
	methods: {
		selectDoc(config = Object) {
			this.selectedDoc = JSON.parse(JSON.stringify(config));
		},
		nextBtn() {
			if (!this.selectedDoc)
				return (this.error = "Please selecte a document template");

			this.$store.dispatch(
				"document/setSelectedDoc",
				JSON.parse(JSON.stringify(this.selectedDoc))
			);

			this.$router.push({ name: "dashboard-creation-new" });
		},
	},
	mounted() {
		this.docList = this.$store.getters["document/getDocList"];
	},
};
</script>

<style lang="scss">
.content#home-creation-section {
	> .content-side {
		> .left-side {
			overflow: auto;
			min-height: 100%;
			max-height: calc(100vh - 123px);

			> :first-child {
				overflow: auto;
				height: 100%;

				.list-group {
					overflow: auto;
					height: 100%;
				}
			}
		}
	}
}
</style>
