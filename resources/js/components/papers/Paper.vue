<template>
	<div
		id="paper-item"
		class="bg-white position-relative text-dark"
		:style="{
			minHeight: getSizes.height + 'px',
			width: getSizes.width + 'px',
			fontSize: getSizes.font + 'px',
			lineHeight: getSizes.lineHeight + 'px',
		}"
	>
		<template v-if="getConfig">
			<div
				class="PI-container-background-logo position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
				v-if="getConfig.image && getConfig.image.show"
			>
				<img
					v-if="getConfig.image && getConfig.image.data"
					:src="getConfig.image.data.urlResized"
					class="PI-background-logo w-100"
				/>
				<!-- /.PI-background-logo -->
				<img
					v-else
					:src="require('../../assets/img/vc_logo_0.jpg')"
					class="PI-background-logo w-100"
				/>
				<!-- /.PI-background-logo -->
			</div>
			<!-- /.PI-container-background-logo -->

			<div
				class="PI-container-text position-relative w-100 h-100 border"
				:style="{
					padding: `${getSizes.marginVertical}px ${getSizes.marginHorizontal}px`,
					minHeight: getSizes.height + 'px',
				}"
			>
				<div class="PI-header row" v-if="getConfig.header">
					<div class="left-side col" v-if="getConfig.header.leftSide">
						<div
							class="title text-uppercase"
							v-if="getConfig.header.leftSide.title"
						>
							{{ getConfig.header.leftSide.title }}
						</div>
						<!-- /.title -->
						<div
							class="sub-title text-uppercase"
							v-if="getConfig.header.leftSide.subTitle"
						>
							{{ getConfig.header.leftSide.subTitle }}
						</div>
						<!-- /.sub-title -->
						<template
							v-if="
								getConfig.header.leftSide.logo &&
								getConfig.header.leftSide.logo.show
							"
						>
							<div
								class="container-logo"
								v-if="getConfig.header.leftSide.logo.data"
							>
								<img
									class="logo"
									:src="getConfig.header.leftSide.logo.data.urlResized"
								/>
								<!-- /.logo -->
							</div>
							<div class="container-logo" v-else>
								<img
									class="logo"
									:src="require('../../assets/img/vc_logo_0.jpg')"
								/>
								<!-- /.logo -->
							</div>
						</template>
						<!-- /.container-logo -->
					</div>
					<!-- /.left-side -->

					<div class="right-side col" v-if="getConfig.header.rightSide">
						<div class="date" v-if="getConfig.header.rightSide.date">
							{{ getConfig.header.rightSide.date }}
						</div>
						<!-- /.date -->
						<div class="title" v-if="getConfig.header.rightSide.title">
							{{ getConfig.header.rightSide.title }}
						</div>
						<!-- /.title -->
						<div class="sub-title" v-if="getConfig.header.rightSide.subTitle">
							{{ getConfig.header.rightSide.subTitle }}
						</div>
						<!-- /.sub-title -->
					</div>
					<!-- /.right-side -->
				</div>
				<!-- /.PI-header-->

				<div
					class="PI-body"
					v-if="getConfig.body"
					:style="{ minHeight: (getSizes.height * 70) / 100 + 'px' }"
				>
					<div class="container-title" v-if="getConfig.body.title">
						<h3
							class="title text-center w-100"
							v-html="getConfig.body.title"
							:style="{
								paddingBottom: (getSizes.width * 3.5) / 100 + 'px',
							}"
						></h3>
						<!-- /.title -->
					</div>
					<!-- /.container-title -->

					<div class="row mb-4" v-if="getConfig.body.cc">
						<div class="offset-6 col-6 container-cc">
							<h5 class="title p-0 m-0">
								<b>{{ getConfig.body.cc.title }}</b>
							</h5>
							<!-- /.title -->
							<h5
								class="sub-title"
								:style="{
									paddingBottom: (getSizes.width * 2.5) / 100 + 'px',
								}"
							>
								<b> <u>Transmis</u> copie pour information à : </b>
							</h5>
							<!-- /.sub-title -->
							<ul
								class="list-persons"
								:style="{
									marginLeft: (getSizes.width * 1.5) / 100 + 'px',
									paddingLeft: (getSizes.width * 1.5) / 100 + 'px',
									borderBottomWidth: (getSizes.width * 0.4) / 100 + 'px',
								}"
							>
								<li
									class="list-item-person ml-0"
									v-for="(item, index) in getConfig.body.cc.persons"
									:key="index"
									:style="{
										paddingLeft: (getSizes.width * 1.5) / 100 + 'px',
										paddingBottom: (getSizes.width * 3.5) / 100 + 'px',
									}"
								>
									{{ getConfig.body.cc.prePerson + " " + item }}
								</li>
							</ul>
						</div>
						<!-- /.container-cc -->
					</div>
					<!-- /.row -->

					<p
						class="for w-100 text-justify"
						v-if="getConfig.body.for"
						v-html="getConfig.body.for"
					></p>
					<!-- /.for -->

					<div
						class="content w-100 text-justify"
						v-if="getConfig.body.content"
						v-html="getConfig.body.content"
					></div>
					<!-- /.content -->
				</div>
				<!-- /.PI-body-->

				<div class="PI-footer row" v-if="getConfig.footer">
					<div class="left-side col" v-if="getConfig.footer.leftSide"></div>
					<div class="right-side col" v-if="getConfig.footer.rightSide">
						<div class="title" v-if="getConfig.footer.rightSide.title">
							{{ getConfig.footer.rightSide.title }}
						</div>
						<!-- /.title -->
						<div class="sub-title" v-if="getConfig.footer.rightSide.subTitle">
							{{ getConfig.footer.rightSide.subTitle }}
						</div>
						<!-- /.sub-title -->
					</div>
					<!-- /.right-side -->
				</div>
				<!-- /.PI-footer-->
			</div>
			<!-- /.PI-container-text -->
		</template>
		<div
			v-else
			class="overlay d-flex align-items-center justify-content-center p-4 text-center"
		>
			<h1>Nothing selected ! Please select a document for begin</h1>
		</div>
	</div>
	<!-- /#paper-item -->
</template>

<script>
import Print from "print-js";
import Fitty from "fitty";

export default {
	name: "Paper",
	props: {
		config: {
			type: Object,
			default: null,
		},
		width: {
			type: Number,
			default: 320,
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
				return false;
			}
		},
		getSizes() {
			//Longeur = Largeur * 1.414
			const width = this.width;
			const height = width * 1.414;
			const ratio = height / this.width;
			const modulo = height % this.width;
			const marginHorizontal = (width * 4) / 100;
			const marginVertical = (height * 3) / 100;
			const font = (width * 2.56) / 100;
			const lineHeight = (width * 3.51) / 100;
			console.log(font, marginHorizontal);
			return {
				height,
				width,
				ratio,
				modulo,
				marginHorizontal,
				marginVertical,
				font,
				lineHeight,
			};
		},
	},
	methods: {
		launchPrint() {
			Print({
				printable: "paper-item",
				type: "html",
				maxWidth: 900,
				targetStyles: ["*"],
			});
		},
	},
};
</script>

<style lang="scss">
#paper-item {
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS";
	height: auto;
	max-height: auto;
	* {
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;
		padding: 0;
	}
	h1 {
		font-size: 200%;
	}
	h2 {
		font-size: 180%;
	}
	h3 {
		font-size: 150%;
	}
	h4 {
		font-size: 120%;
	}
	h5 {
		font-size: 100%;
	}
	h6 {
		font-size: 80%;
	}
	.marker {
		background-color: yellow;
	}
	.overlay {
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-weight: 900;
		background-color: rgba($color: #000000, $alpha: 0.4);
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 100;
		color: white;
		> * {
			line-height: 150%;
		}
	}
	> .PI-container-background-logo {
		z-index: 1;
		opacity: 0.03;
		> .PI-background-logo {
		}
	}
	> .PI-container-text {
		z-index: 2;
		background: transparent !important;
		padding: 0.5vw;
		> .PI-header {
			margin-bottom: 3%;
			> .left-side {
				font-weight: 800;
				> * {
					width: auto;
					text-align: center;
				}
				> .title {
					font-size: 70%;
				}
				> .sub-title {
					font-size: 70%;
				}
				> .container-logo {
					margin: 4% auto;
					> .logo {
						width: 35%;
					}
				}
			}
			> .right-side {
				text-align: right;
				font-size: 80%;
				line-height: 150%;
				> .sub-title {
					font-weight: 800;
				}
			}
		}
		> .PI-body {
			width: 100%;
			line-height: 200%;
			.container-cc {
				> .title,
				> .sub-title {
					font-size: 80%;
					font-weight: 700;
					line-height: 150%;
				}
				> .title {
				}
				> .sub-title {
				}
				> .list-persons {
					margin-left: 0;
					padding: 0;
					margin: 0;
					border-bottom-style: dashed;
					line-height: 0;
					> .list-item-person {
						font-size: 80%;
						padding-left: 0px;
					}
				}
			}
			> .for,
			.content p {
				padding: 0;
				margin: 0;
			}
		}
		> .PI-footer {
			> .left-side {
			}
			> .right-side {
			}
		}
	}
}
</style>
