<template>
	<div class="content" id="new-creation-section">
		<div class="row content-side">
			<md-steppers :md-active-step.sync="steper.active" md-linear class="col-md-7 left-side">
				<md-step
					id="first"
					md-label="Content"
					:md-error="steper.first.error.header"
					:md-done.sync="steper.first.active"
				>
					<div class>
						<ckeditor
							:editor="steper.first.editor"
							v-model="docConfig.body.content"
							:config="steper.first.editorConfig"
						></ckeditor>
					</div>
					<md-button
						class="md-raised md-primary"
						@click="$router.go(-1)"
					>Go back</md-button>
					<md-button class="md-raised md-primary" @click="setDone('first', 'second')">Next</md-button>
				</md-step>
				<!-- /md-step.first -->

				<md-step
					id="second"
					md-label="Config"
					:md-error="steper.second.error.header"
					:md-done.sync="steper.second.active"
				>
					<p>Config here !</p>
					<md-button class="md-raised md-primary" @click="setDone('second')">Continue</md-button>
				</md-step>
				<!-- /md-step.second -->
			</md-steppers>
			<!-- /.left-side -->

			<div class="right-side col-md-5 d-flex align-items-center justify-content-center">
				<Paper></Paper>
			</div>
			<!-- /.right-side -->
		</div>
	</div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Paper } from "../../../components";

export default {
	name: "DashboardCreationNew",
	components: {
		Paper,
	},
	data: () => ({
		steper: {
			active: "first",
			first: {
				// First step
				active: false,
				error: {
					header: null,
					content: null,
				},
				editor: ClassicEditor,
				editorConfig: {},
			},
			second: {
				// Second step
				active: false,
				error: {
					header: null,
					content: null,
				},
			},
		},
		docConfig: {
			body: {
				title: "default Title",
				content: "Body here",
			},
		},
	}),
	methods: {
		setDone(id, index) {
			if (id) {
				this.steper[id].active = true;
			}

			if (index) {
				this.steper.active = index;
			}
		},
		setError(id, validator) {
			if ((this.steper[id].error.content = validator)) {
				this.steper[id].error.header = "You've some errors";
				return false;
			}
			return true;
		},
		unactiveStepers() {
			const steper = this.steper;
			for (const key in steper) {
				if (steper.hasOwnProperty(key)) {
					const element = steper[key];
					if (isObject(element)) {
						element.active = false;
					}
				}
			}
			return;
		},
		activeStepers() {
			const steper = this.steper;
			for (const key in steper) {
				if (steper.hasOwnProperty(key)) {
					const element = steper[key];
					if (isObject(element)) {
						element.active = true;
					}
				}
			}
			return;
		},
		setNewDocConfig(config) {
			this.$store.dispatch("document/set_config_doc_selected", config);
		},
	},
	mounted() {
		this.docConfig = JSON.parse(
			JSON.stringify(this.$store.getters["document/getDocSelected"].config)
		);
	},
	watch: {
		docConfig: {
			handler: function (val) {
				this.setNewDocConfig(val);
			},
			deep: true,
			immediate: false
		},
	},
};
</script>

<style lang="scss">
.content#new-creation-section {
}
</style>
