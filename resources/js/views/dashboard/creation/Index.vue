<template>
	<div class="content" id="home-creation-section">
		<div class="content-side row">
			<div
				class="left-side col-5 d-flex align-items-center justify-content-center"
			>
				<Paper></Paper>
			</div>
			<!-- /.left-side -->

			<div class="right-side col-7">
				<div class="d-flex flex-column bg-white h-100 w-100">
					<div class="d-flex align-items-center justify-content-between">
						<md-subheader>which document do you want to create?</md-subheader>
						<md-button
							class="md-primary"
							:disabled="!docSelected"
							:to="{ name: 'dashboard-creation-new' }"
							>Next</md-button
						>
					</div>

					<div class="list-group">
						<button
							v-for="(item, index) in getDocs"
							:key="index"
							class="list-group-item list-group-item-action"
							:class="{ active: docSelected == item }"
							@click="selectDoc(item)"
						>
							<div class="d-flex w-100 justify-content-between">
								<h5 class="mb-1">{{ item.name }}</h5>
							</div>
							<p class="mb-1">{{ item.description }}</p>
							<small>Donec id elit non mi porta.</small>
						</button>
					</div>
					<!-- /.list-group -->
				</div>
				<!-- /.d-flex -->
			</div>
			<!-- /.right-side -->
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
			documentType: null,
			customWidth: 320,
		};
	},
	computed: {
		isSelected() {
			if (this.documentType) {
				return true;
			} else {
				return false;
			}
		},
		getDocs() {
			return this.$store.getters["document/getDocs"];
		},
		docSelected() {
			const docSelected = this.$store.getters["document/getDocSelected"];
			if (docSelected) {
				return docSelected;
			} else {
				return false;
			}
		},
	},
	methods: {
		selectDoc(dataDoc) {
			this.$store.dispatch("document/select_doc", dataDoc);
		},
	},
};
</script>

<style lang="scss">
.content#home-creation-section {
	> .content-side {
		/*>.left-side {
		overflow: auto;
		height: 100%;
	}

	>.left-side > :first-child {
		overflow: auto;
		height: 100%;
	}*/

		> .right-side {
			overflow: auto;
			min-height: 100%;
			max-height: calc(100vh - 123px);
		}

		> .right-side > :first-child {
			overflow: auto;
			height: 100%;

			.list-group {
				overflow: auto;
				height: 100%;
			}
		}
	}
}
</style>
