<template>
	<div class="content" id="new-creation-section">
		<div class="row content-side">
			<md-steppers
				:md-active-step.sync="steper.active"
				md-linear
				class="col-md-7 left-side"
			>
				<md-step
					id="first"
					md-label="Content"
					:md-error="steper.first.error.header"
					:md-done.sync="steper.first.active"
				>
					<div v-if="docConfig.body.content">
						<ckeditor
							:editor="steper.first.editor"
							v-model="docConfig.body.content"
							:config="steper.first.editorConfig"
						></ckeditor>
					</div>
					<md-button class="md-raised md-primary" @click="$router.go(-1)"
						>Go back</md-button
					>
					<md-button
						class="md-raised md-primary"
						@click="setDone('first', 'second')"
						>Next</md-button
					>
				</md-step>
				<!-- /md-step.first -->

				<md-step
					id="second"
					md-label="Config"
					:md-error="steper.second.error.header"
					:md-done.sync="steper.second.active"
				>
					<div class="md-subheading">Header</div>
					<div class="md-layout mb-3">
						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.header.leftSide.title"
								:md-options="['République Démocratique du Congo']"
							>
								<label> Title </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.header.leftSide.subTitle"
								:md-options="['Ministère de l\'Urbanisme']"
							>
								<label> Subtitle </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.header.rightSide.date"
								:md-options="getDates"
							>
								<label> Date </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.header.rightSide.subTitle"
								:md-options="['Urgent', 'Important', 'Minor']"
							>
								<label> Subtitle </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->
					</div>
					<!-- /.md-layout -->

					<div class="md-subheading">Body</div>
					<div class="md-layout mb-3">
						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.body.title"
								:md-options="['New letter exemple']"
							>
								<label> Title </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->
					</div>
					<!-- /.md-layout -->

					<div class="md-layout mb-3" v-if="docConfig.body.cc">
						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-field>
								<label for="">Select some persons</label>
								<md-select v-model="docConfig.body.cc.persons" multiple>
									<md-option
										:value="item"
										v-for="item in steper.second.personsCC"
										:key="item"
										>{{ item }}</md-option
									>
								</md-select>
							</md-field>
						</div>
						<!-- /.md-layout-item -->

						<template v-if="docConfig.body.cc.persons">
							<div class="md-layout-item md-xsmall-size-100 md-size-25">
								<md-autocomplete
									v-model="docConfig.body.cc.prePerson"
									:md-options="['Son exelance']"
								>
									<label> Prefix </label>
								</md-autocomplete>
							</div>
							<!-- /.md-layout-item -->

							<div class="md-layout-item md-xsmall-size-100 md-size-50">
								<md-autocomplete
									v-model="docConfig.body.cc.title"
									:md-options="[`N° CAB/MIN-UH/ ${getDates[1]}`]"
								>
									<label> Title </label>
								</md-autocomplete>
							</div>
							<!--/.md-layout-item-->
						</template>
					</div>
					<!-- /.md-layout -->

					<div class="md-layout mb-3" v-if="docConfig.body.for">
						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.body.for"
								:md-options="[`Mr Someone`]"
							>
								<label> For </label>
							</md-autocomplete>
						</div>
					</div>
					<!-- /.md-layout -->

					<div class="md-layout mb-3">
						<div
							class="md-layout-item md-xsmall-size-100 md-size-50"
							v-if="docConfig.image"
						>
							<label> Background image </label>
							<VueFileAgent
								v-if="docConfig.image.show"
								ref="vueFileAgent"
								:multiple="false"
								:deletable="true"
								:meta="true"
								:accept="'image/*'"
								:maxSize="'10MB'"
								:maxFiles="1"
								:helpText="'Choose only images'"
								:errorText="{
									type: 'Invalid file type. Only images Allowed',
									size: 'Files should not exceed 10MB in size',
								}"
								@select="filesSelected($event)"
								@beforedelete="onBeforeDelete($event)"
								@delete="fileDeleted($event)"
								v-model="docConfig.image.data"
							></VueFileAgent>

							<md-switch v-model="docConfig.image.show"
								>Show background image ?</md-switch
							>
						</div>
						<!-- /.md-layout-item -->

						<div
							class="md-layout-item md-xsmall-size-100 md-size-50"
							v-if="docConfig.header.leftSide.logo"
						>
							<label> Heasder logo </label>
							<VueFileAgent
								v-if="docConfig.header.leftSide.logo.show"
								ref="vueFileAgent"
								:multiple="false"
								:deletable="true"
								:meta="true"
								:accept="'image/*'"
								:maxSize="'10MB'"
								:maxFiles="1"
								:helpText="'Choose only images'"
								:errorText="{
									type: 'Invalid file type. Only images Allowed',
									size: 'Files should not exceed 10MB in size',
								}"
								@select="filesSelected($event)"
								@beforedelete="onBeforeDelete($event)"
								@delete="fileDeleted($event)"
								v-model="docConfig.header.leftSide.logo.data"
							></VueFileAgent>
							<md-switch v-model="docConfig.header.leftSide.logo.show"
								>Show background image ?</md-switch
							>
						</div>
						<!-- /.md-layout-item -->

						<md-dialog-confirm
							:md-active.sync="steper.second.confirmModal"
							md-title="Confirmation"
							md-content="'Are you sure you want to delete?'"
							md-confirm-text="Agree"
							md-cancel-text="Disagree"
							@md-cancel="steper.second.confirmModal = null"
							@md-confirm="
								() => {
									steper.second.confirmModal = true;
									$refs.vueFileAgent.deleteFileRecord(
										steper.second.confirmModalFileRecord
									);
								}
							"
						/>
					</div>
					<!-- /.md-layout -->

					<md-button class="md-raised md-primary" @click="setDone('second')">
						Continue
					</md-button>
				</md-step>
				<!-- /md-step.second -->
			</md-steppers>
			<!-- /.left-side -->

			<div
				class="right-side col-md-5 d-flex align-items-center justify-content-center"
			>
				<Paper></Paper>
			</div>
			<!-- /.right-side -->
		</div>
	</div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Paper } from "../../../components";
import moment from "moment";

export default {
	name: "DashboardCreationNew",
	components: {
		Paper,
	},
	data: () => ({
		boolean: false,
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
				personsCC: [],
				fileRecords: [],
				fileRecordsForUpload: [],
				confirmModal: null,
				confirmModalFileRecord: null,
			},
		},
		docConfig: {},
	}),
	computed: {
		getDates() {
			return [
				moment().format("DD/MM/YYYY HH:mm:ss"),
				moment().format("DD/MM/YYYY"),
			];
		},
	},
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
			console.log(config);
			this.$store.dispatch("document/set_config_doc_selected", config);
		},
		filesSelected: function (fileRecordsNewlySelected) {
			let validFileRecords = fileRecordsNewlySelected.filter(
				(fileRecord) => !fileRecord.error
			);
			this.steper.second.fileRecordsForUpload = this.steper.second.fileRecordsForUpload.concat(
				validFileRecords
			);
		},
		onBeforeDelete: function (fileRecord) {
			let i = this.steper.second.fileRecordsForUpload.indexOf(fileRecord);
			if (i !== -1) {
				this.steper.second.fileRecordsForUpload.splice(i, 1);
			} else {
				this.steper.second.confirmModal = true;
			}
		},
		fileDeleted: function (fileRecord) {
			let i = this.steper.second.fileRecordsForUpload.indexOf(fileRecord);
			if (i !== -1) {
				this.steper.second.fileRecordsForUpload.splice(i, 1);
			} else {
				//this.deleteUploadedFile(fileRecord);
			}
		},
	},
	mounted() {
		this.docConfig = JSON.parse(
			JSON.stringify(this.$store.getters["document/getDocSelected"].config)
		);
		if (this.docConfig.body.cc != undefined) {
			this.steper.second.personsCC = JSON.parse(
				JSON.stringify(this.docConfig.body.cc.persons)
			);
		}
	},
	watch: {
		docConfig: {
			handler: function (val) {
				this.setNewDocConfig(val);
			},
			deep: true,
			immediate: false,
		},
	},
};
</script>

<style lang="scss">
.content#new-creation-section {
}
</style>
