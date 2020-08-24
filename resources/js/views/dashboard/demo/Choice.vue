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
									v-model="steper.first.chosenType.chosen"
									name="chosen_type"
									id="chosen_type"
									required
								>
									<md-option value="letter">Letter</md-option>
									<md-option value="document">Other Documents</md-option>
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
									<md-select v-model="steper.first.chosenType.letter.letterType" required>
										<md-option value="Simple">Simple</md-option>
										<md-option value="Copy Transmitted">Copy Transmitted</md-option>
									</md-select>
								</md-field>
							</div>
							<!-- /.md-layout-item -->

							<div
								class="md-layout-item md-xsmall-size-100 md-size-25"
								v-if="steper.first.chosenType.letter.letterType == 'Copy Transmitted'"
							>
								<md-field>
									<label for="movies">Select some persones</label>
									<md-select v-model="steper.first.chosenType.letter.copyTransmitted" required multiple>
										<md-option
											:value="`Person Exemple ${id}`"
											v-for="id in 13"
											:key="id"
										>{{ `Person Exemple ${id}` }}</md-option>
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
							<md-field>
								<md-icon>account_box</md-icon>
								<label>For</label>
								<md-input v-model="steper.first.chosenType.letter.for" required></md-input>
							</md-field>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<md-icon>corporate_fare</md-icon>
								<label>Establishment</label>
								<md-input v-model="steper.first.chosenType.letter.establishment" required></md-input>
							</md-field>
						</div>
						<!-- /.md-layout-item -->

						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<label>Object</label>
								<md-textarea v-model="steper.first.chosenType.letter.object" required md-autogrow></md-textarea>
							</md-field>
						</div>
						<!-- /.md-layout-item -->
					</div>
					<!-- /.md-layout -->

					<div class="md-subheading">Security</div>
					<div class="md-layout">
						<div class="md-layout-item md-xsmall-size-100 md-size-25">
							<md-field>
								<label for="movies">Status</label>
								<md-select v-model="steper.first.chosenType.letter.status" required>
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
								<md-select v-model="steper.first.chosenType.letter.confidentiality" required>
									<md-option value="Private">Private</md-option>
									<md-option value="Public">Public</md-option>
								</md-select>
							</md-field>
						</div>
						<!-- /.md-layout-item -->
					</div>

					<md-button class="md-raised md-success" @click="setDone('first', 'second')">Continue</md-button>
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

					<md-button class="md-raised md-success" @click="setDone('second', 'third')">Continue</md-button>
					<div v-if="steper.second.error.content">
						<div class="text-danger" v-for="(error, index) in steper.second.error.content" :key="index">
							<strong class="text-uppercase">{{index}} Field:</strong>
							{{error.join(',\n')}}
						</div>
					</div>
				</md-step>
				<!-- /md-step -->

				<md-step id="third" md-label="Theme" :md-done.sync="steper.third.active">
					<div class="md-layout" v-if="steper.third.logoThemes">
						<div
							v-for="logoTheme in steper.third.logoThemes"
							:key="logoTheme"
							class="md-layout-item md-xsmall-size-100 md-size-25"
						>
							<md-card>
								<md-card-media-cover md-text-scrim>
									<md-card-media md-ratio="16:9">
										<img :src="logoTheme" />
									</md-card-media>
								</md-card-media-cover>
								<md-card-content class="header-card px-2 pb-2">
									<div class="md-title">Title goes here</div>
									<div class="md-subhead">Subtitle here</div>

								</md-card-content>

								<md-card-expand>
									<md-button :href="logoTheme" target="_blank" class="md-primary md-just-icon"><md-icon>visibility</md-icon></md-button>
									<md-button class="md-primary md-just-icon"><md-icon>check</md-icon></md-button>
								</md-card-expand>
							</md-card>
						</div>
						<!-- :.md-layout-item -->
					</div>
					<!-- ./md-layout -->

					<md-button class="md-raised md-success" @click="setDone('third')">Done</md-button>
				</md-step>
				<!-- /md-step -->
			</md-steppers>
		</div>
	</div>
</template>

<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
//import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
//import NicolaCkeditor from '@nicolabello/ckeditor5-build-decoupled-document';
import Validate, { isObject } from "validate.js";

export default {
	name: "DashboardChoice",
	components: {},
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
				chosenType: {
					chosen: null,
					letter: {
						for: null,
						establishment: null,
						letterType: null,
						copyTransmitted: null,
						object: null,
						confidentiality: null,
						status: null,
					},
					document: {},
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
			},
		},
	}),
	methods: {
		setDone(id, index) {
			this.steper[id].active = true;

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
		unActiveStepers() {
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
		firstStepeCheck(setDone = true) {
			// Check formulary of first step
			const id = "first",
				index = "second";

			this.steper.first.error.content = null;
			this.steper.first.error.header = null;

			let constraints = {
				chosen: { presence: { allowEmpty: false } },
				for: { presence: { allowEmpty: false } },
				establishment: { presence: { allowEmpty: false } },
				object: { presence: { allowEmpty: false } },
				confidentiality: { presence: { allowEmpty: false } },
				status: { presence: { allowEmpty: false } },
			};

			if (this.isLetter) {
				constraints.letterType = { presence: { allowEmpty: false } };
				if (
					this.$data.steper.first.chosenType.letter.letterType ==
					"Copy Transmitted"
				) {
					constraints.copyTransmitted = { presence: { allowEmpty: false } };
				}
			} else if (this.isDocument) {
			}

			let datas = this.steper.first.chosenType.letter;
			datas.chosen = this.steper.first.chosenType.chosen;

			if (!this.setError(id, Validate(datas, constraints))) {
				this.unActiveStepers();
				return false;
			}
			if (setDone) {
				this.setDone(id, index);
			} else return true;
		},
		secondStepeCheck(setDone = true) {
			// Check formulary of second step
			const id = "first",
				index = "second";

			this.steper.second.error.content = null;
			this.steper.second.error.header = null;

			let data = {
				editorData: this.steper.second.editorData,
			};

			let constraints = {
				editorData: {
					presence: { allowEmpty: false },
					length: { minimum: 10 },
				},
			};

			if (!this.setError(id, Validate(data, constraints))) {
				this.unActiveStepers();
				return false;
			}
			if (setDone) {
				this.setDone(id, index);
			} else return true;
		},
	},
	computed: {
		isLetter() {
			return this.steper.first.chosenType.chosen == "letter";
		},
		isDocument() {
			return this.steper.first.chosenType.chosen == "document";
		},
	},
	watch: {
		//'steper.first.chosenType.letter.for': function (newSteper, oldSteper) {
		//	this.firstStepeCheck();
		//	//console.log("qsq");
		//},
	},
	mounted() {
		axios
			.get("/api/demo/logo-themes")
			.then((res) => {
				this.steper.third.logoThemes = res.data;
			})
			.catch((err) => {
				console.error(err);
			});
	},
};
</script>
