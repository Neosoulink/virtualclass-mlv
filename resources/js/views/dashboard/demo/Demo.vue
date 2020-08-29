<template>
	<div class="content">
		<div class="md-layout">
			<md-steppers :md-active-step.sync="steper.active" md-linear class="w-100">
				<md-step
					id="first"
					md-label="Configurations"
					md-description="Model choice"
					:md-error="steper.first.error.header"
					:md-done.sync="steper.first.active"
				>
					<div class="md-subheading">Génerale</div>
					<div class="md-layout mb-3">
						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<label for="chosen_type">Type of Document</label>
								<md-select
									v-model="steper.first.chosenDatas.chosen"
									name="chosen_type"
									id="chosen_type"
									required
									class
								>
									<md-option value="letter">Letter</md-option>
									<md-option value="document" class>Documents</md-option>
								</md-select>
								<span class="md-helper-text">Select type of your demo document</span>
								<span class="md-error"></span>
							</md-field>
						</div>
						<!-- /.md-layout-item -->

						<template v-if="isLetter">
							<div class="md-layout-item md-xsmall-size-100 md-size-25">
								<md-field>
									<label for="letter_type">Type of Letter</label>
									<md-select v-model="steper.first.chosenDatas.letter.letterType" required>
										<md-option value="Simple">Simple</md-option>
										<md-option value="Copy Transmitted">Copy Transmitted</md-option>
									</md-select>
								</md-field>
							</div>
							<!-- /.md-layout-item -->

							<template v-if="steper.first.chosenDatas.letter.letterType == 'Copy Transmitted'">
								<div class="md-layout-item md-xsmall-size-100 md-size-25">
									<md-autocomplete
										v-model="steper.first.chosenDatas.object"
										:md-options="autocomplete.object"
									>
										<label>Object</label>
									</md-autocomplete>
								</div>
								<!-- /.md-layout-item -->
								<div class="md-layout-item md-xsmall-size-100 md-size-25">
									<md-field>
										<label for="movies">Select some persones</label>
										<md-select v-model="steper.first.chosenDatas.letter.copyTransmitted" required multiple>
											<md-option :value="item" v-for="item in personsCopyTransmited" :key="item">{{ item }}</md-option>
										</md-select>
										<span class="md-helper-text">
											<a href="#" class="md-simple text-dark" @click.prevent="selectAllPerson()">Select All</a>
										</span>
									</md-field>
								</div>
								<!-- /.md-layout-item -->
							</template>
						</template>

						<template v-if="isDocument">
							<div class="md-layout-item md-xsmall-size-100 md-size-25">
								<md-field>
									<label for="letter_type">Model of document</label>
									<md-select v-model="steper.first.chosenDatas.document.documentType" required>
										<md-option value="Official press release">Official press release</md-option>
										<md-option value="Official Report">Official Report</md-option>
									</md-select>
								</md-field>
							</div>
							<!-- /.md-layout-item -->
						</template>
					</div>
					<!-- /.md-layout -->

					<div class="md-subheading">References</div>
					<div class="md-layout">
						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-autocomplete v-model="steper.first.chosenDatas.for" :md-options="autocomplete.for">
								<md-icon>account_box</md-icon>
								<label>For</label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-autocomplete
								v-model="steper.first.chosenDatas.establishment"
								:md-options="autocomplete.establishment"
							>
								<md-icon>corporate_fare</md-icon>
								<label>Establishment</label>
							</md-autocomplete>
						</div>
						<!-- /.md-layout-item -->
					</div>
					<!-- /.md-layout -->

					<div class="md-subheading">Security</div>
					<div class="md-layout">
						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<label for="movies">Status</label>
								<md-select v-model="steper.first.chosenDatas.status" required>
									<md-option value="Urgent">Urgent</md-option>
									<md-option value="Important">Important</md-option>
									<md-option value="Minor">Minor</md-option>
								</md-select>
							</md-field>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<label for="movies">Confidentiality</label>
								<md-select v-model="steper.first.chosenDatas.confidentiality" required>
									<md-option value="Private">Private</md-option>
									<md-option value="Public">Public</md-option>
								</md-select>
							</md-field>
						</div>
						<!-- /.md-layout-item -->
					</div>

					<md-button class="md-raised md-success" @click="firstStepCheck()">Continue</md-button>
					<div v-if="steper.first.error.content">
						<div class="text-danger" v-for="(error, index) in steper.first.error.content" :key="index">
							<strong class="text-uppercase">{{index}} Field:</strong>
							{{error.join(',\n')}}
						</div>
					</div>
				</md-step>
				<!-- /md-step -->

				<md-step
					id="second"
					md-label="Content"
					:md-error="steper.second.error.header"
					:md-done.sync="steper.second.active"
				>
					<div class>
						<ckeditor
							:editor="steper.second.editor"
							v-model="steper.second.editorData"
							:config="steper.second.editorConfig"
						></ckeditor>
					</div>

					<md-button class="md-raised md-success" @click="secondStepCheck()">Continue</md-button>
					<div v-if="steper.second.error.content">
						<div class="text-danger" v-for="(error, index) in steper.second.error.content" :key="index">
							<strong class="text-uppercase">{{index}} Field:</strong>
							{{error.join(',\n')}}
						</div>
					</div>
				</md-step>
				<!-- /md-step -->

				<md-step
					id="third"
					md-label="Theme"
					:md-error="steper.third.error.header"
					:md-done.sync="steper.third.active"
				>
					<div class="md-layout" v-if="steper.third.logoThemes">
						<div
							v-for="logoTheme in steper.third.logoThemes"
							:key="logoTheme"
							class="md-layout-item md-xsmall-size-100 md-size-25"
						>
							<md-card>
								<md-card-media-cover md-text-scrim>
									<md-button
										class="md-success md-just-icon position-absolute"
										:class="logoTheme == steper.third.themeSelected ? 'show' : 'd-none'"
										style="right:0;top:0;z-index: 10;"
									>
										<md-icon>check</md-icon>
									</md-button>

									<md-card-media md-ratio="4:3">
										<img :src="logoTheme" />
									</md-card-media>
								</md-card-media-cover>

								<md-card-expand>
									<md-button
										class="md-primary md-round"
										@click="steper.third.themeSelected = logoTheme"
									>Select theme</md-button>
								</md-card-expand>
							</md-card>
						</div>
						<!-- :.md-layout-item -->
					</div>
					<!-- ./md-layout -->

					<md-button class="md-raised md-success" @click="thirdStepCheck()">Launch preview</md-button>

					<div v-if="steper.third.error.content">
						<div class="text-danger" v-for="(error, index) in steper.third.error.content" :key="index">
							<strong class="text-uppercase">{{index}}:</strong>
							{{error.join(',\n')}}
						</div>
					</div>
				</md-step>
				<!-- /md-step -->
			</md-steppers>
		</div>

		<md-dialog :md-active.sync="printeredData.dialogPreview" class="md-size-100">
			<md-dialog-title>Preview</md-dialog-title>

			<md-dialog-content class="md-layout">
				<div class="md-layout-item md-xsmall-size-100 md-size-25">
					<div class="md-size-100 mb-3" v-if="steper.third.themeSelected">
						<legend class="md-subheading">Theme :</legend>
						<img :src="steper.third.themeSelected" alt />
					</div>
				</div>
				<!-- /.md-layout-item -->
				<div class="md-layout-item md-xsmall-size-100 md-size-75">
					<div class="md-size-100 mb-3" v-if="editorDataEscaped">
						<legend class="md-subheading mb-0 pb-2">Content :</legend>
						<div class="bg-light p-2">{{ editorDataEscaped }}</div>
					</div>
					<!-- /.md-size-100 -->
					<div class="md-size-100 mb-3" v-if="steper.first.chosenDatas.chosen">
						<legend class="md-subheading mb-0 pb-2">
							Document type :
							<span class="bg-light text-uppercase p-2">{{steper.first.chosenDatas.chosen}}</span>
						</legend>
					</div>
					<!-- /.md-size-100 -->
					<template v-if="isLetter">
						<div class="md-size-100 mb-3">
							<legend class="md-subheading mb-0 pb-2">
								Letter type :
								<span
									class="bg-light text-uppercase p-2"
								>{{steper.first.chosenDatas.chosen}} / {{ steper.first.chosenDatas.letter.letterType }}</span>
							</legend>

							<div class="md-layout">
								<span
									v-for="(item, index) in steper.first.chosenDatas.letter.copyTransmitted"
									:key="index"
									class="mb-2 mr-2 p-2 bg-light"
								>{{ item }}</span>
							</div>
						</div>
						<!-- /.md-size-100 -->

						<div class="md-size-100 mb-3">
							<legend class="md-subheading mb-0 pb-2">
								Object :
								<span class="bg-light p-2">{{ steper.first.chosenDatas.object }}</span>
							</legend>
						</div>
						<!-- /.md-size-100 -->
					</template>

					<template v-if="isDocument">
						<div class="md-size-100 mb-3">
							<legend class="md-subheading mb-0 pb-2">
								Model :
								<span
									class="bg-light text-uppercase p-2"
								>{{ steper.first.chosenDatas.document.documentType }}</span>
							</legend>
						</div>
					</template>
					<!-- /.md-size-100 -->

					<div class="md-size-100 mb-3">
						<legend class="md-subheading mb-0 pb-2">
							<md-icon>account_box</md-icon>For :
							<span class="bg-light p-2">{{ steper.first.chosenDatas.for }}</span>
						</legend>
					</div>
					<!-- /.md-size-100 -->

					<div class="md-size-100 mb-3">
						<legend class="md-subheading mb-0 pb-2">
							<md-icon>corporate_fare</md-icon>Establishment :
							<span class="bg-light p-2">{{ steper.first.chosenDatas.establishment }}</span>
						</legend>
					</div>
					<!-- /.md-size-100 -->

					<div class="md-size-100 mb-3">
						<legend class="md-subheading mb-0 pb-2">
							<md-icon>security</md-icon>Confidentiality :
							<span class="bg-light p-2">{{ steper.first.chosenDatas.confidentiality }}</span>
						</legend>
					</div>
					<!-- /.md-size-100 -->

					<div class="md-size-100 mb-3">
						<legend class="md-subheading mb-0 pb-2">
							Status :
							<span class="bg-light p-2">{{ steper.first.chosenDatas.status }}</span>
						</legend>
					</div>
					<!-- /.md-size-100 -->
				</div>
				<!-- /.md-layout-item -->
			</md-dialog-content>

			<md-dialog-actions>
				<md-button class="md-primary" @click="printeredData.dialogPreview = false">Cancel</md-button>
				<md-button class="md-primary" @click="launchPrint()">
					<md-icon class="md-primary">print</md-icon>Print
				</md-button>
			</md-dialog-actions>
		</md-dialog>

		<demo-printable
			ref="demoPrintable"
			:isLetter="isLetter"
			:isDocument="isDocument"
			:letterType="steper.first.chosenDatas.letter.letterType"
			:documentType="steper.first.chosenDatas.document.documentType"
			:copyTransmitted="steper.first.chosenDatas.letter.copyTransmitted"
			:forPerson="steper.first.chosenDatas.for"
			:establishment="steper.first.chosenDatas.establishment"
			:object="steper.first.chosenDatas.object"
			:confidentiality="steper.first.chosenDatas.confidentiality"
			:status="steper.first.chosenDatas.status"
			:editorData="steper.second.editorData"
			:themeLogo="steper.third.themeSelected"
		/>
	</div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
//import NicolaCkeditor from '@nicolabello/ckeditor5-build-decoupled-document';
import Validate, { isObject } from "validate.js";
import DemoPrintable from "../../../components/printables/Demo";

export default {
	name: "DashboardChoice",
	components: {
		DemoPrintable,
	},
	data: () => ({
		autocomplete: {
			for: ["Mr le ministre", "Adjoit ministre", "Secretaire"],
			establishment: [
				"Ministère des Finances",
				"Ministères de L'Urbanisme",
				"Ministère de l'économie politique",
			],
			object: [
				"Test demo",
				"Interaction d'interet",
				"Mise en place du nouveau régime",
			],
		},
		steper: {
			active: "first",
			first: {
				// First step
				active: false,
				error: {
					header: null,
					content: null,
				},
				chosenDatas: {
					chosen: null,
					letter: {
						letterType: null,
						copyTransmitted: null,
					},
					document: {
						documentType: null,
					},
					for: null,
					establishment: null,
					object: null,
					confidentiality: null,
					status: null,
				},
			},
			second: {
				// Second step
				active: false,
				error: {
					header: null,
					content: null,
				},
				// CKeditor
				editor: ClassicEditor,
				editorData: "<p>Content of the editor.</p>",
				editorConfig: {
					// The configuration of the editor.
				},
			},
			third: {
				active: false,
				error: {
					header: null,
					content: null,
				},
				logoThemes: [],
				themeSelected: null,
			},
		},
		printeredData: {
			dialogPreview: false,
			content: "",
		},
	}),
	computed: {
		isLetter() {
			return this.steper.first.chosenDatas.chosen == "letter";
		},
		isDocument() {
			return this.steper.first.chosenDatas.chosen == "document";
		},
		editorDataEscaped() {
			let dataEscaped = this.steper.second.editorData
				.replace(/<[^>]*>/gi, " ")
				.trim();
			return dataEscaped;
		},
		personsCopyTransmited() {
			let persons = [];
			for (let i = 0; i <= 13; i++) {
				persons.push(`Person Exemple ${i}`);
			}
			return persons;
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
		selectAllPerson() {
			this.steper.first.chosenDatas.letter.copyTransmitted = this.personsCopyTransmited;
		},
		firstStepCheck(setDone = true) {
			// Check formulary of first step
			const id = "first",
				index = "second";

			this.steper[id].error.content = null;
			this.steper[id].error.header = null;

			let datas = this.steper[id].chosenDatas;

			let constraints = {
				chosen: { presence: { allowEmpty: false } },
				for: { presence: { allowEmpty: false } },
				establishment: { presence: { allowEmpty: false } },
				confidentiality: { presence: { allowEmpty: false } },
				status: { presence: { allowEmpty: false } },
			};

			if (this.isLetter) {
				datas.letterType = this.steper[id].chosenDatas.letter.letterType;
				constraints.letterType = { presence: { allowEmpty: false } };
				if (
					this.$data.steper[id].chosenDatas.letter.letterType ==
					"Copy Transmitted"
				) {
					datas.copyTransmitted = this.steper[
						id
					].chosenDatas.letter.copyTransmitted;
					constraints.object = { presence: { allowEmpty: false } };
					constraints.copyTransmitted = { presence: { allowEmpty: false } };
				}
			} else if (this.isDocument) {
				datas.documentType = this.steper[id].chosenDatas.document.documentType;
				constraints.documentType = { presence: { allowEmpty: false } };
			}

			if (!this.setError(id, Validate(datas, constraints))) {
				this.setDone(null, id);
				this.unactiveStepers();
				return false;
			}
			if (setDone) {
				this.setDone(id, index);
			} else return true;
		},
		secondStepCheck(setDone = true) {
			// Check formulary of second step
			const id = "second",
				index = "third";

			this.steper[id].error.content = null;
			this.steper[id].error.header = null;

			let data = {
				editorData: this.steper[id].editorData,
			};

			let constraints = {
				editorData: {
					presence: { allowEmpty: false },
					length: { minimum: 10 },
				},
			};

			if (!this.setError(id, Validate(data, constraints))) {
				this.setDone(null, id);
				this.unactiveStepers();
				return false;
			}
			if (setDone) {
				this.setDone(id, index);

				if (!this.steper.third.logoThemes.length) {
					axios
						.get("/api/demo/logo-themes")
						.then((res) => {
							this.steper.third.logoThemes = res.data;
						})
						.catch((err) => {
							console.error(err);
						});
				}
			} else return true;
		},
		thirdStepCheck(setDone = true) {
			const id = "third";

			this.steper[id].error.content = null;
			this.steper[id].error.header = null;
			let data = {
				themeSelected: this.steper[id].themeSelected,
			};

			let constraints = {
				themeSelected: {
					presence: { allowEmpty: false },
					url: {
						allowLocal: true,
					},
				},
			};

			if (!this.setError(id, Validate(data, constraints))) {
				this.unactiveStepers();
				return false;
			}
			if (setDone) {
				this.printeredData.dialogPreview = true;
				this.activeStepers();
			} else return true;
		},
		launchPrint() {
			if (
				this.firstStepCheck(false) &&
				this.secondStepCheck(false) &&
				this.thirdStepCheck(false)
			) {
				this.$refs.demoPrintable.launchPrint();
			}
			this.printeredData.dialogPreview = false;
		},
	},
	watch: {
		//'steper.first.chosenDatas.letter.for': function (newSteper, oldSteper) {
		//	this.firstStepCheck();
		//	//console.log("qsq");
		//},
	},
	mounted() {},
};
</script>

<style>
.md-select-menu > .md-menu-content-container > .md-list .md-list-item {
	padding-left: -5px;
	margin-left: -5px;
}
.md-select-menu > .md-menu-content-container > .md-list .md-list-item-text {
	display: flex;
	justify-content: center;
	padding-left: 15px;
}
.md-select-menu
	> .md-menu-content-container
	> .md-list
	.md-list-item-content
	> .md-checkbox {
	margin: 0;
	display: inline;
}
</style>
