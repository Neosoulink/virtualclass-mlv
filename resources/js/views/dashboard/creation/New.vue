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
					<div class="mb-4">
						<ckeditor
							:editor="steper.first.editor"
							v-model="docConfig.body.content"
							:config="steper.first.editorConfig"
						></ckeditor>
					</div>

					<div class="">
						<md-button class="md-raised md-primary" @click="$router.go(-1)"
							>Go back</md-button
						>
						<md-button
							class="md-raised md-primary"
							@click="setDone('first', 'second')"
							>Next</md-button
						>
					</div>
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

					<div class="md-layout mb-3" v-if="docConfig.body.for != undefined">
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

					<div class="md-subheading">Footer</div>
					<div
						class="md-layout mb-3"
						v-if="docConfig.footer.rightSide != undefined"
					>
						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.footer.rightSide.title"
								:md-options="[`${docConfig.body.for}`]"
							>
								<label> Title </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-50">
							<md-autocomplete
								v-model="docConfig.footer.rightSide.subTitle"
								:md-options="[`Fais à kinshasa le ${getDates[1]}`]"
							>
								<label> Subtitle </label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->
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
								@select="filesSelected($event, steper.second.bgImage)"
								@beforedelete="onBeforeDelete($event, steper.second.bgImage)"
								@delete="fileDeleted($event, steper.second.bgImage)"
								v-model="docConfig.image.data"
							></VueFileAgent>

							<md-dialog-confirm
								:md-active.sync="steper.second.bgImage.confirmModal"
								md-title="Confirmation"
								md-content="'Are you sure you want to delete?'"
								md-confirm-text="Agree"
								md-cancel-text="Disagree"
								@md-cancel="steper.second.bgImage.confirmModal = null"
								@md-confirm="
									() => {
										steper.second.bgImage.confirmModal = true;
										$refs.vueFileAgent.deleteFileRecord(
											steper.second.bgImage.confirmModalFileRecord
										);
									}
								"
							/>
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
								@select="filesSelected($event, steper.second.headerLogo)"
								@beforedelete="onBeforeDelete($event, steper.second.headerLogo)"
								@delete="fileDeleted($event, steper.second.headerLogo)"
								v-model="docConfig.header.leftSide.logo.data"
							></VueFileAgent>
							<md-switch v-model="docConfig.header.leftSide.logo.show"
								>Show background image ?</md-switch
							>
						</div>
						<!-- /.md-layout-item -->

						<md-dialog-confirm
							:md-active.sync="steper.second.headerLogo.confirmModal"
							md-title="Confirmation"
							md-content="'Are you sure you want to delete?'"
							md-confirm-text="Agree"
							md-cancel-text="Disagree"
							@md-cancel="steper.second.headerLogo.confirmModal = null"
							@md-confirm="
								() => {
									steper.second.headerLogo.confirmModal = true;
									$refs.vueFileAgent.deleteFileRecord(
										steper.second.headerLogo.confirmModalFileRecord
									);
								}
							"
						/>
					</div>
					<!-- /.md-layout -->

					<md-button
						class="md-raised md-primary"
						@click="setDone('first', 'first')"
					>
						Back
					</md-button>

					<md-button class="md-raised md-primary" @click="launchPreview()">
						Launch preview
					</md-button>
				</md-step>
				<!-- /md-step.second -->
			</md-steppers>
			<!-- /.left-side -->

			<router-view></router-view>

			<div
				class="right-side col-md-5 d-flex align-items-start justify-content-center"
			>
				<Paper :config="docConfig"></Paper>
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
				bgImage: {
					fileRecords: [],
					fileRecordsForUpload: [],
					confirmModal: null,
					confirmModalFileRecord: null,
				},
				headerLogo: {
					fileRecords: [],
					fileRecordsForUpload: [],
					confirmModal: null,
					confirmModalFileRecord: null,
				},
			},
		},
		docConfig: {
			body: {},
			header: {
				leftSide: {
					title: null,
					subTitle: null,
				},
				rightSide: {},
			},
			footer: {
				rightSide: {},
			},
		},
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
		updateDocConfig(config) {
			this.docConfig.config = config;
		},
		filesSelected: function (fileRecordsNewlySelected, dataFile) {
			let validFileRecords = fileRecordsNewlySelected.filter(
				(fileRecord) => !fileRecord.error
			);
			dataFile.fileRecordsForUpload = dataFile.fileRecordsForUpload.concat(
				validFileRecords
			);
		},
		onBeforeDelete: function (fileRecord, dataFile) {
			let i = dataFile.fileRecordsForUpload.indexOf(fileRecord);
			if (i !== -1) {
				dataFile.fileRecordsForUpload.splice(i, 1);
			} else {
				dataFile.confirmModal = true;
			}
		},
		fileDeleted: function (fileRecord, dataFile) {
			let i = dataFile.fileRecordsForUpload.indexOf(fileRecord);
			if (i !== -1) {
				dataFile.fileRecordsForUpload.splice(i, 1);
			} else {
				//this.deleteUploadedFile(fileRecord);
			}
		},
		launchPreview() {
			this.setDone("second");
			this.$router.push({ name: "dashboard-creation-new-preview" });
		},
	},
	mounted() {
		const selectedDoc = this.$store.getters["document/getSelectedDoc"];

		this.docConfig = selectedDoc.config;

		if (this.docConfig && this.docConfig.body && this.docConfig.body.cc)
			this.steper.second.personsCC = JSON.parse(
				JSON.stringify(this.docConfig.body.cc.persons)
			);
	},
	watch: {
		docConfig: {
			handler: function (val) {
				this.updateDocConfig(val);
			},
			deep: true,
			immediate: false,
		},
	},
};
</script>

<style lang="scss">
#new-creation-section {
	> .left-side {
		overflow: auto;

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
</style>
